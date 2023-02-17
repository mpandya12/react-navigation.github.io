"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[38833],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},c=void 0,l={unversionedId:"tab-based-navigation",id:"version-4.x/tab-based-navigation",isDocsHomePage:!1,title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-4.x/tab-based-navigation.md",sourceDirName:".",slug:"/tab-based-navigation",permalink:"/docs/4.x/tab-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/tab-based-navigation.md",tags:[],version:"4.x",frontMatter:{id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},sidebar:"version-4.x-docs",previous:{title:"Limitations",permalink:"/docs/4.x/limitations"},next:{title:"Drawer navigation",permalink:"/docs/4.x/drawer-based-navigation"}},p=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",children:[],level:2},{value:"Customizing the appearance",id:"customizing-the-appearance",children:[],level:2},{value:"Add badges to icons",id:"add-badges-to-icons",children:[],level:2},{value:"Jumping between tabs",id:"jumping-between-tabs",children:[],level:2},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",children:[],level:2},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:[],level:2},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."),(0,i.kt)("p",null,"This guide covers ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/bottom-tab-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createBottomTabNavigator")),". You may also use ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/material-bottom-tab-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createMaterialBottomTabNavigator"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/material-top-tab-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createMaterialTopTabNavigator"))," to add tabs to your application."),(0,i.kt)("h2",{id:"minimal-example-of-tab-based-navigation"},"Minimal example of tab-based navigation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nconst TabNavigator = createBottomTabNavigator({\n  Home: HomeScreen,\n  Settings: SettingsScreen,\n});\n\nexport default createAppContainer(TabNavigator);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/basic-tabs-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),(0,i.kt)("p",null,"This is similar to how you would customize a stack navigator ","\u2014"," there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// You can import Ionicons from @expo/vector-icons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nexport default createBottomTabNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    defaultNavigationOptions: ({ navigation }) => ({\n      tabBarIcon: ({ focused, horizontal, tintColor }) => {\n        const { routeName } = navigation.state;\n        let IconComponent = Ionicons;\n        let iconName;\n        if (routeName === 'Home') {\n          iconName = focused\n            ? 'ios-information-circle'\n            : 'ios-information-circle-outline';\n          // Sometimes we want to add badges to some icons.\n          // You can check the implementation below.\n          IconComponent = HomeIconWithBadge;\n        } else if (routeName === 'Settings') {\n          iconName = focused ? 'ios-list-box' : 'ios-list';\n        }\n\n        // You can return any component that you like here!\n        return <IconComponent name={iconName} size={25} color={tintColor} />;\n      },\n    }),\n    tabBarOptions: {\n      activeTintColor: 'tomato',\n      inactiveTintColor: 'gray',\n    },\n  }\n);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/tabs-with-icons-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"Let's dissect this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is a property on ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions"),", so we know we can use it on our screen components, but in this case chose to put it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration in order to centralize the icon configuration for convenience."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is a function that is given the ",(0,i.kt)("inlineCode",{parentName:"li"},"focused")," state, ",(0,i.kt)("inlineCode",{parentName:"li"},"tintColor"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"horizontal")," param, which is a boolean. If you take a peek further down in the configuration you will see ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarOptions")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor"),". These default to the iOS platform defaults, but you can change them here. The ",(0,i.kt)("inlineCode",{parentName:"li"},"tintColor")," that is passed through to the ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is either the active or inactive one, depending on the ",(0,i.kt)("inlineCode",{parentName:"li"},"focused")," state (focused is active). The orientation state ",(0,i.kt)("inlineCode",{parentName:"li"},"horizontal")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when the device is in landscape, otherwise is ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," for portrait."),(0,i.kt)("li",{parentName:"ul"},"Read the ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.x/bottom-tab-navigator"},"full API reference")," for further information on ",(0,i.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration options.")),(0,i.kt)("h2",{id:"add-badges-to-icons"},"Add badges to icons"),(0,i.kt)("p",null,"Sometimes we want to add badges to some icons. A common way is to use an extra view container and style the badge element with absolute positioning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default class IconWithBadge extends React.Component {\n  render() {\n    const { name, badgeCount, color, size } = this.props;\n    return (\n      <View style={{ width: 24, height: 24, margin: 5 }}>\n        <Ionicons name={name} size={size} color={color} />\n        {badgeCount > 0 && (\n          <View\n            style={{\n              // If you're using react-native < 0.57 overflow outside of parent\n              // will not work on Android, see https://git.io/fhLJ8\n              position: 'absolute',\n              right: -6,\n              top: -3,\n              backgroundColor: 'red',\n              borderRadius: 6,\n              width: 12,\n              height: 12,\n              justifyContent: 'center',\n              alignItems: 'center',\n            }}\n          >\n            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>\n              {badgeCount}\n            </Text>\n          </View>\n        )}\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("p",null,"From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),", ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mobx.js.org/"},"MobX")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js"},"event emitters"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const HomeIconWithBadge = props => {\n  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.\n  return <IconWithBadge {...props} badgeCount={3} />;\n};\nexport default HomeIconWithBadge;\n")),(0,i.kt)("h2",{id:"jumping-between-tabs"},"Jumping between tabs"),(0,i.kt)("p",null,"Switching from one tab to another has a familiar API ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Button, Text, View } from 'react-native';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n        <Button\n          title=\"Go to Settings\"\n          onPress={() => this.props.navigation.navigate('Settings')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/jumping-between-tabs-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"a-stack-navigator-for-each-tab"},"A stack navigator for each tab"),(0,i.kt)("p",null,"Usually tabs don't just display one screen ","\u2014"," for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAppContainer } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Details!</Text>\n      </View>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nconst HomeStack = createStackNavigator({\n  Home: HomeScreen,\n  Details: DetailsScreen,\n});\n\nconst SettingsStack = createStackNavigator({\n  Settings: SettingsScreen,\n  Details: DetailsScreen,\n});\n\nexport default createAppContainer(\n  createBottomTabNavigator(\n    {\n      Home: HomeStack,\n      Settings: SettingsStack,\n    },\n    {\n      /* Other configuration remains unchanged */\n    }\n  )\n);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/stacks-in-tabs-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component"},"Why do we need a TabNavigator instead of TabBarIOS or some other component?"),(0,i.kt)("p",null,"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."),(0,i.kt)("p",null,"For example, React Navigation's ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator"),' takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components ',"\u2014"," for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."),(0,i.kt)("h2",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/navigation-options-resolution#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"See the documentation here")))}m.isMDXComponent=!0}}]);