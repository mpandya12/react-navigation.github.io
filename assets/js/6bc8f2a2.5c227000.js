"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[44266],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),o=t(67294),r=t(72389),i=t(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(99558),u=t(86010),p="tabItem_1uMI";function c(e){var n,t,a,r=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),b=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,o.useState)(v),w=N[0],T=N[1],C=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=b[m];null!=S&&S!==w&&f.some((function(e){return e.value===S}))&&T(S)}var j=function(e){var n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==w&&(I(n),T(a),null!=m&&x(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;t=C[o]||C[C.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":w===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:j,onClick:j},null!=t?t:n)}))),r?(0,o.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(n)},e))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},56925:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=t(55064),l=t(58215),s=["components"],u={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},p=void 0,c={unversionedId:"troubleshooting",id:"version-7.x/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.",source:"@site/versioned_docs/version-7.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/7.x/troubleshooting",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/troubleshooting.md",tags:[],version:"7.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"version-7.x/docs",previous:{title:"Glossary of terms",permalink:"/docs/7.x/glossary-of-terms"},next:{title:"Limitations",permalink:"/docs/7.x/limitations"}},d=[{value:"I&#39;m getting an error &quot;Unable to resolve module&quot; after updating to the latest version",id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version",children:[{value:"Stale cache of Metro bundler",id:"stale-cache-of-metro-bundler",children:[],level:3},{value:"Missing peer dependency",id:"missing-peer-dependency",children:[],level:3},{value:"Missing extensions in metro configuration",id:"missing-extensions-in-metro-configuration",children:[],level:3}],level:2},{value:"I&#39;m getting &quot;SyntaxError in @react-navigation/xxx/xxx.tsx&quot; or &quot;SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token&quot;",id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token",children:[],level:2},{value:"I&#39;m getting &quot;Module &#39;...&#39; has no exported member &#39;xxx&#39; when using TypeScript",id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript",children:[],level:2},{value:"I&#39;m getting an error &quot;null is not an object (evaluating &#39;RNGestureHandlerModule.default.Direction&#39;)&quot;",id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection",children:[],level:2},{value:"I&#39;m getting an error &quot;requireNativeComponent: &quot;RNCSafeAreaProvider&quot; was not found in the UIManager&quot;",id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager",children:[],level:2},{value:"I&#39;m getting an error &quot;Tried to register two views with the same name RNCSafeAreaProvider&quot;",id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider",children:[],level:2},{value:"Nothing is visible on the screen after adding a <code>View</code>",id:"nothing-is-visible-on-the-screen-after-adding-a-view",children:[],level:2},{value:"I get the warning &quot;Non-serializable values were found in the navigation state&quot;",id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state",children:[],level:2},{value:"I&#39;m getting &quot;Invalid hook call. Hooks can only be called inside of the body of a function component&quot;",id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component",children:[],level:2},{value:"Screens are unmounting/remounting during navigation",id:"screens-are-unmountingremounting-during-navigation",children:[],level:2},{value:"App is not working properly when connected to Chrome Debugger",id:"app-is-not-working-properly-when-connected-to-chrome-debugger",children:[],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself."),(0,r.kt)("p",null,"Before troubleshooting an issue, make sure that you have upgraded to ",(0,r.kt)("strong",{parentName:"p"},"the latest available versions")," of the packages. You can install the latest versions by installing the packages again (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install package-name"),")."),(0,r.kt)("h2",{id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version"},'I\'m getting an error "Unable to resolve module" after updating to the latest version'),(0,r.kt)("p",null,"This might happen for 3 reasons:"),(0,r.kt)("h3",{id:"stale-cache-of-metro-bundler"},"Stale cache of Metro bundler"),(0,r.kt)("p",null,"If the module points to a local file (i.e. the name of the module starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to stale cache. To fix this, try the following solutions."),(0,r.kt)("p",null,"If you're using Expo, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"expo start -c\n")),(0,r.kt)("p",null,"If you're not using Expo, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native start --reset-cache\n")),(0,r.kt)("p",null,"If that doesn't work, you can also try the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf $TMPDIR/metro-bundler-cache-*\n")),(0,r.kt)("h3",{id:"missing-peer-dependency"},"Missing peer dependency"),(0,r.kt)("p",null,"If the module points to an npm package (i.e. the name of the module doesn't with ",(0,r.kt)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to a missing dependency. To fix this, install the dependency in your project:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install name-of-the-module\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add name-of-the-module\n")))),(0,r.kt)("p",null,"Sometimes it might even be due to a corrupt installation. If clearing cache didn't work, try deleting your ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," again."),(0,r.kt)("h3",{id:"missing-extensions-in-metro-configuration"},"Missing extensions in metro configuration"),(0,r.kt)("p",null,"Sometimes the error may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Error: While trying to resolve module "@react-navigation/native" from file "/path/to/src/App.js", the package "/path/to/node_modules/@react-navigation/native/package.json" was successfully found. However, this package itself specifies a "main" module field that could not be resolved ("/path/to/node_modules/@react-navigation/native/src/index.tsx"\n')),(0,r.kt)("p",null,"This can happen if you have a custom configuration for metro and haven't specified ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," as valid extensions. These extensions are present in the default configuration. To check if this is the issue, look for a ",(0,r.kt)("inlineCode",{parentName:"p"},"metro.config.js")," file in your project and check if you have specified the ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/docs/en/configuration#sourceexts"},(0,r.kt)("inlineCode",{parentName:"a"},"sourceExts"))," option. It should at least have the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sourceExts: ['js', 'json', 'ts', 'tsx'];\n")),(0,r.kt)("p",null,"If it's missing these extensions, add them and then clear metro cache as shown in the section above."),(0,r.kt)("h2",{id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token"},'I\'m getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"'),(0,r.kt)("p",null,"This might happen if you have an old version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"metro-react-native-babel-preset")," package. Try upgrading it to the latest version."),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev metro-react-native-babel-preset\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev metro-react-native-babel-preset\n")))),(0,r.kt)("p",null,"If you have ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," installed, also upgrade it to latest version."),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/core\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @babel/core\n")))),(0,r.kt)("p",null,"If upgrading the packages don't help, you can also try deleting your ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," as well as lock the file and reinstall your dependencies."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf node_modules\nrm package-lock.json\nnpm install\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf node_modules\nrm yarn.lock\nyarn\n")),(0,r.kt)("p",null,"After upgrading or reinstalling the packages, you should also clear Metro bundler's cache following the instructions earlier in the page."),(0,r.kt)("h2",{id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript"},"I'm getting \"Module '","[...]","' has no exported member 'xxx' when using TypeScript"),(0,r.kt)("p",null,"This might happen if you have an old version of TypeScript in your project. You can try upgrading it:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev typescript\n")))),(0,r.kt)("h2",{id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection"},"I'm getting an error \"null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')\""),(0,r.kt)("p",null,"This and some similar errors might occur if you have a bare React Native project and the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," library isn't linked."),(0,r.kt)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native unlink react-native-gesture-handler\n")),(0,r.kt)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,r.kt)("p",null,"Now rebuild the app and test on your device or simulator."),(0,r.kt)("h2",{id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager"},'I\'m getting an error "requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager"'),(0,r.kt)("p",null,"This and some similar errors might occur if you have a bare React Native project and the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," library isn't linked."),(0,r.kt)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native unlink react-native-safe-area-context\n")),(0,r.kt)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,r.kt)("p",null,"Now rebuild the app and test on your device or simulator."),(0,r.kt)("h2",{id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider"},'I\'m getting an error "Tried to register two views with the same name RNCSafeAreaProvider"'),(0,r.kt)("p",null,"This might occur if you have multiple versions of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," installed."),(0,r.kt)("p",null,"If you're using Expo managed workflow, it's likely that you have installed an incompatible version. To install the correct version, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install react-native-safe-area-context\n")),(0,r.kt)("p",null,"If it didn't fix the error or you're not using Expo managed workflow, you'll need to check which package depends on a different version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context"),"."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn why react-native-safe-area-context\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm ls react-native-safe-area-context\n")),(0,r.kt)("p",null,"This will tell you if a package you use has a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context"),". If it's a third-party package, you should open an issue on the relevant repo's issue tracker explaining the problem. Generally for libraries, dependencies containing native code should be defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," to avoid such issues."),(0,r.kt)("p",null,"If it's already in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and not in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", it might be because of incompatible version range defined for the package. The author of the library will need to relax the version range in such cases to allow a wider range of versions to be installed."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", you can also temporarily override the version being installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"resolutions"),". Add the following in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "react-native-safe-area-context": "<version you want to use>"\n}\n')),(0,r.kt)("p",null,"And then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn\n")),(0,r.kt)("p",null,"If you're on iOS and not using Expo managed workflow, also run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,r.kt)("p",null,"Now rebuild the app and test on your device or simulator."),(0,r.kt)("h2",{id:"nothing-is-visible-on-the-screen-after-adding-a-view"},"Nothing is visible on the screen after adding a ",(0,r.kt)("inlineCode",{parentName:"h2"},"View")),(0,r.kt)("p",null,"If you wrap the container in a ",(0,r.kt)("inlineCode",{parentName:"p"},"View"),", make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," stretches to fill the container using ",(0,r.kt)("inlineCode",{parentName:"p"},"flex: 1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <NavigationContainer>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n")),(0,r.kt)("h2",{id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state"},'I get the warning "Non-serializable values were found in the navigation state"'),(0,r.kt)("p",null,"This can happen if you are passing non-serializable values such as class instances, functions etc. in params. React Navigation warns you in this case because this can break other functionality such ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/state-persistence"},"state persistence"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/deep-linking"},"deep linking")," etc."),(0,r.kt)("p",null,"Example of some use cases for passing functions in params are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To pass a callback to use in a header button. This can be achieved using ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.setOptions")," instead. See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/7.x/header-buttons#header-interaction-with-its-screen-component"},"guide for header buttons")," for examples."),(0,r.kt)("li",{parentName:"ul"},"To pass a callback to the next screen which it can call to pass some data back. You can usually achieve it using ",(0,r.kt)("inlineCode",{parentName:"li"},"navigate")," instead. See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/7.x/params"},"guide for params")," for examples."),(0,r.kt)("li",{parentName:"ul"},"To pass complex data to another screen. Instead of passing the data ",(0,r.kt)("inlineCode",{parentName:"li"},"params"),", you can store that complex data somewhere else (like a global store), and pass an id instead. Then the screen can get the data from the global store using the id. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/7.x/params#what-should-be-in-params"},"what should be in params"),"."),(0,r.kt)("li",{parentName:"ul"},"Pass data, callbacks etc. from a parent to child screens. You can either use React Context, or pass a children callback to pass these down instead of using params. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/7.x/hello-react-navigation#passing-additional-props"},"passing additional props"),".")),(0,r.kt)("p",null,"If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it. To ignore the warning, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreLogs"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { LogBox } from 'react-native';\n\nLogBox.ignoreLogs([\n  'Non-serializable values were found in the navigation state',\n]);\n")),(0,r.kt)("h2",{id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component"},'I\'m getting "Invalid hook call. Hooks can only be called inside of the body of a function component"'),(0,r.kt)("p",null,"This can happen when you pass a React component to an option that accepts a function returning a react element. For example, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/native-stack-navigator#headerTitle"},(0,r.kt)("inlineCode",{parentName:"a"},"headerTitle")," option in native stack navigator")," expects a function returning a react element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{ headerTitle: (props) => <MyTitle {...props} /> }}\n/>\n')),(0,r.kt)("p",null,"If you directly pass a function here, you'll get this error when using hooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{\n    // This is not correct\n    headerTitle: MyTitle,\n  }}\n/>\n')),(0,r.kt)("p",null,"The same applies to other options like ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerRight"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarIcon")," etc. as well as props such as ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"drawerContent")," etc."),(0,r.kt)("h2",{id:"screens-are-unmountingremounting-during-navigation"},"Screens are unmounting/remounting during navigation"),(0,r.kt)("p",null,"Sometimes you might have noticed that your screens unmount/remount, or your local component state or the navigation state resets when you navigate. This might happen if you are creating React components during render."),(0,r.kt)("p",null,"The simplest example is something like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={() => {\n          return <SomeComponent />;\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," prop expects a React Component, but in the example, it's getting a function returning an React Element. While superficially a component and a function returning a React Element look the exact same, they don't behave the same way when used."),(0,r.kt)("p",null,"Here, every time the component re-renders, a new function will be created and passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," prop. React will see a new component and unmount the previous component before rendering the new one. This will cause any local state in the old component to be lost. React Navigation will detect and warn for this specific case but there can be other ways you might be creating components during render which it can't detect."),(0,r.kt)("p",null,"Another easy to identify example of this is when you create a component inside another component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"Or when you use a higher order component (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," from Redux, or ",(0,r.kt)("inlineCode",{parentName:"p"},"withX")," functions that accept a component) inside another component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={withSomeData(Home)} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"If you're unsure, it's always best to make sure that the components you are using as screens are defined outside of a React component. They could be defined in another file and imported, or defined at the top level scope in the same file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Home = () => {\n  return <SomeComponent />;\n};\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"This is not React Navigation specific, but related to React in general. You should always avoid creating components during render, whether you are using React Navigation or not."),(0,r.kt)("h2",{id:"app-is-not-working-properly-when-connected-to-chrome-debugger"},"App is not working properly when connected to Chrome Debugger"),(0,r.kt)("p",null,"When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger"},"React Native Debugger"),") you might encounter various issues related to timing."),(0,r.kt)("p",null,"This can result in issues such as button presses taking a long time to register or not working at all, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/2367"},"gestures and animations being slow and buggy")," etc. There can be other functional issues such as promises not resolving, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/4470"},"timeouts and intervals not working correctly")," etc. as well."),(0,r.kt)("p",null,"The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues."),(0,r.kt)("p",null,"So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/debugging#safari-developer-tools"},"Safari to debug your app")," which debugs the app on the device directly and does not have these issues, though it has other downsides."))}h.isMDXComponent=!0}}]);