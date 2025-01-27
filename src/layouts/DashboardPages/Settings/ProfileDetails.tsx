import React, { useState } from "react";
import { Tag, Button, Modal, Form, Input, Select } from "antd";
import { EditOutlined, UserOutlined, EnvironmentOutlined, TeamOutlined, ToolOutlined } from "@ant-design/icons";
import { useGetUserProfileQuery } from "../../../services/profiles";
import { loginDetails } from "../../../utils";

const { Option } = Select;

const ProfileDetails = () => {
  const { data, isError, error } = useGetUserProfileQuery(
    loginDetails().user.id
  );

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
      traineeCategory: data?.data?.skillsAndTraining?.traineeCategory,
      trainingDuration: data?.data?.skillsAndTraining?.trainingDuration,
      trainingLocation: data?.data?.skillsAndTraining?.trainingLocation,
    },
    artisanDetails: {
      categoryOfArtisan: data?.data?.artisanDetails?.categoryOfArtisan,
      nameOfHost: data?.data?.artisanDetails?.nameOfHost,
      villageOfArtisan: data?.data?.artisanDetails?.villageOfArtisan,
      subcountyOfArtisan: data?.data?.artisanDetails?.subcountyOfArtisan,
      centerRefugeeSettlement: data?.data?.artisanDetails?.centerRefugeeSettlement,
      hostContact: data?.data?.artisanDetails?.hostContact,
    },
    geoLocationDetails: {
      partnerResponsible: data?.data?.geoLocationDetails?.partnerResponsible,
      region: data?.data?.geoLocationDetails?.region,
      district: data?.data?.geoLocationDetails?.district,
      settlement: data?.data?.geoLocationDetails?.settlement,
      subCounty: data?.data?.geoLocationDetails?.subCounty,
      parishZoneCluster: data?.data?.geoLocationDetails?.parishZoneCluster,
      village: data?.data?.geoLocationDetails?.village,
    },
    participantDetails: {
      nameOfParticipant: data?.data?.participantDetails?.nameOfParticipant,
      groupNumber: data?.data?.participantDetails?.groupNumber,
      individualNumber: data?.data?.participantDetails?.individualNumber,
      nin: data?.data?.participantDetails?.nin,
      sex: data?.data?.participantDetails?.sex,
      age: data?.data?.participantDetails?.age,
      maritalStatus: data?.data?.participantDetails?.maritalStatus,
      specialInterestCategory: data?.data?.participantDetails?.specialInterestCategory,
      disabilityType: data?.data?.participantDetails?.disabilityType,
      numberOfDisabilities: data?.data?.participantDetails?.numberOfDisabilities,
      mainDisabilityDetails: data?.data?.participantDetails?.mainDisabilityDetails,
      nationalityCategory: data?.data?.participantDetails?.nationalityCategory,
      uniqueIdNo: data?.data?.participantDetails?.uniqueIdNo,
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
    <div className="pt-4 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-bold text-gray-900">Profile Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills and Training */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <UserOutlined className="text-blue-500" />
              Skills & Training
            </h2>
            <EditOutlined 
              className="cursor-pointer text-blue-500 hover:text-blue-700"
              onClick={() => openEditModal("skillsAndTraining")}
            />
          </div>
          <div className="space-y-3">
            {Object.entries(details.skillsAndTraining).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start border-b pb-2">
                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                <span className="text-gray-800 font-medium">{value || 'Not specified'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Artisan Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ToolOutlined className="text-green-500" />
              Artisan Details
            </h2>
            <EditOutlined 
              className="cursor-pointer text-blue-500 hover:text-blue-700"
              onClick={() => openEditModal("artisanDetails")}
            />
          </div>
          <div className="space-y-3">
            {Object.entries(details.artisanDetails).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start border-b pb-2">
                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                <span className="text-gray-800 font-medium">{value || 'Not specified'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographical Location */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <EnvironmentOutlined className="text-purple-500" />
              Location Details
            </h2>
            <EditOutlined 
              className="cursor-pointer text-blue-500 hover:text-blue-700"
              onClick={() => openEditModal("geoLocationDetails")}
            />
          </div>
          <div className="space-y-3">
            {Object.entries(details.geoLocationDetails).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start border-b pb-2">
                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                <span className="text-gray-800 font-medium">{value || 'Not specified'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demographic Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <TeamOutlined className="text-red-500" />
              Demographic Details
            </h2>
            <EditOutlined 
              className="cursor-pointer text-blue-500 hover:text-blue-700"
              onClick={() => openEditModal("participantDetails")}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(details.participantDetails).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>
                <p className="font-medium text-gray-800">{value || '—'}</p>
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
