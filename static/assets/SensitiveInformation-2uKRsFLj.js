import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C2BgKTlV.js";import{d as a,N as t,e as l,a1 as o,I as r,r as s,E as i,X as n,Q as p,Y as m,o as u,c as d,w as c,a as h,$ as f,f as g,t as b,H as _,a0 as x,l as y,_ as j}from"./index-BmBszaKw.js";import{_ as v}from"./Search.vue_vue_type_script_setup_true_lang-Cq1KTOhL.js";import{u as w}from"./useSearch-BOW30h99.js";import{u as H}from"./useTable-BWmWlnZc.js";import{E as S}from"./el-card-BTjtgoDB.js";import{E as k}from"./el-pagination--WOPMWV5.js";import"./el-tag-BXas1KOi.js";import"./el-popper-CDt_5DMM.js";import{E as z,a as I}from"./el-col-BdnEbz2u.js";import{_ as E,E as C,a as P}from"./Table.vue_vue_type_script_lang-BfS5MC1e.js";import"./el-checkbox-Dt5IkAwT.js";import"./el-tooltip-l0sNRNKZ.js";import{E as U}from"./el-text-BGuA1zV2.js";import{E as R}from"./el-divider-BN2cfX23.js";import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-CQ4e484V.js";import{u as W}from"./useCrudSchemas-CaR70B9X.js";import{f as V,h as L}from"./index-CINQnJoW.js";import"./useForm-D_LE7FZO.js";import"./el-form-item-C5jC4cNB.js";import"./castArray-BGHTiuG_.js";import"./el-radio-group-DK08w0Ok.js";/* empty css                          */import"./el-input-number-Dbdf8Vex.js";import"./el-select-v2-B8Ahij4a.js";import"./raf-zIht-B71.js";import"./useInput-JfBKPWny.js";import"./debounce-IVspRZ1y.js";import"./el-switch-1SP8ow0L.js";import"./el-progress-DFq07Vtk.js";import"./InputPassword-_siGMjns.js";import"./style.css_vue_type_style_index_0_src_true_lang-hPNCQNNg.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-BeEdgS1Q.js";import"./IconPicker-B7r3h8gF.js";/* empty css                   */import"./el-tab-pane-8EQnupE7.js";import"./tsxHelper-DUpfS5t_.js";import"./index-DjIEb37D.js";import"./useIcon-XiLSFzq_.js";import"./el-image-viewer-EpZWKLO8.js";import"./el-dropdown-item-C93eagGB.js";import"./refs-C7dx0T3U.js";import"./index-CqLS9K7C.js";import"./tree-BfZhwLPs.js";import"./index-BMmnha-_.js";const N={style:{whiteSpace:"pre-line"}};const D=j(a({__name:"SensitiveInformation",setup(a){const{t:j}=y(),{searchRegister:D}=w(),M=t([{field:"search",label:j("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:T,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),q=[{operator:"=",meaning:j("searchHelp.like")},{operator:"!=",meaning:j("searchHelp.notIn")},{operator:"==",meaning:j("searchHelp.equal")},{operator:"&&",meaning:j("searchHelp.and")},{operator:"||",meaning:j("searchHelp.or")},{operator:"()",meaning:j("searchHelp.brackets")}],F=[{keyword:"url",example:'url="http://example.com"',explain:j("searchHelp.url")},{keyword:"sname",example:'sname="twilio_account_sid"',explain:j("searchHelp.sname")},{keyword:"body",example:'body="api-key-example"',explain:j("searchHelp.body")},{keyword:"info",example:'info="api-key-example"',explain:j("searchHelp.sinfo")},{keyword:"project",example:'project="Hackerone"',explain:j("searchHelp.project")},{keyword:"md5",example:'md5=="1d49e5e190f7a38ab498e28e6578f64f"',explain:j("searchHelp.sensMd5")}],O=s(!1),T=()=>{O.value=!0},Y=s(!0),B=s("inline"),Q=s("left"),X=s(""),G=e=>{X.value=e.search,ie()},J=s(!1),K=t([{field:"index",label:j("tableDemo.index"),type:"index",minWidth:10},{field:"url",label:"URL",minWidth:30},{field:"name",label:j("sensitiveInformation.sensitiveName"),minWidth:15},{field:"color",label:"Level",minWidth:7,formatter:(e,a,t)=>l(o,{icon:"clarity:circle-solid",color:t,style:"transform: translateY(-35%)"},null)},{field:"match",label:"Info",minWidth:60,formatter:(e,a,t)=>{const o=t.map(((e,a)=>l("div",{key:a},[e])));return l(i,{height:"100px"},{default:()=>[l("div",{class:"scrollbar-demo-item"},[o])]})}},{field:"time",label:j("asset.time"),minWidth:30},{field:"action",label:j("tableDemo.action"),formatter:(e,a,t)=>{let o;return l(p,null,[l(n,{type:"primary",onClick:()=>ce(e.id)},(r=o=j("asset.detail"),"function"==typeof r||"[object Object]"===Object.prototype.toString.call(r)&&!x(r)?o:{default:()=>[o]}))]);var r},minWidth:10}]),{allSchemas:Z}=W(K),{tableRegister:$,tableState:ee,tableMethods:ae}=H({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=ee,t=await L(X.value,e.value,a.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:te,dataList:le,total:oe,currentPage:re,pageSize:se}=ee,{getList:ie}=ae;function ne(){return{background:"var(--el-fill-color-light)"}}ie(),m((()=>{me(),window.addEventListener("resize",me)}));const pe=s(0),me=()=>{const e=window.innerHeight||document.documentElement.clientHeight;pe.value=.7*e},ue=s(!1),de=s(""),ce=async e=>{const a=await V(e);de.value=a.data.body,ue.value=!0};return(a,t)=>(u(),d(p,null,[l(h(e),{style:{height:"80px"}},{default:c((()=>[l(h(v),{schema:M,"is-col":Y.value,layout:B.value,"show-reset":!1,"button-position":Q.value,"search-loading":J.value,onSearch:G,onReset:G,onRegister:h(D)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(h(I),null,{default:c((()=>[l(h(z),null,{default:c((()=>[l(h(S),null,{default:c((()=>[l(h(E),{pageSize:h(se),"onUpdate:pageSize":t[0]||(t[0]=e=>f(se)?se.value=e:null),currentPage:h(re),"onUpdate:currentPage":t[1]||(t[1]=e=>f(re)?re.value=e:null),columns:h(Z).tableColumns,data:h(le),stripe:"",border:!0,"max-height":pe.value,loading:h(te),resizable:!0,onRegister:h($),headerCellStyle:ne,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(h(z),{":span":24},{default:c((()=>[l(h(S),null,{default:c((()=>[l(h(k),{pageSize:h(se),"onUpdate:pageSize":t[2]||(t[2]=e=>f(se)?se.value=e:null),currentPage:h(re),"onUpdate:currentPage":t[3]||(t[3]=e=>f(re)?re.value=e:null),"page-sizes":[10,20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:h(oe)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(h(A),{modelValue:ue.value,"onUpdate:modelValue":t[4]||(t[4]=e=>ue.value=e),title:h(j)("asset.detail"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":pe.value},{default:c((()=>[l(h(i),{"max-height":pe.value},{default:c((()=>[g("div",N,b(de.value),1)])),_:1},8,["max-height"])])),_:1},8,["modelValue","title","max-height"]),l(h(A),{modelValue:O.value,"onUpdate:modelValue":t[5]||(t[5]=e=>O.value=e),title:h(j)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:c((()=>[l(h(I),null,{default:c((()=>[l(h(z),null,{default:c((()=>[l(h(U),{tag:"b",size:"small"},{default:c((()=>[_(b(h(j)("searchHelp.operator")),1)])),_:1}),l(h(R),{direction:"vertical"}),l(h(U),{size:"small",type:"danger"},{default:c((()=>[_(b(h(j)("searchHelp.notice")),1)])),_:1})])),_:1}),l(h(z),{style:{"margin-top":"10px"}},{default:c((()=>[l(h(C),{headerCellStyle:ne,data:q},{default:c((()=>[l(h(P),{prop:"operator",label:h(j)("searchHelp.operator"),width:"300"},null,8,["label"]),l(h(P),{prop:"meaning",label:h(j)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(h(z),{style:{"margin-top":"15px"}},{default:c((()=>[l(h(U),{tag:"b",size:"small"},{default:c((()=>[_(b(h(j)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(h(z),{style:{"margin-top":"10px"}},{default:c((()=>[l(h(C),{headerCellStyle:ne,data:F},{default:c((()=>[l(h(P),{prop:"keyword",label:h(j)("searchHelp.keywords")},null,8,["label"]),l(h(P),{prop:"example",label:h(j)("searchHelp.example")},null,8,["label"]),l(h(P),{prop:"explain",label:h(j)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-d305b3ba"]]);export{D as default};
