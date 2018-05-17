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
    console.log('=====================');
    console.log(district);
  }
  clickHandler(e) {
    var phone = this.props.form.getFieldValue('phone');
    var pwd = this.props.form.getFieldValue('password');
    
  }
  clkCancel(e){
    alert('取消');
  }
  clkSure(e){
    alert('确定');
  }
  clkSaveAndNext(e){
    alert('保存并下一步');
  }

  render() {
    const { getFieldProps ,getFieldValue} = this.props.form;
    return (
      <div className="wrapper">
          <NavBar leftContent="" mode="light" onLeftClick={() => console.log('onLeftClick')}
          >商家入驻</NavBar>

          <div>
            <List>
              <InputItem className="mandatory-item" {...getFieldProps('phone')} clear>商家名称</InputItem>
              <InputItem className="mandatory-item" {...getFieldProps('password')} clear>商家简称</InputItem>
            </List>
            <section className="self-chbox">
                <span className="lbl mandatory-item">商家类型</span>
                <ul className="chboxes">
                  <li className="item"><span className="txt">汽车4S店</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">加油站</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车维修</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车保养</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">板金喷漆</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车配件</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车装饰</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">洗车美容</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车电子</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车轮胎</span><input type="checkbox" className="cbx"/></li>

                  <li className="item"><span className="txt">汽车改装</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车音响</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车灯光</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车救援</span><input type="checkbox" className="cbx"/></li>
                  
                  <li className="item"><span className="txt">汽车保险</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车租赁</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车代驾</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">二手车</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">其他</span><input type="text" className="underlne"/></li>
                </ul>
            </section>

            <Picker data={district2} cols={1} {...getFieldProps('district3')} className="forss">
              <List.Item className="mandatory-item" arrow="horizontal" placeholder="选择品牌">服务品牌</List.Item>
            </Picker>

            <section className="self-chbox">
                <span className="lbl mandatory-item">服务项目</span>
                <ul className="chboxes">
                  <li className="item"><span className="txt">维修</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">保养</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">板金喷漆</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">洗车</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车装饰</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">美容</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">轮胎</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">补胎</span><input type="checkbox" className="cbx"/></li>

                  <li className="item"><span className="txt">四轮定位</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车配件</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车电路</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车改装</span><input type="checkbox" className="cbx"/></li>
                  
                  <li className="item"><span className="txt">音响升级</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">灯光升级</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车救援</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">二手车</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车保险</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车租赁</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">汽车代驾</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">二手车</span><input type="checkbox" className="cbx"/></li>
                  <li className="item"><span className="txt">其他</span><input type="text" className="underlne"/></li>

                </ul>
            </section>

            <Picker extra="请选择(可选)"
              data={district}
              title="选择地区"
              {...getFieldProps('district', {
                initialValue: ['340000', '341500', '341502'],
              })}
            >
              <List.Item className="mandatory-item"  arrow="horizontal">选择地区</List.Item>
            </Picker>
            <InputItem {...getFieldProps('detailaddress')} clear >详细地址</InputItem>
            <List>
              <InputItem {...getFieldProps('contact')} clear>联系人</InputItem>
              <InputItem className="mandatory-item" {...getFieldProps('phone')} clear>手机</InputItem>
              <InputItem className="mandatory-item" {...getFieldProps('mobile')} clear>固定电话</InputItem>
              <InputItem className="mandatory-item" {...getFieldProps('beginDate')} clear type="date">入驻时间</InputItem>
              <InputItem className="mandatory-item" {...getFieldProps('endDate')} clear type="date">截止日期</InputItem>
              <InputItem {...getFieldProps('money')} clear extra="元">缴纳金额</InputItem>
              <Picker data={cashtypedata} cols={1} {...getFieldProps('cashtypedata')} className="forss">
                <List.Item arrow="horizontal">付款方式</List.Item>
              </Picker>
              <InputItem {...getFieldProps('bizcode')} clear>业务编码</InputItem>
              <InputItem {...getFieldProps('recomendcode')} clear>推荐编码</InputItem>
            </List>
            <WhiteSpace />
            <CarTabBar/>
          </div>

          <section className="btn-area">
              <Button className="btn lt" inline onClick={this.clkCancel.bind(this)} >取消</Button>
              <Button className="btn mid" inline onClick={this.clkSaveAndNext.bind(this)} type="primary">保存并下一步</Button>
              <Button className="btn rt" inline onClick={this.clkSure.bind(this)} >确定</Button>
          </section>
          <CarTabBar chosen="shopTab"/>
      </div>
    );
  }
}
const App1 = createForm()(App);
ReactDOM.render(<App1 />, document.querySelector('#divId'));