// src/context/ProductContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { useProducts } from "@/hook/useProducts";
import { ProductContextType } from "@/interfaces";


const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const productState = useProducts();

    return (
        <ProductContext.Provider value={productState}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook for consuming
export const useProductContext = () => {
    const ctx = useContext(ProductContext);
    if (!ctx) {
        throw new Error("useProductContext must be used within ProductProvider");
    }
    return ctx;
};
