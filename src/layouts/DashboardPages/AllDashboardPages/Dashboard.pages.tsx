
import "tailwindcss/tailwind.css";
import Header from "../../../components/secondary/Header";
import YouthDashboardPage from "./YouthDashbord";
import AdminDashboardPage from "./Admin/AdminDashboard";


const DashboardPage = () => {

  return (
    <>
      <Header pageTitle="Dashboard" />
      {/* <YouthDashboardPage /> */}
      <AdminDashboardPage/>

    </>
  );
};

export default DashboardPage;
