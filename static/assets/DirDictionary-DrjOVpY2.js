import{d as a,r as e,a6 as s,o as t,i as o,w as n,e as i,a as l,f as d,t as r,I as u,H as c,l as m,_ as f}from"./index-Dk21xwtr.js";import{E as p,a as v}from"./el-col-DbOQcVQ4.js";import{E as y}from"./el-card-SL_UCAqP.js";import{j as _,o as h,T as w}from"./index-CIvdrSoQ.js";import{a as x,b as j}from"./index-BTjH5MmZ.js";import"./index-CtI1U4Dj.js";const b=f(a({__name:"DirDictionary",setup(a){const{t:f}=m(),b=e(""),g=[_(),h];s((async()=>{try{const a=await x();200===a.code&&(b.value=a.data.dict)}catch(a){}}));const D=async()=>{window.confirm("Do you want to save the data?")&&await E()},E=async()=>{V.value=!0;200==(await j(b.value)).code&&(V.value=!1)},V=e(!1);return(a,e)=>(t(),o(l(y),{shadow:"never",class:"mb-20px"},{header:n((()=>[i(l(v),null,{default:n((()=>[i(l(p),{span:3,style:{height:"100%"}},{default:n((()=>[d("span",null,r(l(f)("router.dirDictionary")),1)])),_:1}),i(l(p),{span:2,offset:19},{default:n((()=>[i(l(u),{type:"primary",onClick:D,onLoading:V.value},{default:n((()=>[c(r(l(f)("common.save")),1)])),_:1},8,["onLoading"])])),_:1})])),_:1})])),default:n((()=>[i(l(w),{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=a=>b.value=a),style:{height:"800px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:g},null,8,["modelValue"])])),_:1}))}}),[["__scopeId","data-v-1a6e4eb8"]]);export{b as default};
