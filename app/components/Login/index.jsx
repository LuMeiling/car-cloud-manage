import React from 'react';
import ReactDOM from 'react-dom';

import { Button , List, InputItem, WhiteSpace,WingBlank,NavBar } from 'antd-mobile';
import { createForm } from 'rc-form';
import CarTabBar from '../CarTabBar';

var alipay = require('./i/alipay.png');
var qq = require('./i/qq.png');
var sina = require('./i/sina.png');
var wechat = require('./i/wechat.png');

require('./index.css');
let dataReq = require('../script/req');

window.addEventListener('load',function(){
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  document.querySelector('#wrapperId').style.height= (clientHeight-100)+'px';

});

class BasicInputExample extends React.Component {
  constructor() {
  	super() ;
  	this.state={"focused": false}
  }
  clickHandler(e) {
    var phone = this.props.form.getFieldValue('phone');
    var pwd = this.props.form.getFieldValue('password');
    if(!phone || !pwd){
      alert('手机号、密码必填哦～');
      return false;
    }
    dataReq.ajaxReq.start({
      url: dataReq.globalUrl+'user/login',
      method:'POST',
      success:function(data){
        alert(data);
      },
      error:function(){
        console.log('Err happens in PersonCenter');
      }
    });
    
  }
  clickJump(e) {
    var currentTarget = e.currentTarget;
    var jumpType = currentTarget.dataset.jumptype;
    var url = '';
    switch(jumpType){
      case "reg":
        url='/register.html';
        break;
      case "pwd":
        alert('跳转忘记密码');
        return ;
        url='https://www.baidu.com';
        break;
    }
    window.location.href= url;
  }  
  clickElse(e) {
    var currentTarget = e.currentTarget;
    var channel = currentTarget.dataset.channel;
    
    switch(channel){
      case "wechat":
        alert('微信登录');
        break;
      case "qq":
        alert('qq登录');
        break;
      case "sina":
        alert('sina登录');
        break;
      case "alipay":
        alert('alipay登录');
        break;
    }
  }

  render() {
    const { getFieldProps ,getFieldValue} = this.props.form;
    return (
      <div className="wrapper" id="wrapperId">
        <NavBar leftContent="" mode="light" onLeftClick={() => console.log('onLeftClick')}
        >登录</NavBar>
        <List>
          <InputItem
            {...getFieldProps('phone')}
            type="phone" clear
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password" clear
            placeholder="****"
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <Button className="btn login-btn" type="primary" onClick={this.clickHandler.bind(this)}>登录</Button>
        <div className="reg-pwd-line">
          <span className="lf" data-jumptype="reg" onClick={this.clickJump.bind(this)}>注册</span>
          <span className="rt" data-jumptype="pwd" onClick={this.clickJump.bind(this)}>忘记密码？</span>
        </div>

        <div className="else-login">
           <ul className="login-ways">
             <li className="item wechat" data-channel="wechat" onClick={this.clickElse.bind(this)}></li>
             <li className="item qq" data-channel="qq" onClick={this.clickElse.bind(this)}></li>
             <li className="item sina" data-channel="sina" onClick={this.clickElse.bind(this)}></li>
             <li className="item alipay" data-channel="alipay" onClick={this.clickElse.bind(this)}></li>
           </ul>
           <span className="tle">其他方式登录</span>
        </div>
        <CarTabBar/>
      </div>
      
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExampleWrapper />, document.querySelector('#divId'));
