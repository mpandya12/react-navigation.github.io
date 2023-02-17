"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[33735],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84902:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return h},default:function(){return d}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={title:"React Navigation 5.0 - A new way to navigate",author:"Satyajit Sahoo, Micha\u0142 Osadnik",author_url:"https://twitter.com/reactnavigation",author_title:"Core Team",author_image_url:"https://avatars1.githubusercontent.com/u/29647600?s=200&v=4",tags:["release","announcement"]},l=void 0,c={permalink:"/blog/2020/02/06/react-navigation-5.0",source:"@site/blog/2020-02-06-react-navigation-5.0.md",title:"React Navigation 5.0 - A new way to navigate",description:"Exactly two years ago, we published the first stable version of React Navigation. Throughout this time, the library has been actively developed by adding  many new features and bug fixes. The essence of React Navigation was that it was a project that was to become not only a project of individual programmers adapting it to their requirements, but a community as a whole, hence the emphasis on versatility, extensibility, and the tendency to reconsider the assumptions if there were such needs. Thanks to this, the Library has been undergoing metamorphosis of both incremental and completely reorganized shape.",date:"2020-02-06T00:00:00.000Z",formattedDate:"February 6, 2020",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:6.815,truncated:!0,authors:[{name:"Satyajit Sahoo, Micha\u0142 Osadnik",title:"Core Team",url:"https://twitter.com/reactnavigation",imageURL:"https://avatars1.githubusercontent.com/u/29647600?s=200&v=4"}],prevItem:{title:"React Navigation on the Web",permalink:"/blog/2020/05/16/web-support"},nextItem:{title:"React Navigation v5 + React Native Paper = \u2764\ufe0f",permalink:"/blog/2020/01/29/using-react-navigation-5-with-react-native-paper"}},p={authorsImageUrls:[void 0]},h=[{value:"Highlights",id:"highlights",children:[{value:"Component based configuration",id:"component-based-configuration",children:[],level:3},{value:"New hooks",id:"new-hooks",children:[],level:3},{value:"Update options from component",id:"update-options-from-component",children:[],level:3},{value:"New theming API",id:"new-theming-api",children:[],level:3},{value:"First-class types with TypeScript",id:"first-class-types-with-typescript",children:[],level:3},{value:"Redux DevTools integration",id:"redux-devtools-integration",children:[],level:3},{value:"Native Stack Navigator",id:"native-stack-navigator",children:[],level:3},{value:"Native backends for Material top tab navigator",id:"native-backends-for-material-top-tab-navigator",children:[],level:3},{value:"Other improvements",id:"other-improvements",children:[],level:3}],level:2},{value:"Upgrading",id:"upgrading",children:[],level:2},{value:"A note for alpha users",id:"a-note-for-alpha-users",children:[],level:2},{value:"Thanks to these wonderful people",id:"thanks-to-these-wonderful-people",children:[],level:2}],u={toc:h};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Exactly two years ago, we published the first stable version of React Navigation. Throughout this time, the library has been actively developed by adding  many new features and bug fixes. The essence of React Navigation was that it was a project that was to become not only a project of individual programmers adapting it to their requirements, but a community as a whole, hence the emphasis on versatility, extensibility, and the tendency to reconsider the assumptions if there were such needs. Thanks to this, the Library has been undergoing metamorphosis of both incremental and completely reorganized shape."),(0,o.kt)("p",null,"This led us to the moment when React Navigation became one of the most popular navigation solutions in React Native and we are incredibly proud of it."),(0,o.kt)("p",null,"Today is the day, when we want to mark this vision and major refactoring of the project, that has taken place over the last six months, as stable. One could say that this significant change concerned the core library, and therefore the API, which has been developed and made more dynamic."),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("h3",{id:"component-based-configuration"},"Component based configuration"),(0,o.kt)("p",null,"In previous versions of React Navigation, we used to configure the navigator statically using ",(0,o.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions and ",(0,o.kt)("inlineCode",{parentName:"p"},"static navigationOptions"),". In React Navigation 5, all of the configuration happens inside a component and is dynamic."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Stack.Navigator initialRouteName="home">\n      <Stack.Screen name="settings" component={Settings} />\n      <Stack.Screen\n        name="profile"\n        component={Profile}\n        options={{ title: \'John Doe\' }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),(0,o.kt)("p",null,"This means we have access to props, state and context, and can dynamically change the configuration for the navigator!"),(0,o.kt)("p",null,"We want to stress that this is the most important change. This seems to be just a difference in the API. It actually required reconsidering many of the assumptions made in React Navigation during the development of previous versions. The static API, known from previous versions may seem an easier and more obvious choice. In the current version, the navigation configuration is consistent with all patterns in the React community.\nThis made it necessary to rewrite the core of the library, which allowed us to make a number of improvements not only in this respect."),(0,o.kt)("h3",{id:"new-hooks"},"New hooks"),(0,o.kt)("p",null,"Hooks are great for stateful logic and code organization. Now we have several hooks for common use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-route"},(0,o.kt)("inlineCode",{parentName:"a"},"useRoute"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-navigation-state"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigationState"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-focus-effect"},(0,o.kt)("inlineCode",{parentName:"a"},"useFocusEffect"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-scroll-to-top"},(0,o.kt)("inlineCode",{parentName:"a"},"useScrollToTop")))),(0,o.kt)("h3",{id:"update-options-from-component"},"Update options from component"),(0,o.kt)("p",null,"We\u2019ve added a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-prop#setoptions---update-screen-options-from-the-component"},(0,o.kt)("inlineCode",{parentName:"a"},"setOptions"))," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop to make configuring screen navigation options more intuitive than its ",(0,o.kt)("inlineCode",{parentName:"p"},"static navigationOptions")," predecessor. It lets us ",(0,o.kt)("strong",{parentName:"p"},"easily set screen options based on props, state or context without messing with params"),". Instead of using static options, we can call it anytime to configure the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.setOptions({\n  headerRight: () => (\n    <DoneButton\n      onPress={async () => {\n        await saveNote();\n        navigation.replace('Notes');\n      }}\n    />\n  ),\n})\n")),(0,o.kt)("p",null,"It can be used for things like adding a button in the header which needs to interact with the screen state."),(0,o.kt)("h3",{id:"new-theming-api"},"New theming API"),(0,o.kt)("p",null,"In React Navigation, we had basic theming support where you could specify whether to use a light or dark theme. It wasn't easy to customize the colors used by the built-in components such as header, tab bar etc. without extra code or repetition."),(0,o.kt)("p",null,"Now, we have revamped the ",(0,o.kt)("a",{parentName:"p",href:"/docs/themes"},"theme system")," for easier customization. It is possible to provide a theme object with your desired colors for background, accent color etc. and it will automatically change the colors of all navigators without any extra code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const MyTheme = {\n  dark: false,\n  colors: {\n    primary: 'rgb(255, 45, 85)',\n    background: 'rgb(242, 242, 242)',\n    card: 'rgb(255, 255, 255)',\n    text: 'rgb(28, 28, 30)',\n    border: 'rgb(199, 199, 204)',\n  },\n};\n")),(0,o.kt)("h3",{id:"first-class-types-with-typescript"},"First-class types with TypeScript"),(0,o.kt)("p",null,"The new version has been written from the ground-up with TypeScript. We now get first class autocompletion and type-checking."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TypeScript in action",src:a(80687).Z})),(0,o.kt)("p",null,"We also have JSDoc for the built-in methods and options, so you get their description directly in your editor. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/typescript"},"our typescript documentation")," for more details on how to use it."),(0,o.kt)("h3",{id:"redux-devtools-integration"},"Redux DevTools integration"),(0,o.kt)("p",null,"If you use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger"},"React Native Debugger")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux Devtools Extension"),", you can see navigation actions in the devtools along with the current navigation state. It also supports time-travel debugging!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redux Devtools in action",src:a(84825).Z})),(0,o.kt)("p",null,"You don't need to use Redux in your apps for this to work and it works without any extra setup!"),(0,o.kt)("h3",{id:"native-stack-navigator"},"Native Stack Navigator"),(0,o.kt)("p",null,"Traditionally, we have written our navigators in JavaScript for greater customizability. It fits a lot of use cases, but sometimes you want the exact native feel and the performance of native navigation. Now, we have added a new native stack navigator that uses native navigation primitives for navigation using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kmagiera/react-native-screens"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-screens"))," library. Under the hood, it just uses native components which might be obvious choice for native development and might be a good pick in the most cases."),(0,o.kt)("img",{src:"/assets/blog/android-native-stack.gif",height:"530"}),(0,o.kt)("img",{src:"/assets/blog/ios-native-stack.gif",height:"530"}),(0,o.kt)("h3",{id:"native-backends-for-material-top-tab-navigator"},"Native backends for Material top tab navigator"),(0,o.kt)("p",null,"Similar to native stack, we also have ",(0,o.kt)("a",{parentName:"p",href:"/docs/material-top-tab-navigator#pager"},"new backends")," for Material top tab navigator based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-viewpager"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-viewpager"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/scrollview"},(0,o.kt)("inlineCode",{parentName:"a"},"ScrollView")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';\n\n// ...\n\n<Tab.Navigator pager={props => <ViewPagerAdapter {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ScrollPager } from 'react-native-tab-view';\n\n// ...\n\n<Tab.Navigator pager={props => <ScrollPager {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,o.kt)("h3",{id:"other-improvements"},"Other improvements"),(0,o.kt)("p",null,"In addition to these larger improvements, there are several smaller improvements to fit more use cases and make it easier to do certain tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Revamped drawer navigator to make customizing the drawer sidebar content easier and more flexible."),(0,o.kt)("li",{parentName:"ul"},"Simpler API for ",(0,o.kt)("a",{parentName:"li",href:"/docs/navigation-prop#reset"},(0,o.kt)("inlineCode",{parentName:"a"},"reset")," action")," where you can pass the new state directly instead of a chain of actions."),(0,o.kt)("li",{parentName:"ul"},"More reliable ",(0,o.kt)("a",{parentName:"li",href:"/docs/navigation-lifecycle"},(0,o.kt)("inlineCode",{parentName:"a"},"focus")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"blur")," events")," to know when a screen's focus state changes."),(0,o.kt)("li",{parentName:"ul"},"Integration with ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/interactionmanager"},(0,o.kt)("inlineCode",{parentName:"a"},"InteractionManager"))," to delay tasks until animation is complete."),(0,o.kt)("li",{parentName:"ul"},"Better safe area handling with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),".")),(0,o.kt)("h2",{id:"upgrading"},"Upgrading"),(0,o.kt)("p",null,"This is a big release and, while the basic concepts such as nesting are the same, the new API is mostly incompatible with the previous API. We know it can be a challenge to upgrade your code base. So we're going to keep supporting React Navigation 4 with bug fixes. We'll accept contributions and keep it compatible with the latest React Native version. The old code will now live in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/4.x"},"4.x branch")," on GitHub."),(0,o.kt)("p",null,"We recommend starting your new projects with the new version so you can take advantage of the new APIs and the new features."),(0,o.kt)("p",null,"We have written an ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/upgrading-from-4.x"},"upgrade guide")," which will give you an overview of what's changed and how to adapt the old API and concepts to the new API."),(0,o.kt)("h2",{id:"a-note-for-alpha-users"},"A note for alpha users"),(0,o.kt)("p",null,"If you were using React Navigation 5 when it was alpha, you might need to check the following changes when upgrading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have added ",(0,o.kt)("inlineCode",{parentName:"li"},"@react-navigation/core")," to your dependencies, remove it, and replace all imports from ",(0,o.kt)("inlineCode",{parentName:"li"},"@react-navigation/core")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"@react-navigation/native")),(0,o.kt)("li",{parentName:"ul"},"If you were importing ",(0,o.kt)("inlineCode",{parentName:"li"},"NavigationNativeContainer"),", change it to ",(0,o.kt)("inlineCode",{parentName:"li"},"NavigationContainer"),", if you were using ",(0,o.kt)("inlineCode",{parentName:"li"},"NavigationContainer"),", change it to ",(0,o.kt)("inlineCode",{parentName:"li"},"BaseNavigationContainer")),(0,o.kt)("li",{parentName:"ul"},"If you had deep linking configured, the config format has changed for nesting. Check the ",(0,o.kt)("a",{parentName:"li",href:"/docs/deep-linking"},"deep linking docs")," for details.")),(0,o.kt)("h2",{id:"thanks-to-these-wonderful-people"},"Thanks to these wonderful people"),(0,o.kt)("p",null,"React Navigation 5 wouldn't have been possible without these wonderful people. A lot of thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osdnk"},"Micha\u0142 Osadnik")," for working in this project with me from idea to fruition, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brentvatne"},"Brent Vatne")," for his ideas, encouragement and funding from ",(0,o.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WoLewicki"},"Wojciech Lewicki")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jakub-gonet"},"Jakub Gonet")," for improving the documentation, and working on deep link support, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kmagiera"},"Krzysztof Magiera")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion"},"Software Mansion")," for their awesome libraries that the core functionality depends on and contributions, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janicduplessis"},"Janic Duplessis")," for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),"."),(0,o.kt)("p",null,"Additionally, I would like to mention how important is the community's influence on building this project. Without you, your support, your readiness to test and apply the next versions of the libraries, it wouldn't be possible at all, and despite mentioning a few people by name, at no stage do we forget that this is a community activity and will respond to its needs. We are incredibly grateful for the opportunity to work on such an unusual project, which facilitates the work of a large number of users."),(0,o.kt)("p",null,"Thanks again and hope you will find this release useful."))}d.isMDXComponent=!0},84825:function(e,t,a){t.Z=a.p+"assets/images/redux-devtools-7e762bc4cf204aabad6d27ec7a43ed7a.gif"},80687:function(e,t,a){t.Z=a.p+"assets/images/typescript-8588d772a0acbc2538c0dae0c0cd743a.gif"}}]);