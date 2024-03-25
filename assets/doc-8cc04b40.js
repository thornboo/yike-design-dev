import{d as i,r,o as c,b as _,i as t,w as e,j as a,F as C,e as l,m as p,N as v,a as F,f as y}from"./index-d235c6f2.js";import{_ as B}from"./index-0f38fce8.js";const k=l("span",null,"这一块是modal对话框的内容部分，这里支持各种标签，组件",-1),h=i({__name:"modal-base",setup(m){const n=r(!1),E=()=>{n.value=!0};return(d,o)=>{const s=B,A=p;return c(),_(C,null,[t(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),title:"这里是标题"},{default:e(()=>[k]),_:1},8,["modelValue"]),t(A,{onClick:E},{default:e(()=>[a("modal 对话框")]),_:1})],64)}}}),g=l("span",null,"这一块是modal对话框的内容部分，这里支持各种标签，组件",-1),M=i({__name:"modal-small",setup(m){const n=r(!1),E=()=>{n.value=!0};return(d,o)=>{const s=B,A=p;return c(),_(C,null,[t(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),title:"这里是标题小弹窗",size:"small"},{default:e(()=>[g]),_:1},8,["modelValue"]),t(A,{onClick:E},{default:e(()=>[a("modal 对话框")]),_:1})],64)}}}),w=l("span",null,"这一块是modal对话框的内容部分，这里支持各种标签，组件",-1),V=i({__name:"modal-header",setup(m){const n=r(!1),E=()=>{n.value=!0};return(d,o)=>{const s=B,A=p;return c(),_(C,null,[t(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),title:"这里是标题"},{header:e(()=>[a("这里是自定义头部标题")]),default:e(()=>[w]),_:1},8,["modelValue"]),t(A,{onClick:E},{default:e(()=>[a("modal 对话框")]),_:1})],64)}}}),x=l("span",null,"这一块是modal对话框的内容部分，这里支持各种标签，组件",-1),$=i({__name:"modal-footer",setup(m){const n=r(!1),E=()=>{n.value=!0};return(d,o)=>{const s=B,A=p;return c(),_(C,null,[t(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),title:"这里是标题"},{footer:e(()=>[a("这里是自定义底部")]),default:e(()=>[x]),_:1},8,["modelValue"]),t(A,{onClick:E},{default:e(()=>[a("modal 对话框")]),_:1})],64)}}}),U=l("span",null,"这一块是modal对话框的内容部分，这里支持各种标签，组件",-1),z=i({__name:"modal-footer-show",setup(m){const n=r(!1),E=()=>{n.value=!0};return(d,o)=>{const s=B,A=p;return c(),_(C,null,[t(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),title:"这里是标题","show-footer":!1},{default:e(()=>[U]),_:1},8,["modelValue"]),t(A,{onClick:E},{default:e(()=>[a("modal 对话框")]),_:1})],64)}}}),I=l("span",null,"这一块是modal对话框的内容部分，这里支持各种标签，组件",-1),N=i({__name:"modal-close",setup(m){var s;const n=(s=v())==null?void 0:s.proxy,E=r(!1),d=()=>{E.value=!0},o=()=>{n.$message({type:"success",message:"这里是对话框关闭的回调函数"})};return(A,u)=>{const D=B,f=p;return c(),_(C,null,[t(D,{modelValue:E.value,"onUpdate:modelValue":u[0]||(u[0]=b=>E.value=b),title:"这里是标题",onOnCloseModal:o},{default:e(()=>[I]),_:1},8,["modelValue"]),t(f,{onClick:d},{default:e(()=>[a("modal 对话框")]),_:1})],64)}}}),P=l("p",null,null,-1),Y=l("p",null,[a("通过传入 "),l("code",null,"size"),a(" 指定不同的尺寸类型")],-1),j=l("p",null,"通过传入具名插槽插槽来自定义头部标题",-1),O=l("p",null,"通过传入具名插槽插槽来自定义底部操作",-1),S=l("p",null,null,-1),T=l("p",null,"关闭 modal 对话框时的回调函数",-1),q=l("div",{class:"table-container"},[l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"描述"),l("th",null,"类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"size")]),l("td",null,"尺寸"),l("td",null,[l("code",null,"small | large")]),l("td",null,[l("code",null,"large")])]),l("tr",null,[l("td",null,[l("code",null,"show-footer")]),l("td",null,"底部区域展示"),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"true")])]),l("tr",null,[l("td",null,[l("code",null,"title")]),l("td",null,"modal 标题"),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"-")])]),l("tr",null,[l("td",null,[l("code",null,"to")]),l("td",null,"modal 默认展开的 dom 选择器"),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"body")])]),l("tr",null,[l("td",null,[l("code",null,"scrollable")]),l("td",null,"页面可否滚动"),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"false")])]),l("tr",null,[l("td",null,[l("code",null,"closeable")]),l("td",null,"点击遮罩层是否关闭 modal"),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"false")])]),l("tr",null,[l("td",null,[l("code",null,"showMask")]),l("td",null,"是否展示遮罩层"),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"true")])]),l("tr",null,[l("td",null,[l("code",null,"escapable")]),l("td",null,"是否可以点击 esc 键关闭 modal"),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"true")])]),l("tr",null,[l("td",null,[l("code",null,"content-height")]),l("td",null,"使内容在固定高度内滚动"),l("td",null,[l("code",null,"string | number")]),l("td",null,[l("code",null,"-")])])])])],-1),G=l("div",{class:"table-container"},[l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"方法"),l("th",null,"描述"),l("th",null,"入参类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"onCloseModal")]),l("td",null,"对话框关闭时的回调函数"),l("td",null,[l("code",null,"Function")]),l("td",null,[l("code",null,"()=>{}")])]),l("tr",null,[l("td",null,[l("code",null,"onSubmit")]),l("td",null,"对话点击确定时的回调函数"),l("td",null,[l("code",null,"Function")]),l("td",null,[l("code",null,"()=>{}")])])])])],-1),H=l("div",{class:"table-container"},[l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"描述")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"header")]),l("td",null,"对话框头部标题")]),l("tr",null,[l("td",null,[l("code",null,"footer")]),l("td",null,"对话框底部操作")])])])],-1),L={__name:"doc",setup(m){return(n,E)=>{const d=F("yk-title"),o=F("yk-snippet"),s=F("DocPage");return c(),y(s,null,{default:e(()=>[t(d,{level:2,id:"YkModal-对话框"},{default:e(()=>[a("YkModal 对话框")]),_:1}),t(o,{title:"基本使用",code:"%3Ctemplate%3E%0A%20%20%3Cyk-modal%20v-model%3D%22visible%22%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%A0%87%E9%A2%98%22%3E%0A%20%20%20%20%3Cspan%3E%E8%BF%99%E4%B8%80%E5%9D%97%E6%98%AFmodal%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E9%83%A8%E5%88%86%EF%BC%8C%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E5%90%84%E7%A7%8D%E6%A0%87%E7%AD%BE%EF%BC%8C%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%20%20%3C%2Fyk-modal%3E%0A%20%20%3Cyk-button%20%40click%3D%22showModal%22%3Emodal%20%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fyk-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20visible%20%3D%20ref%3Cboolean%3E(false)%0Aconst%20showModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%3C%2Fstyle%3E%0A"},{demo:e(()=>[t(h)]),desc:e(()=>[P]),_:1}),t(o,{title:"尺寸 size",code:"%3Ctemplate%3E%0A%20%20%3Cyk-modal%20v-model%3D%22visible%22%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%A0%87%E9%A2%98%E5%B0%8F%E5%BC%B9%E7%AA%97%22%20size%3D%22small%22%3E%0A%20%20%20%20%3Cspan%3E%E8%BF%99%E4%B8%80%E5%9D%97%E6%98%AFmodal%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E9%83%A8%E5%88%86%EF%BC%8C%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E5%90%84%E7%A7%8D%E6%A0%87%E7%AD%BE%EF%BC%8C%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%20%20%3C%2Fyk-modal%3E%0A%20%20%3Cyk-button%20%40click%3D%22showModal%22%3Emodal%20%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fyk-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20visible%20%3D%20ref%3Cboolean%3E(false)%0Aconst%20showModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%3C%2Fstyle%3E%0A"},{demo:e(()=>[t(M)]),desc:e(()=>[Y]),_:1}),t(o,{title:"自定义头部标题",code:"%3Ctemplate%3E%0A%20%20%3Cyk-modal%20v-model%3D%22visible%22%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%A0%87%E9%A2%98%22%3E%0A%20%20%20%20%3Cspan%3E%E8%BF%99%E4%B8%80%E5%9D%97%E6%98%AFmodal%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E9%83%A8%E5%88%86%EF%BC%8C%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E5%90%84%E7%A7%8D%E6%A0%87%E7%AD%BE%EF%BC%8C%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%20%20%20%20%3Ctemplate%20%23header%3E%E8%BF%99%E9%87%8C%E6%98%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E5%A4%B4%E9%83%A8%E6%A0%87%E9%A2%98%3C%2Ftemplate%3E%0A%20%20%3C%2Fyk-modal%3E%0A%20%20%3Cyk-button%20%40click%3D%22showModal%22%3Emodal%20%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fyk-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20visible%20%3D%20ref%3Cboolean%3E(false)%0Aconst%20showModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%3C%2Fstyle%3E%0A"},{demo:e(()=>[t(V)]),desc:e(()=>[j]),_:1}),t(o,{title:"自定义底部操作",code:"%3Ctemplate%3E%0A%20%20%3Cyk-modal%20v-model%3D%22visible%22%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%A0%87%E9%A2%98%22%3E%0A%20%20%20%20%3Cspan%3E%E8%BF%99%E4%B8%80%E5%9D%97%E6%98%AFmodal%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E9%83%A8%E5%88%86%EF%BC%8C%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E5%90%84%E7%A7%8D%E6%A0%87%E7%AD%BE%EF%BC%8C%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%20%20%20%20%3Ctemplate%20%23footer%3E%E8%BF%99%E9%87%8C%E6%98%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BA%95%E9%83%A8%3C%2Ftemplate%3E%0A%20%20%3C%2Fyk-modal%3E%0A%20%20%3Cyk-button%20%40click%3D%22showModal%22%3Emodal%20%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fyk-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20visible%20%3D%20ref%3Cboolean%3E(false)%0Aconst%20showModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%3C%2Fstyle%3E%0A"},{demo:e(()=>[t($)]),desc:e(()=>[O]),_:1}),t(o,{title:"不展示 footer",code:"%3Ctemplate%3E%0A%20%20%3Cyk-modal%20v-model%3D%22visible%22%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%A0%87%E9%A2%98%22%20%3Ashow-footer%3D%22false%22%3E%0A%20%20%20%20%3Cspan%3E%E8%BF%99%E4%B8%80%E5%9D%97%E6%98%AFmodal%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E9%83%A8%E5%88%86%EF%BC%8C%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E5%90%84%E7%A7%8D%E6%A0%87%E7%AD%BE%EF%BC%8C%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%20%20%3C%2Fyk-modal%3E%0A%20%20%3Cyk-button%20%40click%3D%22showModal%22%3Emodal%20%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fyk-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20visible%20%3D%20ref%3Cboolean%3E(false)%0Aconst%20showModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%3C%2Fstyle%3E%0A"},{demo:e(()=>[t(z)]),desc:e(()=>[S]),_:1}),t(o,{title:"关闭回调函数",code:"%3Ctemplate%3E%0A%20%20%3Cyk-modal%20v-model%3D%22visible%22%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E6%A0%87%E9%A2%98%22%20%40onCloseModal%3D%22closeModal%22%3E%0A%20%20%20%20%3Cspan%3E%E8%BF%99%E4%B8%80%E5%9D%97%E6%98%AFmodal%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%9A%84%E5%86%85%E5%AE%B9%E9%83%A8%E5%88%86%EF%BC%8C%E8%BF%99%E9%87%8C%E6%94%AF%E6%8C%81%E5%90%84%E7%A7%8D%E6%A0%87%E7%AD%BE%EF%BC%8C%E7%BB%84%E4%BB%B6%3C%2Fspan%3E%0A%20%20%3C%2Fyk-modal%3E%0A%20%20%3Cyk-button%20%40click%3D%22showModal%22%3Emodal%20%E5%AF%B9%E8%AF%9D%E6%A1%86%3C%2Fyk-button%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%2C%20getCurrentInstance%20%7D%20from%20'vue'%0Aconst%20proxy%3A%20any%20%3D%20getCurrentInstance()%3F.proxy%0Aconst%20visible%20%3D%20ref%3Cboolean%3E(false)%0Aconst%20showModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20true%0A%7D%0Aconst%20closeModal%20%3D%20()%20%3D%3E%20%7B%0A%20%20proxy.%24message(%7B%20type%3A%20'success'%2C%20message%3A%20'%E8%BF%99%E9%87%8C%E6%98%AF%E5%AF%B9%E8%AF%9D%E6%A1%86%E5%85%B3%E9%97%AD%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0'%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%3C%2Fstyle%3E%0A"},{demo:e(()=>[t(N)]),desc:e(()=>[T]),_:1}),t(d,{level:3,id:"API"},{default:e(()=>[a("API")]),_:1}),q,t(d,{level:3,id:"Methods"},{default:e(()=>[a("Methods")]),_:1}),G,t(d,{level:3,id:"插槽"},{default:e(()=>[a("插槽")]),_:1}),H]),_:1})}}};export{L as default};
