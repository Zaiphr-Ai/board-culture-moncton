export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  class?: string;
}

export interface CardProps {
  title?: string;
  description?: string;
  href?: string;
  class?: string;
}
