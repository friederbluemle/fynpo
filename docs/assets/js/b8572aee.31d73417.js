(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(93)),c={id:"prepare",title:"fynpo prepare"},p={unversionedId:"commands/prepare",id:"commands/prepare",isDocsHomePage:!1,title:"fynpo prepare",description:"Install fynpo-cli for global access of fynpo command",source:"@site/docs/commands/prepare.md",sourceDirName:"commands",slug:"/commands/prepare",permalink:"/fynpo/docs/commands/prepare",editUrl:"https://github.com/electrode-io/fynpo/tree/master/docusaurus/docs/docs/commands/prepare.md",version:"current",frontMatter:{id:"prepare",title:"fynpo prepare"},sidebar:"someSidebar",previous:{title:"fynpo changelog",permalink:"/fynpo/docs/commands/changelog"},next:{title:"fynpo publish",permalink:"/fynpo/docs/commands/publish-cmd"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],s={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Install ",Object(o.b)("a",{parentName:"p",href:"/docs/packages#fynpo-cli"},"fynpo-cli")," for global access of fynpo command"))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"fynpo prepare\n")),Object(o.b)("p",null,"Read changed packages and their versions from ",Object(o.b)("inlineCode",{parentName:"p"},"CHANGELOG.md"),", modify package metadata to reflect new release, commit and tag the changes."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"--no-commit"))),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"fynpo prepare")," will commit the changes to packages with the commit message ",Object(o.b)("inlineCode",{parentName:"p"},"[Publish]..."),". Pass ",Object(o.b)("inlineCode",{parentName:"p"},"--no-commit")," to disable this behavior."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"fynpo prepare --no-commit\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"--tag"))),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"--tag")," option is passed, ",Object(o.b)("inlineCode",{parentName:"p"},"prepare")," will create individual tags for each changed packages."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"fynpo prepare --tag\n")))}l.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(t),b=r,u=m["".concat(c,".").concat(b)]||m[b]||d[b]||o;return t?a.a.createElement(u,p(p({ref:n},s),{},{components:t})):a.a.createElement(u,p({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);