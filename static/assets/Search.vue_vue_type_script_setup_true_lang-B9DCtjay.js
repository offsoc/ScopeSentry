import{u as e,F as a,i as s}from"./useForm-CnHBjYXm.js";import{d as o,a5 as t,U as n,o as l,c as i,i as r,w as d,a as c,j as h,Q as u,H as m,t as p,l as f,r as b,B as g,a3 as w,Y as v,e as x,F as y,b1 as E,bP as L,bQ as S,bR as R,bL as k}from"./index-Cx8c_DGm.js";import{u as F}from"./useIcon-7-7bHRV2.js";const j=o({__name:"ActionButton",props:{showSearch:t.bool.def(!0),showReset:t.bool.def(!0),showExpand:t.bool.def(!1),visible:t.bool.def(!0),searchLoading:t.bool.def(!1),resetLoading:t.bool.def(!1)},emits:["search","reset","expand"],setup(e,{emit:a}){const s=a,{t:o}=f(),t=()=>{s("search")},b=()=>{s("reset")},g=()=>{s("expand")};return(a,s)=>{const f=n("BaseButton");return l(),i(u,null,[e.showSearch?(l(),r(f,{key:0,type:"primary",loading:e.searchLoading,icon:c(F)({icon:"ep:search"}),onClick:t},{default:d((()=>[m(p(c(o)("common.query")),1)])),_:1},8,["loading","icon"])):h("",!0),e.showReset?(l(),r(f,{key:1,loading:e.resetLoading,plain:"",icon:c(F)({icon:"ep:refresh-right"}),onClick:b},{default:d((()=>[m(p(c(o)("common.reset")),1)])),_:1},8,["loading","icon"])):h("",!0),e.showExpand?(l(),r(f,{key:2,icon:c(F)({icon:e.visible?"ep:arrow-up":"ep:arrow-down"}),text:"",onClick:g},{default:d((()=>[m(p(c(o)(e.visible?"common.shrink":"common.expand")),1)])),_:1},8,["icon"])):h("",!0)],64)}}}),_=o({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:t.bool.def(!1),labelWidth:t.oneOfType([String,Number]).def("auto"),layout:t.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttonPosition:t.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:t.bool.def(!0),showReset:t.bool.def(!0),showExpand:t.bool.def(!1),expandField:t.string.def(""),inline:t.bool.def(!0),removeNoValueItem:t.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:t.bool.def(!1),resetLoading:t.bool.def(!1)},emits:["search","reset","register","validate"],setup(o,{expose:t,emit:n}){const r=o,d=n,p=b(!0),f=b(r.model),F=g((()=>{const e=c(A);let a=E(e.schema);if(e.showExpand&&e.expandField&&!c(p)){const s=L(a,(a=>a.field===e.expandField));a.map(((e,a)=>(e.hidden=a>=s,e)))}return"inline"===e.layout&&(a=a.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>x("div",null,[x(j,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:p.value,onExpand:G,onReset:Q,onSearch:q},null)]),label:()=>x("span",null,[m(" ")])}}}])),a})),{formRegister:_,formMethods:O}=e(),{getElFormExpose:C,getFormData:P,getFormExpose:V}=O,B=b({}),I=b({}),A=g((()=>{const e={...r};return Object.assign(e,c(I)),e})),N=b([]);w((()=>c(F)),(async(e=[])=>{f.value=s(e,c(f)),N.value=e}),{immediate:!0,deep:!0});const W=async()=>{const e=await P();return c(A).removeNoValueItem?Object.keys(e).reduce(((a,s)=>{const o=e[s];return S(o)||(R(o)?Object.keys(o).length>0&&(a[s]=o):a[s]=o),a}),{}):e},q=async()=>{const e=await C();await(null==e?void 0:e.validate((async e=>{if(e){const e=await W();d("search",e)}})))},Q=async()=>{const e=await C();null==e||e.resetFields();const a=await W();d("reset",a)},D=g((()=>({textAlign:c(A).buttonPosition}))),G=async()=>{p.value=!c(p)},H={getElFormExpose:C,setProps:(e={})=>{I.value=Object.assign(c(I),e),B.value=e},setSchema:e=>{const{schema:a}=c(A);for(const s of a)for(const a of e)s.field===a.field&&k(s,a.path,a.value)},setValues:async(e={})=>{f.value=Object.assign(r.model,c(f),e);const a=await V();null==a||a.setValues(e)},delSchema:e=>{const{schema:a}=c(A),s=L(a,(a=>a.field===e));s>-1&&a.splice(s,1)},addSchema:(e,a)=>{const{schema:s}=c(A);void 0===a?s.push(e):s.splice(a,0,e)}};v((()=>{d("register",H)})),t(H);const M=(e,a,s)=>{d("validate",e,a,s)};return(e,s)=>(l(),i(u,null,[x(c(a),{model:f.value,"is-custom":!1,"label-width":A.value.labelWidth,"hide-required-asterisk":"",inline:A.value.inline,"is-col":A.value.isCol,schema:N.value,onRegister:c(_),onValidate:M},null,8,["model","label-width","inline","is-col","schema","onRegister"]),"bottom"===o.layout?(l(),i("div",{key:0,style:y(D.value)},[x(j,{"show-reset":A.value.showReset,"show-search":A.value.showSearch,"show-expand":A.value.showExpand,"search-loading":A.value.searchLoading,"reset-loading":A.value.resetLoading,onExpand:G,onReset:Q,onSearch:q},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):h("",!0)],64))}});export{_};
