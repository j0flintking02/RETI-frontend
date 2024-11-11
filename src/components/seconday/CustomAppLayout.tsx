import { Layout } from "antd"
import { SidebarMenu } from "./SidebarMenu"
import { Content, Footer } from "antd/es/layout/layout"
import moment from "moment"

const CustomAppLayout = ({ children }) => { 
    return (
      <Layout>
        <SidebarMenu />
        <Layout style={{ marginInlineStart: 200 }} className="site-layout">
          <Content>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            RETI App ©{moment().format("YYYY")} Created by Anonymous
          </Footer>
        </Layout>
      </Layout>
    );
}

export default CustomAppLayout;