import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { TableOutlined, TagsOutlined } from '@ant-design/icons';
import './App.scss';

import SiderMenu from '../common/SiderMenu';
import AppHeader from '../common/AppHeader';
const { Content } = Layout;

const App = () => {
  return (
    <Layout className="root__wrapper">
      <SiderMenu />
      <Layout>
        <AppHeader />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <TableOutlined />
              <span style={{ fontSize: '13px' }}>製作BOM表</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
