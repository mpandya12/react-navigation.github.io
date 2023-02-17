"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[78236],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},c=void 0,p={unversionedId:"hello-react-navigation",id:"version-3.x/hello-react-navigation",isDocsHomePage:!1,title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (``) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-3.x/hello-react-navigation.md",sourceDirName:".",slug:"/hello-react-navigation",permalink:"/docs/3.x/hello-react-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/hello-react-navigation.md",tags:[],version:"3.x",frontMatter:{id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},sidebar:"version-3.x-docs",previous:{title:"Getting started",permalink:"/docs/3.x/getting-started"},next:{title:"Supported React Native versions",permalink:"/docs/3.x/supported-react-native-versions"}},l=[{value:"Creating a stack navigator",id:"creating-a-stack-navigator",children:[],level:2},{value:"Route configuration shorthand",id:"route-configuration-shorthand",children:[],level:2},{value:"Adding a second route",id:"adding-a-second-route",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:l};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In a web browser, you can link to different pages using an anchor (",(0,r.kt)("inlineCode",{parentName:"p"},"<a>"),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."),(0,r.kt)("p",null,"React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."),(0,r.kt)("p",null,"Lets start by demonstrating the most common navigator, ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),(0,r.kt)("h2",{id:"creating-a-stack-navigator"},"Creating a stack navigator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," is a function that returns a React component. It takes ",(0,r.kt)("em",{parentName:"p"},"a route configuration object")," and, optionally, ",(0,r.kt)("em",{parentName:"p"},"an options object")," (we omit this below, for now). Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," function returns a React component, we can export it directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," to be used as our App's root component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// In App.js in a new project\n\nimport React from "react";\nimport { View, Text } from "react-native";\nimport { createStackNavigator, createAppContainer } from "react-navigation";\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n        <Text>Home Screen</Text>\n      </View>\n    );\n  }\n}\n\nconst AppNavigator = createStackNavigator({\n  Home: {\n    screen: HomeScreen\n  }\n});\n\nexport default createAppContainer(AppNavigator);\n')),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/hello-world-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("p",null,"If you run this code, you will see a screen with an empty navigation bar and a white content area containing your ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeScreen")," component. The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The casing of the route name doesn't matter -- you can use lowercase ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," or capitalized ",(0,r.kt)("inlineCode",{parentName:"p"},"Home"),", it's up to you. We prefer capitalizing our route names.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The only required configuration for a route is the ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," component. You can read more about the other options available in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/stack-navigator"},"StackNavigator reference"),".")),(0,r.kt)("p",null,"In React Native, the component exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," is the entry point (or root component) for your app -- it is the component from which every other component descends. It's often useful to have more control over the component at the root of your app than you would get from exporting the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"createAppContainer"),", so let's export a component that just renders our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppNavigator")," stack navigator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const AppContainer = createAppContainer(AppNavigator);\n\nexport default class App extends React.Component {\n  render() {\n    return <AppContainer />;\n  }\n}\n")),(0,r.kt)("h2",{id:"route-configuration-shorthand"},"Route configuration shorthand"),(0,r.kt)("p",null,"Given that the only route configuration we have for ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," is the screen component, we don't need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"{ screen: HomeScreen }")," configuration format, we can use the screen component directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const AppNavigator = createStackNavigator({\n  Home: HomeScreen\n});\n")),(0,r.kt)("h2",{id:"adding-a-second-route"},"Adding a second route"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AppContainer />")," component doesn't accept any props -- all configuration is specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppNavigator")," ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," function. We left the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," blank, so it just uses the default configuration. To see an example of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object, we will add a second screen to the stack navigator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Other code for HomeScreen here...\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n        <Text>Details Screen</Text>\n      </View>\n    );\n  }\n}\n\nconst AppNavigator = createStackNavigator(\n  {\n    Home: HomeScreen,\n    Details: DetailsScreen\n  },\n  {\n    initialRouteName: "Home"\n  }\n);\n\n// Other code for App component here...\n')),(0,r.kt)("p",null,"Now our stack has two ",(0,r.kt)("em",{parentName:"p"},"routes"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," route and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Details")," route. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," route corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeScreen")," component, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Details")," route corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," component. The initial route for the stack is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home"),' route. The natural question at this point is: "how do I go from the Home route to the Details route?". That is covered in the next section.'),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")," is a function that takes a route configuration object and an options object and returns a React component."),(0,r.kt)("li",{parentName:"ul"},"The keys in the route configuration object are the route names and the values are the configuration for that route. The only required property on the configuration is the ",(0,r.kt)("inlineCode",{parentName:"li"},"screen")," (the component to use for the route)."),(0,r.kt)("li",{parentName:"ul"},"To specify what the initial route in a stack is, provide an ",(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," on the stack options object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/hello-react-navigation-v3"},"Full source of what we have built so far"),".")))}h.isMDXComponent=!0}}]);