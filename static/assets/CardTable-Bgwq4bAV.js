import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CEdmon7H.js";import{d as t,l as s,r as i,o as a,i as r,w as o,e as l,a as n,f as p,t as c,H as m}from"./index-DW0ls8FD.js";import{_ as d}from"./Table.vue_vue_type_script_lang-BB7Dbq62.js";import{g as u}from"./index-DpF9bE0L.js";import{E as j}from"./el-link-eR_BNWSP.js";import{E as f}from"./el-divider-q4pJm88E.js";import"./el-card-DYqFxjB9.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-8DMMW8Fg.js";import"./el-checkbox-LARa6PUn.js";import"./useInput-CdNe5s2K.js";import"./debounce-GdEfecKx.js";import"./el-tag-FG6xPbp4.js";import"./el-pagination-DMWg5539.js";import"./el-image-viewer-lsLaMVeS.js";import"./tsxHelper-DA3uP4OE.js";import"./el-dropdown-item-B7fZS_cU.js";import"./castArray-BIZ_WTxg.js";import"./refs-0-VBVyuG.js";import"./index-B9IRQp0j.js";import"./raf-BjvSW-8C.js";import"./index-Djy9NJ1B.js";const x={class:"flex cursor-pointer"},v={class:"pr-16px"},_=["src"],g={class:"mb-12px font-700 font-size-16px"},b={class:"line-clamp-3 font-size-12px"},k={class:"flex justify-center items-center"},w=["onClick"],y=["onClick"],h=t({__name:"CardTable",setup(t){const{t:h}=s(),C=i(!0);let z=i([]);(async e=>{const t=await u(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{C.value=!1}));t&&(z.value=t.data.list)})();return(t,s)=>(a(),r(n(e),{title:n(h)("tableDemo.cardTable")},{default:o((()=>[l(n(d),{columns:[],data:n(z),loading:C.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:o((e=>[p("div",x,[p("div",v,[p("img",{src:e.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,_)]),p("div",null,[p("div",g,c(e.name),1),p("div",b,c(e.desc),1)])])])),"content-footer":o((e=>[p("div",k,[p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作一")])),_:1})],8,w),l(n(f),{direction:"vertical"}),p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作二")])),_:1})],8,y)])])),_:1},8,["data","loading"])])),_:1},8,["title"]))}});export{h as default};
