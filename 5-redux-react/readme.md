# Setup

npm init -y
npm install --save-dev @babel/core babel-loader \
 @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-react \
 webpack webpack-cli webpack-dev-server \
 react react-dom react-redux react-router react-router-dom \
 redux redux-logger redux-promise-middleware redux-thunk \
 axios

npm install --save-dev babel-plugin-react-html-attrs
npm install --save-prod redux react-redux redux-thunk redux-logger redux-promise-middleware

## 備忘

### エラー等

- "デコレーターの実験的なサポートは将来のリリースで変更になる可能性がある機能です。'tsconfig' または 'jsconfig' に 'experimentalDecorators' オプションを設定してこの警告を削除します。ts(1219)"

  #### vscode の設定を変更

  - preferences -> settings
  - "enable/disable experimentalDecorators"にチェックを入れる

    https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/
