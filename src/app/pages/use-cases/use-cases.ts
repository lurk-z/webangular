import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-use-cases',
  imports: [RouterLink],
  templateUrl: './use-cases.html',
  styleUrl: './use-cases.scss',
})
export class UseCasesComponent {
  protected readonly metrics = [
    { value: '170%', label: 'increase in qualified trials' },
    { value: '38%', label: 'lift in online revenue' },
    { value: '24%', label: 'lower acquisition cost' },
    { value: '4.8x', label: 'return on ad spend' },
  ];

  protected readonly studies = [
    {
      client: 'B2B SaaS',
      title: 'From low-intent traffic to sales-ready trial requests',
      tags: ['SEO', 'PPC', 'Analytics'],
      outcome:
        'A rebuilt keyword map, cleaner product pages, and campaign tracking helped the team prioritize trial quality over raw traffic.',
    },
    {
      client: 'Retail',
      title: 'Search campaigns that protected margin during busy season',
      tags: ['Google Ads', 'Landing Pages'],
      outcome:
        'We separated high-margin categories, refreshed landing pages, and cut waste from broad match campaigns.',
    },
    {
      client: 'Healthcare',
      title: 'Email automation that made follow-up easier',
      tags: ['Email', 'Content'],
      outcome:
        'A practical education sequence increased appointment requests while reducing manual sales follow-ups.',
    },
  ];
}
