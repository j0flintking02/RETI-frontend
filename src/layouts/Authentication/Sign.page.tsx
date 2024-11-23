import { Layout, Row, Col, Image } from "antd";
import Sign from "../../components/seconday/Sign";
import "tailwindcss/tailwind.css";
import viteLogo from "/vite.svg";

const SignPage = () => {
  return (
    <Layout className="min-h-screen,  bg-white">
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", overflow: "hidden", padding: "20px" }}
      >
        <Col
          xs={24}
          sm={24}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              maxWidth: "500px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",

              }}
            >
              <img
                src={viteLogo}
                alt="logo"
                style={{ width: "40px", marginRight: "8px" }}
              />
              <h2 className="text-black, font-bold">RETI PROJECT</h2>
            </div>

            <Sign />
          </div>
        </Col>

        <Col xs={24} sm={24} md={12}>
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={false}
            className="w-full object-cover md:rounded-tl-[20px] md:rounded-bl-[20px] rounded-tl-bl-[20px]"
            style={{
              width: "100%",
              height: "auto",
              // objectFit: "cover",
              // borderTopLeftRadius: "20px",
              // borderBottomLeftRadius: "20px",
              // marginRight: "38px",
              // marginBottom: "20px",
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default SignPage;
