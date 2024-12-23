
import  { useState } from 'react';
import { List, Avatar, Badge } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const FloatingMessages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState([
    { id: 1, content: 'New message from John', read: false },
    { id: 2, content: 'Meeting reminder at 3 PM', read: true },
    { id: 3, content: 'System update available', read: false },
    { id: 1, content: 'New message from John', read: false },
    { id: 2, content: 'Meeting reminder at 3 PM', read: true },
    { id: 3, content: 'System update available', read: false },
    { id: 1, content: 'New message from John', read: false },
    { id: 2, content: 'Meeting reminder at 3 PM', read: true },
    { id: 3, content: 'System update available', read: false },
    { id: 1, content: 'New message from John', read: false },
    { id: 2, content: 'Meeting reminder at 3 PM', read: true },
    { id: 3, content: 'System update available', read: false },
    { id: 1, content: 'New message from John', read: false },
    { id: 2, content: 'Meeting reminder at 3 PM', read: true },
    { id: 3, content: 'System update available', read: false },
  ]);

  const unreadCount = messages.filter((msg) => !msg.read).length;

  const toggleMessages = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      {/* Floating Widget */}
      <div
        onClick={toggleMessages}
        className="fixed bottom-2 w-[350px] bg-white  p-2 shadow-md rounded-md cursor-pointer flex items-center gap-4"
      >
        <Badge count={unreadCount}>
          <Avatar className='bg-blue-300 text-sm' icon={<MessageOutlined />} />
        </Badge>
        <span className='text-sm'>Messages</span>
      </div>

      {/* Messages Container */}
      {isOpen && (
        <div
          className="absolute bottom-16 w-[350px] bg-white p-4 shadow-md rounded-md overflow-y-auto h-[280px]"
        >
          <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor: item.read ? '#f0f0f0' : '#1890ff',
                      }}
                    >
                      {item.read ? 'R' : 'N'}
                    </Avatar>
                  }
                  title={item.content}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingMessages;
