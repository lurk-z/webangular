import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface QuoteModel {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface QuoteSubmission extends QuoteModel {
  id: string;
  createdAt: string;
}

const initialQuote: QuoteModel = {
  fullName: '',
  email: '',
  company: '',
  service: 'Search engine optimization',
  budget: '$2,500 - $5,000',
  timeline: 'This month',
  message: '',
};

@Component({
  selector: 'app-quote',
  imports: [FormsModule],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class QuoteComponent {
  protected model: QuoteModel = { ...initialQuote };
  protected formWasSubmitted = false;
  protected lastSubmission: QuoteSubmission | null = null;
  protected storageWarning = '';

  protected readonly services = [
    'Search engine optimization',
    'Pay-per-click advertising',
    'Social media marketing',
    'Email marketing',
    'Content creation',
    'Analytics and reporting',
  ];

  protected readonly budgets = [
    '$1,500 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
  ];

  protected readonly timelines = ['This month', 'Next 30 days', 'This quarter', 'Still exploring'];

  protected submitQuote(form: NgForm): void {
    this.formWasSubmitted = true;

    if (form.invalid) {
      return;
    }

    const submission: QuoteSubmission = {
      ...this.model,
      id: this.createSubmissionId(),
      createdAt: new Date().toISOString(),
    };

    this.saveSubmission(submission);
    this.lastSubmission = submission;
    this.formWasSubmitted = false;
    this.model = { ...initialQuote };
    form.resetForm(this.model);
  }

  private saveSubmission(submission: QuoteSubmission): void {
    try {
      const currentValue = window.localStorage.getItem('positivusQuoteSubmissions');
      const previous = currentValue ? (JSON.parse(currentValue) as QuoteSubmission[]) : [];
      const nextValue = Array.isArray(previous) ? [submission, ...previous] : [submission];

      window.localStorage.setItem('positivusQuoteSubmissions', JSON.stringify(nextValue));
      this.storageWarning = '';
    } catch {
      this.storageWarning =
        'Your request was submitted on this page, but this browser blocked local storage.';
    }
  }

  private createSubmissionId(): string {
    const datePart = new Date().toISOString().slice(0, 10).replaceAll('-', '');
    const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();

    return `POS-${datePart}-${randomPart}`;
  }
}
