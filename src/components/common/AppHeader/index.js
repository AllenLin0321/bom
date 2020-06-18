import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './AppHeader.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

const AppHeader = () => (
  <Header className="header">
    <Menu key="user" mode="horizontal">
      <SubMenu
        title={
          <React.Fragment>
            <span style={{ color: '#999', marginRight: 4 }}>
              <span>Hi,</span>
            </span>
            <span>guest</span>
            <Avatar
              size="small"
              style={{ marginLeft: 8, backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
          </React.Fragment>
        }
      >
        <Menu.Item key="SignOut">
          <span>Sign out</span>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </Header>
);
export default AppHeader;
