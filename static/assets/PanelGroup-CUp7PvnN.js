import{r as t,Y as e,a3 as a,s,d as l,A as i,o as n,c as o,i as u,a as d,d5 as r,j as c,n as v,L as p,bm as f,Q as x,a4 as _,J as m,e as b,K as g,b_ as y,M as h,al as w,N as $,U as k,w as C,f as j,t as z,l as S,k as E,_ as N}from"./index-5vcJ2QQZ.js";import{E as P,a as I}from"./el-col-D1K5Gn4C.js";import{E as L}from"./el-card-6d_8MANV.js";import{_ as T}from"./CountTo.vue_vue_type_script_setup_true_lang-D8YiaTSh.js";import{r as U}from"./index-kuLHsiIe.js";const A=s({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),B=s({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),K=l({name:"ElSkeletonItem"});var M=p(l({...K,props:B,setup(t){const e=i("skeleton");return(t,a)=>(n(),o("div",{class:v([d(e).e("item"),d(e).e(t.variant)])},["image"===t.variant?(n(),u(d(r),{key:0})):c("v-if",!0)],2))}}),[["__file","skeleton-item.vue"]]);const O=l({name:"ElSkeleton"});const D=h(p(l({...O,props:A,setup(s,{expose:l}){const r=s,p=i("skeleton"),h=((s,l=0)=>{if(0===l)return s;const i=t(!1);let n=0;const o=()=>{n&&clearTimeout(n),n=window.setTimeout((()=>{i.value=s.value}),l)};return e(o),a((()=>s.value),(t=>{t?o():i.value=t})),i})(f(r,"loading"),r.throttle);return l({uiLoading:h}),(t,e)=>d(h)?(n(),o("div",g({key:0,class:[d(p).b(),d(p).is("animated",t.animated)]},t.$attrs),[(n(!0),o(x,null,_(t.count,(e=>(n(),o(x,{key:e},[t.loading?m(t.$slots,"template",{key:e},(()=>[b(M,{class:v(d(p).is("first")),variant:"p"},null,8,["class"]),(n(!0),o(x,null,_(t.rows,(e=>(n(),u(M,{key:e,class:v([d(p).e("paragraph"),d(p).is("last",e===t.rows&&t.rows>1)]),variant:"p"},null,8,["class"])))),128))])):c("v-if",!0)],64)))),128))],16)):m(t.$slots,"default",y(g({key:1},t.$attrs)))}}),[["__file","skeleton.vue"]]),{SkeletonItem:M});w(M);const G=()=>U.get({url:"/api/system/version"}),J=()=>U.get({url:"/api/system/update"}),Q={class:"flex flex-col justify-between"},R={class:"flex flex-col justify-between"},Y={class:"flex flex-col justify-between"},q={class:"flex flex-col justify-between"},F={class:"flex flex-col justify-between"},H=N(l({__name:"PanelGroup",setup(e){const{t:a}=S(),{getPrefixCls:s}=E(),l=s("panel"),i=t(!0);let o=$({asetCount:0,subdomainCount:0,sensitiveCount:0,urlCount:0,vulnerabilityCount:0});return(async()=>{const t=await U.get({url:"/api/asset/statistics/data"}).catch((()=>{})).finally((()=>{i.value=!1}));o.asetCount=t.data.assetCount,o.subdomainCount=t.data.subdomainCount,o.sensitiveCount=t.data.sensitiveCount,o.urlCount=t.data.urlCount,o.vulnerabilityCount=t.data.vulnerabilityCount})(),(t,e)=>{const s=k("Icon");return n(),u(d(I),{justify:"space-between",class:v(d(l)),gutter:20},{default:C((()=>[b(d(P),{span:5},{default:C((()=>[b(d(L),{shadow:"hover",class:"mb-20px"},{default:C((()=>[b(d(D),{loading:i.value,animated:"",rows:2},{default:C((()=>[j("div",{class:v(`${d(l)}__item flex justify-between`)},[j("div",null,[j("div",{class:v(`${d(l)}__item--icon ${d(l)}__item--peoples p-16px inline-block rounded-6px`)},[b(s,{icon:"zondicons:network",size:40})],2)]),j("div",Q,[j("div",{class:v(`${d(l)}__item--text text-16px text-gray-500 text-right`)},z(d(a)("dashboard.totalAssets")),3),b(d(T),{class:"text-20px font-700 text-right","start-val":0,"end-val":d(o).asetCount||0,duration:2600},null,8,["end-val"])])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),b(d(P),{span:5},{default:C((()=>[b(d(L),{shadow:"hover",class:"mb-20px"},{default:C((()=>[b(d(D),{loading:i.value,animated:"",rows:2},{default:C((()=>[j("div",{class:v(`${d(l)}__item flex justify-between`)},[j("div",null,[j("div",{class:v(`${d(l)}__item--icon ${d(l)}__item--message p-16px inline-block rounded-6px`)},[b(s,{icon:"formkit:url",size:40})],2)]),j("div",R,[j("div",{class:v(`${d(l)}__item--text text-16px text-gray-500 text-right`)},z(d(a)("dashboard.subDomain")),3),b(d(T),{class:"text-20px font-700 text-right","start-val":0,"end-val":d(o).subdomainCount||0,duration:2600},null,8,["end-val"])])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),b(d(P),{span:5},{default:C((()=>[b(d(L),{shadow:"hover",class:"mb-20px"},{default:C((()=>[b(d(D),{loading:i.value,animated:"",rows:2},{default:C((()=>[j("div",{class:v(`${d(l)}__item flex justify-between`)},[j("div",null,[j("div",{class:v(`${d(l)}__item--icon ${d(l)}__item--money p-16px inline-block rounded-6px`)},[b(s,{icon:"lucide:info",size:40})],2)]),j("div",Y,[j("div",{class:v(`${d(l)}__item--text text-16px text-gray-500 text-right`)},z(d(a)("dashboard.informationLeakage")),3),b(d(T),{class:"text-20px font-700 text-right","start-val":0,"end-val":d(o).sensitiveCount||0,duration:2600},null,8,["end-val"])])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),b(d(P),{span:5},{default:C((()=>[b(d(L),{shadow:"hover",class:"mb-20px"},{default:C((()=>[b(d(D),{loading:i.value,animated:"",rows:2},{default:C((()=>[j("div",{class:v(`${d(l)}__item flex justify-between`)},[j("div",null,[j("div",{class:v(`${d(l)}__item--icon ${d(l)}__item--shopping p-16px inline-block rounded-6px`)},[b(s,{icon:"carbon:url",size:40})],2)]),j("div",q,[j("div",{class:v(`${d(l)}__item--text text-16px text-gray-500 text-right`)},z(d(a)("dashboard.URL")),3),b(d(T),{class:"text-20px font-700 text-right","start-val":0,"end-val":d(o).urlCount||0,duration:2600},null,8,["end-val"])])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),b(d(P),{span:4},{default:C((()=>[b(d(L),{shadow:"hover",class:"mb-20px"},{default:C((()=>[b(d(D),{loading:i.value,animated:"",rows:2},{default:C((()=>[j("div",{class:v(`${d(l)}__item flex justify-between`)},[j("div",null,[j("div",{class:v(`${d(l)}__item--icon ${d(l)}__item--shopping p-16px inline-block rounded-6px`)},[b(s,{icon:"ant-design:bug-filled",size:40})],2)]),j("div",F,[j("div",{class:v(`${d(l)}__item--text text-16px text-gray-500 text-right`)},z(d(a)("vulnerability.vulnerabilityName")),3),b(d(T),{class:"text-20px font-700 text-right","start-val":0,"end-val":d(o).vulnerabilityCount||0,duration:2600},null,8,["end-val"])])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-0f4bfd01"]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{H as P,J as U,V as a,G as g};
