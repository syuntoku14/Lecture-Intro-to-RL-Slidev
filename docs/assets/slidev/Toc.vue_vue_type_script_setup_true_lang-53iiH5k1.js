import{d as m,a as L,b as f,f as u,C as c,o,w as $,j as k,z as p,i as C,k as g,n as T,F as P,ai as b,e as v}from"../modules/vue-Qnzn1QrV.js";import{u as N}from"./context-Bh1EfIEl.js";import{a as _,al as S}from"../index-CyRIKg22.js";import{_ as I}from"./title-renderer.md_vue_type_script_setup_true_lang-tMAiwsa0.js";const D=["href","innerHTML"],M=["href"],A=m({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=_();return(s,i)=>{const a=L("RouterLink");return!c(r)&&s.title?(o(),f(a,{key:0,to:String(s.to),onClick:i[0]||(i[0]=l=>l.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!c(r)&&!s.title?(o(),f(a,{key:1,to:String(s.to),onClick:i[1]||(i[1]=l=>l.target.blur())},{default:$(()=>[k(s.$slots,"default")]),_:3},8,["to"])):c(r)&&s.title?(o(),u("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,D)):(o(),u("a",{key:3,href:`#${s.to}`},[k(s.$slots,"default")],8,M))}}}),H=["start"],z=m({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,{isPresenter:s}=_(),i=p(()=>[...S(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),a=p(()=>[...S(r.listStyle||[])]);return(l,h)=>{const n=A,e=L("TocList",!0);return l.list&&l.list.length>0?(o(),u("ol",{key:0,class:T(i.value),start:l.level===1?l.start:void 0,style:g(a.value.length>=l.level?`list-style:${a.value[l.level-1]}`:void 0)},[(o(!0),u(P,null,b(l.list,t=>(o(),u("li",{key:t.path,class:T(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[v(n,{to:c(s)?`/presenter${t.path}`:t.path},{default:$(()=>[v(c(I),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(o(),f(e,{key:0,level:l.level+1,"list-style":l.listStyle,list:t.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):C("v-if",!0)],2))),128))],14,H)):C("v-if",!0)}}}),w=m({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:s}=N();function i(n,e=1){if(e>Number(r.maxDepth))return[];if(e<Number(r.minDepth)){const t=n.find(y=>y.active||y.activeParent);return t?i(t.children,e+1):[]}return n.map(t=>({...t,children:i(t.children,e+1)}))}function a(n){return n.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:a(e.children)}))}function l(n){const e=n.some(t=>t.active||t.activeParent||t.hasActiveParent);return n.filter(()=>e).map(t=>({...t,children:l(t.children)}))}const h=p(()=>{const n=s==null?void 0:s.nav.tocTree;if(!n)return[];let e=i(n);return r.mode==="onlyCurrentTree"?e=a(e):r.mode==="onlySiblings"&&(e=l(e)),e});return(n,e)=>(o(),u("div",{class:"slidev-toc",style:g(`column-count:${n.columns}`)},[v(z,{level:1,start:n.start,"list-style":n.listStyle,list:h.value,"list-class":n.listClass},null,8,["start","list-style","list","list-class"])],4))}});export{w as _};
