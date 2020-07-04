import React from 'react';
import { Modal, Radio, Space, Form, Input, Select } from 'antd';
import { TagsTwoTone } from '@ant-design/icons';
import { apiUpdateCategory } from '../../api/index';
import { ENUM_CATEGORY } from '../../ENUM/Category';

class CreateCategoryModal extends React.Component {
  static defaultProps = {
    tableData: [],
  };

  state = {
    currentTab: ENUM_CATEGORY.category.name,
    inputVal: '',
    isButtonLoading: false,
  };

  onSubmit = async () => {
    const { currentTab, inputVal } = this.state;
    let formData = null;

    if (inputVal !== '') {
      formData = this.onInsertData(currentTab);
    }

    this.setState({ isButtonLoading: true });

    await apiUpdateCategory(formData);

    this.setState({
      isButtonLoading: false,
      inputVal: '',
      currentTab: ENUM_CATEGORY.category.name,
    });

    this.props.onCloseModal();
  };

  onInsertData = category => {
    let formData = { ...this.props.tableData };
    const { key } = ENUM_CATEGORY[category];

    if (formData.hasOwnProperty(category)) {
      formData[category].push({
        index: `${key}${formData[category].length}`,
        name: this.state.inputVal,
      });
    } else {
      formData[category] = [{ index: `${key}0`, name: this.state.inputVal }];
    }
    return formData;
  };

  onRadioChange = val => {
    this.setState({ currentTab: val });
    this.setState({ inputVal: '' });
  };

  onBlur = () => {
    console.log('blur');
  };

  onFocus = () => {
    console.log('focus');
  };

  onSearch = val => {
    console.log('search:', val);
  };

  onInputChange = val => {
    this.setState({ inputVal: val });
  };

  renderSelectParentCategory = () => {
    const { Option } = Select;
    let optionArr = [];
    switch (this.state.currentTab) {
      case 'subCategory':
        optionArr = this.props.tableData.category;
        break;
      case 'label':
        optionArr = this.props.tableData.subCategory;
        break;
    }
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="選擇上一層分類"
        optionFilterProp="children"
        onChange={this.onChange}
        onFocus={this.onFocus} // 可能用不到
        onBlur={this.onBlur} // 可能用不到
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        disabled={
          this.state.currentTab === 'category' || optionArr.length === 0
        }
      >
        {optionArr.length > 0 &&
          optionArr.map(option => {
            return (
              <Option key={option.index} value={option.index}>
                {option.name}
              </Option>
            );
          })}
      </Select>
    );
  };

  renderForm = () => {
    return (
      <Form>
        {/* 選擇分類 */}
        <Form.Item label="選擇分類/標籤">
          <Radio.Group
            defaultValue={this.state.currentTab}
            buttonStyle="solid"
            onChange={e => this.onRadioChange(e.target.value)}
          >
            <Space size="middle">
              <Radio.Button value="category">主分類</Radio.Button>
              <Radio.Button value="subCategory">次分類</Radio.Button>
              <Radio.Button value="label">標籤</Radio.Button>
            </Space>
          </Radio.Group>
        </Form.Item>
        {/* 欄位名稱 */}
        <Form.Item label="名稱">
          <Input
            value={this.state.inputVal}
            placeholder="請輸入名稱"
            prefix={<TagsTwoTone />}
            style={{ width: 250 }}
            onChange={e => this.onInputChange(e.target.value)}
          />
        </Form.Item>
        {/* 選擇父層分類 */}
        <Form.Item label="上一層分類">
          {this.renderSelectParentCategory()}
        </Form.Item>
      </Form>
    );
  };

  render() {
    return (
      <div>
        <Modal
          title="新增分類/標籤"
          visible={this.props.visible}
          onOk={this.onSubmit}
          okButtonProps={{ loading: this.state.isButtonLoading }}
          onCancel={() => this.props.onCloseModal()}
        >
          {this.renderForm()}
        </Modal>
      </div>
    );
  }
}

export default CreateCategoryModal;
