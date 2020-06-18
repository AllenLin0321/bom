import React, { useState } from 'react';
import { TableOutlined, TagsOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './SiderMenu.scss';
import logo from '../../../image/logo.svg';

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
          <Link to="/admin">製作BOM表</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TagsOutlined />}>
          <Link to="/category">分類管理</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
