import{d as e,N as t,O as a,S as o,X as i,r as l,o as n,c as d,e as m,w as s,a as c,f as u,t as r,H as p,I as f,Z as v,i as b,j as _,Q as h,l as y,_ as x}from"./index-CkCEk9VW.js";import{E as N,a as g}from"./el-col-DOJxIdcb.js";import{E as w,a as V}from"./el-form-item-Yw610eQe.js";import{a as j,E as T}from"./el-radio-group-CMoCj8fO.js";import{E as S}from"./el-text-CeaAao6m.js";import{E as k}from"./el-switch-ByZMxUBd.js";import{E as U}from"./el-divider-uGEymoUn.js";import{E as I}from"./el-card-CsPP8HKp.js";import{_ as E}from"./Dialog.vue_vue_type_style_index_0_lang-BJ49IL3X.js";import{_ as A}from"./Table.vue_vue_type_script_lang-CjD3G7xt.js";import{u as M}from"./useTable-CR124o7-.js";import{e as C,f as R,h as D,u as H,i as O,j as P}from"./index-Dp7vW9ma.js";import"./castArray-nWbA6lhz.js";import"./refs-1kaIDmjp.js";import"./el-popper-1D1qSWZj.js";import"./el-checkbox-BkBx3Mtw.js";import"./useInput-DpM1BNjN.js";import"./debounce-BUaoKyTD.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-2ALjTD3w.js";import"./el-pagination-CB-GtZS1.js";import"./el-image-viewer-fdTVElS5.js";import"./tsxHelper-eao2XTL0.js";import"./el-dropdown-item-BjX8Mmf2.js";import"./index-BCymA3BH.js";import"./raf-H30ypQsV.js";import"./index-BTzo3Zl2.js";const L={class:"mb-10px"},W={style:{position:"relative",top:"12px"}},F=x(e({__name:"notification",setup(e){const{t:x}=y(),F=t([{field:"selection",type:"selection",width:"55"},{field:"name",label:"Name",minWidth:20},{field:"method",label:"Method",minWidth:20},{field:"url",label:"URL"},{field:"contentType",label:"Content Type",minWidth:25},{field:"data",label:"POST DATA"},{field:"state",label:x("common.state"),minWidth:25,formatter:(e,t,i)=>{let l="",n="";return 1==i?(l="#2eb98a",n=x("common.on")):(l="red",n=x("common.off")),a(g,{gutter:20},[a(N,{span:1},[a(o,{icon:"clarity:circle-solid",color:l,size:10})]),a(N,{span:5},[a(S,{type:"info"},n)])])}},{field:"action",label:x("tableDemo.action"),formatter:(e,t,o)=>a("div",[a(i,{type:"primary",onClick:()=>te(e)},x("common.edit")),a(i,{type:"danger",onClick:()=>oe(e)},x("common.delete"))])}]),{tableState:G,tableMethods:z}=M({fetchDataApi:async()=>({list:(await R()).data.list})}),{dataList:B}=G,{getList:Q,getElTableExpose:q}=z,J=t({name:"",url:"",method:"GET",contentType:"raw",data:"",state:!0}),K=t({dirScanNotification:!0,portScanNotification:!0,sensitiveNotification:!0,subdomainNotification:!0,subdomainTakeoverNotification:!0,pageMonNotification:!0,vulNotification:!0});(async()=>{const e=await D();K.dirScanNotification=e.data.dirScanNotification,K.portScanNotification=e.data.portScanNotification,K.sensitiveNotification=e.data.sensitiveNotification,K.subdomainNotification=e.data.subdomainNotification,K.subdomainTakeoverNotification=e.data.subdomainTakeoverNotification,K.pageMonNotification=e.data.pageMonNotification,K.vulNotification=e.data.vulNotification})();const X=l(!1),Z=l(!1),Y=async()=>{$.value="",J.name="",J.url="",J.method="GET",J.contentType="raw",J.data="",J.state=!0,Z.value=!0},$=l(""),ee=l(!1),te=e=>{$.value=e.id,J.name=e.name,J.url=e.url,J.method=e.method,J.contentType=e.contentType,J.data=e.data,J.state=e.state,Z.value=!0},ae=l(!1),oe=async e=>{ae.value=!0;try{await C([e.id]);ae.value=!1,Q()}catch(t){ae.value=!1,Q()}},ie=l([]),le=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ne()},ne=async()=>{const e=await q(),t=(null==e?void 0:e.getSelectionRows())||[];ie.value=t.map((e=>e.id)),ae.value=!0;try{await C(ie.value);ae.value=!1,Q()}catch(a){ae.value=!1,Q()}};return(e,t)=>(n(),d(h,null,[m(c(I),{shadow:"never",class:"mb-20px"},{header:s((()=>[m(c(g),null,{default:s((()=>[m(c(N),{span:3,style:{height:"100%"}},{default:s((()=>[u("span",null,r(c(x)("configuration.noticeConfig")),1)])),_:1})])),_:1})])),default:s((()=>[m(c(g),null,{default:s((()=>[m(c(N),{style:{position:"relative",top:"16px"}},{default:s((()=>[u("div",L,[m(c(i),{type:"primary",onClick:Y},{default:s((()=>[p(r(c(x)("configuration.newWebhookConfig")),1)])),_:1}),m(c(i),{type:"danger",loading:ae.value,onClick:le},{default:s((()=>[p(r(c(x)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),u("div",W,[m(c(A),{data:c(B),columns:F,stripe:"",border:!0,resizable:!0,maxHeight:"200",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["data","columns"])]),m(c(U)),m(c(w),{model:K,"label-width":"100px","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[m(c(g),null,{default:s((()=>[m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("subdomain.subdomainName")},{default:s((()=>[m(c(k),{modelValue:K.subdomainNotification,"onUpdate:modelValue":t[0]||(t[0]=e=>K.subdomainNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("task.subdomainTakeover")},{default:s((()=>[m(c(k),{modelValue:K.subdomainTakeoverNotification,"onUpdate:modelValue":t[1]||(t[1]=e=>K.subdomainTakeoverNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("dirScan.dirScanName")},{default:s((()=>[m(c(k),{modelValue:K.dirScanNotification,"onUpdate:modelValue":t[2]||(t[2]=e=>K.dirScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),m(c(g),null,{default:s((()=>[m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("task.portScan")},{default:s((()=>[m(c(k),{modelValue:K.portScanNotification,"onUpdate:modelValue":t[3]||(t[3]=e=>K.portScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("sensitiveInformation.sensitiveInformationName")},{default:s((()=>[m(c(k),{modelValue:K.sensitiveNotification,"onUpdate:modelValue":t[4]||(t[4]=e=>K.sensitiveNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("PageMonitoring.pageMonitoringName")},{default:s((()=>[m(c(k),{modelValue:K.pageMonNotification,"onUpdate:modelValue":t[5]||(t[5]=e=>K.pageMonNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),m(c(g),null,{default:s((()=>[m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("vulnerability.vulnerabilityName")},{default:s((()=>[m(c(k),{modelValue:K.vulNotification,"onUpdate:modelValue":t[6]||(t[6]=e=>K.vulNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),m(c(g),null,{default:s((()=>[m(c(N),{span:2,offset:8},{default:s((()=>[m(c(V),null,{default:s((()=>[m(c(f),{type:"primary",onClick:t[7]||(t[7]=e=>(async()=>{X.value=!0,await H(K.dirScanNotification,K.portScanNotification,K.sensitiveNotification,K.subdomainNotification,K.subdomainTakeoverNotification,K.pageMonNotification,K.vulNotification),X.value=!1})()),loading:X.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),m(c(E),{modelValue:Z.value,"onUpdate:modelValue":t[15]||(t[15]=e=>Z.value=e),title:c(x)("configuration.newWebhookConfig"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:"100"},{default:s((()=>[m(c(S),{class:"mx-2",type:"danger",size:"small",style:{position:"relative",left:"2rem"}},{default:s((()=>[p(r(c(x)("configuration.noticeHelp")),1)])),_:1}),m(c(w),{model:J,"label-width":"100px","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[m(c(V),{label:"Name",prop:"name"},{default:s((()=>[m(c(v),{modelValue:J.name,"onUpdate:modelValue":t[8]||(t[8]=e=>J.name=e),placeholder:"Input name."},null,8,["modelValue"])])),_:1}),m(c(V),{label:"Method",prop:"method"},{default:s((()=>[m(c(j),{modelValue:J.method,"onUpdate:modelValue":t[9]||(t[9]=e=>J.method=e)},{default:s((()=>[m(c(T),{value:"GET"},{default:s((()=>[p("GET")])),_:1}),m(c(T),{value:"POST"},{default:s((()=>[p("POST")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m(c(V),{label:"URL",prop:"url"},{default:s((()=>[m(c(v),{modelValue:J.url,"onUpdate:modelValue":t[10]||(t[10]=e=>J.url=e),placeholder:"Input URL."},null,8,["modelValue"])])),_:1}),"POST"==J.method?(n(),b(c(V),{key:0,label:"Data Type",prop:"contentType"},{default:s((()=>[m(c(j),{modelValue:J.contentType,"onUpdate:modelValue":t[11]||(t[11]=e=>J.contentType=e)},{default:s((()=>[m(c(T),{value:"raw"},{default:s((()=>[p("Raw")])),_:1}),m(c(T),{value:"json"},{default:s((()=>[p("Json")])),_:1})])),_:1},8,["modelValue"])])),_:1})):_("",!0),"POST"==J.method?(n(),b(c(V),{key:1,label:"Data",prop:"Data"},{default:s((()=>[m(c(v),{modelValue:J.data,"onUpdate:modelValue":t[12]||(t[12]=e=>J.data=e),placeholder:"Input POST Data."},null,8,["modelValue"])])),_:1})):_("",!0),m(c(V),{label:c(x)("common.state")},{default:s((()=>[m(c(k),{modelValue:J.state,"onUpdate:modelValue":t[13]||(t[13]=e=>J.state=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),m(c(g),null,{default:s((()=>[m(c(N),{span:2,offset:8},{default:s((()=>[m(c(V),null,{default:s((()=>[m(c(f),{type:"primary",onClick:t[14]||(t[14]=e=>(async()=>{ee.value=!0,""==$.value?await O(J.name,J.url,J.method,J.contentType,J.data,J.state):await P($.value,J.name,J.url,J.method,J.contentType,J.data,J.state),Q(),ee.value=!1,Z.value=!1})()),loading:ee.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-5bfd2a7b"]]);export{F as default};
