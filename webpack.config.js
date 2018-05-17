var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const COMPONENT_PATH = path.resolve(ROOT_PATH, 'app/components');
const PAGE_TITLE = {"login":"登录",
                    "carTabBar":"底部切换条",
                    "index":"首页",
                    "businessin":"商家入驻",
                    "addcar":"添加新车",
                    "maintaincar":"保养单页",
                    "maintainitems":"保养页",
                    "carmanage":"车辆管理",
                    "register":"注册",
                    "personcenter":"个人中心",
                    "quickbind":"快速绑定",
                    "recordoil":"记录加油"
                  };

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// multiple extract instances
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
//let extractSCSS = new ExtractTextPlugin('stylesheets/[name].scss');
module.exports= {
  entry: {
    login: path.resolve(COMPONENT_PATH, 'Login/index.jsx'),
    index: path.resolve(COMPONENT_PATH, 'Index/index.jsx'),
    businessin: path.resolve(COMPONENT_PATH, 'BusinessIn/index.jsx'),
    addcar: path.resolve(COMPONENT_PATH, 'AddCar/index.jsx'),
    maintaincar: path.resolve(COMPONENT_PATH, 'MaintainCar/index.jsx'),
    maintainitems: path.resolve(COMPONENT_PATH, 'MaintainItems/index.jsx'),
    carmanage: path.resolve(COMPONENT_PATH, 'CarManage/index.jsx'),
    register: path.resolve(COMPONENT_PATH, 'Register/index.jsx'),
    personcenter: path.resolve(COMPONENT_PATH, 'PersonCenter/index.jsx'),
    quickbind: path.resolve(COMPONENT_PATH, 'QuickBind/index.jsx'),
    recordoil: path.resolve(COMPONENT_PATH, 'RecordOil/index.jsx'),
    vendor: ['react','react-dom']
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name]-[chunkhash:6].js'
    //filename: 'js/[name].js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port:9999
  },
  resolve: {
    extensions: ['', '.web.js','.js', '.jsx','.json'],
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    root: APP_PATH
  },
  module: {
    preLoaders: [
      // {
      //   test: /\.jsx?$/,
      //   loaders: ['eslint'],
      //   include: APP_PATH
      // }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      // {
      //   test: /\.css$/,
      //   loaders: ['style', 'css']
      // },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css', 'sass']
      // },
      {test: /\.css$/i, loader: extractCSS.extract(['css'])},
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite',
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192&name=../images/[name].[ext]'
　　　　},
      {test: /\.(eot|woff|ttf|svg)$/, loader: "file-loader" ,query: {
                name: '[name].[ext]'
            }}
    ]
  },
  plugins: [
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({    //压缩代码
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']    //排除关键字
    }),
    new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",//和上面配置的入口对应
                filename: "vendor.js"//导出的文件的名称
            }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'login.html',
      inject:'false',
      title:PAGE_TITLE.login,
      date:new Date(),
      chunks:['vendor','login'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'index.html',
      inject:'false',
      title:PAGE_TITLE.index,
      date:new Date(),
      chunks:['vendor','index'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'businessin.html',
      inject:'false',
      title:PAGE_TITLE.businessin,
      date:new Date(),
      chunks:['vendor','businessin'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'addcar.html',
      inject:'false',
      title:PAGE_TITLE.addcar,
      date:new Date(),
      chunks:['vendor','addcar'],
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'maintaincar.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','maintaincar'],
      title:PAGE_TITLE.maintaincar,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'maintainitems.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','maintainitems'],
      title:PAGE_TITLE.maintainitems,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'carmanage.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','carmanage'],
      title:PAGE_TITLE.carmanage,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'register.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','register'],
      title:PAGE_TITLE.register,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'personcenter.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','personcenter'],
      title:PAGE_TITLE.personcenter,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'quickbind.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','quickbind'],
      title:PAGE_TITLE.quickbind,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    }),
    new HtmlwebpackPlugin({
      template:'template.html',
      //filename:'login-[hash:8].html',
      filename:'recordoil.html',
      inject:'false',
      date:new Date(),
      chunks:['vendor','recordoil'],
      title:PAGE_TITLE.recordoil,
      minify:{
        removeComments:true,
        collapseWhiteSpace:true
      }
    })
  ]
}
