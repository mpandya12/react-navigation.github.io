"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[78657],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73396:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},l=void 0,p={unversionedId:"headers",id:"version-4.x/headers",isDocsHomePage:!1,title:"Configuring the header bar",description:"By now you're probably tired of seeing a blank grey bar on the top of your screen &mdash; you're ready for some flair. So let's jump in to configuring the header bar.",source:"@site/versioned_docs/version-4.x/headers.md",sourceDirName:".",slug:"/headers",permalink:"/docs/4.x/headers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/headers.md",tags:[],version:"4.x",frontMatter:{id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},sidebar:"version-4.x-docs",previous:{title:"Passing parameters to routes",permalink:"/docs/4.x/params"},next:{title:"Header buttons",permalink:"/docs/4.x/header-buttons"}},d=[{value:"Setting the header title",id:"setting-the-header-title",children:[],level:2},{value:"Using params in the title",id:"using-params-in-the-title",children:[],level:2},{value:"Updating <code>navigationOptions</code> with <code>setParams</code>",id:"updating-navigationoptions-with-setparams",children:[],level:2},{value:"Adjusting header styles",id:"adjusting-header-styles",children:[],level:2},{value:"Sharing common <code>navigationOptions</code> across screens",id:"sharing-common-navigationoptions-across-screens",children:[],level:2},{value:"Overriding shared <code>navigationOptions</code>",id:"overriding-shared-navigationoptions",children:[],level:2},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",children:[],level:2},{value:"Additional configuration",id:"additional-configuration",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By now you're probably tired of seeing a blank grey bar on the top of your screen ","\u2014"," you're ready for some ",(0,o.kt)("a",{parentName:"p",href:"https://memegenerator.net/img/images/600x600/14303485/stan-flair-office-space.jpg"},"flair"),". So let's jump in to configuring the header bar."),(0,o.kt)("h2",{id:"setting-the-header-title"},"Setting the header title"),(0,o.kt)("p",null,"A screen component can have a static property called ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," which is either an object or a function that returns an object that contains various configuration options. The one we use for the header title is ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", as demonstrated in the following example."),(0,o.kt)("samp",{id:"basic-header-config"},"header title"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n  };\n\n  /* render function, etc */\n}\n\nclass DetailsScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Details',\n  };\n\n  /* render function, etc */\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," uses platform conventions by default, so on iOS the title will be centered and on Android it will be left-aligned.")),(0,o.kt)("h2",{id:"using-params-in-the-title"},"Using params in the title"),(0,o.kt)("p",null,"In order to use params in the title, we need to make ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," a function that returns a configuration object. It might be tempting to try to use ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props")," inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions"),", but because it is a static property of the component, ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," does not refer to an instance of the component and therefore no props are available. Instead, if we make ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," a function then React Navigation will call it with an object containing ",(0,o.kt)("inlineCode",{parentName:"p"},"{ navigation, navigationOptions, screenProps }")," -- in this case, all we care about is ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation"),", which is the same object that is passed to your screen props as ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.navigation"),". You may recall that we can get the params from ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," through ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.getParam")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.state.params"),", and so we do this below to extract a param and use it as a title."),(0,o.kt)("samp",{id:"params-in-title"},"params in title"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    return {\n      title: navigation.getParam('otherParam', 'A Nested Details Screen'),\n    };\n  };\n\n  /* render function, etc */\n}\n")),(0,o.kt)("p",null,"The argument that is passed in to the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," function is an object with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," - The ",(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/navigation-prop"},"navigation prop")," for the screen, with the screen's route at ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation.state"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"screenProps")," - The props passing from above the navigator component"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - The default or previous options that would be used if new values are not provided")),(0,o.kt)("p",null,"We only needed the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop in the above example but you may in some cases want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions"),"."),(0,o.kt)("h2",{id:"updating-navigationoptions-with-setparams"},"Updating ",(0,o.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," with ",(0,o.kt)("inlineCode",{parentName:"h2"},"setParams")),(0,o.kt)("p",null,"It's often necessary to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," configuration for the active screen from the mounted screen component itself. We can do this using ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.navigation.setParams")),(0,o.kt)("samp",{id:"updating-options-with-setparams"},"updating navigationOptions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* Inside of render() */\n<Button\n  title=\"Update the title\"\n  onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}\n/>\n")),(0,o.kt)("h2",{id:"adjusting-header-styles"},"Adjusting header styles"),(0,o.kt)("p",null,"There are three key properties to use when customizing the style of your header: ",(0,o.kt)("inlineCode",{parentName:"p"},"headerStyle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTintColor"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headerStyle"),": a style object that will be applied to the ",(0,o.kt)("inlineCode",{parentName:"li"},"View")," that wraps the header. If you set ",(0,o.kt)("inlineCode",{parentName:"li"},"backgroundColor")," on it, that will be the color of your header."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headerTintColor"),": the back button and title both use this property as their color. In the example below, we set the tint color to white (",(0,o.kt)("inlineCode",{parentName:"li"},"#fff"),") so the back button and the header title would be white."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headerTitleStyle"),": if we want to customize the ",(0,o.kt)("inlineCode",{parentName:"li"},"fontFamily"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"fontWeight")," and other ",(0,o.kt)("inlineCode",{parentName:"li"},"Text")," style properties for the title, we can use this to do it.")),(0,o.kt)("samp",{id:"header-styles"},"header styles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    headerStyle: {\n      backgroundColor: '#f4511e',\n    },\n    headerTintColor: '#fff',\n    headerTitleStyle: {\n      fontWeight: 'bold',\n    },\n  };\n\n  /* render function, etc */\n}\n")),(0,o.kt)("p",null,"There are a couple of things to notice here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On iOS, the status bar text and icons are black, and this doesn't look great over a dark-colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors ",(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/status-bar"},"as described in the status bar guide"),"."),(0,o.kt)("li",{parentName:"ol"},"The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share ",(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," between screens now.")),(0,o.kt)("h2",{id:"sharing-common-navigationoptions-across-screens"},"Sharing common ",(0,o.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," across screens"),(0,o.kt)("p",null,"It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using in our running example, and you'll notice that when you navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," the colors go back to the defaults. Wouldn't it be awful if we had to copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," header style properties from ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),", and for every single screen component we use in our app? Thankfully, we do not. We can instead move the configuration up to the stack navigator under the property ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultNavigationOptions"),"."),(0,o.kt)("samp",{id:"sharing-header-styles"},"sharing header styles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    /* No more header config here! */\n  };\n\n  /* render function, etc */\n}\n\n/* other code... */\n\nconst AppNavigator = createStackNavigator(\n  {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n  {\n    initialRouteName: 'Home',\n    /* The header config from HomeScreen is now here */\n    defaultNavigationOptions: {\n      headerStyle: {\n        backgroundColor: '#f4511e',\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold',\n      },\n    },\n  }\n);\n")),(0,o.kt)("p",null,"Now, any screen that belongs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootStack")," will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: In v2 and below, the property you would want to use to do this is ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions"),". In v3 we've renamed this to ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultNavigationOptions"),".")),(0,o.kt)("p",null,"The property ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," can be used to configure the navigator itself:"),(0,o.kt)("samp",{id:"navigation-options-config"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Home = createStackNavigator(\n  {\n    Feed: ExampleScreen,\n    Profile: ExampleScreen,\n  },\n  {\n    defaultNavigationOptions: {\n      headerTintColor: '#fff',\n      headerStyle: {\n        backgroundColor: '#000',\n      },\n    },\n    navigationOptions: {\n      tabBarLabel: 'Home!',\n    },\n  }\n);\n\nconst Tabs = createBottomTabNavigator({ Home });\n")),(0,o.kt)("h2",{id:"overriding-shared-navigationoptions"},"Overriding shared ",(0,o.kt)("inlineCode",{parentName:"h2"},"navigationOptions")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," specified on your screen component are merged together with the default navigation options of its parent stack navigator, with the options on the screen component taking precedence. Let's use this knowledge to invert the background and tint colors on the details screen."),(0,o.kt)("samp",{id:"overriding-shared-styles"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation, navigationOptions }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n      /* These values are used instead of the shared configuration! */\n      headerStyle: {\n        backgroundColor: navigationOptions.headerTintColor,\n      },\n      headerTintColor: navigationOptions.headerStyle.backgroundColor,\n    };\n  };\n\n  /* render function, etc */\n}\n")),(0,o.kt)("h2",{id:"replacing-the-title-with-a-custom-component"},"Replacing the title with a custom component"),(0,o.kt)("p",null,"Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own."),(0,o.kt)("samp",{id:"custom-header-title-component"},"custom header title component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class LogoTitle extends React.Component {\n  render() {\n    return (\n      <Image\n        source={require('./spiro.png')}\n        style={{ width: 30, height: 30 }}\n      />\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    // headerTitle instead of title\n    headerTitle: () => <LogoTitle />,\n  };\n\n  /* render function, etc */\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You might be wondering, why ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," when we provide a component and not ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", like before? The reason is that ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," is a property that is specific to a stack navigator, the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," defaults to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component that displays the ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),".")),(0,o.kt)("h2",{id:"additional-configuration"},"Additional configuration"),(0,o.kt)("p",null,"You can read the full list of available ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for screens inside of a stack navigator in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/stack-navigator#navigationoptions-used-by-stacknavigator"},(0,o.kt)("inlineCode",{parentName:"a"},"createStackNavigator")," reference"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can customize the header inside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," static property on your screen components. Read the full list of options ",(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/stack-navigator#navigationoptions-used-by-stacknavigator"},"in the API reference"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," static property can be an object or a function. When it is a function, it is provided with an object with the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop, ",(0,o.kt)("inlineCode",{parentName:"li"},"screenProps"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," on it."),(0,o.kt)("li",{parentName:"ul"},"You can also specify shared ",(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," in the stack navigator configuration when you initialize it. The static property takes precedence over that configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#example/custom-header-title-component"},"Full source of what we have built so far"),".")))}h.isMDXComponent=!0}}]);