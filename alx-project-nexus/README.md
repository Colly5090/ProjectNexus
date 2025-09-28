# 📖 E-Catalog Product Flow

This project implements a **category → subcategory → product drill-down flow** for an e-commerce product catalog.

Users can start from a **parent category** (e.g., _Electronics_), drill down into **children/subcategories** (e.g., _Laptops_), and finally view **products** (e.g., _Ultrabook_).

---

## 🚀 API Endpoints

### Categories

- **Get all categories (with children)**
  ```http
  GET /api/v1/categories/
  ```
