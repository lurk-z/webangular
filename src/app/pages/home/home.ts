import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  tone: 'green' | 'dark' | 'light';
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  protected readonly partners = ['amazon', 'dribbble', 'HubSpot', 'Notion', 'NETFLIX', 'zoom'];

  protected readonly services: ServiceCard[] = [
    {
      title: 'Search engine optimization',
      description: 'Technical audits, keyword strategy, and content that compounds.',
      image: '/assets/service-seo.svg',
      tone: 'light',
    },
    {
      title: 'Pay-per-click advertising',
      description: 'Campaigns tuned around intent, landing pages, and margin.',
      image: '/assets/service-ppc.svg',
      tone: 'green',
    },
    {
      title: 'Social Media Marketing',
      description: 'Channel plans, creative testing, and community momentum.',
      image: '/assets/service-social.svg',
      tone: 'dark',
    },
    {
      title: 'Email Marketing',
      description: 'Lifecycle automations that move leads from interest to action.',
      image: '/assets/service-email.svg',
      tone: 'light',
    },
    {
      title: 'Content Creation',
      description: 'Useful articles, guides, and campaigns with a clear next step.',
      image: '/assets/service-content.svg',
      tone: 'green',
    },
    {
      title: 'Analytics and Tracking',
      description: 'Dashboards, events, and reporting that make decisions easier.',
      image: '/assets/service-analytics.svg',
      tone: 'dark',
    },
  ];

  protected readonly cases = [
    'For a B2B software company, we increased qualified trial signups by 170% in four months.',
    'For a regional retailer, we built a search program that lifted online revenue by 38%.',
    'For a health brand, we improved email revenue while reducing campaign workload.',
  ];

  protected readonly process = [
    {
      step: '01',
      title: 'Consultation',
      body: 'We clarify goals, audience, current channels, and the numbers that actually matter.',
    },
    {
      step: '02',
      title: 'Research and strategy',
      body: 'We inspect competitors, search demand, conversion leaks, and the best short path to traction.',
    },
    {
      step: '03',
      title: 'Implementation',
      body: 'Campaigns, content, tracking, landing pages, and automation go live with clear ownership.',
    },
    {
      step: '04',
      title: 'Optimization',
      body: 'Every sprint turns performance data into better creative, bids, messages, and pages.',
    },
    {
      step: '05',
      title: 'Reporting',
      body: 'You get plain-English updates, useful dashboards, and recommendations for the next month.',
    },
  ];

  protected readonly testimonials = [
    {
      quote:
        'Positivus helped us move from scattered marketing tasks to a system we can actually trust.',
      name: 'John Smith',
      role: 'Marketing Director at XYZ Corp',
    },
    {
      quote:
        'The team found quick wins without losing sight of the bigger growth engine we needed.',
      name: 'Sarah Lee',
      role: 'Founder at Northline',
    },
  ];
}
