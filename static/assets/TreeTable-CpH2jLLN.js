import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CzwJprPK.js";import{d as t,a,l,N as o,e as i,X as r,o as s,i as p,w as n,$ as m,a0 as d,_ as c}from"./index-CkCEk9VW.js";import{_ as u}from"./Table.vue_vue_type_script_lang-CjD3G7xt.js";import{b}from"./index-CGvwFtnt.js";import{E as g}from"./el-tag-2ALjTD3w.js";import{u as f}from"./useTable-CR124o7-.js";import"./el-card-CsPP8HKp.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-1D1qSWZj.js";import"./el-checkbox-BkBx3Mtw.js";import"./useInput-DpM1BNjN.js";import"./debounce-BUaoKyTD.js";import"./el-pagination-CB-GtZS1.js";import"./el-image-viewer-fdTVElS5.js";import"./tsxHelper-eao2XTL0.js";import"./el-dropdown-item-BjX8Mmf2.js";import"./castArray-nWbA6lhz.js";import"./refs-1kaIDmjp.js";import"./index-BCymA3BH.js";import"./raf-H30ypQsV.js";import"./index-BTzo3Zl2.js";const j=c(t({__name:"TreeTable",setup(t){const{tableRegister:c,tableState:j}=f({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=j,l=await b({pageIndex:a(e),pageSize:a(t)});return{list:l.data.list,total:l.data.total}}}),{loading:_,dataList:y,total:D,currentPage:x,pageSize:v}=j,{t:S}=l(),w=o([{field:"selection",type:"selection"},{field:"index",label:S("tableDemo.index"),type:"index"},{field:"content",label:S("tableDemo.header"),children:[{field:"title",label:S("tableDemo.title")},{field:"author",label:S("tableDemo.author")},{field:"display_time",label:S("tableDemo.displayTime")},{field:"importance",label:S("tableDemo.importance"),formatter:(e,t,a)=>i(g,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[S(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:S("tableDemo.pageviews")}]},{field:"action",label:S("tableDemo.action"),slots:{default:e=>{let t;return i(r,{type:"primary",onClick:()=>h(e)},"function"==typeof(a=t=S("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}]),h=e=>{};return(t,l)=>(s(),p(a(e),{title:`${a(S)("router.treeTable")} ${a(S)("tableDemo.example")}`},{default:n((()=>[i(a(u),{pageSize:a(v),"onUpdate:pageSize":l[0]||(l[0]=e=>m(v)?v.value=e:null),currentPage:a(x),"onUpdate:currentPage":l[1]||(l[1]=e=>m(x)?x.value=e:null),columns:w,data:a(y),"row-key":"id",loading:a(_),sortable:"",pagination:{total:a(D)},onRegister:a(c)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"]))}}),[["__scopeId","data-v-ef67ff34"]]);export{j as default};
