"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[93089,71102],{46165:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(63366),r=a(67294),l=a(86010),i=a(16823),o=a(36742),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,v),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},44428:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(52263),l=a(46165),i=a(94884),o=a(36742),s=a(24973);var c=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(99558);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,s=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?s:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(c,{metadata:t}))}},94884:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),o=a(36742),s=a(44996),c=a(99558),m=a(90304),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(87682),v="image_1yU8";var f=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",b),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,v,f,b=(v=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,P=e.metadata,C=e.truncated,T=e.isBlogPostPage,w=void 0!==T&&T,x=P.date,M=P.formattedDate,y=P.permalink,I=P.tags,R=P.readingTime,S=P.title,U=P.editUrl,L=P.authors,A=null!=(t=k.image)?t:N.image,B=!w&&C,O=I.length>0;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=w?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d,itemProp:"headline"},w?S:n.createElement(o.Z,{itemProp:"url",to:y},S)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:x,itemProp:"datePublished"},M),void 0!==R&&n.createElement(n.Fragment,null," \xb7 ",b(R))),n.createElement(E,{authors:L,assets:k}))),A&&n.createElement("meta",{itemProp:"image",content:_(A,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},Z)),(O||C)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=w,a))},O&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":B})},n.createElement(h.Z,{tags:I})),w&&U&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:U})),B&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":O})},n.createElement(o.Z,{to:P.permalink,"aria-label":"Read more about "+S},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(24973),l=a(87462),i=a(63366),o=a(86010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(99558);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},37211:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(36742),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},87682:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(24973),i=a(37211),o="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}},6979:function(e,t,a){var n=a(87462),r=a(63366),l=a(67294),i=a(73935),o=a(52263),s=a(5977),c=a(44996),m=a(36742),u=a(99105),d=a(6397),g=a(57052),p=a(16747),h=a(95613),v=a(10412),f=a(24973),b=["contextualSearch"],E=null,_=["1.x","2.x","3.x","4.x","5.x"];function Z(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function N(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function k(e){var t,m,d,v,k=e.contextualSearch,P=(0,r.Z)(e,b),C=(0,o.Z)().siteMetadata,T=(0,h.Z)(),w=null!=(t=null==(m=P.searchParameters)?void 0:m.facetFilters)?t:[],x=k?[].concat(T,w):w,M=(d=window.location.href,(v=_.findIndex((function(e){return d.includes(e)})))>=0?_[v]:"6.x");x=[].concat(x,["version:"+M]);var y=Object.assign({},P.searchParameters,{facetFilters:x}),I=(0,c.C)().withBaseUrl,R=(0,s.k6)(),S=(0,l.useRef)(null),U=(0,l.useRef)(null),L=(0,l.useState)(!1),A=L[0],B=L[1],O=(0,l.useState)(null),F=O[0],D=O[1],j=(0,l.useCallback)((function(){return E?Promise.resolve():Promise.all([a.e(44300).then(a.bind(a,44300)),Promise.all([a.e(40532),a.e(46945)]).then(a.bind(a,46945)),Promise.all([a.e(40532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),q=(0,l.useCallback)((function(){j().then((function(){S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),B(!0)}))}),[j,B]),z=(0,l.useCallback)((function(){B(!1),S.current.remove()}),[B]),H=(0,l.useCallback)((function(e){j().then((function(){B(!0),D(e.key)}))}),[j,B,D]),V=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;R.push(t)}}).current,Y=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:I(""+t.pathname+t.hash)})}))})).current,G=(0,l.useMemo)((function(){return function(e){return l.createElement(N,(0,n.Z)({},e,{onClose:z}))}}),[z]),Q=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",C.docusaurusVersion),e}),[C.docusaurusVersion]);(0,g.D)({isOpen:A,onOpen:q,onClose:z,onInput:H,searchButtonRef:U});var W=(0,f.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+P.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(p.a,{onTouchStart:j,onFocus:j,onMouseOver:j,onClick:q,ref:U,translations:{buttonText:W,buttonAriaLabel:W}}),A&&(0,i.createPortal)(l.createElement(E,(0,n.Z)({onClose:z,initialScrollY:window.scrollY,initialQuery:F,navigator:V,transformItems:Y,hitComponent:Z,resultsFooterComponent:G,transformSearchClient:Q},P,{searchParameters:y})),S.current))}t.Z=function(){if(!v.default.canUseDOM)return null;var e=(0,o.Z)().siteConfig;return l.createElement(k,e.themeConfig.algolia)}}}]);