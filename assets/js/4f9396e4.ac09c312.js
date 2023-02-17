"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[89619],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=l(n),d=i,m=v["".concat(c,".").concat(d)]||v[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},67036:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return v}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},c=void 0,l={unversionedId:"navigation-views",id:"version-3.x/navigation-views",isDocsHomePage:!1,title:"Navigation views",description:"Navigation views are presentation components that take a router and a navigation prop, and can display several screens, as specified by the navigation.state.",source:"@site/versioned_docs/version-3.x/navigation-views.md",sourceDirName:".",slug:"/navigation-views",permalink:"/docs/3.x/navigation-views",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigation-views.md",tags:[],version:"3.x",frontMatter:{id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},sidebar:"version-3.x-docs",previous:{title:"Custom routers",permalink:"/docs/3.x/custom-routers"},next:{title:"Transitioner",permalink:"/docs/3.x/transitioner"}},p=[{value:"Built in Views",id:"built-in-views",children:[],level:2},{value:"Transitioner",id:"transitioner",children:[],level:2}],u={toc:p};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Navigation views are presentation components that take a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/routers"},(0,r.kt)("inlineCode",{parentName:"a"},"router"))," and a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation"))," prop, and can display several screens, as specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.state"),"."),(0,r.kt)("p",null,"Navigation views are controlled React components that can present the current navigation state. They manage switching of screens, animations and gestures. They also present persistent navigation views such as tab bars and headers."),(0,r.kt)("h2",{id:"built-in-views"},"Built in Views"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackView.tsx"},"StackView")," - Present a stack that looks suitable on any platform",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackViewCard.tsx"},"StackViewCard")," - Present one card from the card stack, with gestures"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/Header/Header.tsx"},"Header")," - The header view for the card stack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/core/blob/ad6e5cecccb8bce081f773fdff7af000e0450746/src/views/SwitchView/SwitchView.js"},"SwitchView")," - A navigator that only ever show one screen at a time, useful for authentication flows."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/tabs"},"Tabs")," - A configurable tab switcher / pager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/drawer"},"Drawer")," - A view with a drawer that slides from the left")),(0,r.kt)("h2",{id:"transitioner"},(0,r.kt)("a",{parentName:"h2",href:"/docs/3.x/transitioner"},"Transitioner")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Transitioner")," manages the animations during the transition and can be used to build fully custom navigation views. It is used inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"StackView")," view. ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/transitioner"},"Learn more about Transitioner here.")))}v.isMDXComponent=!0}}]);