import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D8TtpZ7e.js";import{d as t,r as a,N as l,e as o,X as i,Q as r,U as s,o as n,c as p,w as u,a as m,H as d,Z as c,I as g,f,t as v,$ as _,a0 as y,l as j}from"./index-C7FJj4Bp.js";import{a as b,E as h}from"./el-col-CLycMjBT.js";import{_ as x}from"./Table.vue_vue_type_script_lang-CTgmk2QX.js";import{_ as S}from"./Dialog.vue_vue_type_style_index_0_lang-CEAQr764.js";import{u as w}from"./useIcon-p9zXclCz.js";import{u as D}from"./useTable-B6mqWFf8.js";import{d as k,c as C}from"./index-Cfrs_o4w.js";import{_ as U}from"./PortDetail.vue_vue_type_script_setup_true_lang-Bxh9zk0X.js";import"./el-card-Bhf-XVja.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DYwcpnJt.js";import"./el-checkbox-CPLJJMmd.js";import"./useInput-B9PSdhNo.js";import"./debounce-FYM4CuA0.js";import"./el-tag-BHmHdP98.js";import"./el-pagination-Fvtq0GFD.js";import"./el-image-viewer-DhtUPOdN.js";import"./tsxHelper-CSAh_eRe.js";import"./el-dropdown-item-zcj1wK-o.js";import"./castArray-C6EAQny5.js";import"./refs-Dte5lzrT.js";import"./index-DzV5t0hO.js";import"./raf-BrJref6v.js";import"./index-DPWgdpfC.js";import"./el-form-item-DGQT7cXn.js";import"./el-divider-DK9S_Niq.js";const E={class:"mb-10px"},z={class:"mb-10px"};function I(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!y(e)}const P=t({__name:"PortDictionary",setup(t){const{t:y}=j(),P=w({icon:"iconoir:search"}),V=a(""),R=()=>{O()},A=l([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:y("portDict.name"),minWidth:40},{field:"value",label:y("portDict.value")},{field:"action",label:y("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,s;return o(r,null,[o(i,{type:"primary",onClick:()=>$(e)},I(l=y("common.edit"))?l:{default:()=>[l]}),o(i,{type:"danger",onClick:()=>Y(e)},I(s=y("common.delete"))?s:{default:()=>[s]})])}}]),{tableRegister:H,tableState:T,tableMethods:F}=D({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=T,a=await C(V.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:L,dataList:N,total:M,currentPage:W,pageSize:B}=T,{getList:O,getElTableExpose:Q}=F;function q(){return{background:"var(--el-fill-color-light)"}}const G=a(!1),K=async()=>{Z.id="",Z.value="",Z.name="",G.value=!0},X=()=>{G.value=!1};let Z=l({id:"",name:"",value:""});const $=e=>{Z.id=e.id,Z.value=e.value,Z.name=e.name,G.value=!0},J=a(!1),Y=async e=>{J.value=!0;try{await k([e.id]);J.value=!1,O()}catch(t){J.value=!1,O()}},ee=a([]),te=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Q(),t=(null==e?void 0:e.getSelectionRows())||[];ee.value=t.map((e=>e.id)),J.value=!0;try{await k(ee.value),J.value=!1,O()}catch(a){J.value=!1,O()}})()};return(t,a)=>{const l=s("ElText");return n(),p(r,null,[o(m(e),null,{default:u((()=>[o(m(b),{gutter:20,style:{"margin-bottom":"15px"}},{default:u((()=>[o(m(h),{span:1.5},{default:u((()=>[o(l,{class:"mx-1",style:{position:"relative",top:"8px"}},{default:u((()=>[d("Search :")])),_:1})])),_:1}),o(m(h),{span:5},{default:u((()=>[o(m(c),{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),placeholder:m(y)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(m(h),{span:5},{default:u((()=>[o(m(g),{type:"primary",icon:m(P),style:{height:"38px"},onClick:R},{default:u((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(m(b),{gutter:60},{default:u((()=>[o(m(h),{span:1},{default:u((()=>[f("div",E,[o(m(g),{type:"primary",onClick:K},{default:u((()=>[d(v(m(y)("common.new")),1)])),_:1})])])),_:1}),o(m(h),{span:1},{default:u((()=>[f("div",z,[o(m(i),{type:"danger",loading:J.value,onClick:te},{default:u((()=>[d(v(m(y)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(m(x),{pageSize:m(B),"onUpdate:pageSize":a[1]||(a[1]=e=>_(B)?B.value=e:null),currentPage:m(W),"onUpdate:currentPage":a[2]||(a[2]=e=>_(W)?W.value=e:null),columns:A,data:m(N),stripe:"",border:!0,loading:m(L),resizable:!0,pagination:{total:m(M),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:m(H),headerCellStyle:q,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(m(S),{modelValue:G.value,"onUpdate:modelValue":a[3]||(a[3]=e=>G.value=e),title:m(y)("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:400},{default:u((()=>[o(U,{closeDialog:X,portDictForm:m(Z),getList:m(O)},null,8,["portDictForm","getList"])])),_:1},8,["modelValue","title"])],64)}}});export{P as default};
