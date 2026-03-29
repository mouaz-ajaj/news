const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = {
    async get(endpoint: string) {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Request failed");
        }

        return res.json();
    },

    async post(endpoint: string, body: unknown) {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            throw new Error("Request failed");
        }

        return res.json();
    },
};