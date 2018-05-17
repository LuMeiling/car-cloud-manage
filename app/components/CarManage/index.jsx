import React from 'react';
import ReactDOM from 'react-dom';

import { Button , List, InputItem, WhiteSpace,WingBlank,Picker} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';

import CarTabBar from '../CarTabBar';

var path = require('path');

require('./index.css');

let resultMap = [];
let dataReq = require('../script/req');
dataReq.ajaxReq.start({
  url: dataReq.globalUrl+'car/list',
  success:function(data){
    if(data){
      resultMap=data.data;
    }
  },
  error:function(){
    console.log('Err happens in PersonCenter');
  }
});


window.addEventListener('load',function(){
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  var btnHeight = document.querySelector('#btnArea').offsetHeight;
  var firstLineHeight = document.querySelector('#firstLineId').offsetHeight;
  document.querySelector('#wrapperId').style.height= clientHeight+'px';
  document.querySelector('#carListId').style.height= (clientHeight-btnHeight-firstLineHeight-100)+'px';

});

class App extends React.Component {
  
  constructor() {
    super() ;
    this.state = {
    }
  }

  addNewCar(e){
    window.location.href = '/addcar.html';
  }

  searchCar(e){
    alert('搜索车辆');
  }
  sure(e){
    alert('确定');
  }
  cancel(e){
    alert('取消');
  }
  render() {
    return (
      <div className="wrapper" id="wrapperId">

          <div className="first-line" id="firstLineId">
            <span className="lt">我的车</span>
            <em className="add-car" onClick={this.addNewCar.bind(this)}>添加新车</em>
          </div>

          <ul key="carList" className="car-list" id="carListId">
          {resultMap.map(function(item){
              return <li className="car-line">
                        <span className="no">{item.id}</span>
                        <img src={item.brand_logo} className="car-brand-logo"></img>
                        <span className="car-number">{item.plate_number}</span>
                      </li>
            })}
          </ul>
          <section className="btn-area" id="btnArea">
              <Button className="btn lt" inline onClick={this.cancel.bind(this)} >取消</Button>
              <Button className="btn mid" inline onClick={this.searchCar.bind(this)} type="primary">搜索车辆</Button>
              <Button className="btn rt" inline onClick={this.sure.bind(this)} >确定</Button>
          </section>
          <CarTabBar/>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.querySelector('#divId'));