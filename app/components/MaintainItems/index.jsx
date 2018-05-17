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
  clkMaintainItem(e){
    var currentTarget = e.currentTarget;
    alert(currentTarget.firstChild.innerHTML);
  } 
  clkGo2Main(e){
    alert('去保养');
  }
  clkContactBiz(e){
    alert('联系客服');
  }

  render() {
    const { getFieldProps ,getFieldValue} = this.props.form;
    return (
      <div className="wrapper">
          
          <section>
              <MainHeader/>

              <div className="maintain-shop-line">
                <span className="maintain-shop txt">奔驰汽修提醒您：</span>
              </div>
              <ul className="maintain-items">
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">机油</span>
                    <div className="process-container red">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">5%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">机油滤清器</span>
                    <div className="process-container red">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">5%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">空气滤清器</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">汽油滤清器</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">轮胎换位</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">变速箱油</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">保险</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">32天</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">验车</span>
                    <div className="process-container red">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">27天</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">空调滤清器</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">刹车油</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
                <li className="m-item" onClick={this.clkMaintainItem.bind(this)}>
                    <span className="lbl-txt">转向助力油</span>
                    <div className="process-container green">
                      <div className="process-main">
                        <div className="process-sub"></div>
                        <em className="num-show">20%</em>
                      </div>
                    </div>
                </li>
              </ul>
              <WhiteSpace />
              <CarTabBar/>
          </section>

          <section className="btn-area">
              <Button className="btn lt" inline  onClick={this.clkGo2Main.bind(this)}>保养</Button>
              <Button className="btn rt" inline  onClick={this.clkContactBiz.bind(this)}>联系商家</Button>
          </section>
          <CarTabBar/>
      </div>
    );
  }
}
const App1 = createForm()(App);
ReactDOM.render(<App1 />, document.querySelector('#divId'));