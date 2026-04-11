
import {Category} from "@/types/post";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getCategories=async()=>{
    const response = await fetch(`${BASE_URL}categories`,{
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
    const categories=json.data as Category[]
    return categories;
}