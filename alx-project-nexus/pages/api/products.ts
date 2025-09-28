import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { API_BASE } from "@/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, page_size = 10, ordering, price__gte, price__lte, is_in_stock, search } = req.query;

  try {
    const response = await axios.get(`${API_BASE}/products/products`, {
      params: { page, page_size, ordering, price__gte, price__lte, is_in_stock, search, },
    });
    res.status(200).json(response.data);
  } catch (error: any) {
  console.error("API Error:", error?.response?.data || error.message);
  res.status(500).json({ message: "Failed to fetch products" });
}
}
