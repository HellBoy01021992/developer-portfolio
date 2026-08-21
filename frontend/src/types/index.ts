export interface ApiResponse<T> {
  data: T;
}

export interface Profile {
  name: string;
  headline: string;
  location?: string;
  professional_summary: string;
  focus: string;
}

export interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date?: string | null;
  current?: boolean;
  product?: string;
  technologies?: string[];
  highlights?: string[];
  notes?: string;
}

export interface Project {
  title: string;
  company?: string;
  period?: string;
  description: string;
  technologies?: string[];
  features?: string[];
  highlights?: string[];
}

export interface Skill {
  [key: string]: string[];
}

export interface Certification {
  title: string;
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  start_year?: number;
  end_year?: number;
}

export interface Award {
  title: string;
  issuer?: string;
  date?: string;
}

export interface SocialLinks {
  linkedin: string | null;
  github: string | null;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}
