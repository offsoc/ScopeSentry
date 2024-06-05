import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D8TtpZ7e.js";import{d as t,r as a,N as o,O as s,X as l,e as i,Q as r,Y as n,o as u,c as d,w as c,a as p,H as m,t as g,Z as f,I as v,f as y,$ as h,a0 as k,l as S}from"./index-C7FJj4Bp.js";import{a as _,E as b}from"./el-col-CLycMjBT.js";import{E as w}from"./el-text-JBU2hwTl.js";import{E as j}from"./el-progress-DnGceo80.js";import{E as x}from"./el-tag-BHmHdP98.js";import{_ as T}from"./Table.vue_vue_type_script_lang-CTgmk2QX.js";import{u as I}from"./useTable-B6mqWFf8.js";import{u as C}from"./useIcon-p9zXclCz.js";import{a as P,d as E,r as N,g as A}from"./index-CrQ2zyH0.js";import{_ as L}from"./Dialog.vue_vue_type_style_index_0_lang-CEAQr764.js";import{_ as V}from"./AddTask.vue_vue_type_script_setup_true_lang-D-haequG.js";import{_ as U}from"./ProgressInfo.vue_vue_type_script_setup_true_lang-AuHCaP3V.js";import"./el-card-Bhf-XVja.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DYwcpnJt.js";import"./el-checkbox-CPLJJMmd.js";import"./useInput-B9PSdhNo.js";import"./debounce-FYM4CuA0.js";import"./el-pagination-Fvtq0GFD.js";import"./el-image-viewer-DhtUPOdN.js";import"./tsxHelper-CSAh_eRe.js";import"./el-dropdown-item-zcj1wK-o.js";import"./castArray-C6EAQny5.js";import"./refs-Dte5lzrT.js";import"./index-DzV5t0hO.js";import"./raf-BrJref6v.js";import"./index-DPWgdpfC.js";/* empty css                          */import"./el-divider-DK9S_Niq.js";import"./el-form-item-DGQT7cXn.js";import"./el-switch-DLGqKmW6.js";import"./el-radio-group-DfAiTKol.js";import"./el-select-v2-BzeNENN_.js";import"./el-input-number-Dj7xeWd9.js";import"./index-Cme0opYz.js";import"./index-P1b7NQVD.js";import"./index-Cfrs_o4w.js";const z={class:"mb-10px"},D={style:{position:"relative",top:"12px"}};function M(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!k(e)}const W=t({__name:"Task",setup(t){const k=C({icon:"iconoir:search"}),{t:W}=S(),H=a(""),R=()=>{te()},F=o([{field:"selection",type:"selection",width:"55"},{field:"name",label:W("task.taskName"),minWidth:30},{field:"taskNum",label:W("task.taskCount"),minWidth:15,formatter:(e,t,a)=>s(x,{type:"info"},(()=>a))},{field:"progress",label:W("task.taskProgress"),minWidth:40,formatter:(e,t,a)=>s(j,{percentage:a,type:"line",striped:!0,status:a<100?"":"success",stripedFlow:a<100})},{field:"creatTime",label:W("task.createTime"),minWidth:30},{field:"endTime",label:W("task.endTime"),minWidth:30,formatter:(e,t,a)=>""==a?"-":a},{field:"action",label:W("tableDemo.action"),minWidth:50,formatter:(e,t,a)=>{let o,n,u;const d=s(l,{type:"warning",onClick:()=>ye(e)},W("task.retest"));return i(r,null,[i(l,{type:"success",onClick:()=>de(e)},M(o=W("common.view"))?o:{default:()=>[o]}),d,i(l,{type:"danger",onClick:()=>pe(e)},M(n=W("common.delete"))?n:{default:()=>[n]}),i(l,{type:"primary",onClick:()=>J(e.id)},M(u=W("task.taskProgress"))?u:{default:()=>[u]})])}}]),O=a(!1);let B="";const J=async e=>{B=e,O.value=!0},Q=()=>{O.value=!1},{tableRegister:q,tableState:G,tableMethods:K}=I({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=G,a=await A(H.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:X,dataList:Y,total:Z,currentPage:$,pageSize:ee}=G;ee.value=20;const{getList:te,getElTableExpose:ae}=K;function oe(){return{background:"var(--el-fill-color-light)"}}const se=a(!1),le=async()=>{ie=W("task.addTask"),ue.value=!0,ne.name="",ne.target="",ne.node=[],ne.subdomainScan=!0,ne.duplicates=!0,ne.subdomainConfig=[],ne.urlScan=!0,ne.sensitiveInfoScan=!0,ne.pageMonitoring="JS",ne.crawlerScan=!0,ne.vulScan=!1,ne.vulList=[],ne.portScan=!1,ne.ports="",ne.dirScan=!0,ne.waybackurl=!0,ne.scheduledTasks=!0,ne.hour=24,ne.allNode=!1,se.value=!0};let ie=W("task.addTask");const re=()=>{se.value=!1};let ne=o({name:"",target:"",node:[],subdomainScan:!0,duplicates:!0,subdomainConfig:[],urlScan:!0,sensitiveInfoScan:!0,pageMonitoring:"JS",crawlerScan:!0,vulScan:!1,vulList:[],portScan:!1,ports:"",dirScan:!0,waybackurl:!0,scheduledTasks:!0,hour:24,allNode:!1}),ue=a(!0);const de=async e=>{const t=await P(e.id);if(200===t.code){const e=t.data;ne.name=e.name,ne.target=e.target,ne.node=e.node,ne.subdomainScan=e.subdomainScan,ne.subdomainConfig=e.subdomainConfig,ne.urlScan=e.urlScan,ne.sensitiveInfoScan=e.sensitiveInfoScan,ne.pageMonitoring=e.pageMonitoring,ne.crawlerScan=e.crawlerScan,ne.vulScan=e.vulScan,ne.vulList=e.vulList,ne.portScan=e.portScan,ne.ports=e.ports,ne.dirScan=e.dirScan,ne.waybackurl=e.waybackurl,ne.scheduledTasks=e.scheduledTasks,ne.hour=e.hour,ne.allNode=e.allNode,ne.duplicates=e.duplicates}se.value=!0,ue.value=!1,ie=W("common.view")},ce=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ve()},pe=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await ge(e)},me=a(!1),ge=async e=>{me.value=!0;try{await E([e.id]);me.value=!1,te()}catch(t){me.value=!1,te()}},fe=a([]),ve=async()=>{const e=await ae(),t=(null==e?void 0:e.getSelectionRows())||[];fe.value=t.map((e=>e.id)),me.value=!0;try{await E(fe.value);me.value=!1,te()}catch(a){me.value=!1,te()}},ye=async e=>{window.confirm("Are you sure you want to retest?")&&await he(e)},he=async e=>{try{await N(e.id),te()}catch(t){te()}};n((()=>{Se(),window.addEventListener("resize",Se)}));const ke=a(0),Se=()=>{const e=window.innerHeight||document.documentElement.clientHeight;ke.value=.75*e};return(t,a)=>(u(),d(r,null,[i(p(e),null,{default:c((()=>[i(p(_),null,{default:c((()=>[i(p(b),{span:1},{default:c((()=>[i(p(w),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:c((()=>[m(g(p(W)("task.taskName"))+":",1)])),_:1})])),_:1}),i(p(b),{span:5},{default:c((()=>[i(p(f),{modelValue:H.value,"onUpdate:modelValue":a[0]||(a[0]=e=>H.value=e),placeholder:p(W)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),i(p(b),{span:5,style:{position:"relative",left:"16px"}},{default:c((()=>[i(p(v),{type:"primary",icon:p(k),style:{height:"100%"},onClick:R},{default:c((()=>[m("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),i(p(_),null,{default:c((()=>[i(p(b),{style:{position:"relative",top:"16px"}},{default:c((()=>[y("div",z,[i(p(l),{type:"primary",onClick:le},{default:c((()=>[m(g(p(W)("task.addTask")),1)])),_:1}),i(p(l),{type:"danger",loading:me.value,onClick:ce},{default:c((()=>[m(g(p(W)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),y("div",D,[i(p(T),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:p(ee),"onUpdate:pageSize":a[1]||(a[1]=e=>h(ee)?ee.value=e:null),currentPage:p($),"onUpdate:currentPage":a[2]||(a[2]=e=>h($)?$.value=e:null),columns:F,data:p(Y),stripe:"",border:!0,loading:p(X),"max-height":ke.value,resizable:!0,pagination:{total:p(Z),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:p(q),headerCellStyle:oe,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])])])),_:1}),i(p(L),{modelValue:se.value,"onUpdate:modelValue":a[3]||(a[3]=e=>se.value=e),title:p(ie),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:c((()=>[i(V,{closeDialog:re,getList:p(te),vTaskForm:p(ne),create:p(ue),taskid:"",schedule:!1},null,8,["getList","vTaskForm","create"])])),_:1},8,["modelValue","title"]),i(p(L),{modelValue:O.value,"onUpdate:modelValue":a[4]||(a[4]=e=>O.value=e),title:p(W)("task.taskProgress"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":"700"},{default:c((()=>[i(U,{closeDialog:Q,getProgressInfoID:p(B),getProgressInfotype:"scan",getProgressInforunnerid:""},null,8,["getProgressInfoID"])])),_:1},8,["modelValue","title"])],64))}});export{W as default};
