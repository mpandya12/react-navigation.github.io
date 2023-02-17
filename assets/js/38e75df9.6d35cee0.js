"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[10369],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42236:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},c=void 0,l={unversionedId:"status-bar",id:"version-3.x/status-bar",isDocsHomePage:!1,title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-3.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/3.x/status-bar",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/status-bar.md",tags:[],version:"3.x",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},sidebar:"version-3.x-docs",previous:{title:"Supporting safe areas",permalink:"/docs/3.x/handling-iphonex"},next:{title:"Navigation options resolution",permalink:"/docs/3.x/navigation-options-resolution"}},u=[{value:"Stack and drawer navigators",id:"stack-and-drawer-navigators",children:[],level:2},{value:"TabNavigator",id:"tabnavigator",children:[],level:2}],p={toc:u};function d(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),(0,o.kt)("h2",{id:"stack-and-drawer-navigators"},"Stack and drawer navigators"),(0,o.kt)("p",null,"This is a simple task when using a stack or drawer. You can simply render the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#6a51ae\' }]}>\n        <StatusBar\n          barStyle="light-content"\n          backgroundColor="#6a51ae"\n        />\n        <Text style={[styles.paragraph, { color: \'#fff\' }]}>\n          Light Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen2\')}\n          color={isAndroid ? "blue" : "#fff"}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#ecf0f1\' }]}>\n        <StatusBar\n          barStyle="dark-content"\n          backgroundColor="#ecf0f1"\n        />\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen1\')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default createStackNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n}, {\n  headerMode: 'none',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StackNavigator with different StatusBar configs",src:t(90720).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default createDrawerNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DrawerNavigator with different StatusBar configs",src:t(82973).Z})),(0,o.kt)("h2",{id:"tabnavigator"},"TabNavigator"),(0,o.kt)("p",null,"If you're using a TabNavigator it's a bit more complex because the screens on all of your tabs are rendered at once - that means that the last ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),(0,o.kt)("p",null,"To fix this we'll have to do two things"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Only use the ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar")," component on our initial screen. This allows us to ensure the correct ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar")," config is used."),(0,o.kt)("li",{parentName:"ol"},"Leverage the events system in React Navigation and ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar"),"'s implicit API to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"StatusBar")," configuration when a tab becomes active.")),(0,o.kt)("p",null,"First, the new ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js")," will no longer use the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n        {/* <Button\n          title=\"Toggle Drawer\"\n          onPress={() => this.props.navigation.navigate('DrawerToggle')}\n        /> */}\n      </SafeAreaView>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Then, in both ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen1.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js")," we'll set up a listener to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," configuration when that tab ",(0,o.kt)("inlineCode",{parentName:"p"},"didFocus"),". We'll also make sure to remove the listener when the ",(0,o.kt)("inlineCode",{parentName:"p"},"TabNavigator")," has been unmounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Screen1 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('light-content');\n      isAndroid && StatusBar.setBackgroundColor('#6a51ae');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n\nclass Screen2 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('dark-content');\n      isAndroid && StatusBar.setBackgroundColor('#ecf0f1');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TabNavigator with different StatusBar configs",src:t(761).Z})),(0,o.kt)("p",null,"The code used for these demos is available as a ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-stacknavigation-statusbar-v3"},"Snack"),"."))}d.isMDXComponent=!0},82973:function(e,n,t){n.Z=t.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},90720:function(e,n,t){n.Z=t.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},761:function(e,n,t){n.Z=t.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);