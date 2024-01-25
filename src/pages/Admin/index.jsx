import React, { useState } from "react";
import {
    AppstoreOutlined,
    FileProtectOutlined,
    FolderOpenOutlined,
    HomeOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Flex, Layout, Menu, theme } from "antd";
import { Link, Route, Routes} from "react-router-dom";
import AdminHome from "./Home";
import AdminTeam from "./Team";
import AdminIns from "./Insctruction";
import AdminAdvice from "./Advice";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<Link to={"/"}>Bosh sahifa</Link>, "1", <HomeOutlined />),
    getItem(
        <Link to={"/group"}>Guruhlar ro‘yhati</Link>,
        "2",
        <FolderOpenOutlined />
    ),
    getItem("Topshiriqlar", "sub1", <AppstoreOutlined />, [
        getItem(
            <Link to={"/advice"}>Tavsiyalar</Link>,
            "3",
            <FileProtectOutlined />
        ),
        getItem(
            <Link to={"/instruct"}>Yo’riqnomalar</Link>,
            "4",
            <QuestionCircleOutlined />
        ),
    ]),
];
const AdminPage = ({ onTrue }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>
                <div className='adminlogo_parent'>
                    <h1
                        className='adminlogo'
                        style={{
                            fontSize: collapsed ? "15px" : "25px",
                        }}>
                        Praktikum
                    </h1>
                    <h1
                        className='adminlogo2'
                        style={{
                            fontSize: collapsed ? "10px" : "15px",
                            margin: collapsed ? "0 0 0 32px" : "0 0 0 59px",
                        }}>
                        academy
                    </h1>
                </div>
                <div className='demo-logo-vertical' />
                <Menu
                    theme='dark'
                    defaultSelectedKeys={["1"]}
                    mode='inline'
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}>
                    <button className='Logout' onClick={() => onTrue()}>
                        Logout
                    </button>
                </Header>
                <Content
                    style={{
                        margin: "0 16px",
                    }}>
                    <Breadcrumb
                        style={{
                            margin: "16px 0",
                        }}></Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <Routes>
                            <Route path='/' element={<AdminHome />} />
                            <Route path='/group' element={<AdminTeam />} />
                            <Route path='/advice' element={<AdminAdvice />} />
                            <Route path='/instruct' element={<AdminIns />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminPage;