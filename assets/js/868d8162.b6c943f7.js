"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8200],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,h=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return t?o.createElement(h,a(a({ref:n},l),{},{components:t})):o.createElement(h,a({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38927:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},c=void 0,u={unversionedId:"function-after-focusing-screen",id:"version-7.x/function-after-focusing-screen",isDocsHomePage:!1,title:"Call a function when focused screen changes",description:"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.",source:"@site/versioned_docs/version-7.x/function-after-focusing-screen.md",sourceDirName:".",slug:"/function-after-focusing-screen",permalink:"/docs/7.x/function-after-focusing-screen",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/function-after-focusing-screen.md",tags:[],version:"7.x",frontMatter:{id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},sidebar:"version-7.x/docs",previous:{title:"Preventing going back",permalink:"/docs/7.x/preventing-going-back"},next:{title:"Access the navigation prop from any component",permalink:"/docs/7.x/connecting-navigation-prop"}},l=[{value:"Triggering an action with a <code>&#39;focus&#39;</code> event listener",id:"triggering-an-action-with-a-focus-event-listener",children:[],level:2},{value:"Triggering an action with the <code>useFocusEffect</code> hook",id:"triggering-an-action-with-the-usefocuseffect-hook",children:[],level:2},{value:"Re-rendering screen with the <code>useIsFocused</code> hook",id:"re-rendering-screen-with-the-useisfocused-hook",children:[],level:2}],f={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app."),(0,i.kt)("p",null,"There are multiple approaches available to us:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Listening to the ",(0,i.kt)("inlineCode",{parentName:"li"},"'focus'")," event with an event listener."),(0,i.kt)("li",{parentName:"ol"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"useFocusEffect")," hook provided by react-navigation."),(0,i.kt)("li",{parentName:"ol"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"useIsFocused")," hook provided by react-navigation.")),(0,i.kt)("h2",{id:"triggering-an-action-with-a-focus-event-listener"},"Triggering an action with a ",(0,i.kt)("inlineCode",{parentName:"h2"},"'focus'")," event listener"),(0,i.kt)("p",null,"We can also listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},"'focus'")," event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted."),(0,i.kt)("p",null,"With this approach, we will only be able to call an action when the screen focuses. This is useful for performing an action such as logging the screen view for analytics."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("samp",{id:"focus-event-listener"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\n\nfunction ProfileScreen({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // The screen is focused\n      // Call any action\n    });\n\n    // Return the function to unsubscribe from the event so it gets removed on unmount\n    return unsubscribe;\n  }, [navigation]);\n\n  return <View />;\n}\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-events"},"navigation events guide")," for more details on the event listener API."),(0,i.kt)("p",null,"In most cases, it's recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," hook instead of adding the listener manually. See below for details."),(0,i.kt)("h2",{id:"triggering-an-action-with-the-usefocuseffect-hook"},"Triggering an action with the ",(0,i.kt)("inlineCode",{parentName:"h2"},"useFocusEffect")," hook"),(0,i.kt)("p",null,"React Navigation provides a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hook")," that runs an effect when the screen comes into focus and cleans it up when it goes out of focus. This is useful for cases such as adding event listeners, for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view."),(0,i.kt)("p",null,"This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location."),(0,i.kt)("samp",{id:"simple-focus-effect"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, user => setUser(data));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/use-focus-effect/"},(0,i.kt)("inlineCode",{parentName:"a"},"useFocusEffect"))," documentation for more details."),(0,i.kt)("h2",{id:"re-rendering-screen-with-the-useisfocused-hook"},"Re-rendering screen with the ",(0,i.kt)("inlineCode",{parentName:"h2"},"useIsFocused")," hook"),(0,i.kt)("p",null,"React Navigation provides a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hook")," that returns a boolean indicating whether the screen is focused or not."),(0,i.kt)("p",null,"The hook will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when the screen is focused and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," when our component is no longer focused. This enables us to render something conditionally based on whether the user is on the screen or not."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useIsFocused")," hook will cause our component to re-render when we focus and unfocus a screen. Using this hook component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing. Hence we recommend to use this hook only if you need to trigger a re-render. For side-effects such as subscribing to events or fetching data, use the methods described above."),(0,i.kt)("samp",{id:"use-is-focused"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction Profile() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  const isFocused = useIsFocused();\n\n  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;\n}\n")),(0,i.kt)("p",null,"This example is also documented in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/use-is-focused"},(0,i.kt)("inlineCode",{parentName:"a"},"useIsFocused")," API documentation"),"."))}d.isMDXComponent=!0}}]);