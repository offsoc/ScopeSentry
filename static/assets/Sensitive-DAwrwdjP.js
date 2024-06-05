import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D8TtpZ7e.js";import{d as t,r as a,N as l,e as o,S as i,X as s,Q as n,o as r,c as u,w as m,a as p,H as d,t as c,Z as f,I as g,f as v,$ as _,a0 as y,l as j}from"./index-C7FJj4Bp.js";import{E as b,a as h}from"./el-col-CLycMjBT.js";import{E as x}from"./el-text-JBU2hwTl.js";import{_ as S}from"./Table.vue_vue_type_script_lang-CTgmk2QX.js";import{_ as w}from"./Dialog.vue_vue_type_style_index_0_lang-CEAQr764.js";import{u as I}from"./useTable-B6mqWFf8.js";import{u as C}from"./useIcon-p9zXclCz.js";import{d as k,_ as z,g as E}from"./Detail.vue_vue_type_script_setup_true_lang-BK-PXFZ_.js";import"./el-card-Bhf-XVja.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DYwcpnJt.js";import"./el-checkbox-CPLJJMmd.js";import"./useInput-B9PSdhNo.js";import"./debounce-FYM4CuA0.js";import"./el-tag-BHmHdP98.js";import"./el-pagination-Fvtq0GFD.js";import"./el-image-viewer-DhtUPOdN.js";import"./tsxHelper-CSAh_eRe.js";import"./el-dropdown-item-zcj1wK-o.js";import"./castArray-C6EAQny5.js";import"./refs-Dte5lzrT.js";import"./index-DzV5t0hO.js";import"./raf-BrJref6v.js";import"./el-form-item-DGQT7cXn.js";import"./el-divider-DK9S_Niq.js";import"./el-select-v2-BzeNENN_.js";import"./el-switch-DLGqKmW6.js";import"./index-DPWgdpfC.js";const U={class:"mb-10px"},R={class:"mb-10px"};function V(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!y(e)}const N=t({__name:"Sensitive",setup(t){const y=C({icon:"iconoir:search"}),{t:N}=j(),W=a(""),A=()=>{O()},D=l([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:N("sensitiveInformation.sensitiveName"),minWidth:40},{field:"regular",label:N("sensitiveInformation.sensitiveRegular"),minWidth:100},{field:"color",label:N("sensitiveInformation.sensitiveColor"),minWidth:20},{field:"state",label:N("common.state"),minWidth:40,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",s="";return 1==a?(l="#2eb98a",s=N("common.on")):(l="red",s=N("common.off")),o(h,{gutter:20},{default:()=>[o(b,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(b,{span:5},{default:()=>[o(x,{type:"info"},V(s)?s:{default:()=>[s]})]})]})}},{field:"action",label:N("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,i;return o(n,null,[o(s,{type:"primary",onClick:()=>J(e)},V(l=N("common.edit"))?l:{default:()=>[l]}),o(s,{type:"danger",onClick:()=>ee(e)},V(i=N("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:H,tableState:L,tableMethods:P}=I({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=L,a=await E(W.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:F,dataList:T,total:M,currentPage:$,pageSize:B}=L,{getList:O,getElTableExpose:Q}=P;function q(){return{background:"var(--el-fill-color-light)"}}const G=a(!1),K=async()=>{Z.id="",Z.color="null",Z.regular="",Z.name="",Z.state=!0,G.value=!0},X=()=>{G.value=!1};let Z=l({id:"",name:"",regular:"",color:"null",state:!0});const J=e=>{Z.id=e.id,Z.color=e.color,Z.regular=e.regular,Z.name=e.name,Z.state=e.state,G.value=!0},Y=a(!1),ee=async e=>{Y.value=!0;try{await k([e.id]);Y.value=!1,O()}catch(t){Y.value=!1,O()}},te=a([]),ae=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Q(),t=(null==e?void 0:e.getSelectionRows())||[];te.value=t.map((e=>e.id)),Y.value=!0;try{await k(te.value),Y.value=!1,O()}catch(a){Y.value=!1,O()}})()};return(t,a)=>(r(),u(n,null,[o(p(e),null,{default:m((()=>[o(p(h),{gutter:20,style:{"margin-bottom":"15px"}},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[o(p(x),{class:"mx-1",style:{position:"relative",top:"8px",left:"30%"}},{default:m((()=>[d(c(p(N)("sensitiveInformation.sensitiveName"))+" :",1)])),_:1})])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(f),{modelValue:W.value,"onUpdate:modelValue":a[0]||(a[0]=e=>W.value=e),placeholder:p(N)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(g),{type:"primary",icon:p(y),style:{height:"38px"},onClick:A},{default:m((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(p(h),{gutter:60},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[v("div",U,[o(p(g),{type:"primary",onClick:K},{default:m((()=>[d(c(p(N)("common.new")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",R,[o(p(s),{type:"danger",loading:Y.value,onClick:ae},{default:m((()=>[d(c(p(N)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(p(S),{pageSize:p(B),"onUpdate:pageSize":a[1]||(a[1]=e=>_(B)?B.value=e:null),currentPage:p($),"onUpdate:currentPage":a[2]||(a[2]=e=>_($)?$.value=e:null),columns:D,data:p(T),stripe:"",border:!0,loading:p(F),resizable:!0,pagination:{total:p(M),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:p(H),headerCellStyle:q,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(p(w),{modelValue:G.value,"onUpdate:modelValue":a[3]||(a[3]=e=>G.value=e),title:p(Z).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:300},{default:m((()=>[o(z,{closeDialog:X,sensitiveForm:p(Z),getList:p(O)},null,8,["sensitiveForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{N as default};
