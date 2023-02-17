"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[20694],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),p=r,g=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95370:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},c=void 0,u={unversionedId:"status-bar",id:"version-7.x/status-bar",isDocsHomePage:!1,title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-7.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/7.x/status-bar",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/status-bar.md",tags:[],version:"7.x",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},sidebar:"version-7.x/docs",previous:{title:"Hiding tab bar in specific screens",permalink:"/docs/7.x/hiding-tabbar-in-screens"},next:{title:"Opening a modal",permalink:"/docs/7.x/modal"}},l=[{value:"Stack",id:"stack",children:[],level:2},{value:"Tabs and Drawer",id:"tabs-and-drawer",children:[],level:2}],d={toc:l};function f(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),(0,o.kt)("h2",{id:"stack"},"Stack"),(0,o.kt)("p",null,"This is a simple task when using a stack. You can render the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),(0,o.kt)("samp",{id:"status-bar"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View, Text, StatusBar, Button, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction Screen1({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#6a51ae',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen2')}\n        color=\"#fff\"\n      />\n    </View>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#ecf0f1',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      <Text>Dark Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen1')}\n      />\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator screenOptions={{ headerShown: false }}>\n          <Stack.Screen name=\"Screen1\" component={Screen1} />\n          <Stack.Screen name=\"Screen2\" component={Screen2} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StackNavigator with different StatusBar configs",src:t(90720).Z})),(0,o.kt)("h2",{id:"tabs-and-drawer"},"Tabs and Drawer"),(0,o.kt)("p",null,"If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),(0,o.kt)("p",null,"To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused")," hook")," and creating a wrapper component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n")),(0,o.kt)("p",null,"Now, our screens (both ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen1.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js"),") will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component from React Native:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Screen1({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: \'#6a51ae\',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />\n      <Text style={{ color: \'#fff\' }}>Light Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen2\')}\n        color="#fff"\n      />\n    </View>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: \'#ecf0f1\',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />\n      <Text>Dark Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen1\')}\n      />\n    </View>\n  );\n}\n')),(0,o.kt)("p",null,"Although not necessary, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component in the screens of the native stack navigator as well."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DrawerNavigator with different StatusBar configs",src:t(82973).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TabNavigator with different StatusBar configs",src:t(761).Z})))}f.isMDXComponent=!0},82973:function(e,n,t){n.Z=t.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},90720:function(e,n,t){n.Z=t.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},761:function(e,n,t){n.Z=t.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);