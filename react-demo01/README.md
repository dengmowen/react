## 技术胖React16教程 https://jspang.com/detailed?id=46

## jsx 注意事项

class 添加为 ClassName

## 单向数据流

不允许修改 只允许读取
## setState异步加载

## 生命周期
componentWillMount 组件挂载到页面
componentDidMount 组件挂载完成 
componentDidCatch 组件销毁完成
shouldComponentUpdate 在组件render更新之前 true/false
componentWillReceiveProps
1.组件第一次存在于Dom中 函数是不会被执行的。
2.已经存在Dom中 函数才会被执行
componentWillUpdate 组件将要更新
componentDidUpdate 组件更新完成
componentWillUnmount 组件将要删除之前

componentWillMount==>render==>componentDidMount
shouldComponentUpdate=>componentWillUpdate=>render=>componentDidUpdate

```javscript
  解决了子组件的渲染性能问题
  shouldComponentUpdate(nextProps,nexState) {
      console.log('shouldComponentUpdate=>',nextProps,nexState);
      if(nextProps.content !== this.props.content) {
        return true;
      } else {
        return false;
      }   
  }
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
