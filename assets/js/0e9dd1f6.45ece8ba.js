"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[64039],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,r(r({ref:t},l),{},{components:n})):a.createElement(k,r({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],c={id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},s=void 0,p={unversionedId:"stack-actions",id:"version-6.x/stack-actions",isDocsHomePage:!1,title:"StackActions reference",description:"StackActions is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in CommonActions.",source:"@site/versioned_docs/version-6.x/stack-actions.md",sourceDirName:".",slug:"/stack-actions",permalink:"/docs/stack-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/stack-actions.md",tags:[],version:"6.x",frontMatter:{id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},sidebar:"version-6.x/docs",previous:{title:"CommonActions",permalink:"/docs/navigation-actions"},next:{title:"DrawerActions",permalink:"/docs/drawer-actions"}},l=[{value:"replace",id:"replace",children:[],level:3},{value:"push",id:"push",children:[],level:3},{value:"pop",id:"pop",children:[],level:3},{value:"popToTop",id:"poptotop",children:[],level:3}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StackActions")," is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in ",(0,i.kt)("a",{parentName:"p",href:"/docs/navigation-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"CommonActions")),"."),(0,i.kt)("p",null,"The following actions are supported:"),(0,i.kt)("h3",{id:"replace"},"replace"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," action allows to replace a route in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state"),". It takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,i.kt)("em",{parentName:"li"},"string")," - A destination name of the route that has been registered somewhere."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - Params to pass to the destination route.")),(0,i.kt)("samp",{id:"stack-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  StackActions.replace('Profile', {\n    user: 'jane',\n  })\n);\n")),(0,i.kt)("p",null,"If you want to replace a particular route, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," property referring to the route key and ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," property referring to the navigation state key:"),(0,i.kt)("samp",{id:"stack-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...StackActions.replace('Profile', {\n    user: 'jane',\n  }),\n  source: route.key,\n  target: navigation.getState().key,\n});\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," property is explicitly set to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", it'll replace the focused route."),(0,i.kt)("h3",{id:"push"},"push"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," action adds a route on top of the stack and navigates forward to it. This differs from ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," in that ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," will pop back to earlier in the stack if a route of the given name is already present there. ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," will always add on top, so a route can be present multiple times."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,i.kt)("em",{parentName:"li"},"string")," - Name of the route to push onto the stack."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - Screen params to pass to the destination route.")),(0,i.kt)("samp",{id:"stack-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\nconst pushAction = StackActions.push('Profile', { user: 'Wojtek' });\n\nnavigation.dispatch(pushAction);\n")),(0,i.kt)("h3",{id:"pop"},"pop"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pop")," action takes you back to a previous screen in the stack. It takes one optional argument (",(0,i.kt)("inlineCode",{parentName:"p"},"count"),"), which allows you to specify how many screens to pop back by."),(0,i.kt)("samp",{id:"stack-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\nconst popAction = StackActions.pop(1);\n\nnavigation.dispatch(popAction);\n")),(0,i.kt)("h3",{id:"poptotop"},"popToTop"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"popToTop")," action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to ",(0,i.kt)("inlineCode",{parentName:"p"},"StackActions.pop({n: currentIndex})"),"."),(0,i.kt)("samp",{id:"stack-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch(StackActions.popToTop());\n")))}m.isMDXComponent=!0}}]);