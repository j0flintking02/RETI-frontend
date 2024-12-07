import Sign from "../../components/seconday/LoginForm";
import "tailwindcss/tailwind.css";
import viteLogo from "/vite.svg";

const LoginPage = () => {
  return (

    <div className='xl:py-10'>
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  alt="Your Company"
                  src={viteLogo}
                  className="h-10 w-auto"
                />
                <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-sm/6 text-gray-500">
                Experience the power of networking
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <Sign />
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block rounded-l-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              className="absolute inset-0 size-full object-cover rounded-l-lg"
            />
          </div>
        </div>
      </div>
    </div>
    // <Layout className="min-h-screen,  bg-white">
    //   <Row
    //     justify="center"
    //     align="middle"
    //     style={{ minHeight: "100vh", overflow: "hidden", padding: "20px" }}
    //   >
    //     <Col
    //       xs={24}
    //       sm={24}
    //       md={12}
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: "80%",
    //           maxWidth: "500px",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         <div
    //           style={{
    //             display: "flex",
    //             alignItems: "center",
    //             marginBottom: "16px",

    //           }}
    //         >
    //           <img
    //             src={viteLogo}
    //             alt="logo"
    //             style={{ width: "40px", marginRight: "8px" }}
    //           />
    //           <h2 className="text-black, font-bold">RETI PROJECT</h2>
    //         </div>

    //         <Sign />
    //       </div>
    //     </Col>

    //     <Col xs={24} sm={24} md={12}>
    //       <Image
    //         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    //         preview={false}
    //         className="w-full object-cover md:rounded-tl-[20px] md:rounded-bl-[20px] rounded-tl-bl-[20px]"
    //         style={{
    //           width: "100%",
    //           height: "auto",
    //         }}
    //       />
    //     </Col>
    //   </Row>
    // </Layout>
  );
};

export default LoginPage;
