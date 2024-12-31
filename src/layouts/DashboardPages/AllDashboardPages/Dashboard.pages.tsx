
import "tailwindcss/tailwind.css";
import Header from "../../../components/secondary/Header";
import YouthDashboardPage from "./YouthDashbord";
import AdminDashboardPage from "./Admin/AdminDashboard";
import { loginDetails } from "../../../utils";

const DashboardPage = () => {
  const role = loginDetails()?.user?.role;
  return (
    <>
      <Header pageTitle="Dashboard" />
      {role === 'admin' ? <AdminDashboardPage /> : <YouthDashboardPage />}
    </>
  );
};

export default DashboardPage;
