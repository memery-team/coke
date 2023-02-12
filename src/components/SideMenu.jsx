import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UnorderedListOutlined, AppstoreOutlined, BookOutlined, FormOutlined  } from '@ant-design/icons';
import { Menu, theme, Layout } from 'antd';

const { Sider } = Layout;
const sidebar = [
    {
        key: 'sub1',
        icon: React.createElement(UnorderedListOutlined),
        label: "List",
        children: [ 
            {
                key: "/list/categories",
                icon: React.createElement(AppstoreOutlined),
                label: "Category",
            },
            {
                key: "/list/books",
                icon: React.createElement(BookOutlined),
                label: "Book",
            },
            {
                key: "/list/lessons",
                icon: React.createElement(FormOutlined),
                label: "Lesson",
            },
        ],
    }
]

const SideMenu = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Sider
            style={{
                background: colorBgContainer,
            }}
            width={200}
        >
            <Menu
                onClick={(item) => {
                    navigate(item.key)
                }}
                defaultOpenKeys={['sub1']}
                defaultSelectedKeys={[location.pathname]}
                mode="inline"
                style={{
                    height: '100%',
                }}
                items={sidebar}
            />
        </Sider>    
    )
}

export default SideMenu