import {EnvironmentOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {
    Avatar,
    Spin,
    Typography,
} from "antd";
import {
  useGetOpportunitiesQuery,
} from "../../../services/opportunities.ts";
import moment from "moment";
import DateCheckComponent from "../../../components/primary/dataChecker.tsx";

const AllOpportunitiesPage = () => {
    const navigate = useNavigate();
    const {data, isLoading} = useGetOpportunitiesQuery()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <>
            <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {data?.data.map((job) => {
                    return (
                        <div
                            key={job.id}
                            onClick={() => navigate(`/opportunities/${job.id}`)}
                            className="h-34 relative flex flex-col p-1 border border-gray-300 rounded-lg bg-white hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200"
                        >
                            <div className="p-2">
                                <div className="text-right mb-1">
                                    <DateCheckComponent date={job.createdAt}/>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg capitalize truncate  text-gray-700">
                                        {job.title}
                                    </h3>
                                    <p className="text-md truncate text-gray-500">{job.description}</p>
                                    <p className="text-sm truncate text-gray-500 flex items-center gap-1">
                                        <span className="text-gray-400">
                                            <EnvironmentOutlined/>
                                        </span>
                                        {job.location}
                                    </p>

                                    <div className="mt-4">
                                        <p className="py-2 text-sm font-semibold truncate">Posted by</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-x-2">
                                                <Avatar>{job.companyName[0]}</Avatar>
                                                <div>
                                                    <Typography.Text type="secondary">
                                                        {moment(job.createdAt).format('YYYY-MM-DD')}
                                                    </Typography.Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AllOpportunitiesPage;
