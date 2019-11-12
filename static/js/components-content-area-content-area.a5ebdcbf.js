(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/ContentArea/ContentArea.less":function(e,n,t){},"./src/components/ContentArea/ContentArea.mdx":function(e,n,t){"use strict";t.r(n);var o=t("../../node_modules/react/index.js"),r=t.n(o),a=t("../../node_modules/@mdx-js/tag/dist/index.js"),c=t("../../node_modules/docz/dist/index.m.js"),i=(t("./src/components/ContentArea/ContentArea.less"),t("./src/utils/cn.ts"));function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var m=Object(i.a)("mfui-content-area"),u=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,o["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.outerBackgroundColor,t=e.innerBackgroundColor,r=e.innerPadding,a=e.children;return o.createElement("div",{className:m("",{color:n})},o.createElement("div",{className:m("inner",{padding:r,color:t})},a))}}])&&l(t.prototype,r),a&&l(t,a),n}();Object.defineProperty(u,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{outerBackgroundColor:"transparent",innerBackgroundColor:"transparent",innerPadding:"lg"}});var f=u;try{u.displayName="ContentArea",u.__docgenInfo={description:"",displayName:"ContentArea",props:{outerBackgroundColor:{defaultValue:{value:"transparent"},description:"Background color of the external container",name:"outerBackgroundColor",required:!1,type:{name:'"white" | "transparent"'}},innerBackgroundColor:{defaultValue:{value:"transparent"},description:"Background color of the internal container",name:"innerBackgroundColor",required:!1,type:{name:'"white" | "transparent"'}},innerPadding:{defaultValue:{value:"lg"},description:"Side paddings of the internal container",name:"innerPadding",required:!1,type:{name:'"lg" | "none"'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentArea/ContentArea.tsx#ContentArea"]={docgenInfo:u.__docgenInfo,name:"ContentArea",path:"src/components/ContentArea/ContentArea.tsx#ContentArea"})}catch(e){}function g(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"playgroundStyle",function(){return h});var h={backgroundColor:"#E5F5EE",paddingLeft:"0",paddingRight:"0"};n.default=function(e){var n=e.components;g(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"contentarea"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#contentarea"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"ContentArea"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),r.a.createElement(c.e,{of:f}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),r.a.createElement(c.d,{__position:1,__code:"<ContentArea>Some content</ContentArea>",style:h},r.a.createElement(f,null,"Some content")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"difference-between-screen-background-color-and-external-container-background-color"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#difference-between-screen-background-color-and-external-container-background-color"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Difference between screen background color and external container background color"),r.a.createElement(c.d,{__position:2,__code:"<ContentArea outerBackgroundColor=\"white\">\n  In case of small screen use button 'maximize' on the right button corner to\n  see the difference\n</ContentArea>",style:h},r.a.createElement(f,{outerBackgroundColor:"white"},"In case of small screen use button 'maximize' on the right button corner to see the difference")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"difference-between-screen-background-color-and-internal-container-background-color"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#difference-between-screen-background-color-and-internal-container-background-color"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Difference between screen background color and internal container background color"),r.a.createElement(c.d,{__position:3,__code:"<ContentArea innerBackgroundColor=\"white\">\n  In case of small screen use button 'maximize' on the right button corner to\n  see the difference\n</ContentArea>",style:h},r.a.createElement(f,{innerBackgroundColor:"white"},"In case of small screen use button 'maximize' on the right button corner to see the difference")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"none-padding-usage"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#none-padding-usage"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"None-padding usage"),r.a.createElement(c.d,{__position:4,__code:'<ContentArea innerPadding="none" innerBackgroundColor="white">\n  Some content\n</ContentArea>',style:h},r.a.createElement(f,{innerPadding:"none",innerBackgroundColor:"white"},"Some content")))}}}]);