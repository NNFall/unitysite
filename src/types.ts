export interface ZoneItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  capacity: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  category: string;
  likes?: number;
}

export interface VkPost {
  id: string;
  date: string;
  title: string;
  text: string;
  likes: number;
  reposts: number;
  tag: string;
}
