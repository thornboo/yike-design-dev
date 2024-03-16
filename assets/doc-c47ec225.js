import{_ as E}from"./index-c6c4e4ed.js";import{d as _,ak as m,r as D,o as y,f as v,b as F,e,j as o,i as c,am as h,Z as b,t as K,w as d,x as w,a as x}from"./index-59dc8a0f.js";import{_ as g}from"./index-86b9bba3.js";import{_ as I}from"./index-b4d00658.js";import{e as R,I as $,d as L}from"./index-265b1d1b.js";import{I as O}from"./index-524fbc82.js";import{Y as V,a as P}from"./index-93b31125.js";import"./index-751bd0d1.js";import"./use-form-item-daa10396.js";function C(f,u){const s=[];for(let r=0;r<f;++r)s.push(u);return s}const Y=_({__name:"tree-primary",setup(f){function u(t=4,n=""){if(t)return C(6-t,void 0).map((i,A)=>{const p=""+n+t+A;return{label:s(t),key:p,children:u(t-1,p)}})}function s(t){return t===4?"道生一":t===3?"一生二":t===2?"二生三":t===1?"三生万物":""}const r=m(u()),a=D(["41","403122"]),l=t=>{};return(t,n)=>{const i=E;return y(),v(i,{options:r.value,"default-expanded-keys":a.value,onExpand:l},null,8,["options","default-expanded-keys"])}}}),T=_({__name:"tree-scroll",setup(f){function u(t=4,n=""){if(t)return C(6-t,void 0).map((i,A)=>{const p=""+n+t+A;return{label:s(t),key:p,children:u(t-1,p)}})}function s(t){return t===4?"道生一":t===3?"一生二":t===2?"二生三":t===1?"三生万物":""}const r=m(u()),a=D(["41","403122"]),l=t=>{};return(t,n)=>{const i=E;return y(),v(i,{options:r.value,"default-expanded-keys":a.value,scrollbar:{height:300},onExpand:l},null,8,["options","default-expanded-keys"])}}}),U={for:""},M=_({__name:"tree-select",setup(f){function u(n=4,i=""){if(n)return C(6-n,void 0).map((A,p)=>{const k=""+i+n+p;return{label:s(n),key:k,children:u(n-1,k)}})}function s(n){return n===4?"道生一":n===3?"一生二":n===2?"二生三":n===1?"三生万物":""}const r=D(!1),a=m(u()),l=D(["41","403122"]),t=n=>{console.log("keys: ",n)};return(n,i)=>{const A=g,p=E;return y(),F("div",null,[e("label",U,[o(" 节点多选： "),c(A,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=k=>r.value=k)},null,8,["modelValue"])]),c(p,{options:a.value,"default-selected-keys":l.value,multiple:r.value,"expand-icon":()=>h(b(I)),onSelect:t},null,8,["options","default-selected-keys","multiple","expand-icon"])])}}}),N=_({__name:"tree-file",setup(f){function u(l=4,t=""){if(l)return C(6-l,void 0).map((n,i)=>{const A=""+t+l+i;return{label:s(l),key:A,children:u(l-1,A)}})}function s(l){return l===4?"道生一":l===3?"一生二":l===2?"二生三":l===1?"三生万物":""}const r=m(u(3)),a=D(["312010"]);return(l,t)=>{const n=E;return y(),v(n,{options:r.value,"default-expanded-keys":a.value,"file-tree":""},null,8,["options","default-expanded-keys"])}}}),j=_({__name:"tree-custom-file-icon",setup(f){function u(l=4,t=""){if(l)return C(6-l,void 0).map((n,i)=>{const A=""+t+l+i;return{label:s(l),key:A,children:u(l-1,A)}})}function s(l){return l===4?"道生一":l===3?"一生二":l===2?"二生三":l===1?"三生万物":""}const r=m(u(3));r.value[1],r.value[1].children[0].children[0].icons={file:()=>h(O)};const a=D(["312010"]);return(l,t)=>{const n=E;return y(),v(n,{options:r.value,"default-expanded-keys":a.value,"file-tree":"","file-icons":{fold:()=>h(b(R)),unfold:()=>h(b($)),file:()=>h(b(L))}},null,8,["options","default-expanded-keys","file-icons"])}}}),G=_({__name:"tree-checkable",setup(f){function u(a=3,l=""){if(a)return C(5-a,void 0).map((t,n)=>{const i=`${l?l+"-":""}${n}-${a}`;return{label:i,key:i,children:u(a-1,i)}})}const s=m(u()),r=D([]);return(a,l)=>{const t=E;return y(),F("div",null,[c(t,{checkedKeys:r.value,"onUpdate:checkedKeys":l[0]||(l[0]=n=>r.value=n),options:s.value,checkable:""},null,8,["checkedKeys","options"]),o(" "+K(r.value),1)])}}}),Z={for:""},q=_({__name:"tree-check-logic",setup(f){function u(t=3,n=""){if(t)return C(5-t,void 0).map((i,A)=>{const p=`${n?n+"-":""}${A}-${t}`;return{label:p,key:p,children:u(t-1,p)}})}const s=D(!1),r=D("all"),a=m(u()),l=D(["0-3-0-2"]);return(t,n)=>{const i=g,A=V,p=P,k=w,S=E;return y(),F("div",null,[c(k,{align:"center"},{default:d(()=>[e("label",Z,[o(" 关闭父子关联： "),c(i,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=B=>s.value=B)},null,8,["modelValue"])]),c(p,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=B=>r.value=B),type:"button"},{default:d(()=>[c(A,{value:"all"},{default:d(()=>[o("父亲和孩儿们")]),_:1}),c(A,{value:"parent"},{default:d(()=>[o("父亲们")]),_:1}),c(A,{value:"child"},{default:d(()=>[o("孩儿们")]),_:1})]),_:1},8,["modelValue"])]),_:1}),c(S,{checkedKeys:l.value,"onUpdate:checkedKeys":n[2]||(n[2]=B=>l.value=B),options:a.value,"check-strictly":s.value,"check-strategy":r.value,checkable:""},null,8,["checkedKeys","options","check-strictly","check-strategy"]),o(" "+K(l.value),1)])}}}),z=e("p",null,[o("通过 "),e("code",null,"defaultExpandedKeys"),o(" 初始化默认展开的节点，可监听 "),e("code",null,"expand"),o(" 节点展开收起事件。")],-1),H=e("p",null,[o("通过 "),e("code",null,"scrollbar"),o(" 属性配置树内部滚动。")],-1),J=e("p",null,[o("通过 "),e("code",null,"defaultSelectedKeys"),o(" 初始化默认选中的节点，点击节点，切换不同节点的选中状态。设置 "),e("code",null,"multiple"),o(" 来允许节点多选。也可以通过 "),e("code",null,"expand-icon"),o(" 来定制展开收起的图标，展开状态会旋转 90°。")],-1),Q=e("p",null,[o("通过 "),e("code",null,"fileTree"),o(" 开启目录树模式，支持自定义目录展开、目录收起、文件图标，也支持定制单个节点图标。")],-1),W=e("p",null,[o("通过 "),e("code",null,"fileIcons"),o(" 自定义目录展开、目录收起、文件图标，也支持定制单个节点图标。")],-1),X=e("p",null,[o("通过 "),e("code",null,"checkable"),o(" 开启选择模式，"),e("code",null,"checkedKeys"),o(" 获取已选中的 keys。")],-1),e2=e("p",null,[o("通过 "),e("code",null,"checkStrictly"),o(" 控制是否进行父子关联，默认关闭。开启该选项后，"),e("code",null,"checkStrategy"),o(" 属性失效。")],-1),t2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"options")]),e("td",null,"渲染数据"),e("td",null,[e("code",null,"TreeOption[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"blockNode")]),e("td",null,"节点占据一行"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")])]),e("tr",null,[e("td",null,[e("code",null,"defaultExpandedKeys")]),e("td",null,"默认展开的节点"),e("td",null,[e("code",null,"Key[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"defaultSelectedKeys")]),e("td",null,"默认选中的节点"),e("td",null,[e("code",null,"Key[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"expandedKeys"),o("(受控)")]),e("td",null,"展开的节点"),e("td",null,[e("code",null,"Key[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"selectedKeys"),o("(受控)")]),e("td",null,"选中的节点"),e("td",null,[e("code",null,"Key[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"multiple")]),e("td",null,"多选模式，开启可以高亮多个节点"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")]),e("tr",null,[e("td",null,[e("code",null,"expandIcon")]),e("td",null,"展开收起图标"),e("td",null,[e("code",null,"RenderFunction")]),e("td",null,[e("code",null,"IconRightFill")])]),e("tr",null,[e("td",null,[e("code",null,"fileTree")]),e("td",null,"目录树模式"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")])]),e("tr",null,[e("td",null,[e("code",null,"fileIcons")]),e("td",null,"定制目录树的图标"),e("td",null,[e("code",null,"Icons")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"checkable")]),e("td",null,"复选框模式"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")])]),e("tr",null,[e("td",null,[e("code",null,"checkedKeys"),o("(受控)")]),e("td",null,"复选框勾选的节点"),e("td",null,[e("code",null,"Key[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,[e("code",null,"checkStrategy")]),e("td",null,"节点勾选模式"),e("td",null,[e("code",null,"TreeCheckStrategy")]),e("td",null,[e("code",null,"'all'")])]),e("tr",null,[e("td",null,[e("code",null,"checkStrictly")]),e("td",null,"取消父子节点关联"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")])]),e("tr",null,[e("td",null,[e("code",null,"scrollbar")]),e("td",null,"内置滚动条"),e("td",null,[e("code",null,"ScrollbarProps|boolean")]),e("td",null,[e("code",null,"false")])])])])],-1),l2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"事件名"),e("th",null,"描述"),e("th",null,"参数")])]),e("tbody",null,[e("tr",null,[e("td",null,"expand"),e("td",null,"展开收起触发"),e("td",null,[e("code",null,"Function(keys: Key[])")])]),e("tr",null,[e("td",null,"select"),e("td",null,"点击节点触发"),e("td",null,[e("code",null,"Function(keys: Key[])")])])])])],-1),A2={__name:"doc",setup(f){return(u,s)=>{const r=x("yk-title"),a=x("yk-snippet"),l=x("DocPage");return y(),v(l,null,{default:d(()=>[c(r,{level:2,id:"YkTree-树"},{default:d(()=>[o("YkTree 树")]),_:1}),c(a,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-tree%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%3Adefault-expanded-keys%3D%22expandedKey%22%0A%20%20%20%20%40expand%3D%22handleExpand%22%0A%20%20%3E%3C%2Fyk-tree%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Afunction%20createData(level%20%3D%204%2C%20baseKey%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(6%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20''%20%2B%20baseKey%20%2B%20level%20%2B%20index%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20createLabel(level)%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Afunction%20createLabel(level%3A%20number)%3A%20string%20%7B%0A%20%20if%20(level%20%3D%3D%3D%204)%20return%20'%E9%81%93%E7%94%9F%E4%B8%80'%0A%20%20if%20(level%20%3D%3D%3D%203)%20return%20'%E4%B8%80%E7%94%9F%E4%BA%8C'%0A%20%20if%20(level%20%3D%3D%3D%202)%20return%20'%E4%BA%8C%E7%94%9F%E4%B8%89'%0A%20%20if%20(level%20%3D%3D%3D%201)%20return%20'%E4%B8%89%E7%94%9F%E4%B8%87%E7%89%A9'%0A%20%20return%20''%0A%7D%0Aconst%20options%20%3D%20shallowRef(createData())%0Aconst%20expandedKey%20%3D%20ref(%5B'41'%2C%20'403122'%5D)%0Aconst%20handleExpand%20%3D%20(exp)%20%3D%3E%20%7B%0A%20%20%2F%2F%20console.log('exp%3A%20'%2C%20exp)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(Y)]),desc:d(()=>[z]),_:1}),c(a,{title:"内部滚动",code:"%3Ctemplate%3E%0A%20%20%3Cyk-tree%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%3Adefault-expanded-keys%3D%22expandedKey%22%0A%20%20%20%20%3Ascrollbar%3D%22%7B%20height%3A%20300%20%7D%22%0A%20%20%20%20%40expand%3D%22handleExpand%22%0A%20%20%3E%3C%2Fyk-tree%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Afunction%20createData(level%20%3D%204%2C%20baseKey%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(6%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20''%20%2B%20baseKey%20%2B%20level%20%2B%20index%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20createLabel(level)%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Afunction%20createLabel(level%3A%20number)%3A%20string%20%7B%0A%20%20if%20(level%20%3D%3D%3D%204)%20return%20'%E9%81%93%E7%94%9F%E4%B8%80'%0A%20%20if%20(level%20%3D%3D%3D%203)%20return%20'%E4%B8%80%E7%94%9F%E4%BA%8C'%0A%20%20if%20(level%20%3D%3D%3D%202)%20return%20'%E4%BA%8C%E7%94%9F%E4%B8%89'%0A%20%20if%20(level%20%3D%3D%3D%201)%20return%20'%E4%B8%89%E7%94%9F%E4%B8%87%E7%89%A9'%0A%20%20return%20''%0A%7D%0Aconst%20options%20%3D%20shallowRef(createData())%0Aconst%20expandedKey%20%3D%20ref(%5B'41'%2C%20'403122'%5D)%0Aconst%20handleExpand%20%3D%20(exp)%20%3D%3E%20%7B%0A%20%20%2F%2F%20console.log('exp%3A%20'%2C%20exp)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(T)]),desc:d(()=>[H]),_:1}),c(a,{title:"节点点击",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Clabel%20for%3D%22%22%3E%0A%20%20%20%20%20%20%E8%8A%82%E7%82%B9%E5%A4%9A%E9%80%89%EF%BC%9A%0A%20%20%20%20%20%20%3Cyk-switch%20v-model%3D%22isMultiple%22%3E%3C%2Fyk-switch%3E%0A%20%20%20%20%3C%2Flabel%3E%0A%20%20%20%20%3Cyk-tree%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3Adefault-selected-keys%3D%22selectedKeys%22%0A%20%20%20%20%20%20%3Amultiple%3D%22isMultiple%22%0A%20%20%20%20%20%20%3Aexpand-icon%3D%22()%20%3D%3E%20h(IconRightOutline)%22%0A%20%20%20%20%20%20%40select%3D%22handleSelect%22%0A%20%20%20%20%3E%3C%2Fyk-tree%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20h%2C%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20IconRightOutline%20%7D%20from%20'%40yike-design%2Fui%2Fcomponents%2Fsvg-icon'%0Afunction%20createData(level%20%3D%204%2C%20baseKey%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(6%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20''%20%2B%20baseKey%20%2B%20level%20%2B%20index%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20createLabel(level)%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Afunction%20createLabel(level%3A%20number)%3A%20string%20%7B%0A%20%20if%20(level%20%3D%3D%3D%204)%20return%20'%E9%81%93%E7%94%9F%E4%B8%80'%0A%20%20if%20(level%20%3D%3D%3D%203)%20return%20'%E4%B8%80%E7%94%9F%E4%BA%8C'%0A%20%20if%20(level%20%3D%3D%3D%202)%20return%20'%E4%BA%8C%E7%94%9F%E4%B8%89'%0A%20%20if%20(level%20%3D%3D%3D%201)%20return%20'%E4%B8%89%E7%94%9F%E4%B8%87%E7%89%A9'%0A%20%20return%20''%0A%7D%0Aconst%20isMultiple%20%3D%20ref(false)%0Aconst%20options%20%3D%20shallowRef(createData())%0Aconst%20selectedKeys%20%3D%20ref(%5B'41'%2C%20'403122'%5D)%0Aconst%20handleSelect%20%3D%20(keys)%20%3D%3E%20%7B%0A%20%20console.log('keys%3A%20'%2C%20keys)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(M)]),desc:d(()=>[J]),_:1}),c(a,{title:"目录树",code:"%3Ctemplate%3E%0A%20%20%3Cyk-tree%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%3Adefault-expanded-keys%3D%22expandedKey%22%0A%20%20%20%20file-tree%0A%20%20%3E%3C%2Fyk-tree%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Afunction%20createData(level%20%3D%204%2C%20baseKey%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(6%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20''%20%2B%20baseKey%20%2B%20level%20%2B%20index%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20createLabel(level)%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Afunction%20createLabel(level%3A%20number)%3A%20string%20%7B%0A%20%20if%20(level%20%3D%3D%3D%204)%20return%20'%E9%81%93%E7%94%9F%E4%B8%80'%0A%20%20if%20(level%20%3D%3D%3D%203)%20return%20'%E4%B8%80%E7%94%9F%E4%BA%8C'%0A%20%20if%20(level%20%3D%3D%3D%202)%20return%20'%E4%BA%8C%E7%94%9F%E4%B8%89'%0A%20%20if%20(level%20%3D%3D%3D%201)%20return%20'%E4%B8%89%E7%94%9F%E4%B8%87%E7%89%A9'%0A%20%20return%20''%0A%7D%0Aconst%20options%20%3D%20shallowRef(createData(3))%0Aconst%20expandedKey%20%3D%20ref(%5B'312010'%5D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(N)]),desc:d(()=>[Q]),_:1}),c(a,{title:"自定义目录树图标",code:"%3Ctemplate%3E%0A%20%20%3Cyk-tree%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%3Adefault-expanded-keys%3D%22expandedKey%22%0A%20%20%20%20file-tree%0A%20%20%20%20%3Afile-icons%3D%22%7B%0A%20%20%20%20%20%20fold%3A%20()%20%3D%3E%20h(IconAppFill)%2C%0A%20%20%20%20%20%20unfold%3A%20()%20%3D%3E%20h(IconAppOutline)%2C%0A%20%20%20%20%20%20file%3A%20()%20%3D%3E%20h(IconSmileOutline)%2C%0A%20%20%20%20%7D%22%0A%20%20%3E%3C%2Fyk-tree%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20h%2C%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%0A%20%20IconAppOutline%2C%0A%20%20IconAppFill%2C%0A%20%20IconSmileOutline%2C%0A%20%20IconPptOutline%2C%0A%7D%20from%20'%40yike-design%2Fui%2Fcomponents%2Fsvg-icon'%0Afunction%20createData(level%20%3D%204%2C%20baseKey%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(6%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20''%20%2B%20baseKey%20%2B%20level%20%2B%20index%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20createLabel(level)%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Afunction%20createLabel(level%3A%20number)%3A%20string%20%7B%0A%20%20if%20(level%20%3D%3D%3D%204)%20return%20'%E9%81%93%E7%94%9F%E4%B8%80'%0A%20%20if%20(level%20%3D%3D%3D%203)%20return%20'%E4%B8%80%E7%94%9F%E4%BA%8C'%0A%20%20if%20(level%20%3D%3D%3D%202)%20return%20'%E4%BA%8C%E7%94%9F%E4%B8%89'%0A%20%20if%20(level%20%3D%3D%3D%201)%20return%20'%E4%B8%89%E7%94%9F%E4%B8%87%E7%89%A9'%0A%20%20return%20''%0A%7D%0Aconst%20options%20%3D%20shallowRef(createData(3))%0Aoptions.value%5B1%5D%0Aoptions.value%5B1%5D.children%5B0%5D.children%5B0%5D.icons%20%3D%20%7B%0A%20%20file%3A%20()%20%3D%3E%20h(IconPptOutline)%2C%0A%7D%0Aconst%20expandedKey%20%3D%20ref(%5B'312010'%5D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(j)]),desc:d(()=>[W]),_:1}),c(a,{title:"可选择树",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-tree%0A%20%20%20%20%20%20v-model%3AcheckedKeys%3D%22checkedKeys%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20checkable%0A%20%20%20%20%3E%3C%2Fyk-tree%3E%0A%20%20%20%20%7B%7B%20checkedKeys%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Afunction%20createData(level%20%3D%203%2C%20pk%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(5%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20%60%24%7Bpk%20%3F%20pk%20%2B%20'-'%20%3A%20''%7D%24%7Bindex%7D-%24%7Blevel%7D%60%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20key%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Aconst%20options%20%3D%20shallowRef(createData())%0Aconst%20checkedKeys%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(G)]),desc:d(()=>[X]),_:1}),c(a,{title:"取消父子选中关联关系",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkSpace%20align%3D%22center%22%3E%0A%20%20%20%20%20%20%3Clabel%20for%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%E5%85%B3%E9%97%AD%E7%88%B6%E5%AD%90%E5%85%B3%E8%81%94%EF%BC%9A%0A%20%20%20%20%20%20%20%20%3Cyk-switch%20v-model%3D%22checkStrictly%22%3E%3C%2Fyk-switch%3E%0A%20%20%20%20%20%20%3C%2Flabel%3E%0A%20%20%20%20%20%20%3Cyk-radio-group%20v-model%3D%22checkStrategy%22%20type%3D%22button%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22all%22%3E%E7%88%B6%E4%BA%B2%E5%92%8C%E5%AD%A9%E5%84%BF%E4%BB%AC%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22parent%22%3E%E7%88%B6%E4%BA%B2%E4%BB%AC%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22child%22%3E%E5%AD%A9%E5%84%BF%E4%BB%AC%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cyk-tree%0A%20%20%20%20%20%20v-model%3AcheckedKeys%3D%22checkedKeys%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%3Acheck-strictly%3D%22checkStrictly%22%0A%20%20%20%20%20%20%3Acheck-strategy%3D%22checkStrategy%22%0A%20%20%20%20%20%20checkable%0A%20%20%20%20%3E%3C%2Fyk-tree%3E%0A%20%20%20%20%7B%7B%20checkedKeys%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20repeat%20%7D%20from%20'seemly'%0Aimport%20%7B%20shallowRef%2C%20ref%20%7D%20from%20'vue'%0Afunction%20createData(level%20%3D%203%2C%20pk%20%3D%20'')%20%7B%0A%20%20if%20(!level)%20return%20undefined%0A%20%20return%20repeat(5%20-%20level%2C%20undefined).map((_%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20const%20key%20%3D%20%60%24%7Bpk%20%3F%20pk%20%2B%20'-'%20%3A%20''%7D%24%7Bindex%7D-%24%7Blevel%7D%60%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20label%3A%20key%2C%0A%20%20%20%20%20%20key%2C%0A%20%20%20%20%20%20children%3A%20createData(level%20-%201%2C%20key)%2C%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%0Aconst%20checkStrictly%20%3D%20ref(false)%0Aconst%20checkStrategy%20%3D%20ref%3Cany%3E('all')%0Aconst%20options%20%3D%20shallowRef(createData())%0Aconst%20checkedKeys%20%3D%20ref(%5B'0-3-0-2'%5D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[c(q)]),desc:d(()=>[e2]),_:1}),c(r,{level:3,id:"Props"},{default:d(()=>[o("Props")]),_:1}),t2,c(r,{level:3,id:"Event"},{default:d(()=>[o("Event")]),_:1}),l2]),_:1})}}};export{A2 as default};
