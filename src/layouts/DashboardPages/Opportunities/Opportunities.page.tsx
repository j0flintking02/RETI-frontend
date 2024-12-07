
import CustomAppTitle from "../../../components/seconday/CustomAppTitle";
import Layout, { Content } from "antd/es/layout/layout";
import AllOpportunitiesPage from "./AllOpportunities";
import { Button, Modal } from "antd";
import { useState } from "react";
import AddOpportunitiesForm from "./Forms/AddOpportunityForm";


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
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <CustomAppTitle>Opportunities</CustomAppTitle>
                <div>
                    <Button type="primary" onClick={showModal}>
                        Create a job
                    </Button>
                    <AddOpportunitiesForm onOk={handleOk}
                        onCancel={handleCancel} open={open} loading={loading} />
                </div>
            </div>

            <Layout className="max-w-screen">
                <AllOpportunitiesPage />
            </Layout>
        </div>
    )
}

export default OpportunitiesPage;

