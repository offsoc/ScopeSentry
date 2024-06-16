import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-mUK4Q3hP.js";import{d as t,r as a,N as o,O as s,X as l,e as i,Q as r,Y as n,o as u,c as d,w as c,a as p,H as m,t as g,Z as f,I as v,f as y,$ as h,a0 as k,l as _}from"./index-RTeQX4Z1.js";import{a as S,E as b}from"./el-col-Clk25fNT.js";import{E as w}from"./el-text-CpyCtW8d.js";import{E as j}from"./el-progress-GxWT0N9-.js";import{E as x}from"./el-tag-DQ-f6KyF.js";import{_ as T}from"./Table.vue_vue_type_script_lang-ZyLIndS7.js";import{u as I}from"./useTable-C6AO1hlT.js";import{u as C}from"./useIcon-KJLOguoe.js";import{a as N,d as P,r as A,g as E}from"./index-Dm4zoanK.js";import{_ as L}from"./Dialog.vue_vue_type_style_index_0_lang-k1HJRGzw.js";import{_ as U}from"./AddTask.vue_vue_type_script_setup_true_lang-Bd17yQo1.js";import{_ as V}from"./ProgressInfo.vue_vue_type_script_setup_true_lang-BOGYSDc0.js";import"./el-card-DvuZ99w3.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BiF-N6C2.js";import"./el-checkbox-bH4fVny5.js";import"./useInput-Bmcy5cuV.js";import"./debounce-DUkqpuCQ.js";import"./el-select-2HzOgPi7.js";import"./el-image-viewer-CRlDfJN9.js";import"./tsxHelper-b5SIzQmu.js";import"./el-dropdown-item-D_iEt1B1.js";import"./castArray-Cj9r5Aws.js";import"./refs-BEkOJGIm.js";import"./index-hI19neGk.js";import"./raf-BzIIckEj.js";import"./index-EWI9jeY3.js";/* empty css                          */import"./el-divider-C9tmp1am.js";import"./el-form-item-Bth-RQFo.js";import"./el-switch-CXN3V_sb.js";import"./el-radio-group-C3cxfPRm.js";import"./el-select-v2-gvYMzuV8.js";import"./el-input-number-BZ3WqMAD.js";import"./index-GlyP9fAr.js";import"./index-wW-hJ0Fn.js";import"./index-B7eLyWxy.js";const z={class:"mb-10px"},D={style:{position:"relative",top:"12px"}};function M(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!k(e)}const W=t({__name:"Task",setup(t){const k=C({icon:"iconoir:search"}),{t:W}=_(),F=a(""),H=()=>{te()},O=o([{field:"selection",type:"selection",width:"55"},{field:"name",label:W("task.taskName"),minWidth:20},{field:"taskNum",label:W("task.taskCount"),minWidth:15,formatter:(e,t,a)=>s(x,{type:"info"},(()=>a))},{field:"progress",label:W("task.taskProgress"),minWidth:30,formatter:(e,t,a)=>s(j,{percentage:a,type:"line",striped:!0,status:a<100?"":"success",stripedFlow:a<100})},{field:"creatTime",label:W("task.createTime"),minWidth:25},{field:"endTime",label:W("task.endTime"),minWidth:25,formatter:(e,t,a)=>""==a?"-":a},{field:"action",label:W("tableDemo.action"),minWidth:50,formatter:(e,t,a)=>{let o,n,u;const d=s(l,{type:"warning",onClick:()=>ye(e)},W("task.retest"));return i(r,null,[i(l,{type:"success",onClick:()=>de(e)},M(o=W("common.view"))?o:{default:()=>[o]}),d,i(l,{type:"danger",onClick:()=>pe(e)},M(n=W("common.delete"))?n:{default:()=>[n]}),i(l,{type:"primary",onClick:()=>Q(e.id)},M(u=W("task.taskProgress"))?u:{default:()=>[u]})])}}]),R=a(!1);let J="";const Q=async e=>{J=e,R.value=!0},$=()=>{R.value=!1},{tableRegister:q,tableState:B,tableMethods:G}=I({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=B,a=await E(F.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:K,dataList:X,total:Y,currentPage:Z,pageSize:ee}=B;ee.value=20;const{getList:te,getElTableExpose:ae}=G;function oe(){return{background:"var(--el-fill-color-light)"}}const se=a(!1),le=async()=>{ie=W("task.addTask"),ue.value=!0,ne.name="",ne.target="",ne.node=[],ne.subdomainScan=!0,ne.duplicates="None",ne.subdomainConfig=[],ne.urlScan=!0,ne.sensitiveInfoScan=!0,ne.pageMonitoring="JS",ne.crawlerScan=!0,ne.vulScan=!1,ne.vulList=[],ne.portScan=!1,ne.ports="",ne.dirScan=!0,ne.waybackurl=!0,ne.scheduledTasks=!0,ne.hour=24,ne.allNode=!1,se.value=!0};let ie=W("task.addTask");const re=()=>{se.value=!1};let ne=o({name:"",target:"",node:[],subdomainScan:!0,duplicates:"None",subdomainConfig:[],urlScan:!0,sensitiveInfoScan:!0,pageMonitoring:"JS",crawlerScan:!0,vulScan:!1,vulList:[],portScan:!1,ports:"",dirScan:!0,waybackurl:!0,scheduledTasks:!0,hour:24,allNode:!1}),ue=a(!0);const de=async e=>{const t=await N(e.id);if(200===t.code){const e=t.data;ne.name=e.name,ne.target=e.target,ne.node=e.node,ne.subdomainScan=e.subdomainScan,ne.subdomainConfig=e.subdomainConfig,ne.urlScan=e.urlScan,ne.sensitiveInfoScan=e.sensitiveInfoScan,ne.pageMonitoring=e.pageMonitoring,ne.crawlerScan=e.crawlerScan,ne.vulScan=e.vulScan,ne.vulList=e.vulList,ne.portScan=e.portScan,ne.ports=e.ports,ne.dirScan=e.dirScan,ne.waybackurl=e.waybackurl,ne.scheduledTasks=e.scheduledTasks,ne.hour=e.hour,ne.allNode=e.allNode,ne.duplicates=e.duplicates}se.value=!0,ue.value=!1,ie=W("common.view")},ce=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ve()},pe=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await ge(e)},me=a(!1),ge=async e=>{me.value=!0;try{await P([e.id]);me.value=!1,te()}catch(t){me.value=!1,te()}},fe=a([]),ve=async()=>{const e=await ae(),t=(null==e?void 0:e.getSelectionRows())||[];fe.value=t.map((e=>e.id)),me.value=!0;try{await P(fe.value);me.value=!1,te()}catch(a){me.value=!1,te()}},ye=async e=>{window.confirm("Are you sure you want to retest?")&&await he(e)},he=async e=>{try{await A(e.id),te()}catch(t){te()}};n((()=>{_e(),window.addEventListener("resize",_e)}));const ke=a(0),_e=()=>{const e=window.innerHeight||document.documentElement.clientHeight;ke.value=.75*e};return(t,a)=>(u(),d(r,null,[i(p(e),null,{default:c((()=>[i(p(S),null,{default:c((()=>[i(p(b),{span:1},{default:c((()=>[i(p(w),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:c((()=>[m(g(p(W)("task.taskName"))+":",1)])),_:1})])),_:1}),i(p(b),{span:5},{default:c((()=>[i(p(f),{modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value=e),placeholder:p(W)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),i(p(b),{span:5,style:{position:"relative",left:"16px"}},{default:c((()=>[i(p(v),{type:"primary",icon:p(k),style:{height:"100%"},onClick:H},{default:c((()=>[m("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),i(p(S),null,{default:c((()=>[i(p(b),{style:{position:"relative",top:"16px"}},{default:c((()=>[y("div",z,[i(p(l),{type:"primary",onClick:le},{default:c((()=>[m(g(p(W)("task.addTask")),1)])),_:1}),i(p(l),{type:"danger",loading:me.value,onClick:ce},{default:c((()=>[m(g(p(W)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),y("div",D,[i(p(T),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:p(ee),"onUpdate:pageSize":a[1]||(a[1]=e=>h(ee)?ee.value=e:null),currentPage:p(Z),"onUpdate:currentPage":a[2]||(a[2]=e=>h(Z)?Z.value=e:null),columns:O,data:p(X),stripe:"",border:!0,loading:p(K),"max-height":ke.value,resizable:!0,pagination:{total:p(Y),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:p(q),headerCellStyle:oe,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])])])),_:1}),i(p(L),{modelValue:se.value,"onUpdate:modelValue":a[3]||(a[3]=e=>se.value=e),title:p(ie),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:c((()=>[i(U,{closeDialog:re,getList:p(te),vTaskForm:p(ne),create:p(ue),taskid:"",schedule:!1},null,8,["getList","vTaskForm","create"])])),_:1},8,["modelValue","title"]),i(p(L),{modelValue:R.value,"onUpdate:modelValue":a[4]||(a[4]=e=>R.value=e),title:p(W)("task.taskProgress"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":"700"},{default:c((()=>[i(V,{closeDialog:$,getProgressInfoID:p(J),getProgressInfotype:"scan",getProgressInforunnerid:""},null,8,["getProgressInfoID"])])),_:1},8,["modelValue","title"])],64))}});export{W as default};