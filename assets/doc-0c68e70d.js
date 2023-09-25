import{ee as G,dS as R,d as D,o as r,b as f,t as $,n as C,dx as c,r as F,dU as S,g as y,i as l,dD as q,c as z,e,dV as j,eL as H,F as Y,h as I,f as v,ef as K,w as u,j as g,p as Q,dL as X,m as b,a as N}from"./index-da6cc329.js";import{_ as Z}from"./index-e4198c9d.js";import{Y as ee,a as te}from"./index-4ed45f2c.js";import{Y as ne,a as ae}from"./index-77b8914e.js";import"./index-033b3b07.js";import"./use-form-item-864b27a1.js";import"./index-7e1704c8.js";const O=Symbol("pagination"),B=m=>{const o=G(O,"pagination");return R(m?`${o}-${m}`:o)};const le=D({name:"YkPaginationTotal",__name:"pagination-total",props:{total:{}},setup(m){const o=B("total");return(t,s)=>(r(),f("div",{class:C(c(o)())},"共"+$(t.total)+"条",3))}}),J=D({name:"YkPaginationJumper",__name:"pagination-jumper",props:{current:{},size:{},simple:{type:Boolean},disabled:{type:Boolean},totalPages:{}},emits:["jump"],setup(m,{emit:o}){const t=m,s=B("jumper"),a=F(1),h=()=>{q(()=>{let p=a.value;o("jump",p)})};return S(()=>t.current,p=>{t.simple&&p&&(a.value=p)},{immediate:!0}),(p,_)=>{const P=Z;return r(),f("span",{class:C(c(s)())},[p.simple?y("",!0):(r(),f("span",{key:0,class:C(c(s)("label"))},"前往",2)),l(P,{modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=n=>a.value=n),size:p.size,disabled:p.disabled,min:1,max:p.totalPages,controls:!1,onBlur:h,onSubmit:h},null,8,["modelValue","size","disabled","max"]),p.simple?(r(),f("span",{key:1,class:C(c(s)("separator"))},"/",2)):y("",!0),p.simple?(r(),f("span",{key:2,class:C(c(s)("total"))},$(p.totalPages),3)):y("",!0)],2)}}}),oe=D({name:"YkPaginationPager",__name:"pagination-pager",props:{pagerCount:{default:7},fixWidth:{type:Boolean},simple:{type:Boolean},disabled:{type:Boolean},size:{},totalPages:{},current:{},pageSize:{}},emits:["change"],setup(m,{emit:o}){const t=m,s=B("pager"),a=z(()=>t.current>1),h=z(()=>t.current<t.totalPages),p=z(()=>t.totalPages>t.pagerCount?t.pagerCount-2:t.totalPages-2),_=z(()=>Math.floor(p.value/2)),P=z(()=>_.value+1),n=z(()=>p.value<t.pagerCount-2||t.totalPages===t.pagerCount?!1:t.current>P.value),E=z(()=>t.totalPages-_.value-1),W=z(()=>p.value<t.pagerCount-2||t.totalPages===t.pagerCount?!1:t.current<E.value),L=z(()=>{const d=[];if(t.simple||p.value<2)return d;if(t.current<=P.value)for(let i=0;i<p.value;i++)d.push(i+2);else if(t.current>P.value&&t.current<E.value){let i;const A=p.value-(t.fixWidth?1:0);A%2===0?(i=t.current-A/2,t.fixWidth&&i++):i=t.current-(A-1)/2;for(let w=0;w<A;w++)d.push(i+w)}else{for(let i=0;i<p.value;i++)d.push(t.totalPages-(i+1));d.reverse()}return d}),V=()=>{t.current>1&&o("change",t.current-1)},T=()=>{t.current<t.totalPages&&o("change",t.current+1)},M=d=>{const i=d.target,A="yk-pagination-pager__item";if(i.tagName==="SPAN"){const{classList:w}=i;if(w.contains(`${A}-prev`))V();else if(w.contains(`${A}-next`))T();else if(w.contains(`${A}-number`)){const U=Number(i.innerText);o("change",U)}}},x=d=>{let i;d==="prev"?i=t.current-5:i=t.current+5,o("change",i<1?1:i>t.totalPages?t.totalPages:i)};return(d,i)=>(r(),f("div",{class:C(c(s)()),onClick:M},[e("span",{class:C([...c(s)("item",{disabled:!a.value}),c(s)("item-prev")])},[l(c(H),{onClick:i[0]||(i[0]=j(A=>V(),["stop"]))})],2),d.simple?y("",!0):(r(),f("span",{key:0,class:C([...c(s)("item",{active:d.current===1}),c(s)("item-number")])}," 1 ",2)),n.value&&!d.simple?(r(),f("span",{key:1,class:C([c(s)("item"),c(s)("item-ellipsis")]),onClick:i[1]||(i[1]=j(()=>x("prev"),["prevent"]))}," ... ",2)):y("",!0),(r(!0),f(Y,null,I(L.value,A=>(r(),f("span",{key:A,class:C([...c(s)("item",{active:d.current===A}),c(s)("item-number")])},$(A),3))),128)),W.value&&!d.simple?(r(),f("span",{key:2,class:C([c(s)("item"),c(s)("item-ellipsis")]),onClick:i[2]||(i[2]=j(()=>x("next"),["prevent"]))}," ... ",2)):y("",!0),d.simple?(r(),v(J,{key:3,current:d.current,"total-pages":d.totalPages,simple:d.simple,size:d.size,disabled:d.disabled,onJump:i[3]||(i[3]=A=>o("change",A))},null,8,["current","total-pages","simple","size","disabled"])):y("",!0),!d.simple&&d.totalPages>=2?(r(),f("span",{key:4,class:C([...c(s)("item",{active:d.current===d.totalPages}),c(s)("item-number")])},$(d.totalPages),3)):y("",!0),e("span",{class:C([...c(s)("item",{disabled:!h.value}),c(s)("item-next")])},[l(c(K),{onClick:i[4]||(i[4]=j(A=>T(),["stop"]))})],2)],2))}}),se=D({name:"YkPaginationPageSize",__name:"pagination-page-size",props:{size:{},disabled:{type:Boolean},defaultPageSize:{},pageSizeOptions:{}},emits:["pageSizeChange"],setup(m,{emit:o}){const t=m,s=B("page-size"),a=F(10),h=z(()=>a.value<0?"全部":`${a.value} 条/页`),p=_=>{a.value=_,o("pageSizeChange",a.value)};return S(()=>t.defaultPageSize,_=>{_&&(a.value=_)},{immediate:!0}),(_,P)=>(r(),f("div",{class:C(c(s)())},[l(c(te),{title:h.value,size:_.size,disabled:_.disabled,trigger:"click",onSelected:p},{default:u(()=>[(r(!0),f(Y,null,I(_.pageSizeOptions,n=>(r(),v(c(ee),{key:n,value:n},{default:u(()=>[g($(n===-1?"全部":`${n} 条/页`),1)]),_:2},1032,["value"]))),128))]),_:1},8,["title","size","disabled"])],2))}}),ie=D({name:"YkPagination",__name:"pagination",props:{total:{},defaultCurrent:{default:1},defaultPageSize:{default:10},disabled:{type:Boolean,default:!1},pagerCount:{default:7},pageSizeOptions:{default:()=>[10,20,30,40,50]},size:{default:"l"},simple:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showJumper:{type:Boolean,default:!1},showPageSize:{type:Boolean,default:!1},current:{},fixWidth:{type:Boolean},pageSize:{}},emits:["update:current","change","pageSizeChange"],setup(m,{emit:o}){const t=m;Q(O,"pagination");const s=B(),a=F(1),h=F(10),p=z(()=>h.value<0?1:Math.ceil(t.total/h.value)),_=n=>{t.disabled||(a.value=n,o("change",n))},P=n=>{t.disabled||(h.value=n,o("pageSizeChange",n))};return S(()=>[t.current,t.defaultCurrent],([n,E])=>{t.disabled?a.value=0:a.value=n||E||1},{immediate:!0}),S(()=>[t.pageSize,t.defaultPageSize],([n,E])=>{h.value=n||E||10},{immediate:!0}),S(a,n=>{t.disabled||o("update:current",n)}),(n,E)=>(r(),f("div",{class:C(c(s)({disabled:n.disabled,s:n.size==="s",m:n.size==="m",l:n.size==="l",xl:n.size==="xl"}))},[n.showTotal&&!n.simple?(r(),v(le,{key:0,total:n.total},null,8,["total"])):y("",!0),l(oe,{"total-pages":p.value,simple:n.simple,current:a.value,"page-size":h.value,"fix-width":n.fixWidth,"pager-count":n.pagerCount,disabled:n.disabled,size:n.size,onChange:_},null,8,["total-pages","simple","current","page-size","fix-width","pager-count","disabled","size"]),n.showPageSize&&!n.simple?(r(),v(se,{key:1,size:n.size,disabled:n.disabled,"default-page-size":n.defaultPageSize,"page-size-options":n.pageSizeOptions,onPageSizeChange:P},null,8,["size","disabled","default-page-size","page-size-options"])):y("",!0),n.showJumper&&!n.simple?(r(),v(J,{key:2,"total-pages":p.value,size:n.size,disabled:n.disabled,onJump:_},null,8,["total-pages","size","disabled"])):y("",!0)],2))}}),ue=X(ie),k=ue,re={};function pe(m,o){const t=k;return r(),v(t,{total:50})}const de=b(re,[["render",pe]]),ce={};function ge(m,o){const t=k;return r(),v(t,{total:50,simple:""})}const me=b(ce,[["render",ge]]),_e={},he={style:{"margin-top":"10px"}};function fe(m,o){const t=k;return r(),f(Y,null,[e("div",null,[l(t,{disabled:"",total:50,"show-jumper":"","show-page-size":"","show-total":""})]),e("div",he,[l(t,{disabled:"",total:50,simple:"","show-jumper":"","show-page-size":"","show-total":""})])],64)}const Ae=b(_e,[["render",fe]]),Ce={};function ve(m,o){const t=k;return r(),v(t,{total:1e3,"fix-width":""})}const ze=b(Ce,[["render",ve]]),ye={};function ke(m,o){const t=k;return r(),v(t,{total:1e3,"pager-count":10})}const Ee=b(ye,[["render",ke]]),Pe={};function be(m,o){const t=k;return r(),v(t,{total:1e3,"show-jumper":""})}const we=b(Pe,[["render",be]]),De={};function Se(m,o){const t=k;return r(),v(t,{total:1234,"show-page-size":""})}const Fe=b(De,[["render",Se]]),$e={};function Be(m,o){const t=k;return r(),v(t,{total:1e3,"page-size-options":[30,60,90,-1],"default-page-size":30,"show-page-size":""})}const je=b($e,[["render",Be]]),Ye={style:{margin:"20px 0"}},Ne=D({__name:"pagination-different-size",setup(m){const o=F("l");return(t,s)=>{const a=ne,h=ae,p=k;return r(),f(Y,null,[e("div",null,[l(h,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=_=>o.value=_),type:"button"},{default:u(()=>[l(a,{value:"s"},{default:u(()=>[g("s")]),_:1}),l(a,{value:"m"},{default:u(()=>[g("m")]),_:1}),l(a,{value:"l"},{default:u(()=>[g("l")]),_:1}),l(a,{value:"xl"},{default:u(()=>[g("xl")]),_:1})]),_:1},8,["modelValue"])]),e("div",Ye,[l(p,{total:2345,size:o.value,"show-jumper":"","show-page-size":"","show-total":""},null,8,["size"])]),e("div",null,[l(p,{total:2345,size:o.value,simple:""},null,8,["size"])])],64)}}}),Ve=D({__name:"pagination-events",setup(m){const o=F(3),t=a=>{console.log(`current page is: ${a}`)},s=a=>{console.log(`current page size is: ${a}`)};return S(o,a=>{console.log(`v-model value is: ${a}`)}),(a,h)=>{const p=k;return r(),v(p,{current:o.value,"onUpdate:current":h[0]||(h[0]=_=>o.value=_),total:1e3,"show-jumper":"","show-page-size":"","show-total":"",onChange:t,onPageSizeChange:s},null,8,["current"])}}}),Te=e("p",null,"分页的基本用法",-1),xe=e("p",null,[g("通过设置 "),e("code",null,"simple"),g(" 属性开启简洁模式。")],-1),Ie=e("p",null,[g("通过设置 "),e("code",null,"disabled"),g(" 属性禁用组件")],-1),Oe=e("p",null,[g("通过设置 "),e("code",null,"fix-width"),g(" 属性固定组件宽度")],-1),Je=e("p",null,[g("默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过 "),e("code",null,"pager-count"),g(" 属性可以设置最大页码按钮数。")],-1),We=e("p",null,"快速跳转到某一页。",-1),Le=e("p",null,[g("通过设置 "),e("code",null,"show-page-size"),g("，展示每页条数选择器。")],-1),Me=e("p",null,[g("通过设置 "),e("code",null,"page-size-options"),g("，可以重新指定选择器的选项列表。设置为 "),e("code",null,"-1"),g(" 时表示显示全部。")],-1),Ue=e("p",null,[g("通过设置 "),e("code",null,"size"),g(" 属性获得不同尺寸的分页组件。该属性默认值为 "),e("code",null,"l")],-1),Ge=e("p",null,"可以为组件的页面切换和分页大小改变添加事件监听。",-1),Re=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"total（必填）"),e("td",null,"总数据量"),e("td",null,"number"),e("td",null,"-")]),e("tr",null,[e("td",null,"current / v-model:current"),e("td",null,"当前页数"),e("td",null,"number"),e("td",null,"-")]),e("tr",null,[e("td",null,"default-current"),e("td",null,"默认的页数"),e("td",null,"number"),e("td",null,"1")]),e("tr",null,[e("td",null,"page-size / v-model:page-size"),e("td",null,"每页展示的数据条数"),e("td",null,"number"),e("td",null,"-")]),e("tr",null,[e("td",null,"default-page-size"),e("td",null,"默认每页展示的数据条数（-1 时表示显示全部数据）"),e("td",null,"number"),e("td",null,"10")]),e("tr",null,[e("td",null,"disabled"),e("td",null,"禁用组件"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"fix-width"),e("td",null,"固定宽度"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"pager-count"),e("td",null,"最大显示页码数量"),e("td",null,"number"),e("td",null,"7")]),e("tr",null,[e("td",null,"page-size-options"),e("td",null,"数据条数选择器的选项列表"),e("td",null,"number[]"),e("td",null,"[10, 20, 30, 40, 50]")]),e("tr",null,[e("td",null,"simple"),e("td",null,"是否为简单分页"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"show-jumper"),e("td",null,"是否显示页码跳转"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"show-total"),e("td",null,"是否显示总分页数"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"show-page-size"),e("td",null,"是否显示数据条数选择器"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"size"),e("td",null,"组件尺寸"),e("td",null,"'s'｜'m'｜'l'｜'xl'"),e("td",null,"'l'")])])])],-1),qe=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"事件名称"),e("th",null,"描述"),e("th",null,"类型")])]),e("tbody",null,[e("tr",null,[e("td",null,"change"),e("td",null,"页码改变时触发"),e("td",null,"(current: number) => void")]),e("tr",null,[e("td",null,"page-size-change"),e("td",null,"数据条数改变时触发"),e("td",null,"(pageSize: number) => void")])])])],-1),nt={__name:"doc",setup(m){return(o,t)=>{const s=N("yk-title"),a=N("yk-snippet"),h=N("DocPage");return r(),v(h,null,{default:u(()=>[l(s,{level:2,id:"YkPagination-分页"},{default:u(()=>[g("YkPagination 分页")]),_:1}),l(a,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%20%3Atotal%3D%2250%22%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(de)]),desc:u(()=>[Te]),_:1}),l(a,{title:"简洁模式",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%20%3Atotal%3D%2250%22%20simple%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(me)]),desc:u(()=>[xe]),_:1}),l(a,{title:"禁用组件",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-pagination%0A%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%3Atotal%3D%2250%22%0A%20%20%20%20%20%20show-jumper%0A%20%20%20%20%20%20show-page-size%0A%20%20%20%20%20%20show-total%0A%20%20%20%20%3E%3C%2Fyk-pagination%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20style%3D%22margin-top%3A%2010px%22%3E%0A%20%20%20%20%3Cyk-pagination%0A%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%3Atotal%3D%2250%22%0A%20%20%20%20%20%20simple%0A%20%20%20%20%20%20show-jumper%0A%20%20%20%20%20%20show-page-size%0A%20%20%20%20%20%20show-total%0A%20%20%20%20%3E%3C%2Fyk-pagination%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(Ae)]),desc:u(()=>[Ie]),_:1}),l(a,{title:"固定组件宽度",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%20%3Atotal%3D%221000%22%20fix-width%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(ze)]),desc:u(()=>[Oe]),_:1}),l(a,{title:"最大页码按钮数",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%20%3Atotal%3D%221000%22%20%3Apager-count%3D%2210%22%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(Ee)]),desc:u(()=>[Je]),_:1}),l(a,{title:"页码跳转",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%20%3Atotal%3D%221000%22%20show-jumper%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(we)]),desc:u(()=>[We]),_:1}),l(a,{title:"每页条数",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%20%3Atotal%3D%221234%22%20show-page-size%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(Fe)]),desc:u(()=>[Le]),_:1}),l(a,{title:"每页条数选择器的选项列表",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%0A%20%20%20%20%3Atotal%3D%221000%22%0A%20%20%20%20%3Apage-size-options%3D%22%5B30%2C%2060%2C%2090%2C%20-1%5D%22%0A%20%20%20%20%3Adefault-page-size%3D%2230%22%0A%20%20%20%20show-page-size%0A%20%20%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A"},{demo:u(()=>[l(je)]),desc:u(()=>[Me]),_:1}),l(a,{title:"分页尺寸",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-radio-group%20v-model%3D%22size%22%20type%3D%22button%22%3E%0A%20%20%20%20%20%20%3Cyk-radio%20value%3D%22s%22%3Es%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3Cyk-radio%20value%3D%22m%22%3Em%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3Cyk-radio%20value%3D%22l%22%3El%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3Cyk-radio%20value%3D%22xl%22%3Exl%3C%2Fyk-radio%3E%0A%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20style%3D%22margin%3A%2020px%200%22%3E%0A%20%20%20%20%3Cyk-pagination%0A%20%20%20%20%20%20%3Atotal%3D%222345%22%0A%20%20%20%20%20%20%3Asize%3D%22size%22%0A%20%20%20%20%20%20show-jumper%0A%20%20%20%20%20%20show-page-size%0A%20%20%20%20%20%20show-total%0A%20%20%20%20%3E%3C%2Fyk-pagination%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-pagination%20%3Atotal%3D%222345%22%20%3Asize%3D%22size%22%20simple%3E%3C%2Fyk-pagination%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20size%20%3D%20ref%3C's'%20%7C%20'm'%20%7C%20'l'%20%7C%20'xl'%3E('l')%0A%3C%2Fscript%3E%0A"},{demo:u(()=>[l(Ne)]),desc:u(()=>[Ue]),_:1}),l(a,{title:"事件",code:"%3Ctemplate%3E%0A%20%20%3Cyk-pagination%0A%20%20%20%20v-model%3Acurrent%3D%22current%22%0A%20%20%20%20%3Atotal%3D%221000%22%0A%20%20%20%20show-jumper%0A%20%20%20%20show-page-size%0A%20%20%20%20show-total%0A%20%20%20%20%40change%3D%22handleChange%22%0A%20%20%20%20%40page-size-change%3D%22handlePageSizeChange%22%0A%20%20%3E%3C%2Fyk-pagination%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20'vue'%0Aconst%20current%20%3D%20ref%3Cnumber%3E(3)%0Aconst%20handleChange%20%3D%20(current%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log(%60current%20page%20is%3A%20%24%7Bcurrent%7D%60)%0A%7D%0Aconst%20handlePageSizeChange%20%3D%20(pageSize%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log(%60current%20page%20size%20is%3A%20%24%7BpageSize%7D%60)%0A%7D%0Awatch(current%2C%20(newVal)%20%3D%3E%20%7B%0A%20%20console.log(%60v-model%20value%20is%3A%20%24%7BnewVal%7D%60)%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:u(()=>[l(Ve)]),desc:u(()=>[Ge]),_:1}),l(s,{level:3,id:"API"},{default:u(()=>[g("API")]),_:1}),l(s,{level:4,id:"Pagination-Props"},{default:u(()=>[g("Pagination Props")]),_:1}),Re,l(s,{level:4,id:"Pagination-Events"},{default:u(()=>[g("Pagination Events")]),_:1}),qe]),_:1})}}};export{nt as default};
