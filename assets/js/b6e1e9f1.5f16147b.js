"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[44527],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),h=a,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||r;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],c={id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},l=void 0,s={unversionedId:"switch-navigator",id:"version-3.x/switch-navigator",isDocsHomePage:!1,title:"createSwitchNavigator",description:"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.",source:"@site/versioned_docs/version-3.x/switch-navigator.md",sourceDirName:".",slug:"/switch-navigator",permalink:"/docs/3.x/switch-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/switch-navigator.md",tags:[],version:"3.x",frontMatter:{id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},sidebar:"version-3.x-docs",previous:{title:"createStackNavigator",permalink:"/docs/3.x/stack-navigator"},next:{title:"createAnimatedSwitchNavigator",permalink:"/docs/3.x/animated-switch-navigator"}},u=[{value:"API Definition",id:"api-definition",children:[],level:2},{value:"RouteConfigs",id:"routeconfigs",children:[],level:2},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.\nThis is the exact behavior that we want from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/auth-flow"},"authentication flow"),"."),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n")),(0,r.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,r.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/stack-navigator#routeconfigs"},"example")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),(0,r.kt)("h2",{id:"switchnavigatorconfig"},"SwitchNavigatorConfig"),(0,r.kt)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resetOnBlur")," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"backBehavior")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial route, ",(0,r.kt)("inlineCode",{parentName:"li"},"order")," to return to previous route, ",(0,r.kt)("inlineCode",{parentName:"li"},"history")," to return to last visited route, or ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See an example of this ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/auth-flow-v3"},"on Snack"),"."))}f.isMDXComponent=!0}}]);