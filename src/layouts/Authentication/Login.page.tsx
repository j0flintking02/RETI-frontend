import { Layout, Row, Col, Image, ConfigProvider} from "antd";
import { useState } from "react";
import LoginForm from "../../components/secondary/LoginForm";
import "tailwindcss/tailwind.css";
import viteLogo from "/vite.svg";

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
              <h2 className={`text-${isDarkMode ? 'white' : 'black'} font-bold`}>RETI PROJECT</h2>
            </div>

            <LoginForm isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default LoginPage;
