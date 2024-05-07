"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),o=a(67294),r=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,l.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,o.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function k(e){var t,a,n,r,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),k=(0,o.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:p})})),f=k[0],b=k[1],g=m({queryString:s,groupId:u}),v=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],r=a[1],[n,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=w[0],P=w[1],S=function(){var e=null!=v?v:N;return h({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){S&&b(S)}),[S]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),P(e)}),[y,P,p]),tabValues:p}}var f=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,o=c.indexOf(e.currentTarget)+1;a=null!=(n=c[o])?n:c[0];break;case"ArrowLeft":var r,i=c.indexOf(e.currentTarget)-1;a=null!=(r=c[i])?r:c[c.length-1]}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function v(e){var t=e.lazy,a=e.children,n=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===n}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},24567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=(a(74866),a(85162),["components"]),l={id:"build-guide",title:"Polkadot Developer Portal",sidebar_label:"Polkadot Developer Portal",description:"Start building with Polkadot/Kusama.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-guide"},s=void 0,u={unversionedId:"build/build-guide",id:"build/build-guide",title:"Polkadot Developer Portal",description:"Start building with Polkadot/Kusama.",source:"@site/../docs/build/build-guide.md",sourceDirName:"build",slug:"/build-guide",permalink:"/docs/build-guide",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-guide.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715081757,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"build-guide",title:"Polkadot Developer Portal",sidebar_label:"Polkadot Developer Portal",description:"Start building with Polkadot/Kusama.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-guide"},sidebar:"docs",previous:{title:"Controller Accounts",permalink:"/docs/learn/learn-controller"},next:{title:"Development Networks",permalink:"/docs/build-network-overview"}},c={},p=[{value:"Development Ecosystem Overview",id:"development-ecosystem-overview",level:2},{value:"Building Parachains",id:"building-parachains",level:2},{value:"Polkadot SDK Overview",id:"polkadot-sdk-overview",level:3},{value:"Building Parachains with Cumulus",id:"building-parachains-with-cumulus",level:4},{value:"Parachains Benefits",id:"parachains-benefits",level:4},{value:"Building a Pallet",id:"building-a-pallet",level:3},{value:"Developing Smart Contracts",id:"developing-smart-contracts",level:2},{value:"ink! and EVM-based Smart Contracts",id:"ink-and-evm-based-smart-contracts",level:3},{value:"Developing a dApp",id:"developing-a-dapp",level:2},{value:"Resources",id:"resources",level:2}],d={toc:p},h="wrapper";function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)(h,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot is a blockchain network protocol that\nprovides ",(0,r.kt)("strong",{parentName:"p"},"shared security")," among all connected parachains and allowing all connected tasks to\n",(0,r.kt)("strong",{parentName:"p"},"interoperate")," by using ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM"),"."),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk"},"Polkadot SDK")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-agile-coretime"},"Agile Coretime"),", the time it takes to develop and launch a new\nchain has dropped significantly. Depending on your goals, it may only take weeks or even days."),(0,r.kt)("p",null,"This starters guide will walk you through the steps you can take today to get started building your\nvision with Polkadot. It will also point to\nresources you can use to start building immediately."),(0,r.kt)("admonition",{title:"For Developers!",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the following documentation is more geared towards developers. If you are looking\nfor more general knowledge related to Polkadot, be sure to check out the\n",(0,r.kt)("a",{parentName:"p",href:"../learn/learn-index"},"Learn")," section.")),(0,r.kt)("p",null,"This build guide covers three different areas, taking a ",(0,r.kt)("strong",{parentName:"p"},"top-down")," approach from protocol\ndevelopment to user-facing applications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#building-parachains"},"Runtime Development - Developing parachains/blockchains")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#developing-smart-contracts"},"Smart Contract Development - How Polkadot handles smart contracts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#developing-a-dapp"},"dApp Development - The tools available for dApp development on Polkadot"))),(0,r.kt)("admonition",{title:"Keep reading to find out more, or explore each respective area",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that these areas are merely suggestive, and there are many ways to utilize\nPolkadot, Substrate, and their various\ndevelopmental components. For more inspiration, look at the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-open-source"},"open source projects")," featured here in the wiki!")),(0,r.kt)("h2",{id:"development-ecosystem-overview"},"Development Ecosystem Overview"),(0,r.kt)("mermaid",{value:"%%{\n init: {\n 'theme': 'base',\n 'themeVariables': {\n 'fontFamily': 'Unbounded',\n 'primaryColor': '#E6007A',\n 'fontSize': '16px',\n 'primaryTextColor': '#fff',\n 'primaryBorderColor': '#7C0000',\n 'lineColor': '#140523',\n 'secondaryColor': '#552BBF',\n 'tertiaryColor': '#fff'\n }\n }\n}%%\nflowchart TB\n subgraph PL [\"Protocol Land (Parachains, Smart Contracts)\"]\n\n subgraph SCD [\"Smart Contract Development\"]\n direction LR\n SC[\"Use Smart Contract Parachain\"]\n SC --\x3e ink!\n SC --\x3e Solidity\n end\n\n subgraph PSL [\"Blockchain Development\"]\n direction LR\n PS[\"Polkadot SDK\"] --\x3e R[WASM Runtime - Substrate & FRAME]\n R --\x3eParachain[\"Parachain/Task\"]--\x3eSSC[\"Shared Security - Cumulus\"]\n R --\x3eSoloChain[Solo Chain]--\x3eNSS[\"No Shared Security\"]\n end\n end\n\n PL--\x3e| Develop apps| CS\n\n subgraph CS [\"Client/User Land (dApps/uApps)\"]\n LC[\"Light Clients (Smoldot)\"]\n UA[uApp]\n UA --\x3e PAPI[Polkadot API]\n UA --\x3e PJS[Polkadot JS]\n UA --\x3e SubXT\n PAPI --\x3e LC\n PJS --\x3e LC\n SubXT --\x3e LC\n end"}),(0,r.kt)("p",null,"Before diving into the various paths one can take in developing on\nPolkadot, it's essential to realize and know key terms that make up the\nfollowing sections. Even before considering what kind of application you want to build, it's prudent\nto understand what Polkadot ",(0,r.kt)("em",{parentName:"p"},"is")," and how\nrelates to it, and what each developmental component can do for you within the Polkadot ecosystem."),(0,r.kt)("p",null,"Before diving into any one of these tracks, it is encouraged to read about\nPolkadot and its networks in order to gain\ncontext about the application you could make."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/build-network-overview"},"Take a look at the various development network options here.")),(0,r.kt)("h2",{id:"building-parachains"},"Building Parachains"),(0,r.kt)("p",null,"Polkadot is canonically referred to as the\nRelay Chain. It is also considered a ",(0,r.kt)("em",{parentName:"p"},"layer zero")," protocol, as it enables the interoperability and\nshared security of multiple ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),", which are ",(0,r.kt)("em",{parentName:"p"},"layer one"),"\nprotocols. Parachains currently connect to a relay chain using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),". More elaborate (or simpler) tasks\ncould be constructed in the future."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build 1",src:a(41227).Z,width:"1296",height:"907"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Throughout this document, you may encounter the term ",(0,r.kt)("strong",{parentName:"p"},"runtime")," or ",(0,r.kt)("strong",{parentName:"p"},"STF (State Transition\nFunction)"),". Both refer to the same concept, as they define how a particular system, i.e., a\nblockchain, should deal with state changes externally and internally. Both of these terms are used\nextensively in Polkadot and Substrate.")),(0,r.kt)("p",null,"Parachains built through the Polkadot SDK, open possibilities to construct complex ",(0,r.kt)("strong",{parentName:"p"},"runtime"),", or\n",(0,r.kt)("strong",{parentName:"p"},"STF")," (state transition function) the logic that would be too expensive to execute with smart\ncontracts. However, unlike smart contracts, parachains lack a mandatory gas metering system entirely\nand could potentially be vulnerable to bugs that cause infinite loops (something that is prevented\nby design in smart contracts). This vulnerability is mitigated by the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/build/tx-weights-fees/"},"weight system")," that is implemented in Substrate\n-- although it places more of a burden on the developer of the parachain to perform properly\nbenchmarks."),(0,r.kt)("admonition",{title:"What is an on-demand parachain?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'On-demand parachains use a "pay-as-you-go" model enabled by Agile Coretime to interact with the\nRelay Chain. On-demand parachains will only produce a block when needed, unlike full parachains,\nwhich have access to bulk coretime to produce a block at every block of the Relay Chain. When building an\non-demand parachain, you will use the same tools (like PDKs) and get all the benefits of building a\nparachain without the cost drawback of purchasing bulk coretime.')),(0,r.kt)("h3",{id:"polkadot-sdk-overview"},"Polkadot SDK Overview"),(0,r.kt)("p",null,"Polkadot is built using the Polkadot SDK, which,\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/polkadot/index.html"},"the Polkadot node/host implementation"),",\nwithin contains the source code for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Substrate")," - a set of core libraries used for constructing blockchains - mostly un-opinionated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FRAME")," - the framework used to build Substrate runtimes - more opinionated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cumulus")," - parachain/task specific functions which allow for solo chains to become compatible\nwith Polkadot")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/substrate/index.html"},"Substrate"),"\nis a highly configurable and dynamic framework for building blockchains. At a lower level, Substrate\nprovides a set of tools and libraries ranging from block production, finality gadgets to\npeer-to-peer networking. Both Polkadot and Kusama, as well as most parachains, are built using\nSubstrate."),(0,r.kt)("p",null,"In essence, Substrate can break down a blockchain's development process by providing crucial\nbuilding blocks of functionality, removing the need for re-engineering complex mechanisms that\nusually involved when developing a blockchain."),(0,r.kt)("p",null,"Substrate can be used as a basis for a parachain to connect to a relay chain like Polkadot or\nKusama, or even as a basis to form a conventional layer one solo chain."),(0,r.kt)("p",null,"Currently, the most streamlined way of utilizing Substrate is through\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/frame_runtime/index.html"},"FRAME"),",\nwhich conveniently allows for a runtime/STF to be generated from a set of modules (called\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/frame_runtime/index.html#pallets"},"pallets"),").\nRuntimes in Substrate are built using ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"WebAssembly")," (Wasm), and represent\nthe state transition function for a network. FRAME provides a framework for\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/frame_runtime/index.html#pallets"},"pallets"),",\nto construct a runtime/STF and define how your task is supposed to behave. Ranging from\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_identity/index.html"},"identity")," to\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"smart contracts"),",\npallets can be quite extensive in providing on-chain functionality."),(0,r.kt)("p",null,"Even though FRAME is heavily used, it is not the only way to create a valid runtime/STF using\nSubstrate. Substrate can be used to create new paradigms and abstractions. One such example is the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-web3-stack/open-runtime-module-library"},"Open Runtime Module Library (ORML)"),",\nwhich is another way of creating and using runtime modules."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Although most parachains utilize FRAME and Substrate to build runtime/STFs for connecting to the\nrelay chain, it is not contingent. Building a parachain using other tools is possible if they follow\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),"."),(0,r.kt)("p",{parentName:"admonition"},"As a general rule of thumb, Substrate provides the means for this to become possible through\ncomparably minimal effort.")),(0,r.kt)("h4",{id:"building-parachains-with-cumulus"},"Building Parachains with Cumulus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/cumulus/index.html"},"Cumulus"),"\nis a set of tools that allows you to convert a blockchain developed using Substrate and FRAME into a\nPolkadot-compatible Parachain. More specifically, it provides libraries for all of the necessary\nparts of the Polkadot protocol necessary for Parachains to work, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating new parachain blocks via Collators"),(0,r.kt)("li",{parentName:"ul"},"Listening to the relay chain for updates"),(0,r.kt)("li",{parentName:"ul"},"Synchronizing upgrades between the parachain and relay chain")),(0,r.kt)("p",null,"For most developers, the best place to start is to get familiar with Substrate independently,\nfollowed by FRAME, with Cumulus as the final step to understanding the entire parachain building\nprocess. This way, one can view how various paradigms are applied and decide on integrating or\nutilizing Substrate for their particular use case."),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk"},"parachain development guide")," for how to get started on building\na parachain."),(0,r.kt)("h4",{id:"parachains-benefits"},"Parachains Benefits"),(0,r.kt)("p",null,"Parachains contain their own runtime/STF logic and benefit from the shared security and the\ncross-consensus messaging provided by the Polkadot relay chain. Parachains\npermit high flexibility and customization but require more effort to create and maintain over time.\nA production-grade parachain is typically more involved to create due to the complexity involved in\nblockchain networks' technical and economic aspects."),(0,r.kt)("p",null,"Parachains grant the creators more space to build the monetary system and other chain aspects from\nthe ground up. They will allow for a more concise and efficient execution of complex logic than a\nsmart contract platform could offer. Parachains also provide more flexibility in the form of\ngovernance and can perform complete upgrades in a less controversial way than the current process of\nhard forks."),(0,r.kt)("p",null,"Some examples of features you can have on a parachain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom fee structure (for example, pay a flat transaction fee or pay per byte)."),(0,r.kt)("li",{parentName:"ul"},"Shared security and finalization via the relay chain (Polkadot or Kusama)."),(0,r.kt)("li",{parentName:"ul"},"Custom monetary policy for the native token and local economy."),(0,r.kt)("li",{parentName:"ul"},"Treasury to be funded through transitions in your state function."),(0,r.kt)("li",{parentName:"ul"},"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury.")),(0,r.kt)("h3",{id:"building-a-pallet"},"Building a Pallet"),(0,r.kt)("p",null,"While parachains are highly customizable, they are often complex to develop. If you wish to get\nfamiliar with FRAME and Substrate, a good place to start is by building a pallet in a development\nenvironment. A pallet is a fully customizable module that allows you to implement layer one logic\nwith relatively minimal development time on a fundamental level while still allowing the possibility\nof building advanced functionality into your custom chain."),(0,r.kt)("h2",{id:"developing-smart-contracts"},"Developing Smart Contracts"),(0,r.kt)("p",null,"Smart contracts are another option that enables an often simpler developer experience. Below is a\nquick comparison of how building a smart contract compares to building a parachain:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Parachains"),(0,r.kt)("th",{parentName:"tr",align:null},"Smart Contracts"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Speed of Development"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ease of Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Complexity of logic"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance overhead"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Level of customization"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Strict resource control"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Native chain features"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scalability"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("admonition",{title:"What's the difference between a smart contract and a pallet?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you recall, a parachain comprises a runtime/STF usually built on Substrate. These runtime/STFs\noften utilize FRAME, which is subsequently made of pallets. Pallets are part of a Substrate\nruntime/STF, whereas smart contracts are a product of a pallet (see:\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"pallet_contracts"),").\nPallets require more engineering and thought, as they can directly affect the chain's state."),(0,r.kt)("p",{parentName:"admonition"},"For a more comprehensive (and maintained) comparison, be sure to check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/runtime_vs_smart_contract/index.html"},"comparison from the Polkadot SDK documentation"),".")),(0,r.kt)("h3",{id:"ink-and-evm-based-smart-contracts"},"ink! and EVM-based Smart Contracts"),(0,r.kt)("p",null,"At a high level, a ",(0,r.kt)("em",{parentName:"p"},"smart contract")," is simply some code that exists at an address on a chain and is\ncallable by external actors. Whether it's ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot-evm.github.io/frontier/"},"EVM-based")," or\nwritten using ",(0,r.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink!"),", smart contracts are sandboxed, executable programs that live\non-chain."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"The Polkadot relay chain does not support smart contracts.")," However, several parachains do. See the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts#parachains"},"smart contracts guide")," for the exact chains in which you can\ndeploy contracts on Polkadot.")),(0,r.kt)("p",null,"A Polkadot-native choice for smart contracts is ",(0,r.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink!"),". Other parachains that\noffer EVM-based contracts written in Solidity alongside ink!\n",(0,r.kt)("a",{parentName:"p",href:"./build-smart-contracts#parachains"},"are also available"),"."),(0,r.kt)("p",null,"Because smart contracts exist on a single chain at a time, they can have smooth interoperability\nwith other smart contracts on the same chain. However, they will always be constrained and limited\nby the inherent characteristics of their host chain."),(0,r.kt)("p",null,"As a developer, you will need to consider the storage and complexity of your smart contract to\nensure that gas usage stays within reasonable bounds. Consider using the listed options on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-storage"},"decentralized storage")," page to keep the data and submit only the content address\non the chain."),(0,r.kt)("admonition",{title:"Building a smart contract",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contracts guide")," for how to get started on building\na smart contract.")),(0,r.kt)("h2",{id:"developing-a-dapp"},"Developing a dApp"),(0,r.kt)("p",null,"If one aims to develop a ",(0,r.kt)("strong",{parentName:"p"},"dApp")," (Decentralized App), the Polkadot ecosystem contains various SDKs\nto tap into the relay chain and parachains."),(0,r.kt)("p",null,"For front-end applications, several options exist for interfacing with Substrate-based chains\n(parachains, relay chains, etc.) and smart contracts. These often will interact with the RPC of a\nSubstrate node."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"build-dapp"},"Please visit the documentation for developing dApps and other general client-side development resources.")),(0,r.kt)("p",null,"For a complete list of tools, please take a look here:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-open-source"},"Tools, APIs, and Languages")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"System (Common Good) Parachains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot-fellows.github.io/RFCs/approved/0001-agile-coretime.html"},"Agile Coretime Fellowship RFC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/the-launch-of-parachains/"},"The Launch of Parachains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkadot-bridges-connecting-the-polkadot-ecosystem-with-external-networks-1118916392e3"},"Polkadot Bridges")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/the-path-of-a-parachain-block/"},"The Path of a Parachain Block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-path-of-a-parachain-block?utm_source=profile&utm_medium=profile_web&utm_campaign=profile"},"The Path of a Parachain Block (Video)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fYc1yolanoE"},"How to become a parachain on Polkadot (Video)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/trusted-execution-environments-and-the-polkadot-ecosystem/"},"Trusted Execution Environments and the Polkadot Ecosystem"))))}m.isMDXComponent=!0},41227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-1-706b8858ef80594b1c9d2cd9c4ce0421.png"}}]);