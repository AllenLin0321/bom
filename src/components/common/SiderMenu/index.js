import React, { useState } from 'react';
import { TableOutlined, TagsOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logo from '../../../svg/logo.svg';
import './SiderMenu.scss';
const { Sider } = Layout;

const SiderMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      width={256}
      className="site-layout-background"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="brand">
        <img alt="logo" src={logo} />
        {!collapsed && <h1>BOM ADMIN</h1>}
      </div>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0, padding: '24px 0' }}
      >
        <Menu.Item key="1" icon={<TableOutlined />}>
          製作BOM表
        </Menu.Item>
        <Menu.Item key="2" icon={<TagsOutlined />}>
          分類管理
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
