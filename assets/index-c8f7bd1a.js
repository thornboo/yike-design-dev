import{d as v,r as c,c as k,dB as n,dC as h,dD as b,dE as T,o as g,f as y,w as x,dF as w,e as l,dG as B,dH as E,n as S,i as C,dx as H,dI as I,dJ as _,dK as $,dL as z}from"./index-da6cc329.js";const L=v({name:"YkBackTop",__name:"back-top",props:{animation:{default:"upward"},theme:{default:"primary"},right:{default:"24px"},bottom:{default:"40px"},visibleHeight:{default:"200px"},target:{},icon:{default:"yk-top"},behavior:{default:"smooth"}},emits:["on-click"],setup(i,{emit:d}){const t=i,u=e=>{if(typeof e=="string"){const o=document.querySelector(e);if(!o)throw new Error(`yk-back-top target props is not exist: ${t.target}`);return o}return e},s=c(!1),a=c(),m=k(()=>{const e=n(t.right),o=n(t.bottom);return{right:`${e}px`,bottom:`${o}px`}});h(async()=>{await b(),a.value=u(t.target),(a.value||document).addEventListener("scroll",r)}),T(()=>{(a.value||document).removeEventListener("scroll",r)});const r=()=>{const e=n(t.visibleHeight);(a.value||document.documentElement).scrollTop>=e?s.value=!0:s.value=!1},p=()=>{(a.value||document.documentElement).scrollTo({top:0,behavior:t.behavior})},f=e=>{p(),d("on-click",e)};return(e,o)=>(g(),y($,{name:e.animation},{default:x(()=>[w(l("div",{class:"yk-backtop",style:B(m.value),onClick:f},[E(e.$slots,"default",{},()=>[l("div",{class:S(["yk-backtop-container",{secondary:e.theme==="secondary"}])},[C(H(I),{size:"20"})],2)])],4),[[_,s.value]])]),_:3},8,["name"]))}}),Y=z(L);export{Y};
