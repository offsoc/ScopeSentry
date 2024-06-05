import{bc as e,cZ as a,a0 as t,s as l,a7 as s,a8 as o,d as n,aZ as r,af as i,aG as u,A as d,r as c,a3 as v,aO as b,b8 as p,o as f,c as m,n as h,a as y,F as g,L as C,c_ as $,c$ as x,B as P,Y as w,bC as T,e as k,D as B,bo as N,ah as S,bi as R,aT as A,ae as E,J as F,cA as _,a9 as L,aX as j,ac as K,ab as M,bl as V,d0 as q,N as z,d1 as O,W,ak as X,j as Y,M as Z,al as D}from"./index-L23m9uYc.js";import{a as G}from"./useInput-CcZ_P4u1.js";const H=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},I=Symbol("tabsRootContextKey"),J=l({tabs:{type:s(Array),default:()=>o([])}}),Q="ElTabBar",U=n({name:Q});var ee=C(n({...U,props:J,setup(e,{expose:a}){const t=e,l=r(),s=i(I);s||u(Q,"<el-tabs><el-tab-bar /></el-tabs>");const o=d("tabs"),n=c(),C=c(),$=()=>C.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i[`tab-${s.uid}`];if(!u)return!1;if(!s.active)return!0;e=u[`offset${G(r)}`],a=u[`client${G(o)}`];const d=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(d.paddingLeft)+Number.parseFloat(d.paddingRight)),e+=Number.parseFloat(d.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${G(n)}(${e}px)`}})();return v((()=>t.tabs),(async()=>{await b(),$()}),{immediate:!0}),p(n,(()=>$())),a({ref:n,update:$}),(e,a)=>(f(),m("div",{ref_key:"barRef",ref:n,class:h([y(o).e("active-bar"),y(o).is(y(s).props.tabPosition)]),style:g(C.value)},null,6))}}),[["__file","tab-bar.vue"]]);const ae=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),te="ElTabNav",le=n({name:te,props:ae,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=r(),s=i(I);s||u(te,"<el-tabs><tab-nav /></el-tabs>");const o=d("tabs"),n=$(),f=x(),m=c(),h=c(),y=c(),g=c(),C=c(!1),E=c(0),F=c(!1),_=c(!0),L=P((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),j=P((()=>({transform:`translate${"width"===L.value?"X":"Y"}(-${E.value}px)`}))),K=()=>{if(!m.value)return;const e=m.value[`offset${G(L.value)}`],a=E.value;if(!a)return;const t=a>e?a-e:0;E.value=t},M=()=>{if(!m.value||!h.value)return;const e=h.value[`offset${G(L.value)}`],a=m.value[`offset${G(L.value)}`],t=E.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;E.value=l},V=async()=>{const e=h.value;if(!(C.value&&y.value&&m.value&&e))return;await b();const a=y.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=E.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),E.value=Math.min(u,r)},q=()=>{var a;if(!h.value||!m.value)return;e.stretch&&(null==(a=g.value)||a.update());const t=h.value[`offset${G(L.value)}`],l=m.value[`offset${G(L.value)}`],s=E.value;l<t?(C.value=C.value||{},C.value.prev=s,C.value.next=s+l<t,t-s<l&&(E.value=t-l)):(C.value=!1,s>0&&(E.value=0))},z=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=A;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),O()},O=()=>{_.value&&(F.value=!0)},W=()=>F.value=!1;return v(n,(e=>{"hidden"===e?_.value=!1:"visible"===e&&setTimeout((()=>_.value=!0),50)})),v(f,(e=>{e?setTimeout((()=>_.value=!0),50):_.value=!1})),p(y,q),w((()=>setTimeout((()=>V()),0))),T((()=>q())),a({scrollToActiveTab:V,removeFocus:W}),v((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=C.value?[k("span",{class:[o.e("nav-prev"),o.is("disabled",!C.value.prev)],onClick:K},[k(B,null,{default:()=>[k(N,null,null)]})]),k("span",{class:[o.e("nav-next"),o.is("disabled",!C.value.next)],onClick:M},[k(B,null,{default:()=>[k(S,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const d=a.uid,c=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${l}`,b=!c&&(a.isClosable||e.editable);a.index=`${l}`;const p=b?k(B,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[k(R,null,null)]}):null,f=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,m=!c&&a.active?0:-1;return k("div",{ref:`tab-${d}`,class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",c),o.is("closable",b),o.is("focus",F.value)],id:`tab-${v}`,key:`tab-${d}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":a.active,tabindex:m,onFocus:()=>O(),onBlur:()=>W(),onClick:e=>{W(),t("tabClick",a,v,e)},onKeydown:e=>{!b||e.code!==A.delete&&e.code!==A.backspace||t("tabRemove",a,e)}},[f,p])}));return k("div",{ref:y,class:[o.e("nav-wrap"),o.is("scrollable",!!C.value),o.is(s.props.tabPosition)]},[a,k("div",{class:o.e("nav-scroll"),ref:m},[k("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:h,style:j.value,role:"tablist",onKeydown:z},[e.type?null:k(ee,{ref:g,tabs:[...e.panes]},null),l])])])}}}),se=l({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),oe=e=>K(e)||M(e),ne=n({name:"ElTabs",props:se,emits:{[L]:e=>oe(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>oe(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>oe(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s;const o=d("tabs"),{children:n,addChild:i,removeChild:u}=H(r(),"ElTabPane"),p=c(),f=c(null!=(s=e.modelValue)?s:"0"),m=async(t,l=!1)=>{var s,o,n;if(f.value!==t&&!j(t))try{!1!==await(null==(s=e.beforeLeave)?void 0:s.call(e,t,f.value))&&(f.value=t,l&&(a(L,t),a("tabChange",t)),null==(n=null==(o=p.value)?void 0:o.removeFocus)||n.call(o))}catch(r){}},h=(e,t,l)=>{e.props.disabled||(m(t,!0),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||j(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return v((()=>e.modelValue),(e=>m(e))),v(f,(async()=>{var e;await b(),null==(e=p.value)||e.scrollToActiveTab()})),E(I,{props:e,currentName:f,registerPane:i,unregisterPane:u}),l({currentName:f}),()=>{const a=t["add-icon"],l=e.editable||e.addable?k("span",{class:o.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===A.enter&&g()}},[a?F(t,"add-icon"):k(B,{class:o.is("icon-plus")},{default:()=>[k(_,null,null)]})]):null,s=k("div",{class:[o.e("header"),o.is(e.tabPosition)]},[l,k(le,{ref:p,currentName:f.value,editable:e.editable,type:e.type,panes:n.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),r=k("div",{class:o.e("content")},[F(t,"default")]);return k("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:"card"===e.type,[o.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[s,r]:[r,s]])}}}),re=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ie=["id","aria-hidden","aria-labelledby"],ue="ElTabPane",de=n({name:ue});var ce=C(n({...de,props:re,setup(e){const a=e,t=r(),l=V(),s=i(I);s||u(ue,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=d("tab-pane"),n=c(),b=P((()=>a.closable||s.props.closable)),p=q((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),g=c(p.value),C=P((()=>{var e;return null!=(e=a.name)?e:n.value})),$=q((()=>!a.lazy||g.value||p.value));v(p,(e=>{e&&(g.value=!0)}));const x=z({uid:t.uid,slots:l,props:a,paneName:C,active:p,index:n,isClosable:b});return w((()=>{s.registerPane(x)})),O((()=>{s.unregisterPane(x.uid)})),(e,a)=>y($)?W((f(),m("div",{key:0,id:`pane-${y(C)}`,class:h(y(o).b()),role:"tabpanel","aria-hidden":!y(p),"aria-labelledby":`tab-${y(C)}`},[F(e.$slots,"default")],10,ie)),[[X,y(p)]]):Y("v-if",!0)}}),[["__file","tab-pane.vue"]]);const ve=Z(ne,{TabPane:ce}),be=D(ce);export{be as E,ve as a};
