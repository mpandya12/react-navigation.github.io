"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[64620],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=o.createContext({}),s=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=s(n.components);return o.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,c=n.parentName,u=p(n,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return t?o.createElement(g,r(r({ref:e},u),{},{components:t})):o.createElement(g,r({ref:e},u))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=n,p.mdxType="string"==typeof n?n:i,r[1]=p;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23541:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),r=["components"],p={id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},c=void 0,s={unversionedId:"connecting-navigation-prop",id:"version-2.x/connecting-navigation-prop",isDocsHomePage:!1,title:"Access the navigation prop from any component",description:"withNavigation is a higher order component which passes the navigation prop into a wrapped Component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-2.x/connecting-navigation-prop.md",sourceDirName:".",slug:"/connecting-navigation-prop",permalink:"/docs/2.x/connecting-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/connecting-navigation-prop.md",tags:[],version:"2.x",frontMatter:{id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},sidebar:"version-2.x-docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/2.x/custom-android-back-button-handling"},next:{title:"Navigating without the navigation prop",permalink:"/docs/2.x/navigating-without-navigation-prop"}},u=[],l={toc:u};function d(n){var e=n.components,t=(0,i.Z)(n,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/2.x/with-navigation"},(0,a.kt)("inlineCode",{parentName:"a"},"withNavigation"))," is a higher order component which passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop into a wrapped Component. It's useful when you cannot pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Button } from 'react-native';\n\nexport default class MyBackButton extends React.Component {\n  render() {\n    // This will throw an 'undefined is not a function' exception because the navigation\n    // prop is undefined.\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n")),(0,a.kt)("p",null,"To resolve this exception, you could pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop in to ",(0,a.kt)("inlineCode",{parentName:"p"},"MyBackButton")," when you render it from a screen, like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyBackButton navigation={this.props.navigation} />"),"."),(0,a.kt)("p",null,"Alternatively, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"withNavigation")," function to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop automatically (through React context, if you're curious). This function behaves similarly to Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," function, except rather than providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," prop to the component it wraps, it provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button } from 'react-native';\nimport { withNavigation } from 'react-navigation';\n\nclass MyBackButton extends React.Component {\n  render() {\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n\n// withNavigation returns a component that wraps MyBackButton and passes in the\n// navigation prop\nexport default withNavigation(MyBackButton);\n")),(0,a.kt)("p",null,"Using this approach, you can render ",(0,a.kt)("inlineCode",{parentName:"p"},"MyBackButton")," anywhere in your app without passing in a ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop explicitly and it will work as expected."))}d.isMDXComponent=!0}}]);