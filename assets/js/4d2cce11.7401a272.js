"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[44757],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15846:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},c=void 0,l={unversionedId:"pitch",id:"version-6.x/pitch",isDocsHomePage:!1,title:"Pitch & anti-pitch",description:'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please submit a pull request if you believe we have omitted important information!',source:"@site/versioned_docs/version-6.x/pitch.md",sourceDirName:".",slug:"/pitch",permalink:"/docs/pitch",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/pitch.md",tags:[],version:"6.x",frontMatter:{id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},sidebar:"version-6.x/docs",previous:{title:"More Resources",permalink:"/docs/more-resources"},next:{title:"Alternative libraries",permalink:"/docs/alternatives"}},h=[{value:"Pitch",id:"pitch",children:[],level:2},{value:"Anti-pitch",id:"anti-pitch",children:[],level:2}],u={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation.github.io"},"submit a pull request")," if you believe we have omitted important information!"),(0,r.kt)("h2",{id:"pitch"},"Pitch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Navigation doesn't include any native code in the library itself, but we use many native libraries such as ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-screens"},"Screens"),", ",(0,r.kt)("a",{parentName:"li",href:"https://software-mansion.github.io/react-native-reanimated/"},"Reanimated"),", ",(0,r.kt)("a",{parentName:"li",href:"https://software-mansion.github.io/react-native-gesture-handler/"},"Gesture Handler")," etc. to implement performant animations and gestures. Depending on the navigator, many UI components are written in JavaScript on top of React Native primitives. This has a lot of benefits:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Easy OTA updates"),(0,r.kt)("li",{parentName:"ul"},"Debuggable"),(0,r.kt)("li",{parentName:"ul"},"Customizable"))),(0,r.kt)("li",{parentName:"ul"},"Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code. In React Navigation, we provide navigators written fully with JavaScript (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/stack-navigator"},"Stack Navigator"),") and navigators implemented on top of platform navigation primitives (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/native-stack-navigator"},"Native Stack Navigator"),"). This lets you pick the navigators suitable for your use case, depending on whether you want native platform behavior or full customizability."),(0,r.kt)("li",{parentName:"ul"},"It's possible to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app.")),(0,r.kt)("h2",{id:"anti-pitch"},"Anti-pitch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improvements may require breaking changes. We are working to make ",(0,r.kt)("a",{parentName:"li",href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible"},'"easy things easy and hard things possible"')," and this may require us to change the API at times."),(0,r.kt)("li",{parentName:"ul"},"Some navigators don't directly use the native navigation APIs on iOS and Android; rather, they use the lowest level pieces and then re-creates some subset of the APIs on top. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you need the exact platform behavior, you can choose to use the navigators that use native platform primitives (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/native-stack-navigator"},"Native Stack Navigator"),"), or use another library that wraps the platform APIs. Read more about these in ",(0,r.kt)("a",{parentName:"li",href:"/docs/alternatives"},"Alternatives")," and be sure to understand the tradeoffs that they make before digging in!"))),(0,r.kt)("li",{parentName:"ul"},"There are other limitations which you may want to consider, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/limitations"},"Limitations")," for more details.")))}p.isMDXComponent=!0}}]);