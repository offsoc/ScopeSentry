import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BGE0a2qP.js";import{d as a,r as t,N as l,e as o,X as i,Q as s,Y as n,o as r,c as u,w as d,a as p,H as c,Z as m,I as f,f as g,t as v,$ as y,a0 as _,l as h}from"./index-L23m9uYc.js";import{a as b,E as x}from"./el-col-CqCGvnLt.js";import{E as w}from"./el-text-C8_9zPli.js";import{E as S,a as j}from"./el-form-item-ERD_MhSH.js";import{_ as U}from"./Dialog.vue_vue_type_style_index_0_lang-BLA1gUvP.js";import{_ as k}from"./Table.vue_vue_type_script_lang-DgGBRTuJ.js";import{u as R}from"./useTable-DcXT-Htj.js";import{u as E}from"./useIcon-_wxYG1y7.js";import{h as C,i as L,j as V}from"./index-B8cRWP3e.js";const z={class:"mb-10px"},A={style:{position:"relative",top:"12px"}};const P=a({__name:"PageMonit",setup(a){const P=E({icon:"iconoir:search"}),{t:I}=h(),H=t(""),M=()=>{X()},T=l([{field:"selection",type:"selection",width:"55"},{field:"url",label:"URL"},{field:"action",label:I("tableDemo.action"),minWidth:20,formatter:(e,a,t)=>{let l;return o(s,null,[o(i,{type:"danger",onClick:()=>q(e)},(n=l=I("common.delete"),"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!_(n)?l:{default:()=>[l]}))]);var n}}]),{tableRegister:N,tableState:O,tableMethods:D}=R({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=O,t=await L(H.value,e.value,a.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:F,dataList:W,total:B,currentPage:G,pageSize:Q}=O;Q.value=20;const{getList:X,getElTableExpose:Y}=D;function Z(){return{background:"var(--el-fill-color-light)"}}const $=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ae()},q=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await K(e)},J=t(!1),K=async e=>{J.value=!0;try{await C([e.id]);J.value=!1,X()}catch(a){J.value=!1,X()}},ee=t([]),ae=async()=>{const e=await Y(),a=(null==e?void 0:e.getSelectionRows())||[];ee.value=a.map((e=>e.id)),J.value=!0;try{await C(ee.value);J.value=!1,X()}catch(t){J.value=!1,X()}};n((()=>{le(),window.addEventListener("resize",le)}));const te=t(0),le=()=>{const e=window.innerHeight||document.documentElement.clientHeight;te.value=.75*e},oe=t(!1),ie=async()=>{oe.value=!0},se=l({url:""}),ne=t(!1);return(a,t)=>(r(),u(s,null,[o(p(e),null,{default:d((()=>[o(p(b),null,{default:d((()=>[o(p(x),{span:1},{default:d((()=>[o(p(w),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:d((()=>[c("URL:")])),_:1})])),_:1}),o(p(x),{span:5},{default:d((()=>[o(p(m),{modelValue:H.value,"onUpdate:modelValue":t[0]||(t[0]=e=>H.value=e),placeholder:p(I)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(p(x),{span:5,style:{position:"relative",left:"16px"}},{default:d((()=>[o(p(f),{type:"primary",icon:p(P),style:{height:"100%"},onClick:M},{default:d((()=>[c("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(p(b),null,{default:d((()=>[o(p(x),{style:{position:"relative",top:"16px"}},{default:d((()=>[g("div",z,[o(p(i),{type:"primary",onClick:ie},{default:d((()=>[c(v(p(I)("task.addURL")),1)])),_:1}),o(p(i),{type:"danger",loading:J.value,onClick:$},{default:d((()=>[c(v(p(I)("task.delURL")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),g("div",A,[o(p(k),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:p(Q),"onUpdate:pageSize":t[1]||(t[1]=e=>y(Q)?Q.value=e:null),currentPage:p(G),"onUpdate:currentPage":t[2]||(t[2]=e=>y(G)?G.value=e:null),columns:T,data:p(W),stripe:"",border:!0,loading:p(F),"max-height":te.value,resizable:!0,pagination:{total:p(B),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:p(N),headerCellStyle:Z,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])])])),_:1}),o(p(U),{modelValue:oe.value,"onUpdate:modelValue":t[5]||(t[5]=e=>oe.value=e),title:p(I)("task.addPageMonitTask"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:"100"},{default:d((()=>[o(p(S),{model:se,"label-width":"100px","status-icon":"",ref:"ruleFormRef"},{default:d((()=>[o(p(j),{label:"URL",prop:"url"},{default:d((()=>[o(p(m),{modelValue:se.url,"onUpdate:modelValue":t[3]||(t[3]=e=>se.url=e),placeholder:"Input URL. Eg: http(s)://xxx.com"},null,8,["modelValue"])])),_:1}),o(p(b),null,{default:d((()=>[o(p(x),{span:2,offset:8},{default:d((()=>[o(p(j),null,{default:d((()=>[o(p(f),{type:"primary",onClick:t[4]||(t[4]=e=>(async()=>{ne.value=!0,await V(se.url),ne.value=!1,oe.value=!1})()),loading:ne.value},{default:d((()=>[c(v(p(I)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64))}});export{P as _};
