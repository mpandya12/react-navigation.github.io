"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[83073],{3905:function(n,t,e){e.d(t,{Zo:function(){return s},kt:function(){return l}});var a=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=a.createContext({}),u=function(n){var t=a.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},s=function(n){var t=u(n.components);return a.createElement(c.Provider,{value:t},n.children)},v={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,s=p(n,["components","mdxType","originalType","parentName"]),g=u(e),l=o,h=g["".concat(c,".").concat(l)]||g[l]||v[l]||i;return e?a.createElement(h,r(r({ref:t},s),{},{components:e})):a.createElement(h,r({ref:t},s))}));function l(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var i=e.length,r=new Array(i);r[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=n,p.mdxType="string"==typeof n?n:o,r[1]=p;for(var u=2;u<i;u++)r[u]=e[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},83880:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var a=e(87462),o=e(63366),i=(e(67294),e(3905)),r=["components"],p={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},c=void 0,u={unversionedId:"navigating-without-navigation-prop",id:"version-2.x/navigating-without-navigation-prop",isDocsHomePage:!1,title:"Navigating without the navigation prop",description:"Calling functions such as navigate or popToTop on the navigation prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own navigation prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the navigation prop, or if you're looking for an alternative to using the navigation prop.",source:"@site/versioned_docs/version-2.x/navigating-without-navigation-prop.md",sourceDirName:".",slug:"/navigating-without-navigation-prop",permalink:"/docs/2.x/navigating-without-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/navigating-without-navigation-prop.md",tags:[],version:"2.x",frontMatter:{id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},sidebar:"version-2.x-docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/2.x/connecting-navigation-prop"},next:{title:"Using the navigation key",permalink:"/docs/2.x/navigation-key"}},s=[],v={toc:s};function g(n){var t=n.components,e=(0,o.Z)(n,r);return(0,i.kt)("wrapper",(0,a.Z)({},v,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Calling functions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"popToTop")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop, or if you're looking for an alternative to using the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop."),(0,i.kt)("p",null,"You can get access to a navigator through a ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," and pass it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationService")," which we will later use to navigate. Use this only with the top-level (root) navigator of your app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// App.js\n\nimport NavigationService from './NavigationService';\n\nconst TopLevelNavigator = createStackNavigator({ /* ... */ })\n\nclass App extends React.Component {\n  // ...\n\n  render() {\n    return (\n      <TopLevelNavigator\n        ref={navigatorRef => {\n          NavigationService.setTopLevelNavigator(navigatorRef);\n        }}\n      />\n    );\n  }\n}\n")),(0,i.kt)("p",null,"In the next step, we define ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationService")," which is a simple module with functions that dispatch user-defined navigation actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// NavigationService.js\n\nimport { NavigationActions } from 'react-navigation';\n\nlet _navigator;\n\nfunction setTopLevelNavigator(navigatorRef) {\n  _navigator = navigatorRef;\n}\n\nfunction navigate(routeName, params) {\n  _navigator.dispatch(\n    NavigationActions.navigate({\n      routeName,\n      params,\n    })\n  );\n}\n\n// add other navigation functions that you need and export them\n\nexport default {\n  navigate,\n  setTopLevelNavigator,\n};\n")),(0,i.kt)("p",null,"Then, in any of your javascript modules, just import the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationService")," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works just as well when used from within them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// any js module\nimport NavigationService from 'path-to-NavigationService.js';\n\n// ...\n\nNavigationService.navigate('ChatScreen', { userName: 'Lucy' });\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationService"),", you can create your own navigation actions, or compose multiple navigation actions into one, and then easily reuse them throughout your application. When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called, with the correct parameters."))}g.isMDXComponent=!0}}]);