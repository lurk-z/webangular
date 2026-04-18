import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog';
import { HomeComponent } from './pages/home/home';
import { PricingComponent } from './pages/pricing/pricing';
import { QuoteComponent } from './pages/quote/quote';
import { ServicesComponent } from './pages/services/services';
import { UseCasesComponent } from './pages/use-cases/use-cases';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Positivus | Digital Marketing Agency' },
  { path: 'services', component: ServicesComponent, title: 'Services | Positivus' },
  { path: 'use-cases', component: UseCasesComponent, title: 'Use Cases | Positivus' },
  { path: 'pricing', component: PricingComponent, title: 'Pricing | Positivus' },
  { path: 'blog', component: BlogComponent, title: 'Blog | Positivus' },
  { path: 'quote', component: QuoteComponent, title: 'Request a Quote | Positivus' },
  { path: '**', redirectTo: '' },
];
