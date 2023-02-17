"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[79720],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=i,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"navigation-key",title:"Using the navigation key",sidebar_label:"Using the navigation key"},s=void 0,p={unversionedId:"navigation-key",id:"version-4.x/navigation-key",isDocsHomePage:!1,title:"Using the navigation key",description:"The key parameter comes up repeatedly across different navigation functions. Let's take a look at a summary of its use cases:",source:"@site/versioned_docs/version-4.x/navigation-key.md",sourceDirName:".",slug:"/navigation-key",permalink:"/docs/4.x/navigation-key",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-key.md",tags:[],version:"4.x",frontMatter:{id:"navigation-key",title:"Using the navigation key",sidebar_label:"Using the navigation key"},sidebar:"version-4.x-docs",previous:{title:"Navigating without the navigation prop",permalink:"/docs/4.x/navigating-without-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/4.x/deep-linking"}},c=[{value:"Usage with the navigate call",id:"usage-with-the-navigate-call",children:[],level:3},{value:"Usage with reset",id:"usage-with-reset",children:[],level:3},{value:"Usage with replace",id:"usage-with-replace",children:[],level:3},{value:"Usage with <code>goBack</code>",id:"usage-with-goback",children:[],level:3}],u={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter comes up repeatedly across different navigation functions. Let's take a look at a summary of its use cases:"),(0,r.kt)("h3",{id:"usage-with-the-navigate-call"},"Usage with the ",(0,r.kt)("a",{parentName:"h3",href:"/docs/4.x/navigation-actions#navigate"},(0,r.kt)("inlineCode",{parentName:"a"},"navigate"))," call"),(0,r.kt)("p",null,"If no key is provided, ",(0,r.kt)("inlineCode",{parentName:"p"},"StackRouter")," will behave as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if a route with the given name already exists in the state, ",(0,r.kt)("inlineCode",{parentName:"li"},"StackRouter")," will jump to the existing route, along with setting the new parameters."),(0,r.kt)("li",{parentName:"ul"},"if no such route exists, ",(0,r.kt)("inlineCode",{parentName:"li"},"StackRouter")," will push it onto the stack")),(0,r.kt)("p",null,"If, however, you want to push several instances of the same route, you can do so by providing a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," parameter each time you call ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),", or you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," action available on ",(0,r.kt)("inlineCode",{parentName:"p"},"StackRouter"),". See the related ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/rfcs/blob/master/text/0004-less-pushy-navigate.md"},"RFC")," for more background."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," without a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is significantly different in the 1.x series of releases. Read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/vonovak/ef72f5efe1d36742de8968ff6a708985"},"here"),".")),(0,r.kt)("h3",{id:"usage-with-reset"},"Usage with ",(0,r.kt)("a",{parentName:"h3",href:"/docs/4.x/navigation-actions#reset"},(0,r.kt)("inlineCode",{parentName:"a"},"reset"))),(0,r.kt)("p",null,"When resetting, ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is also optional and can be a string or ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". If set, the navigator with the given key will reset. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", the root navigator will reset. You can obtain a route's navigator key by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.navigation.dangerouslyGetParent().state.key"),". Reason why the function is called ",(0,r.kt)("inlineCode",{parentName:"p"},"dangerouslyGetParent")," is to warn developers against overusing it to eg. get parent of parent and other hard-to-follow patterns."),(0,r.kt)("h3",{id:"usage-with-replace"},"Usage with ",(0,r.kt)("a",{parentName:"h3",href:"/docs/4.x/navigation-actions#replace"},(0,r.kt)("inlineCode",{parentName:"a"},"replace"))),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," navigation action, ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is a required parameter used for identifying the route to be replaced. If you use the helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.navigation.replace"),", we will automatically substitute the key of the current route."),(0,r.kt)("h3",{id:"usage-with-goback"},"Usage with ",(0,r.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/navigation-prop#goback-close-the-active-screen-and-move-back"},(0,r.kt)("inlineCode",{parentName:"a"},"goBack docs"))," for a detailed explanation."))}g.isMDXComponent=!0}}]);