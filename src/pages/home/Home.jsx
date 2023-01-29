import React, { useState } from "react";
import axios from "axios";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Table } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Column } = Table
const LIST_CATEGORIES_URL = `http://localhost:4000/v1/categories`

const navbar = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const sidebar = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
            key: subKey,
            label: `option${subKey}`,
        };
        }),
    };
});

const Home = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [data, setData] = useState(null)

    const getData = async () => {
        try {
            await axios.get(LIST_CATEGORIES_URL).then((response) => {
                setData(response.data.docs)
            })
        } catch (err) {
            console.log(err)
        }

    }

    getData()

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={navbar} />
            </Header>
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
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                            }}
                            items={sidebar}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        <Table dataSource={data} className="table" rowKey={(data) => data.name}>
                            <Column title="Name" dataIndex="name" key="name" />
                            <Column title="Description" dataIndex="description" key="description" />
                            <Column title="Created At" dataIndex="createdAt" key="createdAt" />
                            <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                            <Column title="Enabled" dataIndex="enabled" key="enabled" />
                        </Table>
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
