import{d as a,r as e,a6 as s,o as t,i as o,w as n,e as l,a as d,f as i,t as r,I as u,H as c,l as m,_ as f}from"./index-Dk21xwtr.js";import{E as p,a as v}from"./el-col-DbOQcVQ4.js";import{E as _}from"./el-card-SL_UCAqP.js";import{j as h,o as w,T as y}from"./index-CIvdrSoQ.js";import{c as x,d as j}from"./index-XNRPy6_l.js";import"./index-CtI1U4Dj.js";const g=f(a({__name:"rad",setup(a){const{t:f}=m(),g=e(""),b=[h(),w];s((async()=>{try{const a=await x();200===a.code&&(g.value=a.data.content)}catch(a){}}));const E=async()=>{window.confirm("Do you want to save the data?")&&await V()},V=async()=>{I.value=!0;200==(await j(g.value)).code&&(I.value=!1)},I=e(!1);return(a,e)=>(t(),o(d(_),{shadow:"never",class:"mb-20px"},{header:n((()=>[l(d(v),null,{default:n((()=>[l(d(p),{span:3,style:{height:"100%"}},{default:n((()=>[i("span",null,r(d(f)("configuration.rad")),1)])),_:1}),l(d(p),{span:2,offset:19},{default:n((()=>[l(d(u),{type:"primary",onClick:E,onLoading:I.value},{default:n((()=>[c(r(d(f)("common.save")),1)])),_:1},8,["onLoading"])])),_:1})])),_:1})])),default:n((()=>[l(d(y),{modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=a=>g.value=a),style:{height:"800px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:b},null,8,["modelValue"])])),_:1}))}}),[["__scopeId","data-v-cb5c34f0"]]);export{g as default};
