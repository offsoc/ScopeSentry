import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CLuWlWlx.js";import{d as t,l as a,O as l,e as o,X as s,r as i,o as r,i as m,w as p,a as n,a0 as d}from"./index-rxu9Faad.js";import{_ as c}from"./Table.vue_vue_type_script_lang-COxZJx7A.js";import{a as b}from"./index-avNfi5-L.js";import{E as u}from"./el-tag-DFTmA9-y.js";import"./el-card-C0XrHsE5.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BJkW0SkV.js";import"./el-checkbox-BVo36Tmv.js";import"./useInput-D-eMIzLG.js";import"./debounce-rCtyPgGe.js";import"./el-select-FArs2pTf.js";import"./el-image-viewer-CCnBYOdA.js";import"./tsxHelper-CyxpWgl3.js";import"./el-dropdown-item-CgW2TRYg.js";import"./castArray-B4xEQihS.js";import"./refs-ClXC3KCu.js";import"./index-CQSTts3C.js";import"./raf-P5NVVAw8.js";import"./index-Cr6_Qzhf.js";const j=t({__name:"DefaultTable",setup(t){const{t:j}=a(),f=[{field:"title",label:j("tableDemo.title")},{field:"author",label:j("tableDemo.author")},{field:"display_time",label:j("tableDemo.displayTime"),sortable:!0},{field:"importance",label:j("tableDemo.importance"),formatter:(e,t,a)=>l(u,{type:1===a?"success":2===a?"warning":"danger"},(()=>j(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:j("tableDemo.pageviews")},{field:"action",label:j("tableDemo.action"),slots:{default:e=>{let t;return o(s,{type:"primary",onClick:()=>D(e)},"function"==typeof(a=t=j("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}],g=i(!0);let _=i([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(_.value=t.data.list)})();const D=e=>{};return(t,a)=>(r(),m(n(e),{title:n(j)("tableDemo.table"),message:n(j)("tableDemo.tableDes")},{default:p((()=>[o(n(c),{columns:f,data:n(_),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};