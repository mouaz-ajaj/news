// Dashboard API Services
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Article Services
export const articleService = {
  async getArticles() {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch articles");
    return response.json();
  },

  async getArticle(id: string) {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch article");
    return response.json();
  },

  async createArticle(data: any) {
    const response = await fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create article");
    return response.json();
  },

  async updateArticle(id: string, data: any) {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update article");
    return response.json();
  },

  async deleteArticle(id: string) {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to delete article");
    return response.json();
  },
};

// Comments Services
export const commentsService = {
  async getComments() {
    const response = await fetch(`${BASE_URL}/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch comments");
    return response.json();
  },

  async approveComment(id: string) {
    const response = await fetch(`${BASE_URL}/comments/${id}/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to approve comment");
    return response.json();
  },

  async deleteComment(id: string) {
    const response = await fetch(`${BASE_URL}/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to delete comment");
    return response.json();
  },
};

// Categories Services
export const categoriesService = {
  async getCategories() {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  },

  async createCategory(data: any) {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create category");
    return response.json();
  },

  async updateCategory(id: string, data: any) {
    const response = await fetch(`${BASE_URL}/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update category");
    return response.json();
  },

  async deleteCategory(id: string) {
    const response = await fetch(`${BASE_URL}/categories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to delete category");
    return response.json();
  },
};

// Analytics Services
export const analyticsService = {
  async getDashboardStats() {
    const response = await fetch(`${BASE_URL}/analytics/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch stats");
    return response.json();
  },

  async getViewsAnalytics(period: string) {
    const response = await fetch(
      `${BASE_URL}/analytics/views?period=${period}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_TOKEN
            ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            : "",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch views analytics");
    return response.json();
  },

  async getTopArticles(limit: number = 10) {
    const response = await fetch(
      `${BASE_URL}/analytics/top-articles?limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_TOKEN
            ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            : "",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch top articles");
    return response.json();
  },
};

// Users Services
export const usersService = {
  async getUsers() {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },

  async getUser(id: string) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  },

  async deactivateUser(id: string) {
    const response = await fetch(`${BASE_URL}/users/${id}/deactivate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to deactivate user");
    return response.json();
  },

  async deleteUser(id: string) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          : "",
      },
    });
    if (!response.ok) throw new Error("Failed to delete user");
    return response.json();
  },
};
