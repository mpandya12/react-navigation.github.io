"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[49333],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50844:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},l=void 0,c={unversionedId:"glossary-of-terms",id:"version-3.x/glossary-of-terms",isDocsHomePage:!1,title:"Glossary of terms",description:"This is a new section of the documentation and it's missing a lot of terms! Please submit a pull request or an issue with a term that you think should be explained here.",source:"@site/versioned_docs/version-3.x/glossary-of-terms.md",sourceDirName:".",slug:"/glossary-of-terms",permalink:"/docs/3.x/glossary-of-terms",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/glossary-of-terms.md",tags:[],version:"3.x",frontMatter:{id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},sidebar:"version-3.x-docs",previous:{title:"Next steps",permalink:"/docs/3.x/next-steps"},next:{title:"Common mistakes",permalink:"/docs/3.x/common-mistakes"}},p=[{value:"Header",id:"header",children:[],level:2},{value:"Screen component",id:"screen-component",children:[],level:2},{value:"Navigation Prop",id:"navigation-prop",children:[],level:2},{value:"Navigation State",id:"navigation-state",children:[],level:2},{value:"Route",id:"route",children:[],level:2},{value:"Child Navigation State",id:"child-navigation-state",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a new section of the documentation and it's missing a lot of terms! Please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/website"},"submit a pull request or an issue")," with a term that you think should be explained here.")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("p",null,"Also known as navigation header, navigation bar, navbar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation."),(0,r.kt)("h2",{id:"screen-component"},"Screen component"),(0,r.kt)("p",null,"A screen component is a component that we use in our route configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const AppNavigator = createStackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,    // <----\n    },\n    Details: {\n      screen: DetailsScreen, // <----\n    },\n  },\n  {\n    initialRouteName: 'Home',\n  }\n);\n")),(0,r.kt)("p",null,"The suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," in the component name is entirely optional, but a frequently used convention; we could call it ",(0,r.kt)("inlineCode",{parentName:"p"},"CasaPantalla")," and this would work just the same."),(0,r.kt)("p",null,"We saw earlier that our screen components are provided with the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop. It's important to note that ",(0,r.kt)("em",{parentName:"p"},"this only happens if the screen is rendered as a route by React Navigation")," (for example, in response to ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"). For example, if we render ",(0,r.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," as a child of ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeScreen"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," won't be provided with the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation"),' prop, and when you press the "Go to Details... again" button on the Home screen, the app will throw one of the quintessential JavaScript exceptions "undefined is not an object".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n        <DetailsScreen />\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("a",{href:"https://snack.expo.io/@react-navigation/screen-components-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop"},'"Navigation prop reference"')," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.navigation"),"."),(0,r.kt)("h2",{id:"navigation-prop"},"Navigation Prop"),(0,r.kt)("p",null,"This prop will be passed into all screens, and it can be used for the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dispatch")," will send an action up to the router"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," is the current route for the screen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getParam")," is a helper to access a param that may be on the route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigate"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"goBack"),", etc are available to dispatch actions in a convenient way")),(0,r.kt)("p",null,"Navigators can also accept a navigation prop, which they should get from the parent navigator, if there is one."),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop"},'"Navigation prop document"'),"."),(0,r.kt)("h2",{id:"navigation-state"},"Navigation State"),(0,r.kt)("p",null,"The state of a navigator generally looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  key: 'StackRouterRoot',\n  index: 1,\n  routes: [\n    { key: 'A', routeName: 'Home' },\n    { key: 'B', routeName: 'Profile' },\n  ]\n}\n")),(0,r.kt)("p",null,'For this navigation state, there are two routes (which may be tabs, or cards in a stack). The index indicates the active route, which is "B".'),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("p",null,'Each route is a piece of navigation state which contains a key to identify it, and a "routeName" to designate the type of route. It can also contain arbitrary params:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  key: 'B',\n  routeName: 'Profile',\n  params: { id: '123' }\n}\n")),(0,r.kt)("h2",{id:"child-navigation-state"},"Child Navigation State"),(0,r.kt)("p",null,"When composing navigators, it is possible for a route to be a navigation state. It would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  key: 'B',\n  routeName: 'Profile',\n  params: { id: '123' },\n  index: 1,\n  routes: [ {...}, {...} ]\n}\n")))}m.isMDXComponent=!0}}]);