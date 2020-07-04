import React from 'react';
import CategoryTable from '../../components/CategoryTable';
import CreateCategoryModal from '../../components/Modal/CreateCategoryModal';
import { Tabs, Layout, Button, Spin } from 'antd';
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
    tableData: [],
    isCreateCategoryModalVisible: false,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    this.setState({ isLoading: true });
    const { data } = await apiGetCategory();
    this.setState({ tableData: data, isLoading: false });
  };

  onTabClick = key => {
    console.log('key: ', key);
  };

  onClickCancel = () => {
    this.setState({ isCreateCategoryModalVisible: false });
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
            onClick={() =>
              this.setState({ isCreateCategoryModalVisible: true })
            }
          >
            新增標籤 / 分類
          </Button>
          <Tabs defaultActiveKey="1" onTabClick={this.onTabClick}>
            {this.state.tabs.map(tab => (
              <TabPane tab={tab.title} key={tab.key}>
                <Spin spinning={this.state.isLoading}>
                  <CategoryTable data={tableData && tableData[tab.key]} />
                </Spin>
              </TabPane>
            ))}
          </Tabs>
        </Content>
        <CreateCategoryModal
          visible={this.state.isCreateCategoryModalVisible}
          tableData={this.state.tableData}
          onCloseModal={() =>
            this.setState({ isCreateCategoryModalVisible: false })
          }
        />
      </>
    );
  }
}

export default Category;
