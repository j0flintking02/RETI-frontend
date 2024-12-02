import { Layout, Row, Col, Image, ConfigProvider} from "antd";
import { useState, useEffect } from "react";
import LoginForm from "../../components/secondary/LoginForm";
import "tailwindcss/tailwind.css";
import viteLogo from "/vite.svg";

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setIsDarkMode(isDark);
    document.body.classList.add(isDark ? "dark-mode" : "light-mode");
  }, []);

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: isDarkMode ? "#1677ff" : "#3b82f6",
        colorBgBase: isDarkMode ? "#121212" : "#ffffff",
        colorTextBase: isDarkMode ? "#ffffff" : "#000000",
      },
    }}
  >
    <Layout  className={`min-h-screen transition-colors duration-400 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", overflow: "hidden", padding: "20px", background: isDarkMode ? "#121212" : "#ffffff" }}
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
          />
        </Col>
      </Row>
    </Layout>
    </ConfigProvider>
  );
};

export default LoginPage;
