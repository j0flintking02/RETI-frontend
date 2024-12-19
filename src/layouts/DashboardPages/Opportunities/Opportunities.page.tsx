import Layout from "antd/es/layout/layout";
import AllOpportunitiesPage from "./AllOpportunities";
import { Button } from "antd";
import { useState } from "react";
import AddOpportunitiesForm from "../Forms/AddOpportunityForm";
import Header from "../../../components/secondary/Header";
import CustomDahboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";

const OpportunitiesPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Header pageTitle="Opportunities" />

      <CustomDahboardLayout>
        <div className="flex items-center justify-end">
          <div>
            <Button type="primary" onClick={showModal}>
              Create a job
            </Button>
            <AddOpportunitiesForm
              onOk={handleOk}
              onCancel={handleCancel}
              open={open}
              loading={loading}
            />
          </div>
        </div>

        <Layout>
          <AllOpportunitiesPage />
        </Layout>
      </CustomDahboardLayout>
    </>
  );
};

export default OpportunitiesPage;
