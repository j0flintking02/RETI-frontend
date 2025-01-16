import React, { useState } from "react";
import { Tag, Button, Modal, Form, Input, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Option } = Select;

const ProfileDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingType, setEditingType] = useState<
    | "skillsAndTraining"
    | "artisanDetails"
    | "geoLocationDetails"
    | "participantDetails"
  >("skillsAndTraining");
  const [form] = Form.useForm();

  const [details, setDetails] = useState({
    skillsAndTraining: {
      traineeCategory: "Skilled but unemployed",
      trainingDuration: "6 months",
      trainingLocation: "Urban Center",
    },
    artisanDetails: {
      categoryOfArtisan: "Individual artisan",
      nameOfHost: "Jane Smith",
      villageOfArtisan: "Makere Village",
      subcountyOfArtisan: "Makere Subcounty",
      centerRefugeeSettlement: "Bidibidi",
      hostContact: "+256789456123",
    },
    geoLocationDetails: {
      partnerResponsible: "Dan Church Aid (DCA)",
      region: "Northern",
      district: "Gulu (GUL)",
      settlement: "Adjumani",
      subCounty: "",
      parishZoneCluster: "",
      village: "",
    },
    participantDetails: {
      nameOfParticipant: "",
      groupNumber: "",
      individualNumber: "",
      nin: "",
      sex: "",
      age: "",
      maritalStatus: "",
      specialInterestCategory: "",
      disabilityType: "",
      numberOfDisabilities: "",
      mainDisabilityDetails: "",
      nationalityCategory: "",
      uniqueIdNo: "",
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
        {/* Skills and Training Details */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Skills and Training Details
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("skillsAndTraining")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.skillsAndTraining).map(([key, value]) => (
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

        {/* Artisan Details */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">Artisan Details</h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("artisanDetails")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.artisanDetails).map(([key, value]) => (
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

        {/* Geographical Location Details */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Geographical Location Details
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("geoLocationDetails")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.geoLocationDetails).map(([key, value]) => (
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

        {/* Participants' Demographic and Social Characteristics */}
        <div className="pt-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-semibold">
              Participants' Demographic and Social Characteristics
            </h2>
            <EditOutlined
              className="cursor-pointer text-blue-500 ml-2"
              onClick={() => openEditModal("participantDetails")}
            />
          </div>
          <div className="space-y-4">
            {Object.entries(details.participantDetails).map(([key, value]) => (
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
          {editingType === "skillsAndTraining" &&
            Object.entries(details.skillsAndTraining).map(([key, value]) => (
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
          {editingType === "artisanDetails" &&
            Object.entries(details.artisanDetails).map(([key, value]) => (
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
          {editingType === "geoLocationDetails" &&
            Object.entries(details.geoLocationDetails).map(([key, value]) => (
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
          {editingType === "participantDetails" &&
            Object.entries(details.participantDetails).map(([key, value]) => (
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
        </Form>
      </Modal>
    </div>
  );
};

export default ProfileDetails;
