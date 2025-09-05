import Header from "../components/public/Header";
import { ThemeSwitcher } from "../components/shared/ThemeSwitcher";
import SideNav from "../components/public/SideNav";
import { Outlet } from "react-router-dom";


const PublicLayout = () => {
    
    return (
        <div className="app-layout">
            <Header />
            <ThemeSwitcher />
            <div className="content-wrapper flex">
                <main className="flex flex-col w-full items-center">
                    <Outlet />
                </main>
                <SideNav />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default PublicLayout;
