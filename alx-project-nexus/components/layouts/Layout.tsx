import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useProductContext } from "@/context/ProductContext";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const { setSearch } = useProductContext();
    return (
        <>
            <Header onSearch={setSearch} />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;