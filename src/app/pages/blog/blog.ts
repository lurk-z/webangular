import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class BlogComponent {
  protected readonly posts = [
    {
      title: 'How to know whether SEO or paid search should come first',
      category: 'Strategy',
      excerpt:
        'A practical way to compare timeline, intent, conversion readiness, and budget before picking a channel.',
    },
    {
      title: 'The campaign metrics worth reviewing every Monday',
      category: 'Reporting',
      excerpt:
        'A shorter scorecard for teams that want decisions instead of a dashboard nobody opens twice.',
    },
    {
      title: 'Turning one useful guide into a full acquisition sequence',
      category: 'Content',
      excerpt:
        'How a guide can become ads, emails, sales enablement, retargeting, and search visibility.',
    },
  ];

  protected readonly team = [
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      image: '/assets/avatar-jane.svg',
      bio: '7 years in project management and team operations for growing companies.',
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      image: '/assets/avatar-michael.svg',
      bio: '6 years in SEO and content strategy across B2B and ecommerce.',
    },
    {
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      image: '/assets/avatar-brian.svg',
      bio: '4 years creating social systems, creative tests, and community workflows.',
    },
    {
      name: 'Sarah Kim',
      role: 'Content Creator',
      image: '/assets/avatar-sarah.svg',
      bio: '2 years writing and editing conversion-focused content for multiple industries.',
    },
  ];
}
