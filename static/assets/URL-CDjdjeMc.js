import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CoYqT830.js";import{d as a,N as t,e as l,a1 as r,I as o,r as s,Y as i,o as p,c as n,w as u,a as m,$ as c,H as d,t as g,Q as h,l as _,_ as f}from"./index-ubEX2FhK.js";import{_ as j}from"./Search.vue_vue_type_script_setup_true_lang-Cccs-j6f.js";import{u as b}from"./useSearch-2KwSp95m.js";import{u as x}from"./useTable-CWkm_TUU.js";import{E as y}from"./el-card-BeFjUUyC.js";import{E as v}from"./el-pagination-qAkOkq_g.js";import"./el-tag-BH3jtqzv.js";import"./el-popper-BDTZ23-W.js";import{E as H,a as w}from"./el-col-DkkgfGah.js";import{_ as S,E as k,a as z}from"./Table.vue_vue_type_script_lang-D1Qh8XyS.js";import"./el-checkbox-BTlumLVj.js";import"./el-tooltip-l0sNRNKZ.js";import{E as R}from"./el-text-BBkxKFre.js";import{E as U}from"./el-divider-JTSpcwM1.js";import{_ as E}from"./Dialog.vue_vue_type_style_index_0_lang-o4xeLQRv.js";import{u as I}from"./useCrudSchemas-KT9nbvfb.js";import{k as P}from"./index-DBHJRnec.js";import"./useForm-BBW1aIz_.js";import"./el-form-item-D5Du7KCs.js";import"./castArray-QVB7Iual.js";import"./el-radio-group-CsrhsQ2t.js";/* empty css                          */import"./el-input-number-Cx2WNOZJ.js";import"./el-select-v2-RVcLgOup.js";import"./raf-t7Eg7mSF.js";import"./useInput-DtyvbpoF.js";import"./debounce-BVe-Ub-q.js";import"./el-switch-DvAokmWF.js";import"./el-progress-DPxR-IZy.js";import"./InputPassword-BiW_HXnZ.js";import"./style.css_vue_type_style_index_0_src_true_lang-DkJA8ZlR.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-vm1MDFCV.js";import"./IconPicker-D7JyD5hI.js";/* empty css                   */import"./el-tab-pane-BOzRAf4Z.js";import"./tsxHelper-B2w2bZm3.js";import"./index-C1FRAfEi.js";import"./useIcon-NPotYW8F.js";import"./el-image-viewer-B2EERH4x.js";import"./el-dropdown-item-DKIl88b7.js";import"./refs-BBDhzfVg.js";import"./index-CsSHR5aA.js";import"./tree-BfZhwLPs.js";import"./index-CZZ6X4Zq.js";const C=f(a({__name:"URL",setup(a){const{t:f}=_(),{searchRegister:C}=b(),L=t([{field:"search",label:f("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(o,{class:"icon-button",onClick:T,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(r,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),W=[{operator:"=",meaning:f("searchHelp.like")},{operator:"!=",meaning:f("searchHelp.notIn")},{operator:"==",meaning:f("searchHelp.equal")},{operator:"&&",meaning:f("searchHelp.and")},{operator:"||",meaning:f("searchHelp.or")},{operator:"()",meaning:f("searchHelp.brackets")}],A=[{keyword:"url",example:'url="http://example.com"',explain:f("searchHelp.url")},{keyword:"input",example:'input="example.com"',explain:f("searchHelp.inpur")},{keyword:"source",example:'source="exapmle.com/example.js"',explain:f("searchHelp.source")},{keyword:"type",example:'type="linkfinder"',explain:f("searchHelp.urlType")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],N=s(!1),T=()=>{N.value=!0},V=s(!0),q=s("inline"),D=s("left"),F=s(""),M=e=>{F.value=e.search,ae()},B=s(!1),Q=t([{field:"index",label:f("tableDemo.index"),type:"index",minWidth:10},{field:"url",label:"URL",minWidth:70},{field:"source",label:f("URL.source"),minWidth:60},{field:"type",label:f("URL.type"),minWidth:30},{field:"input",label:f("URL.input"),minWidth:60},{field:"time",label:f("asset.time"),minWidth:30}]),{allSchemas:Y}=I(Q),{tableRegister:G,tableState:J,tableMethods:K}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=J,t=await P(F.value,e.value,a.value);return{list:t.data.list,total:t.data.total}}}),{loading:X,dataList:Z,total:$,currentPage:O,pageSize:ee}=J,{getList:ae}=K;function te(){return{background:"var(--el-fill-color-light)"}}ee.value=20,i((()=>{re(),window.addEventListener("resize",re)}));const le=s(0),re=()=>{const e=window.innerHeight||document.documentElement.clientHeight;le.value=.7*e};return(a,t)=>(p(),n(h,null,[l(m(e),{style:{height:"80px"}},{default:u((()=>[l(m(j),{schema:L,"is-col":V.value,layout:q.value,"show-reset":!1,"button-position":D.value,"search-loading":B.value,onSearch:M,onReset:M,onRegister:m(C)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(m(w),null,{default:u((()=>[l(m(H),null,{default:u((()=>[l(m(y),null,{default:u((()=>[l(m(S),{pageSize:m(ee),"onUpdate:pageSize":t[0]||(t[0]=e=>c(ee)?ee.value=e:null),currentPage:m(O),"onUpdate:currentPage":t[1]||(t[1]=e=>c(O)?O.value=e:null),columns:m(Y).tableColumns,data:m(Z),"max-height":le.value,stripe:"",border:!0,loading:m(X),resizable:!0,onRegister:m(G),headerCellStyle:te,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(m(H),{":span":24},{default:u((()=>[l(m(y),null,{default:u((()=>[l(m(v),{pageSize:m(ee),"onUpdate:pageSize":t[2]||(t[2]=e=>c(ee)?ee.value=e:null),currentPage:m(O),"onUpdate:currentPage":t[3]||(t[3]=e=>c(O)?O.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:m($)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(m(E),{modelValue:N.value,"onUpdate:modelValue":t[4]||(t[4]=e=>N.value=e),title:m(f)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(H),null,{default:u((()=>[l(m(R),{tag:"b",size:"small"},{default:u((()=>[d(g(m(f)("searchHelp.operator")),1)])),_:1}),l(m(U),{direction:"vertical"}),l(m(R),{size:"small",type:"danger"},{default:u((()=>[d(g(m(f)("searchHelp.notice")),1)])),_:1})])),_:1}),l(m(H),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:W},{default:u((()=>[l(m(z),{prop:"operator",label:m(f)("searchHelp.operator"),width:"300"},null,8,["label"]),l(m(z),{prop:"meaning",label:m(f)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(m(H),{style:{"margin-top":"15px"}},{default:u((()=>[l(m(R),{tag:"b",size:"small"},{default:u((()=>[d(g(m(f)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(m(H),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:A},{default:u((()=>[l(m(z),{prop:"keyword",label:m(f)("searchHelp.keywords")},null,8,["label"]),l(m(z),{prop:"example",label:m(f)("searchHelp.example")},null,8,["label"]),l(m(z),{prop:"explain",label:m(f)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-1bb2a691"]]);export{C as default};
