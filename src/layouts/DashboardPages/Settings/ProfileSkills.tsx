import React, { useState } from "react";
import { Tag, Button, Modal, Form, Input, InputNumber } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ProfileSkills = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingType, setEditingType] = useState<"skills" | "projects" | "languages" | "experience">("skills");
    const [form] = Form.useForm();

    const [employee, setEmployee] = useState({
        name: "John Doe",
        skills: [
            { name: "Tailwind CSS", years: 7 },
            { name: "React", years: 5 },
        ],
        projects: [
            { name: "E-commerce App", years: 2 },
            { name: "Portfolio Website", years: 1 },
        ],
        languages: ["English", "Spanish"],
        experience: "10 years in software development",
    });

    const openEditModal = (type: "skills" | "projects" | "languages" | "experience") => {
        setEditingType(type);
        setIsModalOpen(true);
        form.resetFields();
    };

    const handleAdd = (values: any) => {
        if (editingType === "skills") {
            setEmployee((prev) => ({
                ...prev,
                skills: [...prev.skills, { name: values.name, years: values.years }],
            }));
        } else if (editingType === "projects") {
            setEmployee((prev) => ({
                ...prev,
                projects: [...prev.projects, { name: values.name, years: values.years }],
            }));
        } else if (editingType === "languages") {
            setEmployee((prev) => ({
                ...prev,
                languages: [...prev.languages, values.name],
            }));
        } else {
            setEmployee((prev) => ({
                ...prev,
                experience: values.name,
            }));
        }
        setIsModalOpen(false);
    };

    const handleRemove = (type: "skills" | "projects" | "languages", index: number) => {
        if (type === "skills") {
            setEmployee((prev) => ({
                ...prev,
                skills: prev.skills.filter((_, i) => i !== index),
            }));
        } else if (type === "projects") {
            setEmployee((prev) => ({
                ...prev,
                projects: prev.projects.filter((_, i) => i !== index),
            }));
        } else {
            setEmployee((prev) => ({
                ...prev,
                languages: prev.languages.filter((_, i) => i !== index),
            }));
        }
    };

    return (
        <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between border-b py-4">

                <h1 className="text-2xl font-semibold mb-4">{employee.name}</h1>
                <Button type="text" icon={<EditOutlined />} className="text-red-500 mt-2" onClick={() => openEditModal("skills")}>
                    Edit
                </Button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">

                {/* Skills */}
                <div className="pt-8">
                    <h2 className="text-lg font-semibold mb-2">Skills</h2>
                    <ul className="list-none pl-0">
                        {employee.skills.map((skill, index) => (
                            <li
                                key={index}

                            >
                                <div className="flex justify-between items-center gap-4 py-4 border-b">
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <Tag color="blue">{skill.name}</Tag>
                                            <div className="flex items-center gap-1 font-semibold">
                                                <div>{skill.years}</div>
                                                <span>yrs</span>
                                            </div>
                                        </div>
                                        <div className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, velit saepe dolor quisquam mollitia vitae animi dolorum nihil, itaque exercitationem dolores quam optio consequatur natus dolore eum quis, cupiditate aliquam.</div>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects */}
                <div className="pt-8">
                    <h2 className="text-lg font-semibold mb-2">Projects</h2>
                    <ul className="list-none pl-0">
                        {employee.projects.map((project, index) => (
                            <li
                                key={index}

                            >
                                <div className="flex justify-between items-center gap-4 py-4 border-b">
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <Tag color="blue">{project.name}</Tag>
                                            <div className="flex items-center gap-1 font-semibold">
                                                <div>{project.years}</div>
                                                <span>yrs</span>
                                            </div>
                                        </div>
                                        <div className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, velit saepe dolor quisquam mollitia vitae animi dolorum nihil, itaque exercitationem dolores quam optio consequatur natus dolore eum quis, cupiditate aliquam.</div>
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Languages */}
                <div className="pt-4">
                    <h2 className="text-lg font-semibold mb-2">Languages</h2>
                    <div className="flex flex-wrap">
                        {employee.languages.map((language, index) => (
                            <Tag
                                key={index}
                                color="green"
                                className="mb-2 mr-2"
                                closable
                                onClose={() => handleRemove("languages", index)}
                            >
                                {language}
                            </Tag>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div className="pt-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Experience</h2>
                        </div>
                        <Button
                            type="link"
                            icon={<EditOutlined />} className="text-red-500 mt-2"
                            onClick={() => openEditModal("experience")}
                        >
                            Edit Experience
                        </Button>
                    </div>
                    <p>{employee.experience}</p>

                </div>
            </div>

            {/* Modal */}
            <Modal
                title={`Add ${editingType === "experience" ? "Experience" : editingType.slice(0, -1)}`}
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={() => form.submit()}
                okText="Add"
            >
                <Form form={form} layout="vertical" onFinish={handleAdd}>
                    <Form.Item
                        label={editingType === "experience" ? "Experience" : "Name"}
                        name="name"
                        rules={[{ required: true, message: "This field is required" }]}
                    >
                        <Input placeholder={`Enter ${editingType === "experience" ? "experience" : "name"}`} />
                    </Form.Item>
                    {(editingType === "skills" || editingType === "projects") && (
                        <Form.Item
                            label="Years of Experience"
                            name="years"
                            rules={[{ required: true, message: "This field is required" }]}
                        >
                            <InputNumber min={1} max={50} placeholder="Enter years of experience" />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
};

export default ProfileSkills;



