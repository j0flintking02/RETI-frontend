import { Layout } from "antd";
import viteLogo from '/vite.svg'
import RegisterForm from "../../components/seconday/registerForm";


const RegisterPage = () => {

    return (

        <Layout className="min-h-screen">
            <div className="flex flex-col lg:flex-row min-h-screen px-6 py-8 lg:px-8">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 px-4 sm:py-10">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className=" w-auto" src={viteLogo} alt="Your Company" />
                        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                            Register
                        </h2>
                        <p className="mt-2 text-sm text-gray-900">
                            Start your journey with our product
                        </p>
                    </div>
                   <RegisterForm/>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-full lg:h-auto flex justify-center items-center px-4 mt-8 lg:mt-0">
                    <img
                        className="w-full h-full object-cover rounded-l-lg"
                        src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg"
                        alt="Your Company"
                    />
                </div>
            </div>
        </Layout>

    )
};

export default RegisterPage