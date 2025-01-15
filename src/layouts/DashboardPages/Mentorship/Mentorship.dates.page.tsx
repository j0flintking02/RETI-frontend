import { EditOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DeletePopconfirm from "../../../components/secondary/CustomDeletePopUp";
import { useGetMentorInspirationsQuery, useDeleteInspirationMutation } from '../../../services/inspirations';
import { toast } from 'react-toastify';
import AddInspirationsForm from "../Forms/AddGuidanceForm";
import { useState } from 'react';
import MentorshipCalendar from '../../../components/mentorship/MentorshipCalendar';

const days = [
  { date: "2021-12-27" },
  { date: "2021-12-28" },
  { date: "2021-12-29" },
  { date: "2021-12-30" },
  { date: "2021-12-31" },
  { date: "2022-01-01", isCurrentMonth: true },
  { date: "2022-01-02", isCurrentMonth: true },
  { date: "2022-01-03", isCurrentMonth: true },
  { date: "2022-01-04", isCurrentMonth: true },
  { date: "2022-01-05", isCurrentMonth: true },
  { date: "2022-01-06", isCurrentMonth: true },
  { date: "2022-01-07", isCurrentMonth: true },
  { date: "2022-01-08", isCurrentMonth: true },
  { date: "2022-01-09", isCurrentMonth: true },
  { date: "2022-01-10", isCurrentMonth: true },
  { date: "2022-01-11", isCurrentMonth: true },
  { date: "2022-01-12", isCurrentMonth: true, isToday: true },
  { date: "2022-01-13", isCurrentMonth: true },
  { date: "2022-01-14", isCurrentMonth: true },
  { date: "2022-01-15", isCurrentMonth: true },
  { date: "2022-01-16", isCurrentMonth: true },
  { date: "2022-01-17", isCurrentMonth: true },
  { date: "2022-01-18", isCurrentMonth: true },
  { date: "2022-01-19", isCurrentMonth: true },
  { date: "2022-01-20", isCurrentMonth: true },
  { date: "2022-01-21", isCurrentMonth: true, isSelected: true },
  { date: "2022-01-22", isCurrentMonth: true },
  { date: "2022-01-23", isCurrentMonth: true },
  { date: "2022-01-24", isCurrentMonth: true },
  { date: "2022-01-25", isCurrentMonth: true },
  { date: "2022-01-26", isCurrentMonth: true },
  { date: "2022-01-27", isCurrentMonth: true },
  { date: "2022-01-28", isCurrentMonth: true },
  { date: "2022-01-29", isCurrentMonth: true },
  { date: "2022-01-30", isCurrentMonth: true },
  { date: "2022-01-31", isCurrentMonth: true },
  { date: "2022-02-01" },
  { date: "2022-02-02" },
  { date: "2022-02-03" },
  { date: "2022-02-04" },
  { date: "2022-02-05" },
  { date: "2022-02-06" },
];
const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    start: "1:00 PM",
    startDatetime: "2022-01-21T13:00",
    end: "2:30 PM",
    endDatetime: "2022-01-21T14:30",
    date: "January 10th",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
  },
];

const inspirations = [
  "Believe in yourself and all that you are.",
  "Act as if what you do makes a difference. It does.",
  "Success is not how high you have climbed, but how you make a positive difference.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore rerum consequatur ut soluta, quis aliquid? Minima, molestias praesentium iure obcaecati, illo labore blanditiis impedit explicabo quaerat aliquid, molestiae at.",
  "Success is not how high you have climbed, but how you make a positive difference.",
  "Hard times may test you, but never give up.",
  "The best way to predict the future is to create it.",
  "Your only limit is your mind.",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MentorshipDates() {
  const { data: inspirationsData } = useGetMentorInspirationsQuery();
  const [deleteInspiration] = useDeleteInspirationMutation();
  const [editingInspiration, setEditingInspiration] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleEdit = (inspiration) => {
    setEditingInspiration(inspiration);
    setIsEditModalOpen(true);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
    setEditingInspiration(null);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
    setEditingInspiration(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteInspiration(id).unwrap();
      toast.success('Inspiration deleted successfully');
    } catch (error) {
      toast.error('Failed to delete inspiration');
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button type="primary" onClick={() => setIsAddModalOpen(true)}>
          Add Inspiration
        </Button>
      </div>

      <AddInspirationsForm
        open={isAddModalOpen}
        onOk={() => setIsAddModalOpen(false)}
        onCancel={() => setIsAddModalOpen(false)}
        loading={false}
      />

      <AddInspirationsForm
        open={isEditModalOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        loading={false}
        initialData={editingInspiration}
        isEdit={true}
      />

      <div className="sm:flex mt-8">
        <div className="sm:w-6/12 border-r">
          <div className="flex items-center justify-between mt-4 sm:mt-0 px-2">
            <h2 className="text-lg font-semibold">
              {" "}
              Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
            </h2>
          </div>

          {/* Inspirations List */}
          <div className="mt-6 space-y-2 overflow-y-auto h-screen">
            {meetings?.map((meeting) => (
              <div key={meeting.id}>
                <div className="flex w-full items-center justify-between space-x-2 py-2">
                  <img
                    alt=""
                    src={meeting.imageUrl}
                    className="size-10 shrink-0 rounded-full bg-gray-300"
                  />
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-2">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {meeting.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {" "}
                      {meeting.date} at {meeting.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* calender */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">Mentorship Sessions Calendar</h1>
          <MentorshipCalendar />
        </div>

        {/* inspirations */}
        <div className="sm:w-8/12 border-l">
          <div className="flex items-center justify-between mt-8 sm:mt-0 px-4 py-2">
            <h2 className="text-lg font-semibold">Guidance</h2>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-screen px-4">
            {inspirationsData?.data?.map((inspiration) => (
              <div key={inspiration.id} className="border-b p-3">
                <p className="text-red-500 font-medium">{inspiration.title}</p>
                <div>
                  <p className="text-sm text-gray-600">{inspiration.content}</p>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                  <EditOutlined
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(inspiration)}
                  />
                  <DeletePopconfirm
                    title="Delete"
                    description="Are you sure to delete this inspiration?"
                    onConfirm={() => handleDelete(inspiration.id)}
                    okText="Yes"
                    cancelText="No"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}