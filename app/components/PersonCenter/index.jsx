import React from 'react';
import ReactDOM from 'react-dom';

import {WhiteSpace} from 'antd-mobile';

import CarTabBar from '../CarTabBar';
require('./index.css');
let resultMap = [],emailNum,headImgUrl;
let dataReq = require('../script/req');
dataReq.ajaxReq.start({
  url: dataReq.globalUrl+'user/menu',
  success:function(data){
    if(data){
      resultMap=data.data.menu_list;
      emailNum=data.data.unread_num;
      headImgUrl = data.data.headimg;
    }
  },
  error:function(){
    console.log('Err happens in PersonCenter');
  }
});

class BasicInputExample extends React.Component {
  constructor() {
  	super() ;
  }
  render() {
    return (
      <div className="wrapper">
        <div className="photo-area">
          <img src={headImgUrl} className="photo"/>
          <div className="personal-info">
              <a href="login.html" className="line-1">点击登录</a>
              <span className="line-2">登录享优惠</span>
          </div>
          <div className="email-num">
              <span className="number">{emailNum}</span>
          </div>
        </div>
        <ul className="nav-bar" style={{display: 'none'}}>
          <li className="items">
              <em className="icn-car"></em>
              <span className="txt">我的车</span>
          </li>
          <li className="items">
              <em className="icn-star"></em>
              <span className="txt">我的收藏</span>
          </li>
          <li className="items">
              <em className="icn-friend"></em>
              <span className="txt">我的好友</span>
          </li>
        </ul>

        <section key="perList" className="part-1 fun-area">
               {resultMap.map(function(itemName){  
                    return <a href={itemName[1]} className="eve-line">
                            <span className="txt-lt">{itemName[0]}</span>
                            <span className="txt-rt"></span>
                          </a>
                })}     
        </section>
        
        <section className="part-2 fun-area"  style={{display: 'none'}}>
            <div className="eve-line">
              <span className="txt-lt">我的点评</span>
              <span className="txt-rt"></span>
            </div>
            <div className="eve-line">
              <span className="txt-lt">最近浏览</span>
              <span className="txt-rt"></span>
            </div>
            <div className="eve-line">
              <span className="txt-lt">联系客服</span>
              <span className="txt-rt"></span>
            </div>
            <div className="eve-line">
              <span className="txt-lt">设置</span>
              <span className="txt-rt"></span>
            </div>
        </section>
        
        <section className="part-2 fun-area"  style={{display: 'none'}}>
            <div className="eve-line">
              <span className="txt-lt">我是商家</span>
              <span className="txt-rt"></span>
            </div>
        </section>
        <WhiteSpace />
        <CarTabBar chosen="mineTab"/>
      </div>     
    );
  }
}

ReactDOM.render(<BasicInputExample />, document.querySelector('#divId'));
