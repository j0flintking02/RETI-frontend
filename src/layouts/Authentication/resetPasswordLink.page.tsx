// import { Button, Layout } from "antd";
// import viteLogo from '/vite.svg'


// const ResetPasswordLinkPage = () => {

//     return (
//         <Layout className="h-screen">
//             <div className="my-auto sm:mx-auto sm:w-full sm:max-w-md sm:bg-white sm:border sm:rounded-[12px] px-4 py-4" >
//                 <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
//                     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                         <img className="mx-auto h-10 w-auto" src={viteLogo} alt="Your Company" />
//                         <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Security link has been sent to your email</h2>

//                         <p className="mt-2 text-sm text-center text-gray-900">Hurry up! This link is valid for 30 minutes.</p>
//                     </div>
//                     <div  className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
//                         <Button type="primary" className="flex w-full justify-center px-3 py-4 text-sm/6 font-semibold text-white">Back to login</Button>
//                     </div>
//                 </div>
//             </div>
//         </Layout>

//     )
// };

// export default ResetPasswordLinkPage



import React from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const ResetPasswordLinkPage = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Content style={contentStyle}>Content</Content>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Flex>
);

export default ResetPasswordLinkPage;