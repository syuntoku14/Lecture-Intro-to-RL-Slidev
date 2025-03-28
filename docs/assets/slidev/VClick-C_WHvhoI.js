import{d as g,L as C,O as k,b as B,o as z,F as I,aK as M,h as n,e as V,aL as f,aM as $,ag as w,aN as L}from"../modules/vue-Qnzn1QrV.js";import{ai as T,ao as D,al as E,C as F}from"../index-CyRIKg22.js";import{u as G}from"./context-Bh1EfIEl.js";const K=g({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const s=l,{$clicksContext:o}=G(),t=T();let i=+s.size;return Number.isNaN(i)&&(console.warn(`[slidev] Invalid size for VClickGap: ${s.size}`),i=1),C(()=>{const p=o.currentOffset+i-1;o.register(t,{max:p,delta:i})}),k(()=>{o.unregister(t)}),(p,d)=>(z(),B(I))}}),b=["ul","ol"],O=g({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var A,S;const l=+this.every,s=D(this.at),o=typeof s=="string";let t=(S=(A=this.$slots).default)==null?void 0:S.call(A);if(s==null||!t)return t;const i=M("click"),p=(a,e)=>w(a,[[i,e,"",{hide:this.hide,fade:this.fade}]]),d=a=>a.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?d(e.children):[e]);t=d(E(t));const x=(a,e=1)=>d(a).map(r=>{if(!f(r))return r;if(b.includes(r.type)&&Array.isArray(r.children)){const c=u(r.children,e+1);return n(r,{},c)}return n(r)});let v=1,h=0;const u=(a,e=1)=>d(a).map(r=>{if(!f(r)||r.type===$)return r;const c=+s+Math.ceil(v++/l)-1;let m;e<+this.depth&&Array.isArray(r.children)?m=n(r,{},x(r.children,e)):m=n(r);const N=c-h;return h=c,p(m,o?N>=0?`+${N}`:`${N}`:c)}),y=()=>V(K,{size:+s+Math.ceil((v-1)/l)-1-h});if(this.handleSpecialElements){if(t.length===1&&b.includes(t[0].type)&&Array.isArray(t[0].children))return n(t[0],{},[...u(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const a=t[0];if(Array.isArray(a.children))return n(a,{},a.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?n(e,{},[...u(e.children),y()]):n(e):e))}}return[...u(t),y()]}}),j=g({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>n("span",l)}},render(){return n(O,{every:F,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var l,s;return(s=(l=this.$slots).default)==null?void 0:s.call(l).map(o=>o.type===L?this.wrapText(o):o)}})}});export{j as _};
