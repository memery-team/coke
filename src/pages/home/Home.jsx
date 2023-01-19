import React, { useState } from "react"
import axios from "axios"
import "./Home.css"
import { Table, Layout } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { Column } = Table
const LIST_CATEGORIES_URL = `http://localhost:4000/v1/categories`

const data2 = [

]

const Home = () => {
    const [rawData, setRawData] = useState(null)

    const getData = async () => {
        try {
            await axios.get(LIST_CATEGORIES_URL).then((response) => {
                setRawData(response.data.docs)
            })
        } catch (err) {
            console.log(err)
        }

    }

    getData()
    return (
        <div className="home">
            <Layout>
                <Header className="header">Memery</Header>
                <Layout>
                    <Sider>left sidebar</Sider>
                    <Content>
                        <Layout>
                            <Table dataSource={rawData} className="table">
                                <Column title="Name" dataIndex="name" key="name" />
                                <Column title="Description" dataIndex="description" key="description" />
                                <Column title="Created At" dataIndex="createdAt" key="createdAt" />
                                <Column title="Update At" dataIndex="updatedAt" key="updatedAt" />
                                <Column title="Enabled" dataIndex="enabled" key="enabled" />
                            </Table>
                        </Layout>
                    </Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}

export default Home

