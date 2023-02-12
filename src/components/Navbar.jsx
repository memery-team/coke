import React from "react";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const navbar = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const Navbar = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={navbar} />
        </Header>
    )
}

export default Navbar