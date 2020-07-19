(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(4),o=n(12),a=(n(0),n(400)),i={id:"index",title:"What are Plugins?"},c={id:"custom-codegen/index",isDocsHomePage:!1,title:"What are Plugins?",description:"The general purpose of GraphQL Code Generator is to parse GraphQL syntax, transform it into an AST and then output it into desired formats which can vary. Since there can be potentially infinite amount of formats, we've made it possible to build custom code generators.",source:"@site/docs/custom-codegen/index.md",permalink:"/docs/custom-codegen/index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/custom-codegen/index.md",sidebar:"sidebar",previous:{title:"Apollo Federation",permalink:"/docs/integrations/federation"},next:{title:"Write your first Plugin",permalink:"/docs/custom-codegen/write-your-plugin"}},u=[],s={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The general purpose of GraphQL Code Generator is to parse GraphQL syntax, transform it into an AST and then output it into desired formats which can vary. Since there can be potentially infinite amount of formats, we've made it possible to build custom code generators."),Object(a.b)("p",null,"The code generators are simply handlers which will respond to the parsed data and will output it based on your implementation."),Object(a.b)("p",null,"GraphQL Code Generator triggers plugins with ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, GraphQL documents and the configuration the user has passed, and expects them to return ",Object(a.b)("inlineCode",{parentName:"p"},"string")," (or, ",Object(a.b)("inlineCode",{parentName:"p"},"Promise<string>"),") and then it appends this value to the output."),Object(a.b)("p",null,"Writing your own plugins could be useful for things such as new language template, customizing existing plugin, and adding custom context to output files."),Object(a.b)("p",null,"It's easy to write and test codegen plugins, and you can learn how to write your own."))}p.isMDXComponent=!0},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);