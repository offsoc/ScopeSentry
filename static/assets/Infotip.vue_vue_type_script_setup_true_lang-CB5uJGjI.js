import{_ as e}from"./Highlight.vue_vue_type_script_lang-BV-YHxD7.js";import{d as s,a5 as r,U as t,o,c as a,n as l,a as i,e as c,f as p,t as n,j as d,Q as m,a4 as f,w as x,H as g,k as _}from"./index-ubEX2FhK.js";const h=s({__name:"Infotip",props:{title:r.string.def(""),schema:{type:Array,required:!0,default:()=>[]},showIndex:r.bool.def(!0),highlightColor:r.string.def("var(--el-color-primary)")},emits:["click"],setup(s,{emit:r}){const{getPrefixCls:h}=_(),y=h("infotip"),b=r,k=e=>{b("click",e)};return(r,_)=>{const h=t("Icon");return o(),a("div",{class:l([i(y),"p-20px mb-20px border-1px border-solid border-[var(--el-color-primary)] bg-[var(--el-color-primary-light-9)]"])},[s.title?(o(),a("div",{key:0,class:l([`${i(y)}__header`,"flex items-center"])},[c(h,{icon:"bi:exclamation-circle-fill",size:22,color:"var(--el-color-primary)"}),p("span",{class:l([`${i(y)}__title`,"pl-5px text-16px font-bold"])},n(s.title),3)],2)):d("",!0),p("div",{class:l(`${i(y)}__content`)},[(o(!0),a(m,null,f(s.schema,((r,t)=>(o(),a("p",{key:t,class:"text-14px mt-15px"},[c(i(e),{keys:"string"==typeof r?[]:r.keys,color:s.highlightColor,onClick:k},{default:x((()=>[g(n(s.showIndex?`${t+1}、`:"")+n("string"==typeof r?r:r.label),1)])),_:2},1032,["keys","color"])])))),128))],2)],2)}}});export{h as _};
