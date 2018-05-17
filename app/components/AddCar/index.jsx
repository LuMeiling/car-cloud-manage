import React from 'react';
import ReactDOM from 'react-dom';

import { Button , List, InputItem, WhiteSpace,WingBlank,NavBar,Picker} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';

import { createForm } from 'rc-form';
import CarTabBar from '../CarTabBar';

var path = require('path');

require('./index.css');
require('../iconfont/iconfont.css');

const cashtypedata = [{
  'label':'现金',
  'key':'1',
  'value':'money'
},
{'label':'手机支付',
  'key':'2',
  'value':'bytel'
},];
const district2 = [{
        'label':'大众',
        'key':'1',
        'value':'dazhong'
    },
    {
       'label':'起亚',
        'key':'2',
        'value':'qiya'
    },
    {
       'label':'丰田',
        'key':'3',
        'value':'fengtian'
    },
    {
       'label':'奥迪',
        'key':'4',
        'value':'aodi'
    },
    {
       'label':'宝马',
        'key':'5',
        'value':'baoma'
    },
    {
       'label':'本田',
        'key':'6',
        'value':'bentian'
    },
    {
       'label':'福特',
        'key':'7',
        'value':'fute'
    },
    {
       'label':'现代',
        'key':'8',
        'value':'xiandai'
    },
    {
       'label':'标志',
        'key':'9',
        'value':'biaozhi'
    },
    {
       'label':'奔驰',
        'key':'10',
        'value':'benchi'
    },
    {
       'label':'别克',
        'key':'11',
        'value':'bieke'
    },
    {
       'label':'长安',
        'key':'12',
        'value':'changan'
    },
    {
       'label':'雪弗莱',
        'key':'13',
        'value':'xufulai'
    }];

class App extends React.Component {
  
  constructor() {
    super() ;
    this.state = {
    }
    console.log(district);
  }
  clickHandler(e) {
    var phone = this.props.form.getFieldValue('phone');
    var pwd = this.props.form.getFieldValue('password');
    
  }
  clkMaintainRecord(e) {
    alert('保养记录');
  } 
  clkSure(e) {
    alert('确定');
  } 
  clkCancel(e) {
    alert('取消');
  }

  render() {
    const { getFieldProps ,getFieldValue} = this.props.form;
    return (
      <div className="wrapper">
          <NavBar leftContent="" mode="light" onLeftClick={() => console.log('onLeftClick')}
          >添加新车</NavBar>

          <div>
            <Picker data={district2} cols={1} {...getFieldProps('district3')} className="forss">
              <List.Item  className="mandatory-item" arrow="horizontal" title="品牌">品牌</List.Item>
            </Picker>

            <List>
              <InputItem className="mandatory-item" {...getFieldProps('carColor')} clear>颜色</InputItem>
              <InputItem className="mandatory-item"  {...getFieldProps('carNumber')} clear>车牌号</InputItem>
              <InputItem className="mandatory-item"  {...getFieldProps('carDistance')} clear type="number" extra="公里">当前里程</InputItem>
              <InputItem className="mandatory-item"  {...getFieldProps('carLastDate')} clear type="date">上次验车日期</InputItem>
              <InputItem className="mandatory-item"  {...getFieldProps('carYearLimit')} clear type="number" extra="年">年限</InputItem>
              <InputItem className="mandatory-item"  {...getFieldProps('carLastDate')} clear type="date">保险起始日期</InputItem>
              <InputItem className="mandatory-item"  {...getFieldProps('carCycle1')} clear type="number" extra="年">年限</InputItem>
              <InputItem {...getFieldProps('engineNumber')} clear>发动机号</InputItem>
              <InputItem {...getFieldProps('chassisNumber')} clear>车架号</InputItem>
              <InputItem {...getFieldProps('carRegisterDate')} clear type="date">登记日期</InputItem>

            </List>
             
            <WhiteSpace />
            <CarTabBar/>
          </div>

          <section className="btn-area">
              <Button className="btn lt" inline onClick={this.clkCancel.bind(this)} >取消</Button>
              <Button className="btn mid" inline onClick={this.clkMaintainRecord.bind(this)} type="primary">保养记录</Button>
              <Button className="btn rt" inline onClick={this.clkSure.bind(this)} >确定</Button>
          </section>
          <CarTabBar/>
      </div>
    );
  }
}
const App1 = createForm()(App);
ReactDOM.render(<App1 />, document.querySelector('#divId'));