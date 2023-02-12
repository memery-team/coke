import React, { useState } from "react";
import axios from "axios";
import { Breadcrumb, Layout, theme, Table, Badge } from 'antd';
import SideMenu from "../../../components/SideMenu";
import Navbar from "../../../components/Navbar";

const { Content, Footer } = Layout;
const { Column } = Table
const LIST_LESSONS_URL = `https://staging.api.mywording.com/v1/lessons`

const Lesson = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [data, setData] = useState(null)

    let config = {
        headers: {
            authorization: "Bearer " + localStorage.getItem('token')
        }
    }

    const getData = async () => {
        try {
            await axios.get(LIST_LESSONS_URL, config).then((response) => {
                setData(response.data.docs)
            })
        } catch (err) {
            console.log(err)
        }

    }

    getData()

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
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Lesson</Breadcrumb.Item>
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
                        <Table dataSource={data} className="table" rowKey={(data) => data.name}>
                            <Column title="Name" dataIndex="name" key="name" />
                            <Column title="Description" dataIndex="description" key="description" />
                            <Column title="Created At" dataIndex="createdAt" key="createdAt" />
                            <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                            <Column 
                                title="Enabled" 
                                dataIndex="enabled" 
                                key="enabled" 
                                render={(enabled) => {
                                    let text = ""
                                    let status = ""
                                    if (enabled === true) {
                                        text = "True"
                                        status = "success"
                                    } else {
                                        text = "False"
                                        status = "error"
                                    }
                                    return (
                                        <Badge status={status} text={text} />
                                    )
                                }}
                            />
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

export default Lesson;
