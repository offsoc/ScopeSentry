import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BGE0a2qP.js";import{d as t,r as a,N as l,e as o,S as i,X as s,Q as n,o as r,c as u,w as m,a as p,H as d,t as c,Z as f,I as g,f as v,$ as _,a0 as y,l as j}from"./index-L23m9uYc.js";import{E as b,a as h}from"./el-col-CqCGvnLt.js";import{E as x}from"./el-text-C8_9zPli.js";import{_ as S}from"./Table.vue_vue_type_script_lang-DgGBRTuJ.js";import{_ as w}from"./Dialog.vue_vue_type_style_index_0_lang-BLA1gUvP.js";import{u as I}from"./useTable-DcXT-Htj.js";import{u as C}from"./useIcon-_wxYG1y7.js";import{d as k,_ as z,g as E}from"./Detail.vue_vue_type_script_setup_true_lang-Dtfn5WT_.js";import"./el-card-p0RPP4Vl.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DjtSnDGb.js";import"./el-checkbox-CRKxDj92.js";import"./useInput-CcZ_P4u1.js";import"./debounce-DF1OOAfd.js";import"./el-tag-JBxbeqhj.js";import"./el-pagination-CmiOWROU.js";import"./el-image-viewer-3OcW4yKJ.js";import"./tsxHelper-CS6f4kk9.js";import"./el-dropdown-item-DfSwk0Qe.js";import"./castArray-CmgHK4Wz.js";import"./refs-BmVXS0wr.js";import"./index-ktxO7qsf.js";import"./raf-CERu6KN3.js";import"./el-form-item-ERD_MhSH.js";import"./el-divider-XvaQ3Opz.js";import"./el-select-v2-ChoczssV.js";import"./el-switch-Dt4zJdPs.js";import"./index-ANBIEAIq.js";const U={class:"mb-10px"},R={class:"mb-10px"};function V(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!y(e)}const N=t({__name:"Sensitive",setup(t){const y=C({icon:"iconoir:search"}),{t:N}=j(),W=a(""),A=()=>{O()},D=l([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:N("sensitiveInformation.sensitiveName"),minWidth:40},{field:"regular",label:N("sensitiveInformation.sensitiveRegular"),minWidth:100},{field:"color",label:N("sensitiveInformation.sensitiveColor"),minWidth:20},{field:"state",label:N("common.state"),minWidth:40,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",s="";return 1==a?(l="#2eb98a",s=N("common.on")):(l="red",s=N("common.off")),o(h,{gutter:20},{default:()=>[o(b,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(b,{span:5},{default:()=>[o(x,{type:"info"},V(s)?s:{default:()=>[s]})]})]})}},{field:"action",label:N("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,i;return o(n,null,[o(s,{type:"primary",onClick:()=>J(e)},V(l=N("common.edit"))?l:{default:()=>[l]}),o(s,{type:"danger",onClick:()=>ee(e)},V(i=N("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:H,tableState:L,tableMethods:P}=I({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=L,a=await E(W.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:F,dataList:T,total:M,currentPage:$,pageSize:B}=L,{getList:O,getElTableExpose:Q}=P;function q(){return{background:"var(--el-fill-color-light)"}}const G=a(!1),K=async()=>{Z.id="",Z.color="null",Z.regular="",Z.name="",Z.state=!0,G.value=!0},X=()=>{G.value=!1};let Z=l({id:"",name:"",regular:"",color:"null",state:!0});const J=e=>{Z.id=e.id,Z.color=e.color,Z.regular=e.regular,Z.name=e.name,Z.state=e.state,G.value=!0},Y=a(!1),ee=async e=>{Y.value=!0;try{await k([e.id]);Y.value=!1,O()}catch(t){Y.value=!1,O()}},te=a([]),ae=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Q(),t=(null==e?void 0:e.getSelectionRows())||[];te.value=t.map((e=>e.id)),Y.value=!0;try{await k(te.value),Y.value=!1,O()}catch(a){Y.value=!1,O()}})()};return(t,a)=>(r(),u(n,null,[o(p(e),null,{default:m((()=>[o(p(h),{gutter:20,style:{"margin-bottom":"15px"}},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[o(p(x),{class:"mx-1",style:{position:"relative",top:"8px",left:"30%"}},{default:m((()=>[d(c(p(N)("sensitiveInformation.sensitiveName"))+" :",1)])),_:1})])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(f),{modelValue:W.value,"onUpdate:modelValue":a[0]||(a[0]=e=>W.value=e),placeholder:p(N)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(g),{type:"primary",icon:p(y),style:{height:"38px"},onClick:A},{default:m((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(p(h),{gutter:60},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[v("div",U,[o(p(g),{type:"primary",onClick:K},{default:m((()=>[d(c(p(N)("common.new")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",R,[o(p(s),{type:"danger",loading:Y.value,onClick:ae},{default:m((()=>[d(c(p(N)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(p(S),{pageSize:p(B),"onUpdate:pageSize":a[1]||(a[1]=e=>_(B)?B.value=e:null),currentPage:p($),"onUpdate:currentPage":a[2]||(a[2]=e=>_($)?$.value=e:null),columns:D,data:p(T),stripe:"",border:!0,loading:p(F),resizable:!0,pagination:{total:p(M),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:p(H),headerCellStyle:q,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(p(w),{modelValue:G.value,"onUpdate:modelValue":a[3]||(a[3]=e=>G.value=e),title:p(Z).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:300},{default:m((()=>[o(z,{closeDialog:X,sensitiveForm:p(Z),getList:p(O)},null,8,["sensitiveForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{N as default};
