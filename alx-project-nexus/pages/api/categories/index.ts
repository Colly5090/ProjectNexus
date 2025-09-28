import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { API_BASE } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await axios.get(`${API_BASE}/products/categories/`);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API error:", error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    res.status(500).json({ message: "Failed" });
  }
}
