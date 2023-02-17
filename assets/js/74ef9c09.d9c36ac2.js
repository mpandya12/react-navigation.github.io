"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[31450],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"use-route",title:"useRoute",sidebar_label:"useRoute"},s=void 0,c={unversionedId:"use-route",id:"version-6.x/use-route",isDocsHomePage:!1,title:"useRoute",description:"useRoute is a hook which gives access to route object. It's useful when you cannot pass the route prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-6.x/use-route.md",sourceDirName:".",slug:"/use-route",permalink:"/docs/use-route",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-route.md",tags:[],version:"6.x",frontMatter:{id:"use-route",title:"useRoute",sidebar_label:"useRoute"},sidebar:"version-6.x/docs",previous:{title:"useNavigation",permalink:"/docs/use-navigation"},next:{title:"useNavigationState",permalink:"/docs/use-navigation-state"}},p=[{value:"Example",id:"example",children:[],level:2},{value:"Using with class component",id:"using-with-class-component",children:[],level:2}],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRoute")," is a hook which gives access to ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," object. It's useful when you cannot pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRoute()")," returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," prop of the screen it's inside."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("samp",{id:"use-route-example"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text } from 'react-native';\nimport { useRoute } from '@react-navigation/native';\n\nfunction MyText() {\n  const route = useRoute();\n\n  return <Text>{route.params.caption}</Text>;\n}\n")),(0,a.kt)("p",null,"See the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,a.kt)("inlineCode",{parentName:"a"},"route")," prop")," for more info."),(0,a.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,a.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MyText extends React.Component {\n  render() {\n    // Get it from props\n    const { route } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const route = useRoute();\n\n  return <MyText {...props} route={route} />;\n}\n")))}m.isMDXComponent=!0}}]);