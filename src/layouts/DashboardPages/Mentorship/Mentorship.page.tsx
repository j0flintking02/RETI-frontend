import Layout from "antd/es/layout/layout";

import { Button } from "antd";
import { useState } from "react";
import MentorshipDates from "./Mentorship.dates.page";
import Header from "../../../components/secondary/Header";
import CustomDashboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import AddInspirationsForm from "../Forms/AddGuidanceForm";

const MentorshipPage = () => {
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
      <Header pageTitle="Community Guidance" />

      <CustomDashboardLayout>
        <div className="flex items-center justify-end">
          <div></div>
        </div>

        <Layout>
          <MentorshipDates />
        </Layout>
      </CustomDashboardLayout>
    </>
  );
};

export default MentorshipPage;
