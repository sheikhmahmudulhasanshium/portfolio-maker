export interface Project {
  id: bigint;
  created_at: Date;
  name: string;
  project_url: string;
  description?: string;
  logo_url: string;
  images: string[];  // assuming Json type can be any object or array
  status: string;
  person: Person;
  sub_projects?: SubProject;
  tech_stack?: TechStack;
}

export interface SubProject {
  id: bigint;
  created_at: Date;
  name: string;
  image?: string;
  projects: Project;
}

export interface TechStack {
  id: bigint;
  created_at: Date;
  name: string;
  logo?: string;
  projects: Project;
}

export interface Feature {
  id: bigint;
  name: string;
  feature_image?: string;
  description?: string;
  person: Person;
}

export interface Person {
  id: bigint;
  created_at: Date;
  full_name: string;
  nick_name: string;
  phone: string;
  designation?: string;
  work_description?: string;
  email: string;
  features?: Feature;
  projects?: Project;
  reviews?: Review;
  social_handles?: SocialHandle;
}

export interface Review {
  id: bigint;
  created_at: Date;
  reviewer_name: string;
  profile_url?: string;
  review: string;
  review_url: string;
  person: Person;
}

export interface SocialHandle {
  id: bigint;
  created_at: Date;
  name: string;
  link: string;
  default_message?: string;
  person: Person;
}
