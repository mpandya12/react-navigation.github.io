"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[53508],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(b,r(r({ref:t},u),{},{components:a})):n.createElement(b,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),o=a(67294),i=a(72389),r=a(79443);var l=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(99558),c=a(86010),u="tabItem_1uMI";function p(e){var t,a,n,i=e.lazy,r=e.block,p=e.defaultValue,d=e.values,m=e.groupId,b=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,o.useState)(k),T=C[0],w=C[1],x=[],B=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=N[m];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&w(I)}var O=function(e){var t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==T&&(B(t),w(n),null!=m&&y(m,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;a=x[o]||x[x.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},b)},v.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:O,onClick:O},null!=a?a:t)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},19887:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return b}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(55064),l=a(58215),s=["components"],c={id:"material-bottom-tab-navigator",title:"Material Bottom Tabs Navigator",sidebar_label:"Material Bottom Tabs"},u=void 0,p={unversionedId:"material-bottom-tab-navigator",id:"version-5.x/material-bottom-tab-navigator",isDocsHomePage:!1,title:"Material Bottom Tabs Navigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/material-bottom-tab-navigator.md",sourceDirName:".",slug:"/material-bottom-tab-navigator",permalink:"/docs/5.x/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/material-bottom-tab-navigator.md",tags:[],version:"5.x",frontMatter:{id:"material-bottom-tab-navigator",title:"Material Bottom Tabs Navigator",sidebar_label:"Material Bottom Tabs"},sidebar:"version-5.x/docs",previous:{title:"Bottom Tabs",permalink:"/docs/5.x/bottom-tab-navigator"},next:{title:"Material Top Tabs",permalink:"/docs/5.x/material-top-tab-navigator"}},d=[{value:"API Definition",id:"api-definition",children:[],level:2},{value:"RouteConfigs",id:"routeconfigs",children:[{value:"Props",id:"props",children:[{value:"<code>initialRouteName</code>",id:"initialroutename",children:[],level:4},{value:"<code>screenOptions</code>",id:"screenoptions",children:[],level:4},{value:"<code>backBehavior</code>",id:"backbehavior",children:[],level:4},{value:"<code>shifting</code>",id:"shifting",children:[],level:4},{value:"<code>labeled</code>",id:"labeled",children:[],level:4},{value:"<code>activeColor</code>",id:"activecolor",children:[],level:4},{value:"<code>inactiveColor</code>",id:"inactivecolor",children:[],level:4},{value:"<code>barStyle</code>",id:"barstyle",children:[],level:4}],level:3},{value:"Options",id:"options",children:[{value:"<code>title</code>",id:"title",children:[],level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",children:[],level:4},{value:"<code>tabBarColor</code>",id:"tabbarcolor",children:[],level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",children:[],level:4},{value:"<code>tabBarBadge</code>",id:"tabbarbadge",children:[],level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",children:[],level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",children:[],level:4}],level:3},{value:"Events",id:"events",children:[{value:"<code>tabPress</code>",id:"tabpress",children:[],level:4}],level:3},{value:"Helpers",id:"helpers",children:[{value:"<code>jumpTo</code>",id:"jumpto",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[],level:2}],m={toc:d};function b(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."),(0,i.kt)("p",null,"This wraps the ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"},(0,i.kt)("inlineCode",{parentName:"a"},"BottomNavigation"))," component from ",(0,i.kt)("a",{parentName:"p",href:"https://reactnativepaper.com"},(0,i.kt)("inlineCode",{parentName:"a"},"react-native-paper")),". If you ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},"configure the Babel plugin"),", it won't include the whole ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle."),(0,i.kt)("img",{src:"/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),(0,i.kt)("p",null,"To use this navigator, ensure that you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-bottom-tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/material-bottom-tabs")),":"),(0,i.kt)(r.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/material-bottom-tabs@^5.x react-native-paper react-native-vector-icons\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/material-bottom-tabs@^5.x react-native-paper react-native-vector-icons\n")))),(0,i.kt)("p",null,"This API also requires that you install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo managed workflow, it will work without any extra steps. Otherwise, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#installation"},"follow these installation instructions"),"."),(0,i.kt)("p",null,"To use this tab navigator, import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs")),(0,i.kt)("h2",{id:"api-definition"},"API Definition"),(0,i.kt)("p",null,"To use this tab navigator, import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs"),":"),(0,i.kt)("samp",{id:"material-tab-based-navigation-minimal"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/tab-based-navigation"},"Tab Navigation"))),(0,i.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,i.kt)("p",null,"The route configs object is a mapping from route name to a route config."),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),(0,i.kt)("h4",{id:"initialroutename"},(0,i.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,i.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,i.kt)("h4",{id:"screenoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,i.kt)("p",null,"Default options to use for the screens in the navigator."),(0,i.kt)("h4",{id:"backbehavior"},(0,i.kt)("inlineCode",{parentName:"h4"},"backBehavior")),(0,i.kt)("p",null,"Behavior of back button handling."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none")," to not handle back button")),(0,i.kt)("h4",{id:"shifting"},(0,i.kt)("inlineCode",{parentName:"h4"},"shifting")),(0,i.kt)("p",null,"Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label."),(0,i.kt)("p",null,"By default, this is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when you have more than 3 tabs. Pass ",(0,i.kt)("inlineCode",{parentName:"p"},"shifting={false}")," to explicitly disable this animation, or ",(0,i.kt)("inlineCode",{parentName:"p"},"shifting={true}")," to always use this animation."),(0,i.kt)("h4",{id:"labeled"},(0,i.kt)("inlineCode",{parentName:"h4"},"labeled")),(0,i.kt)("p",null,"Whether to show labels in tabs. When ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", only icons will be displayed."),(0,i.kt)("h4",{id:"activecolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"activeColor")),(0,i.kt)("p",null,"Custom color for icon and label in the active tab."),(0,i.kt)("h4",{id:"inactivecolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"inactiveColor")),(0,i.kt)("p",null,"Custom color for icon and label in the inactive tab."),(0,i.kt)("h4",{id:"barstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"barStyle")),(0,i.kt)("p",null,"Style for the bottom navigation bar. You can pass custom background color here:"),(0,i.kt)("samp",{id:"material-bottom-tab-styled"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),(0,i.kt)("p",null,"If you have a translucent navigation bar on Android, you can also set a bottom padding here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ paddingBottom: 48 }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("p",null,"The following ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Generic title that can be used as a fallback for ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,i.kt)("h4",{id:"tabbaricon"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,i.kt)("p",null,"Function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),(0,i.kt)("h4",{id:"tabbarcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarColor")),(0,i.kt)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",(0,i.kt)("inlineCode",{parentName:"p"},"shifting")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h4",{id:"tabbarlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,i.kt)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,i.kt)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),(0,i.kt)("h4",{id:"tabbarbadge"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarBadge")),(0,i.kt)("p",null,"Badge to show on the tab icon, can be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to show a dot, ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," to show text."),(0,i.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,i.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,i.kt)("h4",{id:"tabbartestid"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,i.kt)("p",null,"ID to locate this tab button in tests."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"The navigator can ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,i.kt)("h4",{id:"tabpress"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabPress")),(0,i.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),(0,i.kt)("li",{parentName:"ul"},"If the tab is already focused:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",(0,i.kt)("a",{parentName:"li",href:"/docs/5.x/use-scroll-to-top"},(0,i.kt)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),(0,i.kt)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",(0,i.kt)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),(0,i.kt)("p",null,"To prevent the default behavior, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),(0,i.kt)("samp",{id:"material-bottom-tab-prevent-default"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,i.kt)("h3",{id:"helpers"},"Helpers"),(0,i.kt)("p",null,"The tab navigator adds the following methods to the navigation prop:"),(0,i.kt)("h4",{id:"jumpto"},(0,i.kt)("inlineCode",{parentName:"h4"},"jumpTo")),(0,i.kt)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,i.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",(0,i.kt)("inlineCode",{parentName:"li"},"route.params"),").")),(0,i.kt)("samp",{id:"material-tab-jump-to"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("samp",{id:"material-bottom-tab-example"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      barStyle={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="home" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="account" color={color} size={26} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')),(0,i.kt)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),(0,i.kt)("p",null,"You can use the theming support in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")," from ",(0,i.kt)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/theming.html"},"instructions on ",(0,i.kt)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}b.isMDXComponent=!0}}]);