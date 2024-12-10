
import Layout from "antd/es/layout/layout";
import CustomDahboardLayout from "../../components/seconday/CustomDashboardPagesLayout";
import Header from "../../components/seconday/Header";



const DashboardPage = () => {

    return (
        <>
            <Header  pageTitle="Dashboard" />
            <CustomDahboardLayout>

                <Layout
                >
                   Dashboard
                </Layout>
            </CustomDahboardLayout>
        </>
    )
}

export default DashboardPage;
