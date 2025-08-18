import Header from "../components/public/Header";
import { ThemeSwitcher } from "../components/shared/ThemeSwitcher";
import SideNav from "../components/public/SideNav";
import Footer from "../components/public/Footer";


const PublicLayout = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />
            <ThemeSwitcher />
            <div className="content-wrapper flex">
                <main className="flex flex-col">{children}</main>
                <SideNav />
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;
