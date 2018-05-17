import React from 'react';
import ReactDOM from 'react-dom';
// //import { Button } from 'antd-mobile';
// import { InputItem } from 'antd-mobile';

// ReactDOM.render(<InputItem>Start</InputItem>, document.querySelector('#divId'));
import { Button , Checkbox,List, InputItem, WhiteSpace,WingBlank,NavBar } from 'antd-mobile';
import { createForm } from 'rc-form';
import CarTabBar from '../CarTabBar';
const AgreeItem = Checkbox.AgreeItem;

//var baseHost = 'http://api.car.yipiantian.cn';
var baseHost = 'http://localhost:9090';
require('./index.css');
var dataReq = require('../script/req');

var validate_code_input='2000';

window.addEventListener('load',function(){
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  document.querySelector('#wrapperId').style.height= (clientHeight-100)+'px';

});
class BasicInputExample extends React.Component {
  constructor() {
  	super() ;
  	this.state={"focused": false}
  }

  click4ValidateCode(e) {
    var currentTarget = e.currentTarget;
    var cls = currentTarget.className;
    if(cls.indexOf('validating')!=-1) return;
    currentTarget.classList.add('validating');
    //get validate code TODO
    validate_code_input = '2000';
    var count = 30;
    doCount();
    var timer = setInterval(doCount,1000);
    dataReq.ajaxReq.start({
      url:baseHost+'/user/getcode',
      success:function(data){          
          validate_code_input = data.code;
          console.log('下发的验证码是：'+validate_code_input);
      },
      error:function(e){
        alert('获取验证码失败！'+e);
      }
    });
    function doCount(){
      if(count){
        currentTarget.innerHTML=(count--)+'s';
      }else{
        clearInterval(timer);
        currentTarget.classList.remove('validating');
        currentTarget.innerHTML='获取验证码';
      }   
    }
  }
  clickChxChange(e){
    var currentTarget = e.target;
    var oInputChx = document.querySelector('.am-checkbox-input');
    if(currentTarget.checked && true==currentTarget.checked){
        oInputChx.dataset.isched = 'true';
    }else{
        oInputChx.dataset.isched = 'false';
    }
  }
  clickRegister(e) {
    var phone = this.props.form.getFieldValue('phone');
    var valCode = this.props.form.getFieldValue('validateCode');
    var pwd = this.props.form.getFieldValue('password');
    console.log(phone);
    console.log(valCode);
    console.log(pwd);
    if(!phone || !valCode || !pwd){
        alert('手机号、验证码、密码必填哦～');
        return false;
    }
    
    //验证验证码是否正确
    if(!validate_code_input || validate_code_input != valCode){
      alert('验证码不正确哦');
      return false;
    }

    //是否同意协议
    var isAgree = document.querySelector('.am-checkbox-input').dataset.isched;
    if(!isAgree || isAgree=='false'){
      alert('请勾选同意协议复选框～');
      return false;
    }

    //alert('注册'); TODO
    var oForm = document.createElement('form');
    document.body.appendChild(oForm);
    oForm.name='SignupForm';
    oForm.phone=phone;
    oForm.code=valCode;
    oForm.password=pwd;
    oForm.method='POST';
    oForm.target='_blank';
    //http://api.car.yipiantian.cn/user/signup
    oForm.action=baseHost+'/user/signup';
    oForm.submit();
    
  }

  render() {
    const { getFieldProps ,getFieldValue} = this.props.form;
    return (
      <div className="wrapper" id="wrapperId">
        <NavBar leftContent="" mode="light" onLeftClick={() => console.log('onLeftClick')}
        >注册</NavBar>
        <List>
          <div className="validate-line">
              <InputItem
                {...getFieldProps('phone')}
                type="phone" clear
                placeholder="手机号"
              >手机号</InputItem>
              <span className="validate-code" onClick={this.click4ValidateCode.bind(this)}>获取验证码</span>
          </div>
          <InputItem id="validateCode"
            {...getFieldProps('validateCode')}
           clear
            placeholder="请输入验证码"
          >验证码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password" clear
            placeholder="6-32位字母数字组合"
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <Button className="btn register-btn" type="primary" onClick={this.clickRegister.bind(this)}>立即注册</Button>
        <div className="agree-area">
          <AgreeItem data-seed="logId" onChange={this.clickChxChange.bind(this)}>
            我已阅读并同意汽车运管理<a onClick={(e) => { e.preventDefault(); alert('打开协议'); }}>《用户使用协议》</a>
          </AgreeItem>

        </div>
        <CarTabBar/>
      </div>
      
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExampleWrapper />, document.querySelector('#divId'));
