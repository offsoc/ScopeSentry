import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CoYqT830.js";import{d as t,l as s,r as i,o as a,i as r,w as o,e as l,a as n,f as p,t as c,H as m}from"./index-ubEX2FhK.js";import{_ as d}from"./Table.vue_vue_type_script_lang-D1Qh8XyS.js";import{g as u}from"./index-CrvEN7e-.js";import{E as j}from"./el-link-BK18uR-X.js";import{E as f}from"./el-divider-JTSpcwM1.js";import"./el-card-BeFjUUyC.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BDTZ23-W.js";import"./el-checkbox-BTlumLVj.js";import"./useInput-DtyvbpoF.js";import"./debounce-BVe-Ub-q.js";import"./el-tag-BH3jtqzv.js";import"./el-pagination-qAkOkq_g.js";import"./el-image-viewer-B2EERH4x.js";import"./tsxHelper-B2w2bZm3.js";import"./el-dropdown-item-DKIl88b7.js";import"./castArray-QVB7Iual.js";import"./refs-BBDhzfVg.js";import"./index-CsSHR5aA.js";import"./raf-t7Eg7mSF.js";import"./index-CZZ6X4Zq.js";const x={class:"flex cursor-pointer"},v={class:"pr-16px"},_=["src"],g={class:"mb-12px font-700 font-size-16px"},b={class:"line-clamp-3 font-size-12px"},k={class:"flex justify-center items-center"},w=["onClick"],y=["onClick"],h=t({__name:"CardTable",setup(t){const{t:h}=s(),C=i(!0);let z=i([]);(async e=>{const t=await u(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{C.value=!1}));t&&(z.value=t.data.list)})();return(t,s)=>(a(),r(n(e),{title:n(h)("tableDemo.cardTable")},{default:o((()=>[l(n(d),{columns:[],data:n(z),loading:C.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:o((e=>[p("div",x,[p("div",v,[p("img",{src:e.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,_)]),p("div",null,[p("div",g,c(e.name),1),p("div",b,c(e.desc),1)])])])),"content-footer":o((e=>[p("div",k,[p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作一")])),_:1})],8,w),l(n(f),{direction:"vertical"}),p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作二")])),_:1})],8,y)])])),_:1},8,["data","loading"])])),_:1},8,["title"]))}});export{h as default};
