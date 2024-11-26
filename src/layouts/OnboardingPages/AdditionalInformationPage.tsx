
import TextArea from "antd/es/input/TextArea";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const AdditionalInformationPage = () => {

    const props = {
        name: "file",
        multiple: false,
        accept: "image/*", // Restricts to images only
        action: "/upload", // Replace with your upload endpoint
        onChange(info: any) {
            const { status } = info.file;
            if (status === "done") {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    return (
        <div
            className="space-y-6"
        >
            <div className="mt-2">
                <div className="text-xl/8 font-semibold text-gray-900 sm:text-lg/9">
                    <p>Additional Information</p>
                </div>
            </div>
            <div className="mt-4 gap-y-4">
                <div className="">
                    <label className="block text-sm/6 font-medium text-gray-900">About me</label>
                    <div className="mt-2">
                        <TextArea placeholder="" allowClear />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm/6 font-medium text-gray-900">Upload a profile picture</label>
                    <div className="mt-2">
                        <Dragger
                            {...props}
                        >
                            <p className="text-center text-2xl">
                                <InboxOutlined />
                            </p>
                            <p className="text-center text-gray-600 mt-2">
                                Upload or drag and drop
                            </p>
                            <p className="text-center text-gray-400 text-sm">
                                Only image files are supported.
                            </p>
                        </Dragger>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInformationPage;
