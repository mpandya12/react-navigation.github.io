"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[15823],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),g=i,v=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(v,r(r({ref:e},p),{},{components:n})):a.createElement(v,r({ref:e},p))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38901:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},c=void 0,l={unversionedId:"custom-navigators",id:"version-3.x/custom-navigators",isDocsHomePage:!1,title:"Custom navigators",description:"A navigator is any React component that has a router on it, to define the navigation behavior. Each navigator is given a navigation prop, which allows the parent to control the navigation state.",source:"@site/versioned_docs/version-3.x/custom-navigators.md",sourceDirName:".",slug:"/custom-navigators",permalink:"/docs/3.x/custom-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/custom-navigators.md",tags:[],version:"3.x",frontMatter:{id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},sidebar:"version-3.x-docs",previous:{title:"Routers",permalink:"/docs/3.x/routers"},next:{title:"Custom routers",permalink:"/docs/3.x/custom-routers"}},p=[{value:"Extending Navigators",id:"extending-navigators",children:[],level:2},{value:"Navigator Navigation Prop",id:"navigator-navigation-prop",children:[{value:"Navigation State",id:"navigation-state",children:[],level:3},{value:"Navigation Dispatchers",id:"navigation-dispatchers",children:[],level:3}],level:2},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",children:[{value:"<code>createNavigator</code>",id:"createnavigator",children:[],level:3},{value:"Scene Descriptors",id:"scene-descriptors",children:[],level:3}],level:2}],u={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A navigator is any React component that has a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/StackRouter.js"},"router")," on it, to define the navigation behavior. Each navigator is given a ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop, which allows the parent to control the navigation state."),(0,o.kt)("h2",{id:"extending-navigators"},"Extending Navigators"),(0,o.kt)("p",null,"It is possible to take an existing Navigator and extend its behavior, using the following approach:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = MyStack.router;\n  render() {\n    const { navigation } = this.props;\n\n    return <MyStack navigation={navigation} />;\n  }\n}\n")),(0,o.kt)("p",null,"Now it is possible to render additional things, observe the navigation prop, and override behavior of the router:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = {\n    ...MyStack.router,\n    getStateForAction: (action, lastState) => {\n      // check for custom actions and return a different navigation state.\n      return MyStack.router.getStateForAction(action, lastState);\n    },\n  };\n  componentDidUpdate(lastProps) {\n    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state\n  }\n  render() {\n    const { navigation } = this.props;\n\n    return (\n      <View>\n        <MyStack navigation={navigation} />\n        {...}\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"navigator-navigation-prop"},"Navigator Navigation Prop"),(0,o.kt)("p",null,"The navigation prop passed down to a navigator only includes ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"addListener"),". This is the current state of the navigator, and an event channel to send action requests."),(0,o.kt)("p",null,"All navigators are controlled components: they always display what is coming in through ",(0,o.kt)("inlineCode",{parentName:"p"},"props.navigation.state"),", and their only way to change the state is to send actions into ",(0,o.kt)("inlineCode",{parentName:"p"},"props.navigation.dispatch"),"."),(0,o.kt)("p",null,"Navigators can specify custom behavior to parent navigators by ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/custom-routers"},"customizing their router"),". For example, a navigator is able to specify when actions should be blocked by returning null from ",(0,o.kt)("inlineCode",{parentName:"p"},"router.getStateForAction"),". Or a navigator can specify custom URI handling by overriding ",(0,o.kt)("inlineCode",{parentName:"p"},"router.getActionForPathAndParams")," to output a relevant navigation action, and handling that action in ",(0,o.kt)("inlineCode",{parentName:"p"},"router.getStateForAction"),"."),(0,o.kt)("h3",{id:"navigation-state"},"Navigation State"),(0,o.kt)("p",null,"The navigation state that is passed into a navigator's ",(0,o.kt)("inlineCode",{parentName:"p"},"props.navigation.state")," has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name, which routers will use to associate each route\n      // with a react component\n      routeName: 'MyRouteName',\n\n      // A unique id for this route, used to keep order in the routes array:\n      key: 'myroute-123',\n\n      // Routes can have any additional data. The included routers have `params`\n      ...customRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n")),(0,o.kt)("h3",{id:"navigation-dispatchers"},"Navigation Dispatchers"),(0,o.kt)("p",null,"A navigator can dispatch navigation actions, such as 'Go to a URI', 'Go back'."),(0,o.kt)("p",null,"The dispatcher will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the action was successfully handled, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"api-for-building-custom-navigators"},"API for building custom navigators"),(0,o.kt)("p",null,"To help developers implement custom navigators, the following utilities are provided with React Navigation:"),(0,o.kt)("h3",{id:"createnavigator"},(0,o.kt)("inlineCode",{parentName:"h3"},"createNavigator")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"createNavigator")," API has changed in version 2. The old doc for v1 can be accessed here: ",(0,o.kt)("a",{parentName:"p",href:"https://v1.reactnavigation.org/docs/custom-navigators.html"},"https://v1.reactnavigation.org/docs/custom-navigators.html"))),(0,o.kt)("p",null,"This utility combines a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/routers"},"router")," and a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-views"},"navigation view")," together in a standard way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createNavigator } from "react-navigation";\n\nconst AppNavigator = createNavigator(NavigationView, router, navigationConfig);\n')),(0,o.kt)("p",null,"The new ",(0,o.kt)("inlineCode",{parentName:"p"},"AppNavigator")," can be rendered as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<AppNavigator\n  navigation={{ state, dispatch, addListener }}\n  screenProps={...}\n/>\n")),(0,o.kt)("p",null,"Then the view will be rendered in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<NavigationView\n  screenProps={screenProps}\n  navigation={navigation}\n  navigationConfig={navigationConfig}\n  descriptors={descriptors}\n/>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop is the same navigation prop that was passed into the navigator."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationConfig")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps")," are simply passed through, as defined above."),(0,o.kt)("p",null,"Most information about child screens comes through the ",(0,o.kt)("inlineCode",{parentName:"p"},"descriptors")," prop. The descriptors is an object map of route keys to scene descriptors. There is one descriptor for each child route."),(0,o.kt)("h3",{id:"scene-descriptors"},"Scene Descriptors"),(0,o.kt)("p",null,"A scene descriptor has the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getComponent"),", a function that returns the component for the screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),", the flattened navigationOptions for the route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation"),", the child navigation prop, including actions and the route ",(0,o.kt)("inlineCode",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),", the navigation state for the child screen (a shortcut for ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.state"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),", the key of the route (a shortcut for ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.state.key"),")")))}d.isMDXComponent=!0}}]);