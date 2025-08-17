import { Outlet } from "react-router-dom";
import AdminSidebar from "./../components/admin/AdminSidebar";
import AdminHeader from "./../components/admin/AdminHeader";

const AdminLayout = () => {
    return (
        <div className="dashboard-layout flex">
            <AdminSidebar />
            <div className="dashboard-content flex flex-col flex-1">
                <AdminHeader />
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
