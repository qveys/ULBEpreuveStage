import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    if (req.method !== "GET") {
        return res.status(405).json({message: "Method not allowed"});
    }

    try {
        const {path = [], ...query} = req.query

        const endpoint = (path as string[]).join('/')
        const queryParams = new URLSearchParams()

        Object.entries(query).forEach(([key, value]) => {
            if (typeof value === 'string') {
                queryParams.append(key, value)
            }
        })

        const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}?${queryParams}`

        const response = await fetch(
            `${url}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${process.env.NEXT_PUBLIC_API_TOKEN || ""}`,
                    Accept: "application/ld+json",
                },
                mode: "cors",
            },
        );

        if (!response.ok) {
            const errorBody = await response.text();
            return res.status(response.status).json({
                message: `API responded with status: ${response.status}`,
                error: errorBody
            });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching classements:", error);
        return res.status(500).json({
            message: "Error fetching data",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
}
