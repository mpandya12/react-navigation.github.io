"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[91188],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},s=void 0,c={unversionedId:"navigating",id:"version-7.x/navigating",isDocsHomePage:!1,title:"Moving between screens",description:'In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).',source:"@site/versioned_docs/version-7.x/navigating.md",sourceDirName:".",slug:"/navigating",permalink:"/docs/7.x/navigating",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigating.md",tags:[],version:"7.x",frontMatter:{id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},sidebar:"version-7.x/docs",previous:{title:"Hello React Navigation",permalink:"/docs/7.x/hello-react-navigation"},next:{title:"Passing parameters to routes",permalink:"/docs/7.x/params"}},u=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",children:[],level:2},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",children:[],level:2},{value:"Going back",id:"going-back",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous section, ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/hello-react-navigation"},'"Hello React Navigation"'),", we defined a stack navigator with two routes (",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Details"),"), but we didn't learn how to let a user navigate from ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," (although we did learn how to change the ",(0,o.kt)("em",{parentName:"p"},"initial")," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."),(0,o.kt)("p",null,"If this was a web browser, we'd be able to write something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<a href="details.html">Go to Details</a>\n')),(0,o.kt)("p",null,"Another way to write this would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<a\n  onClick={() => {\n    window.location.href = 'details.html';\n  }}\n>\n  Go to Details\n</a>\n")),(0,o.kt)("p",null,"We'll do something similar to the latter, but rather than using a ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location")," global, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop that is passed down to our screen components."),(0,o.kt)("h2",{id:"navigating-to-a-new-screen"},"Navigating to a new screen"),(0,o.kt)("samp",{id:"new-screen"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\n// ... other code from the previous section\n")),(0,o.kt)("p",null,"Let's break this down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop is passed in to every ",(0,o.kt)("strong",{parentName:"li"},"screen component")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/7.x/glossary-of-terms#screen-component"},"definition"),") in the native stack navigator (more about this later in ",(0,o.kt)("a",{parentName:"li",href:"/docs/7.x/navigation-prop"},'"The navigation prop in depth"'),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigate('Details')")," - we call the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," function (on the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop ","\u2014"," naming is hard!) with the name of the route that we'd like to move the user to.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If we call ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate")," with a route name that we haven't defined in a navigator, it'll print an error in development builds and nothing will happen in production builds. Said another way, we can only navigate to routes that have been defined on our navigator ","\u2014"," we cannot navigate to an arbitrary component.")),(0,o.kt)("p",null,"So we now have a stack with two routes: 1) the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," route 2) the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," route. What would happen if we navigated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," route again, from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," screen?"),(0,o.kt)("h2",{id:"navigate-to-a-route-multiple-times"},"Navigate to a route multiple times"),(0,o.kt)("samp",{id:"multiple-navigate"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function DetailsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"If you run this code, you'll notice that when you tap \"Go to Details... again\" that it doesn't do anything! This is because we are already on the Details route. The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),' function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.'),(0,o.kt)("p",null,"Let's suppose that we actually ",(0,o.kt)("em",{parentName:"p"},"want")," to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),"!). To do this, we can change ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"push"),". This allows us to express the intent to add another route regardless of the existing navigation history."),(0,o.kt)("samp",{id:"multiple-push"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to Details... again\"\n  onPress={() => navigation.push('Details')}\n/>\n")),(0,o.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,o.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,o.kt)("source",{src:"/assets/navigators/stack/stack-push.mov"}))),(0,o.kt)("p",null,"Each time you call ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," we add a new route to the navigation stack. When you call ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack."),(0,o.kt)("h2",{id:"going-back"},"Going back"),(0,o.kt)("p",null,"The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."),(0,o.kt)("p",null,"Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.goBack();"),"."),(0,o.kt)("samp",{id:"go-back"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function DetailsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.push('Details')}\n      />\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"On Android, React Navigation hooks in to the hardware back button and fires the ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack()")," function for you when the user presses it, so it behaves as the user would expect.")),(0,o.kt)("p",null,"Another common requirement is to be able to go back ",(0,o.kt)("em",{parentName:"p"},"multiple")," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," so we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate('Home')")," (not ",(0,o.kt)("inlineCode",{parentName:"p"},"push"),"! try that out and see the difference). Another alternative would be ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.popToTop()"),", which goes back to the first screen in the stack."),(0,o.kt)("samp",{id:"pop-to-top"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function DetailsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.push('Details')}\n      />\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n      <Button\n        title=\"Go back to first screen in stack\"\n        onPress={() => navigation.popToTop()}\n      />\n    </View>\n  );\n}\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('RouteName')")," pushes a new route to the native stack navigator if it's not already in the stack, otherwise it jumps to that screen."),(0,o.kt)("li",{parentName:"ul"},"We can call ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.push('RouteName')")," as many times as we like and it will continue pushing routes."),(0,o.kt)("li",{parentName:"ul"},"The header bar will automatically show a back button, but you can programmatically go back by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.goBack()"),". On Android, the hardware back button just works as expected."),(0,o.kt)("li",{parentName:"ul"},"You can go back to an existing screen in the stack with ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.navigate('RouteName')"),", and you can go back to the first screen in the stack with ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.popToTop()"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).")))}m.isMDXComponent=!0}}]);