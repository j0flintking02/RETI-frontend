'use client'

import { CaretRightOutlined, FileAddOutlined } from "@ant-design/icons"
import { Badge, Button, } from "antd"
import TextArea from "antd/es/input/TextArea"



export default function MessagingChatDetails() {


    return (
        <>
            {/* typing */}
            <div className="sm:w-11/12">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-lg/6 truncate font-semibold text-gray-900">
                        Leslie Alexander
                    </h2>
                    <div className="flex items-center justify-center gap-x-1.5">
                        <p className="text-xs/5 text-green-500">Online</p>
                        
                        {/* <Badge status="success"  size="small"/> */}
                    </div>

                </div>


                {/* Chat Area */}
                <div className="p-4 h-[550px] xl:h-screen overflow-y-auto bg-gray-50">
                    {/* Example messages */}
                    <h2 className="pb-8 text-xs flex items-center justify-center">Today 12:00pm</h2>

                    {/* received */}
                    <div className="mb-4">
                        <div className=" bg-blue-500 max-w-xs p-3 rounded-lg shadow-sm text-white">
                            Maiores, id accusantium vel dicta at ratione repellat reprehenderit iusto hic.
                        </div>
                    </div>

                    {/* sent */}
                    <div className="mb-4 text-right">
                        <div className="bg-gray-200 max-w-xs p-3 rounded-lg shadow-sm text-gray-900 inline-block">
                            Quidem exercitationem vero. Possimus doloribus quam placeat tempore laborum rem repudiandae.
                        </div>
                    </div>
                    <div className="mb-4 text-right">
                        <div className="bg-gray-200 max-w-xs p-3 rounded-lg shadow-sm text-gray-900 inline-block">
                            Quidem exercitationem vero. Possimus doloribus quam placeat tempore laborum rem repudiandae.
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-2 border-t border-gray-200 flex items-center justify-between">

                    <Button className="px-4 py-2" type="link" icon={<FileAddOutlined />} size="large" />


                    <TextArea className="p-2 mr-2 ml-2" placeholder="Type a message" autoSize />


                    <div>
                        <Button className="px-4 py-2" type="primary" icon={<CaretRightOutlined />} size="large" />
                    </div>
                </div>
            </div>
        </>
    )
}