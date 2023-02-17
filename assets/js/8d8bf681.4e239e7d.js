"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[53487],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=i,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),i=n(67294),r=n(72389),o=n(79443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(99558),s=n(86010),c="tabItem_1uMI";function p(e){var t,n,a,r=e.lazy,o=e.block,p=e.defaultValue,h=e.values,u=e.groupId,m=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,d.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),b=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,i.useState)(v),w=C[0],S=C[1],T=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var O=b[u];null!=O&&O!==w&&f.some((function(e){return e.value===O}))&&S(O)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==w&&(x(t),S(a),null!=u&&y(u,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},m)},f.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:P,onClick:P},null!=n?n:t)}))),r?(0,i.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function h(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},66394:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return h},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(55064),l=n(58215),d=["components"],s={id:"stack-navigator-1.0",title:"createStackNavigator (1.x)",sidebar_label:"createStackNavigator (1.x)"},c=void 0,p={unversionedId:"stack-navigator-1.0",id:"version-4.x/stack-navigator-1.0",isDocsHomePage:!1,title:"createStackNavigator (1.x)",description:"Provides a way for your app to transition between screens where each new screen is placed on top of a stack.",source:"@site/versioned_docs/version-4.x/stack-navigator-1.0.md",sourceDirName:".",slug:"/stack-navigator-1.0",permalink:"/docs/4.x/stack-navigator-1.0",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/stack-navigator-1.0.md",tags:[],version:"4.x",frontMatter:{id:"stack-navigator-1.0",title:"createStackNavigator (1.x)",sidebar_label:"createStackNavigator (1.x)"},sidebar:"version-4.x-docs",previous:{title:"createStackNavigator",permalink:"/docs/4.x/stack-navigator"},next:{title:"createSwitchNavigator",permalink:"/docs/4.x/switch-navigator"}},h=[{value:"API",id:"api",children:[{value:"RouteConfigs",id:"routeconfigs",children:[],level:3},{value:"StackNavigatorConfig",id:"stacknavigatorconfig",children:[],level:3},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[{value:"<code>title</code>",id:"title",children:[],level:4},{value:"<code>header</code>",id:"header",children:[],level:4},{value:"<code>headerShown</code>",id:"headershown",children:[],level:4},{value:"<code>headerTitle</code>",id:"headertitle",children:[],level:4},{value:"<code>headerTitleAllowFontScaling</code>",id:"headertitleallowfontscaling",children:[],level:4},{value:"<code>headerBackAllowFontScaling</code>",id:"headerbackallowfontscaling",children:[],level:4},{value:"<code>headerBackImage</code>",id:"headerbackimage",children:[],level:4},{value:"<code>headerBackTitle</code>",id:"headerbacktitle",children:[],level:4},{value:"<code>headerTruncatedBackTitle</code>",id:"headertruncatedbacktitle",children:[],level:4},{value:"<code>headerRight</code>",id:"headerright",children:[],level:4},{value:"<code>headerLeft</code>",id:"headerleft",children:[],level:4},{value:"<code>headerStyle</code>",id:"headerstyle",children:[],level:4},{value:"<code>headerForceInset</code>",id:"headerforceinset",children:[],level:4},{value:"<code>headerTitleStyle</code>",id:"headertitlestyle",children:[],level:4},{value:"<code>headerBackTitleStyle</code>",id:"headerbacktitlestyle",children:[],level:4},{value:"<code>headerLeftContainerStyle</code>",id:"headerleftcontainerstyle",children:[],level:4},{value:"<code>headerRightContainerStyle</code>",id:"headerrightcontainerstyle",children:[],level:4},{value:"<code>headerTitleContainerStyle</code>",id:"headertitlecontainerstyle",children:[],level:4},{value:"<code>headerTintColor</code>",id:"headertintcolor",children:[],level:4},{value:"<code>headerPressColorAndroid</code>",id:"headerpresscolorandroid",children:[],level:4},{value:"<code>headerTransparent</code>",id:"headertransparent",children:[],level:4},{value:"<code>headerBackground</code>",id:"headerbackground",children:[],level:4},{value:"<code>headerBackgroundTransitionPreset</code>",id:"headerbackgroundtransitionpreset",children:[],level:4},{value:"<code>gesturesEnabled</code>",id:"gesturesenabled",children:[],level:4},{value:"<code>gestureResponseDistance</code>",id:"gestureresponsedistance",children:[],level:4},{value:"<code>gestureDirection</code>",id:"gesturedirection",children:[],level:4},{value:"<code>params</code>",id:"params",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[{value:"Modal StackNavigator with Custom Screen Transitions",id:"modal-stacknavigator-with-custom-screen-transitions",children:[],level:4},{value:"Specifying the transition mode for a stack&#39;s screens explicitly",id:"specifying-the-transition-mode-for-a-stacks-screens-explicitly",children:[],level:4}],level:3}],level:2},{value:"Peer dependencies",id:"peer-dependencies",children:[],level:2}],u={toc:h};function m(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides a way for your app to transition between screens where each new screen is placed on top of a stack."),(0,r.kt)("p",null,"By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, fade in from the bottom on Android. On iOS the stack navigator can also be configured to a modal style where screens slide in from the bottom."),(0,r.kt)("p",null,"To use this navigator, ensure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/getting-started"},"react-navigation and its dependencies installed"),", then install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/stack/tree/1.0"},(0,r.kt)("inlineCode",{parentName:"a"},"react-navigation-stack")),"."),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-stack@^1.10.3\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-stack@^1.10.3\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createStackNavigator } from 'react-navigation-stack';\n\ncreateStackNavigator(RouteConfigs, StackNavigatorConfig);\n")),(0,r.kt)("h3",{id:"routeconfigs"},"RouteConfigs"),(0,r.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createStackNavigator({\n  // For each screen that you can navigate to, create a new entry like this:\n  Profile: {\n    // `ProfileScreen` is a React component that will be the main content of the screen.\n    screen: ProfileScreen,\n    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.\n\n    // Optional: When deep linking or using react-navigation in a web app, this path is used:\n    path: 'people/:name',\n    // The action and route params are extracted from the path.\n\n    // Optional: Override the `navigationOptions` for the screen\n    navigationOptions: ({ navigation }) => ({\n      title: `${navigation.state.params.name}'s Profile'`,\n    }),\n  },\n\n  ...MyOtherRoutes,\n});\n")),(0,r.kt)("h3",{id:"stacknavigatorconfig"},"StackNavigatorConfig"),(0,r.kt)("p",null,"Options for the router:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - Sets the default screen of the stack. Must match one of the keys in route configs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteParams")," - The params for the initial route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteKey")," - Optional identifier of the initial route")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paths")," - A mapping of overrides for the paths set in the route configs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disableKeyboardHandling")," - If true, the keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to false. This is ignored in the web platform.")),(0,r.kt)("p",null,"Visual options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")," - Defines the style for rendering and transitions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"card")," - Use the standard iOS and Android screen transitions. This is the default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modal")," - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerMode")," - Specifies how the header should be rendered:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float")," - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screen")," - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," - No header will be rendered."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackTitleVisible")," - A reasonable default is supplied for whether the back button title should be visible or not, but if you want to override that you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," in this option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerTransitionPreset")," - Specifies how the header should transition from one screen to another when ",(0,r.kt)("inlineCode",{parentName:"li"},"headerMode: float")," is enabled.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fade-in-place")," - Header components cross-fade without moving, similar to the Twitter, Instagram, and Facebook app for iOS. This is the default value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uikit")," - An approximation of the default behavior for iOS."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerLayoutPreset")," - Specifies how to lay out the header components.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"left")," - Anchor the title to the left, near the back button or other left component. This is the default on Android. When used on iOS, the header back title is hidden. Content from the left component will overflow underneath the title, if you need to adjust this you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"headerLeftContainerStyle")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"headerTitleContainerStyle"),". Additionally, this alignment is incompatible with ",(0,r.kt)("inlineCode",{parentName:"li"},"headerTransitionPreset: 'uikit'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"center")," - Center the title, this is the default on iOS."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardStyle")," - Use this prop to override or extend the default style for an individual card in stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardShadowEnabled")," - Use this prop to have visible shadows during transitions. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardOverlayEnabled")," - Use this prop to have visible stack card overlays during transitions. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transitionConfig")," - Function to return an object that is merged with the default screen transitions (take a look at TransitionConfig in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/types.tsx#L232"},"type definitions"),"). Provided function will be passed the following arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transitionProps")," - Transition props for the new screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prevTransitionProps")," - Transitions props for the old screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isModal")," - Boolean specifying if screen is modal."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTransitionStart")," - Function to be invoked when the card transition animation is about to start."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTransitionEnd")," - Function to be invoked once the card transition animation completes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transparentCard")," - ",(0,r.kt)("em",{parentName:"li"},"Experimental")," - Prop to keep all cards in the stack visible and add a transparent background instead of a white one. This is useful to implement things like modal dialogs where the previous scene should still be visible underneath the current one.")),(0,r.kt)("h3",{id:"navigationoptions-for-screens-inside-of-the-navigator"},(0,r.kt)("inlineCode",{parentName:"h3"},"navigationOptions")," for screens inside of the navigator"),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"String that can be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle"),". Additionally, will be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel")," (if nested in a TabNavigator) or ",(0,r.kt)("inlineCode",{parentName:"p"},"drawerLabel")," (if nested in a DrawerNavigator)."),(0,r.kt)("h4",{id:"header"},(0,r.kt)("inlineCode",{parentName:"h4"},"header")),(0,r.kt)("p",null,"React Element or a function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"HeaderProps")," returns a React Element, to display as a header."),(0,r.kt)("h4",{id:"headershown"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerShown")),(0,r.kt)("p",null,"Whether to show or hide the header for the screen. The header is shown by default unless ",(0,r.kt)("inlineCode",{parentName:"p"},"headerMode")," was set to ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),". Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," hides the header."),(0,r.kt)("h4",{id:"headertitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitle")),(0,r.kt)("p",null,"String, React Element or a function that returns a React Element to be used by the header. Defaults to scene ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),". When a function is used, it receives an object containing ",(0,r.kt)("inlineCode",{parentName:"p"},"allowFontScaling"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," properties. The ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," property contains the title string."),(0,r.kt)("h4",{id:"headertitleallowfontscaling"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitleAllowFontScaling")),(0,r.kt)("p",null,"Whether header title font should scale to respect Text Size accessibility settings. Defaults to true."),(0,r.kt)("h4",{id:"headerbackallowfontscaling"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackAllowFontScaling")),(0,r.kt)("p",null,"Whether back button title font should scale to respect Text Size accessibility settings. Defaults to false."),(0,r.kt)("h4",{id:"headerbackimage"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackImage")),(0,r.kt)("p",null,"Function which returns a React Element to display custom image in header's back button. When a function is used, it receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"tintColor")," in it's argument object. Defaults to Image component with back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android)."),(0,r.kt)("h4",{id:"headerbacktitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackTitle")),(0,r.kt)("p",null,"Title string used by the back button on iOS, or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to disable label. Defaults to the previous scene's ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackTitle")," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackTitle")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: null,\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  },\n});\n")),(0,r.kt)("h4",{id:"headertruncatedbacktitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTruncatedBackTitle")),(0,r.kt)("p",null,"Title string used by the back button when ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackTitle")," doesn't fit on the screen. ",(0,r.kt)("inlineCode",{parentName:"p"},'"Back"')," by default. ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to truncate the label on ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: 'A much too long text for back button from B to A',\n      headerTruncatedBackTitle: `to A`,\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  },\n});\n")),(0,r.kt)("h4",{id:"headerright"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerRight")),(0,r.kt)("p",null,"React Element to display on the right side of the header."),(0,r.kt)("h4",{id:"headerleft"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLeft")),(0,r.kt)("p",null,"Function which returns a React Element to display on the left side of the header. When a function is used, it receives a number of arguments when rendered (",(0,r.kt)("inlineCode",{parentName:"p"},"onPress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleStyle")," and more)."),(0,r.kt)("h4",{id:"headerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerStyle")),(0,r.kt)("p",null,"Style object for the header"),(0,r.kt)("h4",{id:"headerforceinset"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerForceInset")),(0,r.kt)("p",null,"Allows to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"forceInset")," object to internal SafeAreaView used in the header."),(0,r.kt)("h4",{id:"headertitlestyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitleStyle")),(0,r.kt)("p",null,"Style object for the title component"),(0,r.kt)("h4",{id:"headerbacktitlestyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackTitleStyle")),(0,r.kt)("p",null,"Style object for the back title"),(0,r.kt)("h4",{id:"headerleftcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLeftContainerStyle")),(0,r.kt)("p",null,"Customize the style for the container of the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft")," component, for example to add padding."),(0,r.kt)("h4",{id:"headerrightcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerRightContainerStyle")),(0,r.kt)("p",null,"Customize the style for the container of the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerRight")," component, for example to add padding."),(0,r.kt)("h4",{id:"headertitlecontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitleContainerStyle")),(0,r.kt)("p",null,"Customize the style for the container of the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," component, for example to add padding."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitleContainerStyle")," is with an absolute position style and offsets both ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),". This may lead to white space or overlap between ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," if a customized ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft")," is used. It can be solved by adjusting ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," style in ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitleContainerStyle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"marginHorizontal")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),(0,r.kt)("h4",{id:"headertintcolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTintColor")),(0,r.kt)("p",null,"Tint color for the header"),(0,r.kt)("h4",{id:"headerpresscolorandroid"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerPressColorAndroid")),(0,r.kt)("p",null,"Color for material ripple (Android >= 5.0 only)"),(0,r.kt)("h4",{id:"headertransparent"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTransparent")),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the header will not have a background unless you explicitly provide it with ",(0,r.kt)("inlineCode",{parentName:"p"},"headerStyle")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackground"),"."),(0,r.kt)("h4",{id:"headerbackground"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackground")),(0,r.kt)("p",null,"Use this with ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTransparent")," to provide a Function which returns a React Element to render in the background of the header. You can use this with a blur view, for example, to create a translucent header."),(0,r.kt)("h4",{id:"headerbackgroundtransitionpreset"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackgroundTransitionPreset")),(0,r.kt)("p",null,"One of ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"fade")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"translate"),"; lets you choose how to transition your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackground")," components between screens."),(0,r.kt)("h4",{id:"gesturesenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"gesturesEnabled")),(0,r.kt)("p",null,"Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android."),(0,r.kt)("h4",{id:"gestureresponsedistance"},(0,r.kt)("inlineCode",{parentName:"h4"},"gestureResponseDistance")),(0,r.kt)("p",null,"Object to override the distance of touch start from the edge of the screen to recognize gestures. It takes the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"horizontal")," - ",(0,r.kt)("em",{parentName:"li"},"number")," - Distance for horizontal direction. Defaults to 25."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vertical")," - ",(0,r.kt)("em",{parentName:"li"},"number")," - Distance for vertical direction. Defaults to 135.")),(0,r.kt)("h4",{id:"gesturedirection"},(0,r.kt)("inlineCode",{parentName:"h4"},"gestureDirection")),(0,r.kt)("p",null,"String to override the direction for dismiss gesture. ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," for normal behaviour or ",(0,r.kt)("inlineCode",{parentName:"p"},"inverted")," for right-to-left swipes."),(0,r.kt)("h4",{id:"params"},(0,r.kt)("inlineCode",{parentName:"h4"},"params")),(0,r.kt)("p",null,"You can provide default params inside route definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Store = createStackNavigator({\n  Playstation: { screen: ProductScreen, params: { product: 'Playstation' } },\n  Xbox: { screen: ProductScreen, params: { product: 'Xbox' } },\n});\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"See the examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/4.x/example/src/SimpleStack.tsx"},"SimpleStack.tsx")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/4.x/example/src/ModalStack.tsx"},"ModalStack.tsx")," which you can run locally as part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/4.x/example"},"NavigationPlayground")," app."),(0,r.kt)("p",null,"You can view these examples directly on your phone by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://exp.host/@react-navigation/NavigationPlayground"},"our expo demo"),"."),(0,r.kt)("h4",{id:"modal-stacknavigator-with-custom-screen-transitions"},"Modal StackNavigator with Custom Screen Transitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ModalNavigator = createStackNavigator(\n  {\n    Main: { screen: Main },\n    Login: { screen: Login },\n  },\n  {\n    headerMode: 'none',\n    mode: 'modal',\n    defaultNavigationOptions: {\n      gesturesEnabled: false,\n    },\n    transitionConfig: () => ({\n      transitionSpec: {\n        duration: 300,\n        easing: Easing.out(Easing.poly(4)),\n        timing: Animated.timing,\n      },\n      screenInterpolator: sceneProps => {\n        const { layout, position, scene } = sceneProps;\n        const { index } = scene;\n\n        const height = layout.initHeight;\n        const translateY = position.interpolate({\n          inputRange: [index - 1, index, index + 1],\n          outputRange: [height, 0, 0],\n        });\n\n        const opacity = position.interpolate({\n          inputRange: [index - 1, index - 0.99, index],\n          outputRange: [0, 1, 1],\n        });\n\n        return { opacity, transform: [{ translateY }] };\n      },\n    }),\n  }\n);\n")),(0,r.kt)("p",null,"Header transitions can also be configured using ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeftInterpolator"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitleInterpolator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"headerRightInterpolator")," fields under ",(0,r.kt)("inlineCode",{parentName:"p"},"transitionConfig"),"."),(0,r.kt)("h4",{id:"specifying-the-transition-mode-for-a-stacks-screens-explicitly"},"Specifying the transition mode for a stack's screens explicitly"),(0,r.kt)("p",null,"We can't set the ",(0,r.kt)("inlineCode",{parentName:"p"},"StackNavigatorConfig"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," dynamically. Instead we are going to use a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"transitionConfig")," to render the specific transition we want - modal or card - on a screen by screen basis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  createStackNavigator,\n  StackViewTransitionConfigs,\n} from 'react-navigation';\n\n/* The screens you add to IOS_MODAL_ROUTES will have the modal transition.  */\nconst IOS_MODAL_ROUTES = ['OptionsScreen'];\n\nlet dynamicModalTransition = (transitionProps, prevTransitionProps) => {\n  const isModal = IOS_MODAL_ROUTES.some(\n    screenName =>\n      screenName === transitionProps.scene.route.routeName ||\n      (prevTransitionProps &&\n        screenName === prevTransitionProps.scene.route.routeName)\n  );\n  return StackViewTransitionConfigs.defaultTransitionConfig(\n    transitionProps,\n    prevTransitionProps,\n    isModal\n  );\n};\n\nconst HomeStack = createStackNavigator(\n  { DetailScreen, HomeScreen, OptionsScreen },\n  { initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition }\n);\n")),(0,r.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,r.kt)("p",null,"react-navigation-stack depends on the following libraries in addition to react-navigation itself:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"react-native-gesture-handler"),(0,r.kt)("li",{parentName:"ul"},"react-native-screens")))}m.isMDXComponent=!0}}]);