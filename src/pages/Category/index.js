import React from 'react';
import CategoryTable from './CategoryTable';
import { Tabs, Layout, Button } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { apiGetCategory } from '../../api';
import './Category.scss';

const { Content } = Layout;
const { TabPane } = Tabs;

class Category extends React.Component {
  state = {
    tabs: [
      { key: 'category', title: '主分類' },
      { key: 'subCategory', title: '次分類' },
      { key: 'label', title: '標籤' },
    ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ],
  };

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    const { data } = await apiGetCategory();
    this.setState({ tableData: data });
  };

  onTabClick = key => {
    console.log('key: ', key);
  };

  render() {
    const { tableData } = this.state;
    return (
      <>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Button
            className="category__create-btn"
            type="primary"
            icon={<PlusCircleTwoTone />}
          >
            新增標籤 / 分類
          </Button>
          <Tabs defaultActiveKey="1" onTabClick={this.onTabClick}>
            {this.state.tabs.map(tab => (
              <TabPane tab={tab.title} key={tab.key}>
                <CategoryTable data={tableData && tableData[tab.key]} />
              </TabPane>
            ))}
          </Tabs>
        </Content>
      </>
    );
  }
}

export default Category;
