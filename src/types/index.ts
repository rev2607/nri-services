export interface Service {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  location: string;
  image?: string;
}

export interface PricingPlan {
  title: string;
  inr: string;
  usd: string;
  features: string[];
}
