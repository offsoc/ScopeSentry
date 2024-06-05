import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BHyllhZh.js";import{d as a,N as t,e as l,a1 as o,I as r,r as s,Y as i,o as n,c as p,w as m,a as u,$ as d,H as c,t as g,Q as h,l as _,_ as f}from"./index-D8t8duXH.js";import{_ as b}from"./Search.vue_vue_type_script_setup_true_lang-BNEiL80y.js";import{u as j}from"./useSearch-BV5llEnM.js";import{u as x}from"./useTable-M-k-CU6G.js";import{E as y}from"./el-card-CM3ENwjs.js";import{E as v}from"./el-pagination-DKCtAZB9.js";import"./el-tag-BX6c3Rq2.js";import"./el-popper-Q3vaokIn.js";import{E as H,a as S}from"./el-col-bgeArr9Z.js";import{_ as w,E as k,a as z}from"./Table.vue_vue_type_script_lang-f4wNzjJ2.js";import"./el-checkbox-8OEIa0BY.js";import"./el-tooltip-l0sNRNKZ.js";import{E}from"./el-text-DUFj1Gst.js";import{E as I}from"./el-divider-Ch-cWN_a.js";import{_ as P}from"./Dialog.vue_vue_type_style_index_0_lang-SNln6r6y.js";import{u as C}from"./useCrudSchemas-Zuo34LUg.js";import{i as R}from"./index-lwZu1Lzz.js";import"./useForm-vFe57gg7.js";import"./el-form-item-DSwKkMJ9.js";import"./castArray-Dh-dFolr.js";import"./el-radio-group-C-LVpFmB.js";/* empty css                          */import"./el-input-number-BllQ4ec9.js";import"./el-select-v2-DbFIzkHS.js";import"./raf-B2Rtf-e9.js";import"./useInput-qNu1dQvk.js";import"./debounce-BY3tkwN6.js";import"./el-switch-ObfjmqFU.js";import"./el-progress-GH_gfqSe.js";import"./InputPassword-DBZnWpdd.js";import"./style.css_vue_type_style_index_0_src_true_lang-SlM-ffW9.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-7rHx-OGU.js";import"./IconPicker-BaYJNjkO.js";/* empty css                   */import"./el-tab-pane-CvRQZKje.js";import"./tsxHelper-DiltzBE1.js";import"./index-CK31IA6V.js";import"./useIcon-BJlk3rHX.js";import"./el-image-viewer-DWd192DQ.js";import"./el-dropdown-item-BiSy34MN.js";import"./refs-CKp-YN4m.js";import"./index-BEzT_uCT.js";import"./tree-BfZhwLPs.js";import"./index-BIx98sR0.js";const U=f(a({__name:"Subdomain",setup(a){const{t:f}=_(),{searchRegister:U}=j(),W=t([{field:"search",label:f("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:T,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),A=[{operator:"=",meaning:f("searchHelp.like")},{operator:"!=",meaning:f("searchHelp.notIn")},{operator:"==",meaning:f("searchHelp.equal")},{operator:"&&",meaning:f("searchHelp.and")},{operator:"||",meaning:f("searchHelp.or")},{operator:"()",meaning:f("searchHelp.brackets")}],N=[{keyword:"ip",example:'ip="192.168.2.1"',explain:f("searchHelp.ip")},{keyword:"domain",example:'domain="example.com"',explain:f("searchHelp.domain")},{keyword:"type",example:'type="CNAME"',explain:f("searchHelp.subdomainType")},{keyword:"value",example:'value="allcdn.example.com"',explain:f("searchHelp.subdoaminValue")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],V=s(!1),T=()=>{V.value=!0};i((()=>{M(),window.addEventListener("resize",M)}));const L=s(0),M=()=>{const e=window.innerHeight||document.documentElement.clientHeight;L.value=.7*e},q=s(!0),D=s("inline"),F=s("left"),$=s(""),B=e=>{$.value=e.search,le()},Q=s(!1),Y=t([{field:"index",label:f("tableDemo.index"),type:"index",minWidth:10},{field:"host",label:f("subdomain.subdomainName"),minWidth:50},{field:"type",label:f("subdomain.recordType"),minWidth:30},{field:"value",label:f("subdomain.recordValue"),minWidth:50,formatter:(e,a,t)=>{let l="";return t.forEach(((e,a)=>{l+=`${e}\r\n`})),l}},{field:"ip",label:"IP",minWidth:50,formatter:(e,a,t)=>{let l="";return t.forEach(((e,a)=>{l+=`${e}\r\n`})),l}},{field:"time",label:f("asset.time"),minWidth:60}]),{allSchemas:G}=C(Y),{tableRegister:J,tableState:K,tableMethods:X}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=K,t=await R($.value,e.value,a.value);return{list:t.data.list,total:t.data.total}}}),{loading:Z,dataList:O,total:ee,currentPage:ae,pageSize:te}=K,{getList:le}=X;function oe(){return{background:"var(--el-fill-color-light)"}}return(a,t)=>(n(),p(h,null,[l(u(e),{style:{height:"80px"}},{default:m((()=>[l(u(b),{schema:W,"is-col":q.value,layout:D.value,"show-reset":!1,"button-position":F.value,"search-loading":Q.value,onSearch:B,onReset:B,onRegister:u(U)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(u(S),null,{default:m((()=>[l(u(H),null,{default:m((()=>[l(u(y),{style:{height:"min-content"}},{default:m((()=>[l(u(w),{pageSize:u(te),"onUpdate:pageSize":t[0]||(t[0]=e=>d(te)?te.value=e:null),currentPage:u(ae),"onUpdate:currentPage":t[1]||(t[1]=e=>d(ae)?ae.value=e:null),columns:u(G).tableColumns,data:u(O),stripe:"","max-height":L.value,border:!0,loading:u(Z),resizable:!0,onRegister:u(J),headerCellStyle:oe,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(u(H),{":span":24},{default:m((()=>[l(u(y),null,{default:m((()=>[l(u(v),{pageSize:u(te),"onUpdate:pageSize":t[2]||(t[2]=e=>d(te)?te.value=e:null),currentPage:u(ae),"onUpdate:currentPage":t[3]||(t[3]=e=>d(ae)?ae.value=e:null),"page-sizes":[10,20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:u(ee)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(u(P),{modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=e=>V.value=e),title:u(f)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:m((()=>[l(u(S),null,{default:m((()=>[l(u(H),null,{default:m((()=>[l(u(E),{tag:"b",size:"small"},{default:m((()=>[c(g(u(f)("searchHelp.operator")),1)])),_:1}),l(u(I),{direction:"vertical"}),l(u(E),{size:"small",type:"danger"},{default:m((()=>[c(g(u(f)("searchHelp.notice")),1)])),_:1})])),_:1}),l(u(H),{style:{"margin-top":"10px"}},{default:m((()=>[l(u(k),{headerCellStyle:oe,data:A},{default:m((()=>[l(u(z),{prop:"operator",label:u(f)("searchHelp.operator"),width:"300"},null,8,["label"]),l(u(z),{prop:"meaning",label:u(f)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(u(H),{style:{"margin-top":"15px"}},{default:m((()=>[l(u(E),{tag:"b",size:"small"},{default:m((()=>[c(g(u(f)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(u(H),{style:{"margin-top":"10px"}},{default:m((()=>[l(u(k),{headerCellStyle:oe,data:N},{default:m((()=>[l(u(z),{prop:"keyword",label:u(f)("searchHelp.keywords")},null,8,["label"]),l(u(z),{prop:"example",label:u(f)("searchHelp.example")},null,8,["label"]),l(u(z),{prop:"explain",label:u(f)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-a6e62854"]]);export{U as default};
