import{ae as G,c as r,d as E,a2 as V,o as p,b as y,W as Y,aw as _,Z as e,e as c,au as D,n as u,g as T,X as f,U as C,a3 as B,p as $,a7 as U,f as A,w as I,ax as M,z as R}from"./index-d235c6f2.js";import{u as j}from"./use-form-item-bd41a5ee.js";const v="update:modelValue",h="change",N=Symbol("propsByRadioGroup"),S={[v]:l=>l,[h]:l=>l},F=(l,n)=>{const a=G(N,void 0),o=r(()=>!!a),i=r({get(){return o.value?a.modelValue:l.modelValue},set(d){o.value?a.changeEvent(d):n&&n(v,d)}}),t=r(()=>(a==null?void 0:a.disabled)||l.disabled);return{modelValue:i,disabled:t.value,type:(a==null?void 0:a.type)??l.type,size:(a==null?void 0:a.size)??l.size,solid:(a==null?void 0:a.solid)??l.solid}},H=["value","disabled"],K=E({name:"YkRadio",__name:"radio",props:{size:{default:"l"},value:{type:[Number,String,Boolean]},disabled:{type:Boolean},modelValue:{type:[Number,String,Boolean]},name:{},border:{type:Boolean},type:{default:"radio"},solid:{type:Boolean,default:!1}},emits:S,setup(l,{emit:n}){const a=l,o=V("radio"),{modelValue:i,disabled:t,type:d,size:m,solid:b}=F(a,n),s=r(()=>i.value===a.value),k=()=>{C(()=>n(h,i.value))};return(g,z)=>(p(),y("label",{class:u(e(o)([e(d)],{disabled:e(t),solid:e(b)})),role:"radio"},[Y(c("input",{"onUpdate:modelValue":z[0]||(z[0]=w=>D(i)?i.value=w:null),type:"radio",value:g.value,disabled:e(t),onChange:k},null,40,H),[[_,e(i)]]),e(d)==="radio"?(p(),y("span",{key:0,class:u(e(o)("box",{checked:s.value,disabled:e(t),shadow:!s.value&&!e(t)}))},[c("span",{class:u(e(o)("inner",{checked:s.value,disabled:e(t)}))},null,2)],2)):T("",!0),c("span",{class:u(e(o)("label",{disabled:e(t),checked:s.value},[e(m)]))},[f(g.$slots,"default")],2)],2))}}),L=S,O=E({name:"YkRadioGroup",__name:"radio-group",props:{modelValue:{type:[Number,String,Boolean]},size:{default:"l"},type:{default:"radio"},solid:{type:Boolean,default:!1},disabled:{type:Boolean},direction:{default:"horizontal"}},emits:L,setup(l,{emit:n}){const a=l,o=V("radio-group"),{size:i,disabled:t}=B(a),{mergedSize:d,mergedDisabled:m}=j({size:i,disabled:t}),b=s=>{n(v,s),C(()=>n(h,s))};return $(N,U({...B(a),disabled:m,changeEvent:b})),(s,k)=>s.type==="radio"?(p(),A(e(M),{key:0,dir:s.direction,size:e(d),type:s.type,class:u(e(o)([s.type,e(d),s.direction]))},{default:I(()=>[f(s.$slots,"default")]),_:3},8,["dir","size","type","class"])):(p(),y("div",{key:1,class:u(e(o)([s.type,e(d)],{solid:s.solid}))},[c("div",{class:u(e(o)("container",[e(d)]))},[f(s.$slots,"default")],2)],2))}}),Z=R(K),q=R(O);export{Z as Y,q as a};
