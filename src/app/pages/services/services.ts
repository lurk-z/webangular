import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  protected readonly services = [
    {
      name: 'Search Engine Optimization',
      image: '/assets/service-seo.svg',
      bullets: ['Technical SEO audits', 'Keyword maps', 'Content briefs', 'Monthly rank and lead reporting'],
    },
    {
      name: 'Pay-per-click Advertising',
      image: '/assets/service-ppc.svg',
      bullets: ['Google Ads setup', 'Landing page testing', 'Bid strategy', 'Conversion tracking'],
    },
    {
      name: 'Social Media Marketing',
      image: '/assets/service-social.svg',
      bullets: ['Channel strategy', 'Creative calendars', 'Paid social tests', 'Community response playbooks'],
    },
    {
      name: 'Email Marketing',
      image: '/assets/service-email.svg',
      bullets: ['Lifecycle flows', 'Newsletter planning', 'Segmentation', 'Revenue attribution'],
    },
    {
      name: 'Content Creation',
      image: '/assets/service-content.svg',
      bullets: ['Articles and guides', 'Lead magnets', 'Sales enablement', 'Refresh plans'],
    },
    {
      name: 'Analytics and Reporting',
      image: '/assets/service-analytics.svg',
      bullets: ['GA4 events', 'Looker dashboards', 'CRM handoff checks', 'Monthly insight reviews'],
    },
  ];
}
