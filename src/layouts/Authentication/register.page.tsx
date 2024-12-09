import viteLogo from '/vite.svg'

import youth from '../../assets/youth.jpg';
import RegisterForm from "../../components/seconday/registerForm";

export default function RegisterPage() {
    return (
        <div className=''>
        <div className="mx-auto max-w-screen h-screen">
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-md lg:w-full">
                        <div>
                            <img
                                alt="Your Company"
                                src={viteLogo}
                                className="h-10 w-auto"
                            />
                            <h2 className="mt-4 text-2xl/9 font-bold tracking-tight text-gray-900">JOIN RETi</h2>
                            <p className="mt-2 text-sm/6 text-gray-500">
                            Unlock a world of opportunities by joining the RETi community.
                            </p>
                        </div>

                            <div>
                                <RegisterForm />
                            </div>
                        
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        alt=""
                        src={youth}
                        className="absolute inset-0 size-full object-cover"
                    />
                </div>
            </div>
            </div>
        </div>
    )
}
