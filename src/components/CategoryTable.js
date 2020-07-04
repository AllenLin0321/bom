import React from 'react';

import { Table, Tag, Space, Empty, Modal } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

class CategoryTable extends React.Component {
  static defaultProps = {
    data: [],
  };

  state = {
    isEditModalVisible: false,
    isDeleteModalVisible: false,
    columns: [
      {
        title: '名稱',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '上一層分類',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => this.renderTags(tags),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <EditTwoTone
              className="category__icon"
              twoToneColor="#317BE4"
              onClick={this.onClickEditBtn}
            />
            <DeleteTwoTone
              className="category__icon"
              onClick={this.onClickDeleteBtn}
              twoToneColor="#FF5722"
            />
          </Space>
        ),
      },
    ],
  };

  onClickDeleteBtn = () => {
    alert('刪除標籤');
  };
  onClickEditBtn = () => {
    alert('編輯標籤');
  };

  renderTags = () => {
    const tags = ['cool', 'teacher'];
    return (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    );
  };

  render() {
    const { data } = this.props;
    return data.length === 0 ? (
      <Empty />
    ) : (
      <>
        <Table columns={this.state.columns} dataSource={data} />
      </>
    );
  }
}

export default CategoryTable;
