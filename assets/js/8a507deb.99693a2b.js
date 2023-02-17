"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[80665],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},c=void 0,p={unversionedId:"redux-integration",id:"version-3.x/redux-integration",isDocsHomePage:!1,title:"Redux integration",description:"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end//snack.expo.io/@react-navigation/redux-example. The most important piece from it is the following:",source:"@site/versioned_docs/version-3.x/redux-integration.md",sourceDirName:".",slug:"/redux-integration",permalink:"/docs/3.x/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/redux-integration.md",tags:[],version:"3.x",frontMatter:{id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},sidebar:"version-3.x-docs",previous:{title:"State persistence",permalink:"/docs/3.x/state-persistence"},next:{title:"MobX State Tree integration",permalink:"/docs/3.x/MST-integration"}},u=[{value:"What about <code>navigationOptions</code>?",id:"what-about-navigationoptions",children:[{value:"Use a component that is <code>connect</code>ed",id:"use-a-component-that-is-connected",children:[],level:3},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",children:[],level:3},{value:"setParams from your screen",id:"setparams-from-your-screen",children:[],level:3}],level:2},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",children:[],level:2}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end: ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/redux-example"},"https://snack.expo.io/@react-navigation/redux-example"),". The most important piece from it is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let RootStack = createStackNavigator({\n  Counter: CounterContainer,\n  StaticCounter: StaticCounterContainer,\n});\n\nlet Navigation = createAppContainer(RootStack);\n\n// Render the app container component with the provider around it\nexport default class App extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <Navigation />\n      </Provider>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Notice that we take the component returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"createAppContainer")," and wrap it in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),". Ta da! Now feel free to use ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," throughout your app."),(0,r.kt)("h2",{id:"what-about-navigationoptions"},"What about ",(0,r.kt)("inlineCode",{parentName:"h2"},"navigationOptions"),"?"),(0,r.kt)("p",null,"Alright fair enough, the answer here isn't the most obvious. Let's say that you want to access the Redux store state from the title, what would you do? There are a couple of options. For these examples let's say that you want to put the count from the above example into the title."),(0,r.kt)("h3",{id:"use-a-component-that-is-connected"},"Use a component that is ",(0,r.kt)("inlineCode",{parentName:"h3"},"connect"),"ed"),(0,r.kt)("p",null,"Create a component, ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," it to the store, then use that component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Count extends React.Component {\n  render() {\n    return <Text>Count: {this.props.value}</Text>\n  }\n}\n\nlet CountContainer = connect(state => ({ value: state.count }))(Count);\n\nclass Counter extends React.Component {\n  static navigationOptions = {\n    title: <CountContainer />\n  };\n\n  /* .. the rest of the code */\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title"},"See a runnable example"),"."),(0,r.kt)("h3",{id:"pass-the-state-you-care-about-as-a-param-to-the-screen"},"Pass the state you care about as a param to the screen"),(0,r.kt)("p",null,"If the value isn't expected to change, you can just pass it from a ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"ed component to the other screen as a param. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to static count screen\"\n  onPress={() =>\n    this.props.navigation.navigate('StaticCounter', {\n      count: this.props.count,\n    })\n  }\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title"},"See a runnable example"),"."),(0,r.kt)("h3",{id:"setparams-from-your-screen"},"setParams from your screen"),(0,r.kt)("p",null,"Let's modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticCounter")," from the previous example as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  componentDidMount() {\n    this.updateCount();\n  }\n\n  componentDidUpdate() {\n    this.updateCount();\n  }\n\n  updateCount() {\n    this.props.navigation.setParams({ count: this.props.count });\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Now whenever the store updates we update the ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," param and the title updates accordingly."),(0,r.kt)("h2",{id:"can-i-store-the-navigation-state-in-redux-too"},"Can I store the navigation state in Redux too?"),(0,r.kt)("p",null,"This is technically possible, but we don't recommend it - it's too easy to shoot yourself in the foot and slow down / break your app. We encourage you to leave it up to React Navigation to manage the navigation state. But if you really want to do this, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation-redux-helpers"},"react-navigation-redux-helpers"),", but this isn't an officially supported workflow."))}d.isMDXComponent=!0}}]);