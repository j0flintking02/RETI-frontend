import { Space, Spin, Table, Tag, notification } from "antd";
import type { TableProps } from "antd";
import CustomDashboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import Header from "../../../components/secondary/Header";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../../../services/users";
import { DeleteOutlined } from "@ant-design/icons";
import DeletePopconfirm from "../../../components/secondary/CustomDeletePopUp";

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
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId).unwrap();
      notification.success({
        message: 'Success',
        description: 'User deleted successfully',
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.data?.message || 'Failed to delete user',
      });
    }
  };

  const columns: TableProps<User>['columns'] = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => `${record.firstName} ${record.lastName}`,
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
      render: (role) => (
        <Tag color={role === 'admin' ? 'red' : 'green'}>
          {role.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <DeletePopconfirm
            title="Delete User"
            description="Are you sure you want to delete this user?"
            onConfirm={() => handleDeleteUser(record.id)}
            onConfirmMessage="User deleted successfully"
            onCancelMessage="User deletion cancelled"
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined className="text-red-500 cursor-pointer" />
          </DeletePopconfirm>
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
        <Table
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


