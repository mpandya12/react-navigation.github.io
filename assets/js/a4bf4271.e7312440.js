"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[67034],{84763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(85893),o=t(11151),r=t(74866),s=t(85162);const i={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},c=void 0,l={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",description:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.",source:"@site/versioned_docs/version-7.x/custom-android-back-button-handling.md",sourceDirName:".",slug:"/custom-android-back-button-handling",permalink:"/docs/7.x/custom-android-back-button-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/custom-android-back-button-handling.md",tags:[],version:"7.x",frontMatter:{id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},sidebar:"docs",previous:{title:"Screen options with nested navigators",permalink:"/docs/7.x/screen-options-resolution"},next:{title:"Animating elements between screens",permalink:"/docs/7.x/shared-element-transitions"}},u={},d=[{value:"Why not use component lifecycle methods",id:"why-not-use-component-lifecycle-methods",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling."}),"\n",(0,a.jsxs)(n.p,{children:['As an example, consider a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of ',(0,a.jsx)(n.a,{href:"https://reactnative.dev/docs/backhandler.html",children:(0,a.jsx)(n.code,{children:"BackHandler"})})," which comes with react-native, along with the ",(0,a.jsx)(n.code,{children:"useFocusEffect"})," hook to add our custom ",(0,a.jsx)(n.code,{children:"hardwareBackPress"})," listener."]}),"\n",(0,a.jsxs)(n.p,{children:["Returning ",(0,a.jsx)(n.code,{children:"true"})," from ",(0,a.jsx)(n.code,{children:"onBackPress"})," denotes that we have handled the event, and react-navigation's listener will not get called, thus not popping the screen. Returning ",(0,a.jsx)(n.code,{children:"false"})," will cause the event to bubble up and react-navigation's listener will pop the screen."]}),"\n",(0,a.jsx)("samp",{id:"custom-android-back-button"}),"\n",(0,a.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Custom android back button","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Custom android back button" snack version=7',children:"import * as React from 'react';\nimport { Text, View, BackHandler, StyleSheet } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { useFocusEffect } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { PlatformPressable, Button } from '@react-navigation/elements';\n\nconst listData = [{ key: 'Apple' }, { key: 'Orange' }, { key: 'Carrot' }];\n\n// codeblock-focus-start\nfunction ScreenWithCustomBackBehavior() {\n  // codeblock-focus-end\n  const [selected, setSelected] = React.useState(listData[0].key);\n  const [isSelectionModeEnabled, setIsSelectionModeEnabled] =\n    React.useState(false);\n\n  // codeblock-focus-start\n  // ...\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const onBackPress = () => {\n        if (isSelectionModeEnabled) {\n          setIsSelectionModeEnabled(false);\n          return true;\n        } else {\n          return false;\n        }\n      };\n\n      const subscription = BackHandler.addEventListener(\n        'hardwareBackPress',\n        onBackPress\n      );\n\n      return () => subscription.remove();\n    }, [isSelectionModeEnabled])\n  );\n  // codeblock-focus-end\n\n  return (\n    <View style={styles.container}>\n      {listData.map((item) => (\n        <>\n          {isSelectionModeEnabled ? (\n            <PlatformPressable\n              onPress={() => {\n                setSelected(item.key);\n              }}\n              style={{\n                textDecorationLine: item.key === selected ? 'underline' : '',\n              }}\n            >\n              <Text\n                style={{\n                  textDecorationLine: item.key === selected ? 'underline' : '',\n                  ...styles.text,\n                }}\n              >\n                {item.key}\n              </Text>\n            </PlatformPressable>\n          ) : (\n            <Text style={styles.text}>\n              {item.key === selected ? 'Selected: ' : ''}\n              {item.key}\n            </Text>\n          )}\n        </>\n      ))}\n      <Button\n        onPress={() => setIsSelectionModeEnabled(!isSelectionModeEnabled)}\n      >\n        Toggle selection mode\n      </Button>\n      <Text>Selection mode: {isSelectionModeEnabled ? 'ON' : 'OFF'}</Text>\n    </View>\n  );\n  // codeblock-focus-start\n\n  // ...\n}\n// codeblock-focus-end\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    CustomScreen: ScreenWithCustomBackBehavior,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 20,\n    marginBottom: 20,\n  },\n});\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Custom android back button","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Custom android back button" snack version=7',children:"import * as React from 'react';\nimport { Text, View, BackHandler, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { useFocusEffect } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { PlatformPressable, Button } from '@react-navigation/elements';\n\nconst Stack = createNativeStackNavigator();\n\nconst listData = [{ key: 'Apple' }, { key: 'Orange' }, { key: 'Carrot' }];\n\n// codeblock-focus-start\nfunction ScreenWithCustomBackBehavior() {\n  // codeblock-focus-end\n\n  const [selected, setSelected] = React.useState(listData[0].key);\n  const [isSelectionModeEnabled, setIsSelectionModeEnabled] =\n    React.useState(false);\n  // codeblock-focus-start\n  // ...\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const onBackPress = () => {\n        if (isSelectionModeEnabled) {\n          setIsSelectionModeEnabled(false);\n          return true;\n        } else {\n          return false;\n        }\n      };\n\n      const subscription = BackHandler.addEventListener(\n        'hardwareBackPress',\n        onBackPress\n      );\n\n      return () => subscription.remove();\n    }, [isSelectionModeEnabled])\n  );\n  // codeblock-focus-end\n\n  return (\n    <View style={styles.container}>\n      {listData.map((item) => (\n        <>\n          {isSelectionModeEnabled ? (\n            <PlatformPressable\n              onPress={() => {\n                setSelected(item.key);\n              }}\n              style={{\n                textDecorationLine: item.key === selected ? 'underline' : '',\n              }}\n            >\n              <Text\n                style={{\n                  textDecorationLine: item.key === selected ? 'underline' : '',\n                  ...styles.text,\n                }}\n              >\n                {item.key}\n              </Text>\n            </PlatformPressable>\n          ) : (\n            <Text style={styles.text}>\n              {item.key === selected ? 'Selected: ' : ''}\n              {item.key}\n            </Text>\n          )}\n        </>\n      ))}\n      <Button\n        onPress={() => setIsSelectionModeEnabled(!isSelectionModeEnabled)}\n      >\n        Toggle selection mode\n      </Button>\n      <Text>Selection mode: {isSelectionModeEnabled ? 'ON' : 'OFF'}</Text>\n    </View>\n  );\n  // codeblock-focus-start\n\n  // ...\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name=\"CustomScreen\"\n          component={ScreenWithCustomBackBehavior}\n        />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 20,\n    marginBottom: 20,\n  },\n});\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The presented approach will work well for screens that are shown in a ",(0,a.jsx)(n.code,{children:"StackNavigator"}),". Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!)."]}),"\n",(0,a.jsxs)(n.p,{children:["If instead of overriding system back button, you'd like to prevent going back from the screen, see docs for ",(0,a.jsx)(n.a,{href:"/docs/7.x/preventing-going-back",children:"preventing going back"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"why-not-use-component-lifecycle-methods",children:"Why not use component lifecycle methods"}),"\n",(0,a.jsxs)(n.p,{children:["At first, you may be inclined to use ",(0,a.jsx)(n.code,{children:"componentDidMount"})," to subscribe for the back press event and ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," to unsubscribe, or use ",(0,a.jsx)(n.code,{children:"useEffect"})," to add the listener. This approach will not work - learn more about this in ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-lifecycle",children:"navigation lifecycle"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(67294),o=t(86010),r=t(12466),s=t(16550),i=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=m(e),[s,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=a.find((e=>e.default)))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,d]=b({queryString:t,groupId:o}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,r]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),v=(()=>{const e=null!=l?l:f;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var p=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(85893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=i[t].value;o!==a&&(l(n),s(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var o;const n=c.indexOf(e.currentTarget)-1;t=null!=(o=c[n])?o:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function x(e){const n=f(e);return(0,k.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,k.jsx)(g,{...e,...n}),(0,k.jsx)(y,{...e,...n})]})}function S(e){const n=(0,p.Z)();return(0,k.jsx)(x,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);