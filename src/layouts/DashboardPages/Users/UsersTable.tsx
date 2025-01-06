import { Space, Spin, Table, Tag } from "antd";
import CustomDashboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import Header from "../../../components/secondary/Header";
import { useGetAllUsersQuery } from "../../../services/users";
import { DeleteOutlined } from "@ant-design/icons";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: string;
}

const UsersPage = () => {
  const { data, isLoading } = useGetAllUsersQuery();

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      key: 'name',
      render: (_: any, record: User) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color={role === 'admin' ? 'red' : 'green'}>
          {role.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any) => (
        <Space size="middle">
          <DeleteOutlined className="text-red-500 cursor-pointer" />
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
        </div>
    );
}

  return (
    <>
      <Header pageTitle="Users" />
      <CustomDashboardLayout>
        <Table<User>
          columns={columns}
          dataSource={data?.data}
          loading={isLoading}
          rowKey="id"
        />
      </CustomDashboardLayout>
    </>
  );
};

export default UsersPage;


