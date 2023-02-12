import React from "react";
import { Breadcrumb, Layout, theme } from 'antd';
import SideMenu from "../../components/SideMenu";
import Navbar from "../../components/Navbar";

const { Content, Footer } = Layout;


const Home = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Navbar />
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    <SideMenu />
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        TEXT
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Memery ©2023 Footer
            </Footer>
        </Layout>
    );
};

export default Home;
