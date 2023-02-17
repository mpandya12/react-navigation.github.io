"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[80321],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},27714:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},s=void 0,l={unversionedId:"screen-tracking",id:"version-1.x/screen-tracking",isDocsHomePage:!1,title:"Screen tracking",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK.",source:"@site/versioned_docs/version-1.x/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/docs/1.x/screen-tracking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/screen-tracking.md",tags:[],version:"1.x",frontMatter:{id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},sidebar:"version-1.x/docs",previous:{title:"Deep linking",permalink:"/docs/1.x/deep-linking"},next:{title:"Redux integration",permalink:"/docs/1.x/redux-integration"}},u=[{value:"Screen tracking with Redux",id:"screen-tracking-with-redux",children:[],level:3},{value:"Create Redux store and apply the above middleware",id:"create-redux-store-and-apply-the-above-middleware",children:[],level:3}],p={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK."),(0,o.kt)("p",null,"When using built-in navigation container, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"onNavigationStateChange")," to track the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\n// gets the current screen from navigation state\nfunction getCurrentRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getCurrentRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = StackNavigator(AppRouteConfigs);\n\nexport default () => (\n  <AppNavigator\n    onNavigationStateChange={(prevState, currentState) => {\n      const currentScreen = getCurrentRouteName(currentState);\n      const prevScreen = getCurrentRouteName(prevState);\n\n      if (prevScreen !== currentScreen) {\n        // the line below uses the Google Analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        tracker.trackScreenView(currentScreen);\n      }\n    }}\n  />\n);\n")),(0,o.kt)("h3",{id:"screen-tracking-with-redux"},"Screen tracking with Redux"),(0,o.kt)("p",null,"When using Redux, we can write a Redux middleware to track the screen. For this purpose,\nwe will reuse ",(0,o.kt)("inlineCode",{parentName:"p"},"getCurrentRouteName")," from the previous section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationActions } from 'react-navigation';\nimport { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\nconst screenTracking = ({ getState }) => next => (action) => {\n  if (\n    action.type !== NavigationActions.NAVIGATE\n    && action.type !== NavigationActions.BACK\n  ) {\n    return next(action);\n  }\n\n  const currentScreen = getCurrentRouteName(getState().navigation);\n  const result = next(action);\n  const nextScreen = getCurrentRouteName(getState().navigation);\n  if (nextScreen !== currentScreen) {\n    // the line below uses the Google Analytics tracker\n    // change the tracker here to use other Mobile analytics SDK.\n    tracker.trackScreenView(nextScreen);\n  }\n  return result;\n};\n\nexport default screenTracking;\n")),(0,o.kt)("h3",{id:"create-redux-store-and-apply-the-above-middleware"},"Create Redux store and apply the above middleware"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"screenTracking")," middleware can be applied to the store during its creation. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.x/redux-integration"},"Redux Integration")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const store = createStore(\n  combineReducers({\n    navigation: navigationReducer,\n    ...\n  }),\n  applyMiddleware(\n    screenTracking,\n    ...\n    ),\n);\n")))}g.isMDXComponent=!0}}]);