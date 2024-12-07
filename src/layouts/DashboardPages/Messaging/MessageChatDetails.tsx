"use client";

import {
  CaretRightOutlined,
  DownloadOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Badge, Button, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext"; // Assuming ThemeContext is used for dark mode
import { globalStyles } from "../../../styles/globalStyles";

export default function MessagingChatDetails() {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode context

  return (
    <>
      <div
        className={`sm:w-6/12 ${globalStyles.container.card.base} ${
          isDarkMode
            ? `${globalStyles.background.dark} border-[#3A3B3C]`
            : globalStyles.container.card.light
        }`}
      >
        <div
          className={`p-4 border-b flex items-center justify-between ${
            isDarkMode ? "border-gray-600" : "border-gray-200"
          }`}
        >
          <h2
            className={`text-lg/6 truncate font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Leslie Alexander
          </h2>
          <div className="flex items-center gap-x-1.5">
            <p
              className={`text-xs/5 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Online
            </p>
            <Badge status="success" />
          </div>
        </div>

        {/* Chat Area */}
        <div
          className={`p-4 h-[550px] xl:h-screen overflow-y-auto ${
            isDarkMode ? globalStyles.background.dark : "bg-gray-50"
          }`}
        >
          {/* Example messages */}
          <h2
            className={`pb-8 text-xs flex items-center justify-center ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Today 12:00pm
          </h2>

          {/* received */}
          <div className="mb-4">
            <div
              className={`${
                isDarkMode ? "bg-blue-600" : "bg-blue-500"
              } max-w-xs p-3 rounded-lg shadow-sm text-white`}
            >
              Maiores, id accusantium vel dicta at ratione repellat
              reprehenderit iusto hic.
            </div>
          </div>

          {/* sent */}
          <div className="mb-4 text-right">
            <div
              className={`${
                isDarkMode ? "bg-gray-600" : "bg-gray-200"
              } max-w-xs p-3 rounded-l-lg shadow-sm text-gray-900 inline-block`}
            >
              Quidem exercitationem vero. Possimus doloribus quam placeat
              tempore laborum rem repudiandae.
            </div>
          </div>
          <div className="mb-4 text-right">
            <div
              className={`${
                isDarkMode ? "bg-gray-600" : "bg-gray-200"
              } max-w-xs p-3 rounded-l-lg shadow-sm text-gray-900 inline-block`}
            >
              Quidem exercitationem vero. Possimus doloribus quam placeat
              tempore laborum rem repudiandae.
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div
          className={`p-2 border-t flex items-center justify-between ${
            isDarkMode ? "border-gray-600" : "border-gray-200"
          }`}
        >
          <Button
            className="px-4 py-2"
            type="link"
            icon={<FileAddOutlined />}
            size="large"
            style={isDarkMode ? { color: "#fff" } : {}}
          />

          <TextArea
            className={`p-2 mr-2 ml-2 ${
              isDarkMode
                ? "bg-transparent border-gray-700 text-white placeholder-gray-400 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 hover:bg-transparent focus:bg-transparent active:bg-transparent"
            }`}
            placeholder="Type a message"
            autoSize
            style={{
              backgroundColor: "transparent",
            }}
          />

          <div>
            <Button
              className="px-4 py-2"
              type="primary"
              icon={<CaretRightOutlined />}
              size="large"
            />
          </div>
        </div>
      </div>
    </>
  );
}