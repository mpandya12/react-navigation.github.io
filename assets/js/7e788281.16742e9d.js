"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[67888],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?t.createElement(v,o(o({ref:n},c),{},{components:a})):t.createElement(v,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},55064:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(87462),r=a(67294),i=a(72389),o=a(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(99558),u=a(86010),c="tabItem_1uMI";function p(e){var n,a,t,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),w=(0,s.lx)(g,(function(e,n){return e.value===n.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=f[0])?void 0:t.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),y=h.tabGroupChoices,k=h.setTabGroupChoices,x=(0,r.useState)(b),N=x[0],D=x[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==N&&g.some((function(e){return e.value===E}))&&D(E)}var j=function(e){var n=e.currentTarget,a=O.indexOf(n),t=g[a].value;t!==N&&(T(n),D(t),null!=m&&k(m,t))},C=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=O.indexOf(e.currentTarget)+1;a=O[t]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},v)},g.map((function(e){var n=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":N===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=a?a:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,i.Z)();return r.createElement(p,(0,t.Z)({key:String(n)},e))}},79443:function(e,n,a){var t=(0,a(67294).createContext)(void 0);n.Z=t},75655:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(55064),l=a(58215),s=["components"],u={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},c=void 0,p={unversionedId:"drawer-based-navigation",id:"version-5.x/drawer-based-navigation",isDocsHomePage:!1,title:"Drawer navigation",description:"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.",source:"@site/versioned_docs/version-5.x/drawer-based-navigation.md",sourceDirName:".",slug:"/drawer-based-navigation",permalink:"/docs/5.x/drawer-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/drawer-based-navigation.md",tags:[],version:"5.x",frontMatter:{id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},sidebar:"version-5.x/docs",previous:{title:"Tab navigation",permalink:"/docs/5.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/5.x/auth-flow"}},d=[{value:"Minimal example of drawer-based navigation",id:"minimal-example-of-drawer-based-navigation",children:[],level:2},{value:"Opening and closing drawer",id:"opening-and-closing-drawer",children:[],level:2}],m={toc:d};function v(e){var n=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens."),(0,i.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,i.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.kt)("source",{src:"/assets/navigators/drawer/drawer.mov"}))),(0,i.kt)("p",null,"Before continuing, first install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/drawer"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/drawer")),":"),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/drawer@^5.x\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/drawer@^5.x\n")))),(0,i.kt)("h2",{id:"minimal-example-of-drawer-based-navigation"},"Minimal example of drawer-based navigation"),(0,i.kt)("p",null,"To use this drawer navigator, import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),":\n(swipe right to open)"),(0,i.kt)("samp",{id:"drawer-based-navigation"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { NavigationContainer } from '@react-navigation/native';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        onPress={() => navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    </View>\n  );\n}\n\nfunction NotificationsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.goBack()} title=\"Go back home\" />\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator initialRouteName=\"Home\">\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Notifications\" component={NotificationsScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,i.kt)("h2",{id:"opening-and-closing-drawer"},"Opening and closing drawer"),(0,i.kt)("p",null,"To open and close drawer, use the following helpers:"),(0,i.kt)("samp",{id:"drawer-open-close-toggle"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.openDrawer();\nnavigation.closeDrawer();\n")),(0,i.kt)("p",null,"If you would like to toggle the drawer you call the following:"),(0,i.kt)("samp",{id:"drawer-open-close-toggle"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.toggleDrawer();\n")),(0,i.kt)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),(0,i.kt)("samp",{id:"drawer-dispatch"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.dispatch(DrawerActions.openDrawer());\nnavigation.dispatch(DrawerActions.closeDrawer());\nnavigation.dispatch(DrawerActions.toggleDrawer());\n")),(0,i.kt)("p",null,"If you would like to determine if drawer is open or closed, you can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useIsDrawerOpen } from '@react-navigation/drawer';\n\n// ...\n\nconst isDrawerOpen = useIsDrawerOpen();\n")))}v.isMDXComponent=!0}}]);