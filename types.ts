export interface Treatment {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  indications: string;
  procedureInfo: string;
  resultsTime: string;
  afterCare: string;
  imageUrl: string;
  price?: string;
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  audience: string;
  duration: string;
  status: 'open' | 'soon' | 'closed';
  date: string;
  details: string[];
  imageUrl: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // Patient or Student
  text: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
}