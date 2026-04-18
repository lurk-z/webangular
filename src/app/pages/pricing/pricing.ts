import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class PricingComponent {
  protected readonly plans = [
    {
      name: 'Launch',
      price: '$1,500',
      note: 'For a focused single-channel start',
      features: ['SEO or PPC setup', 'Tracking checkup', 'Two campaign sprints', 'Monthly report'],
    },
    {
      name: 'Growth',
      price: '$3,200',
      note: 'For teams ready to coordinate several channels',
      featured: true,
      features: ['SEO and paid search', 'Content calendar', 'Landing page tests', 'Biweekly optimization'],
    },
    {
      name: 'Scale',
      price: '$6,500',
      note: 'For mature programs with deeper reporting needs',
      features: ['Full-funnel strategy', 'Creative testing', 'CRM attribution', 'Weekly performance review'],
    },
  ];
}
