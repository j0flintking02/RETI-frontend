import React, { useState } from "react";
import { Tag, Button, Modal, Form, Input, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useGetUserProfileQuery } from "../../../services/profiles";
import { loginDetails } from "../../../utils";
import moment from "moment";

const { Option } = Select;

const ProfileDetailsExt = () => {
  const { data, isError, error } = useGetUserProfileQuery(
    loginDetails().user.id
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingType, setEditingType] = useState<
    | "trainingCentreDetails"
    | "trainingCohorts"
    | "retiTrainingDetails"
    | "internshipAndStartupDetails"
  >("trainingCentreDetails");
  const [form] = Form.useForm();

  const [details, setDetails] = useState({
    trainingCentreDetails: {
      nameOfTrainingCentre: data?.data?.trainingCentreDetails?.nameOfTrainingCentre,
      locationVillage: data?.data?.trainingCentreDetails?.locationVillage,
      locationSubCounty: data?.data?.trainingCentreDetails?.locationSubCounty,
      locationSettlement: data?.data?.trainingCentreDetails?.locationSettlement,
      mainTelephoneContact: data?.data?.trainingCentreDetails?.mainTelephoneContact,
      alternativeTelephoneContact: data?.data?.trainingCentreDetails?.alternativeTelephoneContact,
    },
    trainingCohorts: {
      cohort: data?.data?.trainingCohorts?.cohort,
      tradeTakenDuringTraining: data?.data?.trainingCohorts?.tradeTakenDuringTraining,
    },
    retiTrainingDetails: {
      startTime: moment(data?.data?.retiTrainingDetails?.startTime).format("DD-MM-YYYY"),
      completionStatus: data?.data?.retiTrainingDetails?.completionStatus,
      reasonForDroppingOut: data?.data?.retiTrainingDetails?.reasonForDroppingOut,
      monthsSpent: data?.data?.retiTrainingDetails?.monthsSpent,
      certificationStatus: data?.data?.retiTrainingDetails?.certificationStatus,
    },
    internshipAndStartupDetails: {
      completionTime: moment( data?.data?.internshipAndStartupDetails?.completionTime).format("DD-MM-YYYY"),
      internshipPlacement: data?.data?.internshipAndStartupDetails?.internshipPlacement,
      startupKitReceived: data?.data?.internshipAndStartupDetails?.startupKitReceived,
      startupGrantReceived: data?.data?.internshipAndStartupDetails?.startupGrantReceived,
    },
  });

  const openEditModal = (type) => {
    setEditingType(type);
    setIsModalOpen(true);
    form.resetFields();
  };

  const handleSave = (values) => {
    setDetails((prev) => ({
      ...prev,
      [editingType]: { ...prev[editingType], ...values },
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-between border-b py-4">
        <h1 className="text-2xl font-semibold mb-4">Profile Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-15 w-full">
        {/* Training Centre/Institutional Details */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Training Centre/Institutional Details
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("trainingCentreDetails")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.trainingCentreDetails).map(
              ([key, value]) => (
                <div key={key}>
                  <h3 className="text-md font-medium">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </h3>
                  <Tag style={{ backgroundColor: "darkgray", color: "blue" }}>
                    {value || "Not Provided"}
                  </Tag>
                </div>
              )
            )}
          </div>
        </div>

        {/* Training Cohorts and Trades */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Training Cohorts and Trades
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("trainingCohorts")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.trainingCohorts).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-md font-medium">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </h3>
                <Tag style={{ backgroundColor: "darkgray", color: "blue" }}>
                  {value || "Not Provided"}
                </Tag>
              </div>
            ))}
          </div>
        </div>
        {/* RETI Training Details */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Time and Duration of RETI Training
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("retiTrainingDetails")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.retiTrainingDetails).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-md font-medium">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </h3>
                <Tag style={{ backgroundColor: "darkgray", color: "blue" }}>
                  {value || "Not Provided"}
                </Tag>
              </div>
            ))}
          </div>
        </div>

        {/* Internships and Start-Up Kits */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Internships and Start-Up Kits
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("internshipAndStartupDetails")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.internshipAndStartupDetails).map(
              ([key, value]) => (
                <div key={key}>
                  <h3 className="text-md font-medium">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </h3>
                  <Tag style={{ backgroundColor: "darkgray", color: "blue" }}>
                    {value || "Not Provided"}
                  </Tag>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={`Edit ${editingType}`}
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText="Save"
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          {editingType === "trainingCentreDetails" &&
            Object.entries(details.trainingCentreDetails).map(
              ([key, value]) => (
                <Form.Item
                  key={key}
                  label={key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  name={key}
                  initialValue={value}
                  rules={[{ required: true, message: `Please enter ${key}` }]}
                >
                  <Input placeholder={`Enter ${key}`} />
                </Form.Item>
              )
            )}

          {editingType === "trainingCohorts" &&
            Object.entries(details.trainingCohorts).map(([key, value]) => (
              <Form.Item
                key={key}
                label={key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                name={key}
                initialValue={value}
                rules={[{ required: true, message: `Please enter ${key}` }]}
              >
                <Input placeholder={`Enter ${key}`} />
              </Form.Item>
            ))}

          {editingType === "retiTrainingDetails" &&
            Object.entries(details.retiTrainingDetails).map(([key, value]) => (
              <Form.Item
                key={key}
                label={key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                name={key}
                initialValue={value}
                rules={[{ required: true, message: `Please enter ${key}` }]}
              >
                <Input placeholder={`Enter ${key}`} />
              </Form.Item>
            ))}

          {editingType === "internshipAndStartupDetails" &&
            Object.entries(details.internshipAndStartupDetails).map(
              ([key, value]) => (
                <Form.Item
                  key={key}
                  label={key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  name={key}
                  initialValue={value}
                  rules={[{ required: true, message: `Please enter ${key}` }]}
                >
                  <Input placeholder={`Enter ${key}`} />
                </Form.Item>
              )
            )}
        </Form>
      </Modal>
    </div>
  );
};

export default ProfileDetailsExt;
