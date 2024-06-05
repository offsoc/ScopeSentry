import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CzwJprPK.js";import{d as a,N as t,e as l,a1 as o,I as r,r as s,Y as i,E as p,o as n,c as m,w as u,a as d,$ as c,H as g,t as h,Q as f,l as _,_ as b}from"./index-CkCEk9VW.js";import{_ as j}from"./Search.vue_vue_type_script_setup_true_lang-7PjU-kr7.js";import{u as y}from"./useSearch-BZzYo-7Q.js";import{u as x}from"./useTable-CR124o7-.js";import{E as v}from"./el-card-CsPP8HKp.js";import{E as w}from"./el-pagination-CB-GtZS1.js";import"./el-tag-2ALjTD3w.js";import"./el-popper-1D1qSWZj.js";import{E as H,a as S}from"./el-col-DOJxIdcb.js";import{_ as k,E as z,a as E}from"./Table.vue_vue_type_script_lang-CjD3G7xt.js";import"./el-checkbox-BkBx3Mtw.js";import"./el-tooltip-l0sNRNKZ.js";import{E as I}from"./el-text-CeaAao6m.js";import{E as C}from"./el-divider-uGEymoUn.js";import{_ as P}from"./Dialog.vue_vue_type_style_index_0_lang-BJ49IL3X.js";import{u as R}from"./useCrudSchemas-BQd4a1TW.js";import{j as A}from"./index-C7R_IC5M.js";import"./useForm-Csmybw90.js";import"./el-form-item-Yw610eQe.js";import"./castArray-nWbA6lhz.js";import"./el-radio-group-CMoCj8fO.js";/* empty css                          */import"./el-input-number-CJFgreuh.js";import"./el-select-v2-aY9Q6m0m.js";import"./raf-H30ypQsV.js";import"./useInput-DpM1BNjN.js";import"./debounce-BUaoKyTD.js";import"./el-switch-ByZMxUBd.js";import"./el-progress-49pqXomo.js";import"./InputPassword-B3wW72zR.js";import"./style.css_vue_type_style_index_0_src_true_lang-BN0D8LK1.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-mwcfmNnr.js";import"./IconPicker-BfaBVroL.js";/* empty css                   */import"./el-tab-pane-BO2aS-KB.js";import"./tsxHelper-eao2XTL0.js";import"./index-BZAJUtKJ.js";import"./useIcon-CbJHfg-g.js";import"./el-image-viewer-fdTVElS5.js";import"./el-dropdown-item-BjX8Mmf2.js";import"./refs-1kaIDmjp.js";import"./index-BCymA3BH.js";import"./tree-BfZhwLPs.js";import"./index-BTzo3Zl2.js";const U=b(a({__name:"SubdomainTakeover",setup(a){const{t:b}=_(),{searchRegister:U}=y(),N=t([{field:"search",label:b("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:D,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),T=[{operator:"=",meaning:b("searchHelp.like")},{operator:"!=",meaning:b("searchHelp.notIn")},{operator:"==",meaning:b("searchHelp.equal")},{operator:"&&",meaning:b("searchHelp.and")},{operator:"||",meaning:b("searchHelp.or")},{operator:"()",meaning:b("searchHelp.brackets")}],V=[{keyword:"domain",example:'domain="example.com"',explain:b("searchHelp.domain")},{keyword:"type",example:'type="CNAME"',explain:b("searchHelp.subdomainType")},{keyword:"value",example:'value="exapmle.github.com"',explain:b("searchHelp.subdoaminValue")},{keyword:"response",example:'response="404 Not Found"',explain:b("searchHelp.body")},{keyword:"project",example:'project="Hackerone"',explain:b("searchHelp.project")}],W=s(!1),D=()=>{W.value=!0};i((()=>{L(),window.addEventListener("resize",L)}));const F=s(0),L=()=>{const e=window.innerHeight||document.documentElement.clientHeight;F.value=.7*e},M=s(!0),q=s("inline"),B=s("left"),Q=s(""),Y=e=>{Q.value=e.search,oe()},G=s(!1),J=t([{field:"index",label:b("tableDemo.index"),type:"index",minWidth:10},{field:"host",label:"Domain",minWidth:50},{field:"value",label:b("subdomain.recordValue"),minWidth:30},{field:"type",label:"Type",minWidth:50},{field:"response",label:"Response",minWidth:50,formatter:(e,a,t)=>l(p,{"max-height":"100"},{default:()=>[l("div",{style:"whiteSpace: 'pre-line'"},[t])]})}]),{allSchemas:K}=R(J),{tableRegister:O,tableState:X,tableMethods:Z}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=X,t=await A(Q.value,e.value,a.value);return{list:t.data.list,total:t.data.total}}}),{loading:$,dataList:ee,total:ae,currentPage:te,pageSize:le}=X;le.value=20;const{getList:oe}=Z;function re(){return{background:"var(--el-fill-color-light)"}}return(a,t)=>(n(),m(f,null,[l(d(e),{style:{height:"80px"}},{default:u((()=>[l(d(j),{schema:N,"is-col":M.value,layout:q.value,"show-reset":!1,"button-position":B.value,"search-loading":G.value,onSearch:Y,onReset:Y,onRegister:d(U)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(d(S),null,{default:u((()=>[l(d(H),null,{default:u((()=>[l(d(v),{style:{height:"min-content"}},{default:u((()=>[l(d(k),{pageSize:d(le),"onUpdate:pageSize":t[0]||(t[0]=e=>c(le)?le.value=e:null),currentPage:d(te),"onUpdate:currentPage":t[1]||(t[1]=e=>c(te)?te.value=e:null),columns:d(K).tableColumns,data:d(ee),stripe:"","max-height":F.value,border:!0,loading:d($),resizable:!0,onRegister:d(O),headerCellStyle:re,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(d(H),{":span":24},{default:u((()=>[l(d(v),null,{default:u((()=>[l(d(w),{pageSize:d(le),"onUpdate:pageSize":t[2]||(t[2]=e=>c(le)?le.value=e:null),currentPage:d(te),"onUpdate:currentPage":t[3]||(t[3]=e=>c(te)?te.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:d(ae)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(d(P),{modelValue:W.value,"onUpdate:modelValue":t[4]||(t[4]=e=>W.value=e),title:d(b)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:u((()=>[l(d(S),null,{default:u((()=>[l(d(H),null,{default:u((()=>[l(d(I),{tag:"b",size:"small"},{default:u((()=>[g(h(d(b)("searchHelp.operator")),1)])),_:1}),l(d(C),{direction:"vertical"}),l(d(I),{size:"small",type:"danger"},{default:u((()=>[g(h(d(b)("searchHelp.notice")),1)])),_:1})])),_:1}),l(d(H),{style:{"margin-top":"10px"}},{default:u((()=>[l(d(z),{headerCellStyle:re,data:T},{default:u((()=>[l(d(E),{prop:"operator",label:d(b)("searchHelp.operator"),width:"300"},null,8,["label"]),l(d(E),{prop:"meaning",label:d(b)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(d(H),{style:{"margin-top":"15px"}},{default:u((()=>[l(d(I),{tag:"b",size:"small"},{default:u((()=>[g(h(d(b)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(d(H),{style:{"margin-top":"10px"}},{default:u((()=>[l(d(z),{headerCellStyle:re,data:V},{default:u((()=>[l(d(E),{prop:"keyword",label:d(b)("searchHelp.keywords")},null,8,["label"]),l(d(E),{prop:"example",label:d(b)("searchHelp.example")},null,8,["label"]),l(d(E),{prop:"explain",label:d(b)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-53132ff6"]]);export{U as default};
