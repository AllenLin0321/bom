import React from 'react';
import { Layout } from 'antd';
import './BOM.scss';
const { Content } = Layout;

class BOM extends React.Component {
  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        BOM
      </Content>
    );
  }
}

export default BOM;
