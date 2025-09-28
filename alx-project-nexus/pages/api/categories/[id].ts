import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { API_BASE } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const { data } = await axios.get(`${API_BASE}/products/categories/${id}/`);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
}
