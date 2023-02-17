"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[47793],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},c=void 0,l={unversionedId:"auth-flow",id:"version-2.x/auth-flow",isDocsHomePage:!1,title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-2.x/auth-flow.md",sourceDirName:".",slug:"/auth-flow",permalink:"/docs/2.x/auth-flow",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/auth-flow.md",tags:[],version:"2.x",frontMatter:{id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},sidebar:"version-2.x-docs",previous:{title:"Drawer navigation",permalink:"/docs/2.x/drawer-based-navigation"},next:{title:"iPhone X support",permalink:"/docs/2.x/handling-iphonex"}},u=[{value:"Set up our navigators",id:"set-up-our-navigators",children:[],level:2},{value:"Implement our authentication loading screen",id:"implement-our-authentication-loading-screen",children:[],level:2},{value:"Fill in other components",id:"fill-in-other-components",children:[],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user opens the app."),(0,r.kt)("li",{parentName:"ul"},"The app loads some authentication state from persistent storage (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncStorage"),")."),(0,r.kt)("li",{parentName:"ul"},"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."),(0,r.kt)("li",{parentName:"ul"},"When the user signs out, we clear the authentication state and send them back to authentication screens.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note: we say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.')),(0,r.kt)("h2",{id:"set-up-our-navigators"},"Set up our navigators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createSwitchNavigator, createStackNavigator } from 'react-navigation';\n\n// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen\n// goes here.\n\nconst AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });\nconst AuthStack = createStackNavigator({ SignIn: SignInScreen });\n\nexport default createSwitchNavigator(\n  {\n    AuthLoading: AuthLoadingScreen,\n    App: AppStack,\n    Auth: AuthStack,\n  },\n  {\n    initialRouteName: 'AuthLoading',\n  }\n);\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("p",null,"You may not be familiar with ",(0,r.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," yet. The purpose of ",(0,r.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away. This is the exact behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens, and when we press the hardware back button we expect to not be able to go back to the authentication flow. We switch between routes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," action. You can read more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/switch-navigator"},"API reference"),"."),(0,r.kt)("p",null,"We set the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialRouteName")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"'AuthLoading'")," because we will fetch our authentication state from persistent storage inside of that screen component."),(0,r.kt)("h2",{id:"implement-our-authentication-loading-screen"},"Implement our authentication loading screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {\n  ActivityIndicator,\n  AsyncStorage,\n  StatusBar,\n  StyleSheet,\n  View,\n} from 'react-native';\n\nclass AuthLoadingScreen extends React.Component {\n  constructor(props) {\n    super(props);\n    this._bootstrapAsync();\n  }\n\n  // Fetch the token from storage then navigate to our appropriate place\n  _bootstrapAsync = async () => {\n    const userToken = await AsyncStorage.getItem('userToken');\n\n    // This will switch to the App screen or Auth screen and this loading\n    // screen will be unmounted and thrown away.\n    this.props.navigation.navigate(userToken ? 'App' : 'Auth');\n  };\n\n  // Render any loading content that you like here\n  render() {\n    return (\n      <View>\n        <ActivityIndicator />\n        <StatusBar barStyle=\"default\" />\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("h2",{id:"fill-in-other-components"},"Fill in other components"),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," routes are both stack navigators, but you could do whatever you like here. As mentioned above, you probably want your authentication route to be a stack for password reset, signup, etc. Similarly for your app, you probably have more than one screen. We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class SignInScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Please sign in',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Sign in!\" onPress={this._signInAsync} />\n      </View>\n    );\n  }\n\n  _signInAsync = async () => {\n    await AsyncStorage.setItem('userToken', 'abc');\n    this.props.navigation.navigate('App');\n  };\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Welcome to the app!',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Show me more of the app\" onPress={this._showMoreApp} />\n        <Button title=\"Actually, sign me out :)\" onPress={this._signOutAsync} />\n      </View>\n    );\n  }\n\n  _showMoreApp = () => {\n    this.props.navigation.navigate('Other');\n  };\n\n  _signOutAsync = async () => {\n    await AsyncStorage.clear();\n    this.props.navigation.navigate('Auth');\n  };\n}\n\n// More code like OtherScreen omitted for brevity\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("p",null,"That's about all there is to it. At the moment, ",(0,r.kt)("inlineCode",{parentName:"p"},"createSwitchNavigator")," doesn't support animating between screens. Let us know if this is important to you ",(0,r.kt)("a",{parentName:"p",href:"https://react-navigation.canny.io/feature-requests"},"on Canny"),"."))}h.isMDXComponent=!0}}]);