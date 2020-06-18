import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

import SiderMenu from '../common/SiderMenu';
import AppHeader from '../common/AppHeader';
import BOM from '../../pages/BOM';
import Category from '../../pages/Category';

const App = () => {
  return (
    <BrowserRouter>
      <Layout className="root__wrapper">
        {/* SideBar */}
        <SiderMenu />
        <Layout>
          {/* Site Header */}
          <AppHeader />
          {/* Content */}
          <Layout style={{ padding: '24px' }}>
            <Route path="/admin" exact component={BOM} />
            <Route path="/category" component={Category} />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
