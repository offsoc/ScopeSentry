import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CEdmon7H.js";import{d as t,N as a,O as o,e as l,X as n,Q as s,r as i,a3 as r,Y as u,o as d,c as m,w as p,a as c,f,H as g,t as v,$ as y,E as _,j as b,a0 as j,l as x}from"./index-DW0ls8FD.js";import{a as h,E as w}from"./el-col-zdbRy_CT.js";import{E as S}from"./el-tag-FG6xPbp4.js";import{_ as k}from"./Table.vue_vue_type_script_lang-BB7Dbq62.js";import{u as N}from"./useTable-D7S7F2dH.js";import{_ as C}from"./Dialog.vue_vue_type_style_index_0_lang-D6gcU7dY.js";import{_ as E}from"./Configuration.vue_vue_type_script_setup_true_lang-Ht8yshCE.js";import{b as T,g as F,d as H}from"./index-BnIQEzMW.js";import"./el-card-DYqFxjB9.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-8DMMW8Fg.js";import"./el-checkbox-LARa6PUn.js";import"./useInput-CdNe5s2K.js";import"./debounce-GdEfecKx.js";import"./el-pagination-DMWg5539.js";import"./el-image-viewer-lsLaMVeS.js";import"./tsxHelper-DA3uP4OE.js";import"./el-dropdown-item-B7fZS_cU.js";import"./castArray-BIZ_WTxg.js";import"./refs-0-VBVyuG.js";import"./index-B9IRQp0j.js";import"./raf-BjvSW-8C.js";import"./el-form-item-BHyQ5xcb.js";import"./el-switch-Dk2-BPFc.js";import"./index-Djy9NJ1B.js";const U={class:"mb-10px"},z={style:{position:"relative",top:"12px"}},R={key:0};function V(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const I=t({__name:"Node",setup(t){const{t:j}=x(),I=a([{field:"selection",type:"selection",width:"55"},{field:"name",label:j("node.nodeName"),minWidth:100},{field:"maxTaskNum",label:j("configuration.maxTaskNum"),formatter:(e,t,a)=>o(S,{type:"info"},(()=>a))},{field:"running",label:j("node.taskCount"),formatter:(e,t,a)=>o(S,{round:!0,effect:"plain",hit:!0},(()=>a))},{field:"finished",label:j("node.finished"),formatter:(e,t,a)=>o(S,{round:!0,effect:"plain",hit:!0},(()=>a))},{field:"cpuNum",label:j("node.nodeUsageCpu"),formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),o(S,{round:!0,effect:"plain",hit:!0,type:l<50?"":l<80?"warning":"danger"},(()=>l+"%"))}},{field:"memNum",label:j("node.nodeUsageMemory"),formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),o(S,{round:!0,effect:"plain",hit:!0,type:l<50?"":l<80?"warning":"danger"},(()=>l+"%"))}},{field:"state",label:j("node.nodeStatus"),formatter:(e,t,a)=>o(S,{type:"1"===a?"success":"2"===a?"warning":"danger",effect:"light",hit:!0},(()=>j("1"===a?"node.statusRun":"2"===a?"node.statusStop":"node.statusError")))},{field:"updateTime",label:j("node.updateTime")},{field:"action",label:j("tableDemo.action"),minWidth:"100px",formatter:(e,t,a)=>{let o,i;return l(s,null,[l(n,{type:"success",size:"small",onClick:()=>le(e)},V(o=j("node.log"))?o:{default:()=>[o]}),l(n,{type:"primary",size:"small",onClick:()=>X(e)},V(i=j("common.config"))?i:{default:()=>[i]})])}}]),{tableRegister:A,tableState:L,tableMethods:D}=N({fetchDataApi:async()=>({list:(await F()).data.list})}),{loading:M,dataList:O,currentPage:P,pageSize:W}=L,{getList:B,getElTableExpose:Q}=D;function $(){return{background:"var(--el-fill-color-light)"}}const q=i(!1),J=()=>{q.value=!1},K=a({name:"",maxTaskNum:"",state:""}),X=async e=>{K.name=e.name,K.maxTaskNum=e.maxTaskNum,K.state=e.state,q.value=!0},Y=i(!1),G=i([]),Z=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Q(),t=(null==e?void 0:e.getSelectionRows())||[];G.value=t.map((e=>e.name)),Y.value=!0;try{await H(G.value),Y.value=!1,B()}catch(a){Y.value=!1,B()}})()},ee=i(!1),te=()=>{ee.value=!1},ae=i(""),oe=i(),le=async e=>{const t=await T(e.name);ae.value=t.logs,ee.value=!0;const a=new WebSocket("ws://127.0.0.1:8000");a.onopen=()=>{setInterval((()=>{const t={node_name:e.name};a.send(JSON.stringify(t))}),3e3)},a.onmessage=e=>{ae.value+=e.data,oe.value.setScrollTop(5e3)};const o=r(ee,(e=>{e||(a.close(),o())}))};u((()=>{se(),window.addEventListener("resize",se)}));const ne=i(0),se=()=>{const e=window.innerHeight||document.documentElement.clientHeight;ne.value=.7*e};return(t,a)=>(d(),m(s,null,[l(c(e),null,{default:p((()=>[l(c(h),null,{default:p((()=>[l(c(w),{style:{position:"relative",top:"16px"}},{default:p((()=>[f("div",U,[l(c(n),{type:"danger",loading:Y.value,onClick:Z},{default:p((()=>[g(v(c(j)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),f("div",z,[l(c(k),{pageSize:c(W),"onUpdate:pageSize":a[0]||(a[0]=e=>y(W)?W.value=e:null),currentPage:c(P),"onUpdate:currentPage":a[1]||(a[1]=e=>y(P)?P.value=e:null),columns:I,data:c(O),stripe:"",border:!0,loading:c(M),resizable:!0,onRegister:c(A),headerCellStyle:$,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","onRegister"])])])),_:1}),l(c(C),{modelValue:q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e),title:t.$t("common.config"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ne.value},{default:p((()=>[l(E,{closeDialog:J,nodeConfForm:K,getList:c(B)},null,8,["nodeConfForm","getList"])])),_:1},8,["modelValue","title","maxHeight"]),l(c(C),{modelValue:ee.value,"onUpdate:modelValue":a[3]||(a[3]=e=>ee.value=e),title:c(j)("node.log"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ne.value},{footer:p((()=>[l(c(n),{onClick:te},{default:p((()=>[g(v(c(j)("common.off")),1)])),_:1})])),default:p((()=>[l(c(_),{ref_key:"scrollbarRef",ref:oe},{default:p((()=>[ae.value?(d(),m("pre",R,v(ae.value),1)):b("",!0)])),_:1},512)])),_:1},8,["modelValue","title","maxHeight"])],64))}});export{I as default};
