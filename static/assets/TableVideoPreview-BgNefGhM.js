import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D8TtpZ7e.js";import{d as t,l as i,r as a,o as l,i as o,w as r,e as s,a as p}from"./index-C7FJj4Bp.js";import{_ as m}from"./Table.vue_vue_type_script_lang-CTgmk2QX.js";import{a as d}from"./index-DfFE1h0T.js";import"./el-card-Bhf-XVja.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DYwcpnJt.js";import"./el-checkbox-CPLJJMmd.js";import"./useInput-B9PSdhNo.js";import"./debounce-FYM4CuA0.js";import"./el-tag-BHmHdP98.js";import"./el-pagination-Fvtq0GFD.js";import"./el-image-viewer-DhtUPOdN.js";import"./tsxHelper-CSAh_eRe.js";import"./el-dropdown-item-zcj1wK-o.js";import"./castArray-C6EAQny5.js";import"./refs-Dte5lzrT.js";import"./index-DzV5t0hO.js";import"./raf-BrJref6v.js";import"./index-DPWgdpfC.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),u=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],j=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(l(),o(p(e),{title:p(n)("router.PicturePreview")},{default:r((()=>[s(p(m),{columns:u,data:p(_),loading:j.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};
