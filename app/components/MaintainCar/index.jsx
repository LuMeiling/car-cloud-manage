import React from 'react';
import ReactDOM from 'react-dom';

import { Button , List, InputItem, WhiteSpace,WingBlank,Picker} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';

import { createForm } from 'rc-form';
import CarTabBar from '../CarTabBar';
import MainHeader from '../MainHeader';

var path = require('path');

require('./index.css');
require('../iconfont/iconfont.css');

class App extends React.Component {
  
  constructor() {
    super() ;
    this.state = {
    }
  }
  clickHandler(e) {
    var phone = this.props.form.getFieldValue('phone');
    var pwd = this.props.form.getFieldValue('password');
    
  }

  // touchstartevt(e){
  //   var currentTarget = e.currentTarget;
  //   currentTarget.style.backgroundColor='#ccc';
  //   console.log('start');
  // }
  // touchendevt(e){
  //   console.log('end');
  //   var currentTarget = e.currentTarget;
  //   currentTarget.style.backgroundColor='transparent';
  // }
  //设定
  clkSetting(e){
    alert('setting');
  }
  clkCancel(e){
    alert('取消');
  }
  clkSure(e){
    alert('确定');
  }
  clkMaintainRecord(e){
    alert('保养记录');
  }


  render() {
    const { getFieldProps ,getFieldValue} = this.props.form;
    return (
      <div className="wrapper">
          
          <section className="main-area">
             
              <MainHeader/>
              <div className="maintain-type-line">
                <span className="maintain-item txt">单项保养：机油</span>
              </div>
              
              <InputItem {...getFieldProps('carDistance')} type="number" clear extra="公里">保养里程</InputItem>
              <InputItem {...getFieldProps('maintainDate')} clear type="date">保养日期</InputItem>
              <div className="setting-line">
                  <InputItem {...getFieldProps('maintainCycle')} editable="false" value="5000公里">保养周期</InputItem>
                  <span className="txt" onClick={this.clkSetting.bind(this)}>设定</span>
              </div>
              <InputItem {...getFieldProps('material-fee')} clear type="number" extra="元">材料费</InputItem>
              <InputItem {...getFieldProps('people-fee')} clear type="number" extra="元">人工费</InputItem>
              <InputItem {...getFieldProps('summary-fee')} clear type="number" extra="元">总计</InputItem>


              <WhiteSpace />
              <CarTabBar/>
          </section>

          <section className="btn-area">
              <Button className="btn lt" inline onClick={this.clkCancel.bind(this)}>取消</Button>
              <Button className="btn mid" inline type="primary" onClick={this.clkMaintainRecord.bind(this)}>保养记录</Button>
              <Button className="btn rt" inline  onClick={this.clkSure.bind(this)}>确定</Button>
          </section>
          <CarTabBar/>
      </div>
    );
  }
}
const App1 = createForm()(App);
ReactDOM.render(<App1 />, document.querySelector('#divId'));