import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel, WhiteSpace, WingBlank,Grid,ListView} from 'antd-mobile';

import List from '../List';
import CarTabBar from '../CarTabBar';
import SearchBarHeader from '../SearchBarHeader';

const path = require('path');

require('./index.css');

// multible box begin 
const arrMultibleName=['保养','加油管理','我要修车','汽车美容','分享','积分商城','车险','违章查询','知识窗','买卖二手车'];
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: arrMultibleName[i],
}));

//multible box end

class App extends React.Component {
  
  constructor() {
    super() ;
    this.state = {
      data: ['', '', ''],
      initialHeight: 200,
    }
  }

  componentDidMount() {
    // simulate img loading  for slider
    var _this = this;
    setTimeout(function() {
      _this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'],
      });
    }, 100);

  }

  clkDisplayItems(obj,index){
    alert(obj.text);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="wrapper">
          <SearchBarHeader/>

          <WingBlank>
            <Carousel
              className="my-carousel" autoplay={true} infinite selectedIndex={1}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(ii => (
                <a href="http://www.baidu.com" key={ii} style={hProp}>
                  <img
                    src={`http://dealer0.autoimg.cn/dl/122290/newsimg/130280227449855428.jpg`}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({
                        initialHeight: null,
                      });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>

          <section className="blackboard flex-container">
              <div className="lf-part sub-flex-ave">
                  <div className="circle">
                      <span className="up-txt">星期五</span>
                      <span className="down-txt">0限5</span>
                  </div>
                  <span className="district">北京市</span>
              </div>
              <div className="middle-part sub-flex-ave">
                  <span className="up-line">京P 55555</span>
                  <div className="down-line">
                     <span className="label">当前<br/>行程</span>
                     <span className="distance">0012345</span>
                     <span className="btn-update">更新<br/>里程</span>
                  </div>
                  
              </div>
              <div className="rt-part sub-flex-ave">
                  <div className="circle">
                      <span className="up-color"></span>
                      <span className="down-color"></span>
                      <span className="health-value">85</span>
                  </div>
                  <span className="health">健康度</span>
              </div>
          </section>

          <div>
             <Grid data={data} columnNum={5} hasLine={false} onClick={this.clkDisplayItems.bind(this)}/>
          </div>
          <section className="activity-area">优惠专区</section>
          <List/>
          <CarTabBar/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#divId'));
