import React from 'react';
import ReactDOM from 'react-dom';
import { TabBar, Icon } from 'antd-mobile';
require('../iconfont/iconfont.css');
/* eslint global-require: 0 */

class CarTabBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.chosen || 'indexTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return false;
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
          e.preventDefault();
          this.setState({
            hidden: !this.state.hidden,
          });
        }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<div className="iconfont" style={{
            width: '0.44rem',
            height: '0.44rem'}}>&#xe6b8;</div>
          }
          selectedIcon={<div className="iconfont" style={{
            width: '0.44rem',
            height: '0.44rem'}}>&#xe6bb;</div>
          }
          selected={this.state.selectedTab === 'indexTab'}
          badge={3}
          onPress={() => {
            this.setState({
              selectedTab: 'indexTab',
            });
            window.location.href="/index.html";
          }}
          data-seed="logId"
        >
          {this.renderContent('首页')}
        </TabBar.Item>
        <TabBar.Item
          //icon={<Icon type="koubei-o" size="md" />}
          icon={<div className="iconfont" style={{
            width: '0.44rem',
            height: '0.44rem'
            }}>&#xe691;</div>
          }
          selectedIcon={<div className="iconfont" style={{
            width: '0.44rem',
            height: '0.44rem'}}>&#xe690;</div>
          }
          //selectedIcon={<Icon type="koubei" size="md" />}
          title="问答"
          key="问答"
          badge={'new'}
          selected={this.state.selectedTab === 'qzTab'}
          onPress={() => {
            
            this.setState({
              selectedTab: 'qzTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('问答')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div className="iconfont" style={{
              width: '0.44rem',
              height: '0.44rem'}}>&#xe891;</div>
          }
          selectedIcon={
            <div className="iconfont" style={{
              width: '0.44rem',
              height: '0.44rem'}}>&#xe891;</div>
          }
          title="反馈"
          key="反馈"
          dot
          selected={this.state.selectedTab === 'feedbackTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'feedbackTab',
            });
          }}
        >
          {this.renderContent('反馈')}
        </TabBar.Item>
        <TabBar.Item
            icon={
              <div className="iconfont" style={{
                width: '0.44rem',
                height: '0.44rem'}}>&#xe895;</div>
            }
            selectedIcon={
              <div className="iconfont" style={{
                width: '0.44rem',
                height: '0.44rem'}}>&#xe895;</div>
            }
           
          title="商家"
          key="商家"
          selected={this.state.selectedTab === 'shopTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'shopTab',
            });
            window.location.href="/businessin.html";
          }}
        >
          {this.renderContent('商家')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div className="iconfont" style={{
              width: '0.44rem',
              height: '0.44rem'}}>&#xe78b;</div>
          }
          selectedIcon={
            <div className="iconfont" style={{
              width: '0.44rem',
              height: '0.44rem'}}>&#xe78c;</div>
          }
           
          title="个人中心"
          key="个人中心"
          selected={this.state.selectedTab === 'mineTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mineTab',
            });
            window.location.href="/personcenter.html";
          }}
        >
          {this.renderContent('个人中心')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

//ReactDOM.render(<CarTabBar />,document.querySelector('#footer'));
export default CarTabBar;

