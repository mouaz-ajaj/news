export interface PostHeader {
    title: string;
    category: Category;
    author: User;
    date: string;
    commentsCount: number;
    viewsCount: number;
    likesCount: number;
    dislikesCount: number;
    images: string[];
    videos: string[];
}
export interface User{
    id: string;
    first_name: string;
    last_name: string;
    country: string;
    city: string;
    image: string;
    phone: string;
}
export interface Category{
    name:string;
    slug:string;
}
export interface Comments{
    comments:Comment[]
    comments_count:number;
}
export interface Comment{
    id:string;
    comment:string;
    user:User;
    created_at:string;
}
export interface HomePosts{
    latestPosts:Post[];
    featuredPosts:Post[];
    mostViewedPosts:Post[];
    mostLikedPosts:Post[];
}
export interface Post{
    id:string;
    ulid?: string;
    title:string;
    description:string;
    category:Category;
    views:number;
    likes:number;
    dislikes:number;
    comments_count:number;
    images:string[];
}
