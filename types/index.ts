export interface Comment {
  name: string;
  time: string;
  text: string;
  image: string;
}

export interface ApiUser {
  id: number;
  first_name: string;
  last_name: string;
  image: string | null;
  email: string;
  country: string;
  city: string;
  status: number;
  phone: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface ApiComment {
  id: number;
  comment: string;
  status: number;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: ApiUser;
}

export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface NewsPost {
  id: number;
  ulid: string;
  views: number;
  likes: number;
  dislikes: number;
  is_featured: number;
  title: string;
  description: string;
  status: string;
  commentable: number;
  user_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  comments_count: number;
  comments: ApiComment[];
  user: ApiUser;
}

export interface RelatedCard {
  category: string;
  title: string;
  image: string;
}
