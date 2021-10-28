# Setup

npm init -y
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader \
 babel-plugin-react-html-attrs
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev redux
npm install --save-dev redux-logger
npm install --save-dev axios
npm install --save-prod redux-thunk

## redux-thunk とは

dispatcher は Object 渡されることを期待しており､関数を渡されることを想定していないため､エラーが発生する｡
これを回避するために"redux-thunk"を使用する
