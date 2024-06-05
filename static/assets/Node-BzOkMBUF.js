import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CCFIglUl.js";import{d as t,N as a,O as o,e as l,X as i,Q as n,r,a3 as s,Y as d,o as m,c as u,w as p,a as c,f,H as g,t as h,$ as v,E as y,j as _,a0 as x,l as b}from"./index-Cx8c_DGm.js";import{a as j,E as w}from"./el-col-Dkeu_6YD.js";import{E as T}from"./el-tag-Cgh6eGgU.js";import{_ as S}from"./Table.vue_vue_type_script_lang-hvmcFRFE.js";import{u as N}from"./useTable-CU2Ns5fw.js";import{_ as k}from"./Dialog.vue_vue_type_style_index_0_lang-D8ib-MSQ.js";import{_ as C}from"./Configuration.vue_vue_type_script_setup_true_lang-C6AZL8hW.js";import{b as E,g as W,d as F}from"./index-CzIsDrGh.js";import"./el-card-Cj-qGypW.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-XD53uS00.js";import"./el-checkbox-CLTCzqLk.js";import"./useInput-BBNxhY8t.js";import"./debounce-D3Q3rK3h.js";import"./el-pagination-CYySNqOU.js";import"./el-image-viewer-Ayl3bk9s.js";import"./tsxHelper-BrHx8sVR.js";import"./el-dropdown-item-BWeBo9en.js";import"./castArray-CDdRPdVs.js";import"./refs-B9jEtiql.js";import"./index-DJsCq1Fr.js";import"./raf-CZs_VDyF.js";import"./el-form-item-r_os8uuo.js";import"./el-switch-NIzvBKN3.js";import"./el-divider-BUD3EAEm.js";import"./el-text-Djn8-ck4.js";import"./index-DaCXJg7P.js";const H={class:"mb-10px"},U={style:{position:"relative",top:"12px"}},z={key:0};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!x(e)}const M=t({__name:"Node",setup(t){const{t:x}=b(),M=a([{field:"selection",type:"selection",width:"55"},{field:"name",label:x("node.nodeName"),minWidth:20},{field:"maxTaskNum",label:x("configuration.maxTaskNum"),minWidth:10,formatter:(e,t,a)=>o(T,{type:"info"},(()=>a))},{field:"running",label:x("node.taskCount"),minWidth:10,formatter:(e,t,a)=>o(T,{round:!0,effect:"plain",hit:!0},(()=>a))},{field:"finished",label:x("node.finished"),minWidth:10,formatter:(e,t,a)=>o(T,{round:!0,effect:"plain",hit:!0},(()=>a))},{field:"cpuNum",label:x("node.nodeUsageCpu"),minWidth:20,formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),o(T,{round:!0,effect:"plain",hit:!0,type:l<50?"":l<80?"warning":"danger"},(()=>l+"%"))}},{field:"memNum",label:x("node.nodeUsageMemory"),minWidth:20,formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),o(T,{round:!0,effect:"plain",hit:!0,type:l<50?"":l<80?"warning":"danger"},(()=>l+"%"))}},{field:"state",label:x("node.nodeStatus"),minWidth:20,formatter:(e,t,a)=>o(T,{type:"1"===a?"success":"2"===a?"warning":"danger",effect:"light",hit:!0},(()=>x("1"===a?"node.statusRun":"2"===a?"node.statusStop":"node.statusError")))},{field:"updateTime",label:x("node.updateTime"),minWidth:20},{field:"action",label:x("tableDemo.action"),minWidth:30,formatter:(e,t,a)=>{let o,r;return l(n,null,[l(i,{type:"success",size:"small",onClick:()=>le(e)},R(o=x("node.log"))?o:{default:()=>[o]}),l(i,{type:"primary",size:"small",onClick:()=>X(e)},R(r=x("common.config"))?r:{default:()=>[r]})])}}]),{tableRegister:V,tableState:I,tableMethods:L}=N({fetchDataApi:async()=>({list:(await W()).data.list})}),{loading:A,dataList:D,currentPage:O,pageSize:P}=I,{getList:B,getElTableExpose:Q}=L;function $(){return{background:"var(--el-fill-color-light)"}}const q=r(!1),J=()=>{q.value=!1},K=a({name:"",maxTaskNum:"",state:"",dirscanThread:"",portscanThread:"",crawlerThread:"",urlThread:"",urlMaxNum:""}),X=async e=>{K.name=e.name,K.maxTaskNum=e.maxTaskNum,K.dirscanThread=e.dirscanThread,K.portscanThread=e.portscanThread,K.crawlerThread=e.crawlerThread,K.urlThread=e.urlThread,K.urlMaxNum=e.urlMaxNum,K.state=e.state,q.value=!0},Y=r(!1),G=r([]),Z=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Q(),t=(null==e?void 0:e.getSelectionRows())||[];G.value=t.map((e=>e.name)),Y.value=!0;try{await F(G.value),Y.value=!1,B()}catch(a){Y.value=!1,B()}})()},ee=r(!1),te=()=>{ee.value=!1},ae=r(""),oe=r(),le=async e=>{const t=await E(e.name);ae.value=t.logs,ee.value=!0;const a="https:"===window.location.protocol?"wss://":"ws://",o=window.location.host,l=new WebSocket(a+o);l.onopen=()=>{setInterval((()=>{const t={node_name:e.name};l.send(JSON.stringify(t))}),3e3)},l.onmessage=e=>{ae.value+=e.data,oe.value.setScrollTop(5e3)};const i=s(ee,(e=>{e||(l.close(),i())}))};d((()=>{ne(),window.addEventListener("resize",ne)}));const ie=r(0),ne=()=>{const e=window.innerHeight||document.documentElement.clientHeight;ie.value=.7*e};return(t,a)=>(m(),u(n,null,[l(c(e),null,{default:p((()=>[l(c(j),null,{default:p((()=>[l(c(w),{style:{position:"relative",top:"16px"}},{default:p((()=>[f("div",H,[l(c(i),{type:"danger",loading:Y.value,onClick:Z},{default:p((()=>[g(h(c(x)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),f("div",U,[l(c(S),{pageSize:c(P),"onUpdate:pageSize":a[0]||(a[0]=e=>v(P)?P.value=e:null),currentPage:c(O),"onUpdate:currentPage":a[1]||(a[1]=e=>v(O)?O.value=e:null),columns:M,data:c(D),stripe:"",border:!0,loading:c(A),resizable:!0,onRegister:c(V),headerCellStyle:$,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","onRegister"])])])),_:1}),l(c(k),{modelValue:q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e),title:t.$t("common.config"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ie.value},{default:p((()=>[l(C,{closeDialog:J,nodeConfForm:K,getList:c(B)},null,8,["nodeConfForm","getList"])])),_:1},8,["modelValue","title","maxHeight"]),l(c(k),{modelValue:ee.value,"onUpdate:modelValue":a[3]||(a[3]=e=>ee.value=e),title:c(x)("node.log"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ie.value},{footer:p((()=>[l(c(i),{onClick:te},{default:p((()=>[g(h(c(x)("common.off")),1)])),_:1})])),default:p((()=>[l(c(y),{ref_key:"scrollbarRef",ref:oe},{default:p((()=>[ae.value?(m(),u("pre",z,h(ae.value),1)):_("",!0)])),_:1},512)])),_:1},8,["modelValue","title","maxHeight"])],64))}});export{M as default};
