import{d as B,eb as g,p as x,o,b as m,dH as k,g as R,dS as S,ee as H,e5 as P,e,n as i,dx as s,dV as D,f as b,dy as N,t as Y,dv as V,dL as F,m as y,w as t,i as r,j as l,F as w,ef as j,a as p}from"./index-da6cc329.js";const v=Symbol("breadcrumbName"),O={class:"yk-breadcrumb"},z=B({name:"YkBreadcrumb",__name:"breadcrumb",props:{separator:{default:"/"}},setup(d){const u=d,n=g();return x(v,{props:u,slots:n}),(a,c)=>(o(),m("div",O,[k(a.$slots,"default"),R("",!0)]))}}),L=["onClick"],M={key:0,href:"/",class:"n-link"},T={key:1},q=B({name:"YkBreadcrumbItem",__name:"breadcrumb-item",props:{to:{}},setup(d){const u=d,n=S("breadcrumb"),a=V(),c=H(v),{props:{separator:_},slots:I}=P(c),E=I.separator,A=a.appContext.config.globalProperties.$router,$=()=>{!u.to||!A||A.push(u.to)};return(h,ce)=>(o(),m("span",{class:i(s(n)("item"))},[e("span",{class:i(s(n)("inner")),onClick:D($,["prevent","stop"])},[u.to?(o(),m("a",M,[k(h.$slots,"default")])):k(h.$slots,"default",{key:1})],10,L),e("span",{class:i(s(n)("separator"))},[s(E)?(o(),b(N(s(E)),{key:0})):(o(),m("span",T,Y(s(_)),1))],2)],2))}}),C=F(z),f=F(q);const G={};function J(d,u){const n=f,a=C;return o(),b(a,null,{default:t(()=>[r(n,null,{default:t(()=>[l("Home")]),_:1}),r(n,null,{default:t(()=>[l("Button")]),_:1}),r(n,null,{default:t(()=>[l("Rate")]),_:1})]),_:1})}const K=y(G,[["render",J]]),Q={};function U(d,u){const n=f,a=C,c=j;return o(),m(w,null,[r(a,{separator:">"},{default:t(()=>[r(n,null,{default:t(()=>[l("Home")]),_:1}),r(n,null,{default:t(()=>[l("Button")]),_:1}),r(n,null,{default:t(()=>[l("Rate")]),_:1})]),_:1}),r(a,null,{separator:t(()=>[r(c)]),default:t(()=>[r(n,null,{default:t(()=>[l("Home")]),_:1}),r(n,null,{default:t(()=>[l("Button")]),_:1}),r(n,null,{default:t(()=>[l("Rate")]),_:1})]),_:1})],64)}const W=y(Q,[["render",U]]),X={};function Z(d,u){const n=f,a=C;return o(),b(a,null,{default:t(()=>[r(n,{to:"/"},{default:t(()=>[l("Home")]),_:1}),r(n,{to:"/module/button"},{default:t(()=>[l("Button")]),_:1}),r(n,null,{default:t(()=>[l("Rate")]),_:1})]),_:1})}const ee=y(X,[["render",Z]]),te=e("p",null,"面包屑的基本用法。",-1),re=e("p",null,[l("通过 "),e("code",null,"separator"),l(" 属性或插槽自定义分隔符。也可以通过"),e("code",null,"separatorIcon"),l("指定"),e("code",null,"yk-icon"),l("组件里的图标")],-1),le=e("p",null,[l("通过 "),e("code",null,"to"),l(" 属性控制路由跳转。同"),e("code",null,"vue-router"),l(" 的 "),e("code",null,"to"),l(" 属性")],-1),ne=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"separator"),e("td",null,"分隔符"),e("td",null,"string"),e("td",null,"/")]),e("tr",null,[e("td",null,"separatorIcon"),e("td",null,"图标分隔符"),e("td",null,"string"),e("td",null,"-")])])])],-1),ae=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"子标签")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容"),e("td",null,"BreadcrumbItem")]),e("tr",null,[e("td",null,"separator"),e("td",null,"自定义分割符"),e("td",null,"-")])])])],-1),ue=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"to"),e("td",null,"路由跳转目标，同 vue-router 的 to 属性"),e("td",null,"string / object"),e("td",null,"-")])])])],-1),oe=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容")])])])],-1),se={__name:"doc",setup(d){return(u,n)=>{const a=p("yk-title"),c=p("yk-snippet"),_=p("DocPage");return o(),b(_,null,{default:t(()=>[r(a,{level:2,id:"YkBreadcrumb-面包屑"},{default:t(()=>[l("YkBreadcrumb 面包屑")]),_:1}),r(c,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(K)]),desc:t(()=>[te]),_:1}),r(c,{title:"自定义分隔符",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%20separator%3D%22%3E%22%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%20%20%3C!--%20%3Cyk-breadcrumb%20separator-icon%3D%22yk-xiexian%22%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%20--%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Ctemplate%20%23separator%3E%0A%20%20%20%20%20%20%3CIconRightOutline%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(W)]),desc:t(()=>[re]),_:1}),r(c,{title:"路由跳转",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%20to%3D%22%2F%22%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%20to%3D%22%2Fmodule%2Fbutton%22%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(ee)]),desc:t(()=>[le]),_:1}),r(a,{level:3,id:"API"},{default:t(()=>[l("API")]),_:1}),r(a,{level:4,id:"Breadcrumb-Attributes"},{default:t(()=>[l("Breadcrumb Attributes")]),_:1}),ne,r(a,{level:4,id:"Breadcrumb-Slots"},{default:t(()=>[l("Breadcrumb Slots")]),_:1}),ae,r(a,{level:3,id:"BreadcrumbItem-API"},{default:t(()=>[l("BreadcrumbItem API")]),_:1}),r(a,{level:4,id:"BreadcrumbItem-Attributes"},{default:t(()=>[l("BreadcrumbItem Attributes")]),_:1}),ue,r(a,{level:4,id:"BreadcrumbItem-Slots"},{default:t(()=>[l("BreadcrumbItem Slots")]),_:1}),oe]),_:1})}}};export{se as default};
