
import { Comments, PostHeader } from "@/types/post";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getSinglePost=async({ulid}:{ulid:string})=>{
    const response = await fetch(`${BASE_URL}posts/${ulid}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization:process.env.NEXT_PUBLIC_API_TOKEN ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` : "",
        },
        next: { revalidate: 600 },
    });

    //if any error happend 
    if(!response.ok) {
        throw new Error('problem') 
    }
    const json= await response.json();
    const post=json.data
    return {
        header:{
            title: post.title,
            category: post.category,
            author: post.user,
            date: new Date(post.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }) as string,
            commentsCount: post.comments_count,
            viewsCount: post.views,
            likesCount: post.likes,
            dislikesCount: post.dislikes,
            images: post.images,
            videos: post.videos,
        }as PostHeader,
        description: post.description,
        comments: {comments:post.comments,comments_count:post.comments_count} as Comments,
    }
    return ;
}