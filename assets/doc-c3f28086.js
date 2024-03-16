import{d as B,ab as g,p as R,o,b as m,X as k,g as x,a2 as P,ae as S,a7 as H,e,n as i,Z as s,a5 as D,f as b,P as N,t as Y,N as w,z as F,k as y,w as t,i as r,j as l,F as V,a as p}from"./index-59dc8a0f.js";import{_ as j}from"./index-b4d00658.js";const v=Symbol("breadcrumbName"),z={class:"yk-breadcrumb"},O=B({name:"YkBreadcrumb",__name:"breadcrumb",props:{separator:{default:"/"}},setup(d){const u=d,a=g();return R(v,{props:u,slots:a}),(n,c)=>(o(),m("div",z,[k(n.$slots,"default"),x("",!0)]))}}),M=["onClick"],T={key:0,href:"/",class:"n-link"},X={key:1},Z=B({name:"YkBreadcrumbItem",__name:"breadcrumb-item",props:{to:{}},setup(d){const u=d,a=P("breadcrumb"),n=w(),c=S(v),{props:{separator:_},slots:I}=H(c),E=I.separator,A=n.appContext.config.globalProperties.$router,$=()=>{!u.to||!A||A.push(u.to)};return(h,ce)=>(o(),m("span",{class:i(s(a)("item"))},[e("span",{class:i(s(a)("inner")),onClick:D($,["prevent","stop"])},[u.to?(o(),m("a",T,[k(h.$slots,"default")])):k(h.$slots,"default",{key:1})],10,M),e("span",{class:i(s(a)("separator"))},[s(E)?(o(),b(N(s(E)),{key:0})):(o(),m("span",X,Y(s(_)),1))],2)],2))}}),C=F(O),f=F(Z),q={};function G(d,u){const a=f,n=C;return o(),b(n,null,{default:t(()=>[r(a,null,{default:t(()=>[l("Home")]),_:1}),r(a,null,{default:t(()=>[l("Button")]),_:1}),r(a,null,{default:t(()=>[l("Rate")]),_:1})]),_:1})}const J=y(q,[["render",G]]),K={};function L(d,u){const a=f,n=C,c=j;return o(),m(V,null,[r(n,{separator:">"},{default:t(()=>[r(a,null,{default:t(()=>[l("Home")]),_:1}),r(a,null,{default:t(()=>[l("Button")]),_:1}),r(a,null,{default:t(()=>[l("Rate")]),_:1})]),_:1}),r(n,null,{separator:t(()=>[r(c)]),default:t(()=>[r(a,null,{default:t(()=>[l("Home")]),_:1}),r(a,null,{default:t(()=>[l("Button")]),_:1}),r(a,null,{default:t(()=>[l("Rate")]),_:1})]),_:1})],64)}const Q=y(K,[["render",L]]),U={};function W(d,u){const a=f,n=C;return o(),b(n,null,{default:t(()=>[r(a,{to:"/"},{default:t(()=>[l("Home")]),_:1}),r(a,{to:"/module/button"},{default:t(()=>[l("Button")]),_:1}),r(a,null,{default:t(()=>[l("Rate")]),_:1})]),_:1})}const ee=y(U,[["render",W]]),te=e("p",null,"面包屑的基本用法。",-1),re=e("p",null,[l("通过 "),e("code",null,"separator"),l(" 属性或插槽自定义分隔符。也可以通过"),e("code",null,"separatorIcon"),l("指定"),e("code",null,"yk-icon"),l("组件里的图标")],-1),le=e("p",null,[l("通过 "),e("code",null,"to"),l(" 属性控制路由跳转。同"),e("code",null,"vue-router"),l(" 的 "),e("code",null,"to"),l(" 属性")],-1),ae=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"separator"),e("td",null,"分隔符"),e("td",null,"string"),e("td",null,"/")]),e("tr",null,[e("td",null,"separatorIcon"),e("td",null,"图标分隔符"),e("td",null,"string"),e("td",null,"-")])])])],-1),ne=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"子标签")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容"),e("td",null,"BreadcrumbItem")]),e("tr",null,[e("td",null,"separator"),e("td",null,"自定义分割符"),e("td",null,"-")])])])],-1),ue=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"to"),e("td",null,"路由跳转目标，同 vue-router 的 to 属性"),e("td",null,"string / object"),e("td",null,"-")])])])],-1),oe=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容")])])])],-1),me={__name:"doc",setup(d){return(u,a)=>{const n=p("yk-title"),c=p("yk-snippet"),_=p("DocPage");return o(),b(_,null,{default:t(()=>[r(n,{level:2,id:"YkBreadcrumb-面包屑"},{default:t(()=>[l("YkBreadcrumb 面包屑")]),_:1}),r(c,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(J)]),desc:t(()=>[te]),_:1}),r(c,{title:"自定义分隔符",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%20separator%3D%22%3E%22%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%20%20%3C!--%20%3Cyk-breadcrumb%20separator-icon%3D%22yk-xiexian%22%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%20--%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Ctemplate%20%23separator%3E%0A%20%20%20%20%20%20%3CIconRightOutline%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(Q)]),desc:t(()=>[re]),_:1}),r(c,{title:"路由跳转",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%20to%3D%22%2F%22%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%20to%3D%22%2Fmodule%2Fbutton%22%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(ee)]),desc:t(()=>[le]),_:1}),r(n,{level:3,id:"API"},{default:t(()=>[l("API")]),_:1}),r(n,{level:4,id:"Breadcrumb-Attributes"},{default:t(()=>[l("Breadcrumb Attributes")]),_:1}),ae,r(n,{level:4,id:"Breadcrumb-Slots"},{default:t(()=>[l("Breadcrumb Slots")]),_:1}),ne,r(n,{level:3,id:"BreadcrumbItem-API"},{default:t(()=>[l("BreadcrumbItem API")]),_:1}),r(n,{level:4,id:"BreadcrumbItem-Attributes"},{default:t(()=>[l("BreadcrumbItem Attributes")]),_:1}),ue,r(n,{level:4,id:"BreadcrumbItem-Slots"},{default:t(()=>[l("BreadcrumbItem Slots")]),_:1}),oe]),_:1})}}};export{me as default};
