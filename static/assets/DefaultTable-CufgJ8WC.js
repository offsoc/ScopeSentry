import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D8TtpZ7e.js";import{d as t,l as a,O as o,e as l,X as i,r as s,o as r,i as p,w as m,a as n,a0 as d}from"./index-C7FJj4Bp.js";import{_ as c}from"./Table.vue_vue_type_script_lang-CTgmk2QX.js";import{a as b}from"./index-DfFE1h0T.js";import{E as u}from"./el-tag-BHmHdP98.js";import"./el-card-Bhf-XVja.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DYwcpnJt.js";import"./el-checkbox-CPLJJMmd.js";import"./useInput-B9PSdhNo.js";import"./debounce-FYM4CuA0.js";import"./el-pagination-Fvtq0GFD.js";import"./el-image-viewer-DhtUPOdN.js";import"./tsxHelper-CSAh_eRe.js";import"./el-dropdown-item-zcj1wK-o.js";import"./castArray-C6EAQny5.js";import"./refs-Dte5lzrT.js";import"./index-DzV5t0hO.js";import"./raf-BrJref6v.js";import"./index-DPWgdpfC.js";const j=t({__name:"DefaultTable",setup(t){const{t:j}=a(),f=[{field:"title",label:j("tableDemo.title")},{field:"author",label:j("tableDemo.author")},{field:"display_time",label:j("tableDemo.displayTime"),sortable:!0},{field:"importance",label:j("tableDemo.importance"),formatter:(e,t,a)=>o(u,{type:1===a?"success":2===a?"warning":"danger"},(()=>j(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:j("tableDemo.pageviews")},{field:"action",label:j("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>y(e)},"function"==typeof(a=t=j("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}],g=s(!0);let _=s([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(_.value=t.data.list)})();const y=e=>{};return(t,a)=>(r(),p(n(e),{title:n(j)("tableDemo.table"),message:n(j)("tableDemo.tableDes")},{default:m((()=>[l(n(c),{columns:f,data:n(_),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};
