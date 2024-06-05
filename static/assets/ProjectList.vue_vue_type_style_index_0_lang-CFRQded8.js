import{_ as e}from"./Table.vue_vue_type_script_lang-2z1tSha4.js";import{s as a,cl as t,ab as s,x as l,a7 as o,d as r,A as i,r as n,B as c,ac as u,C as d,a3 as p,o as m,c as g,F as v,a as _,i as f,w as y,G as j,D as b,J as x,n as h,L as S,M as k,e as z,H as P,t as w,f as A,Q as D,l as C,dD as E}from"./index-Dk21xwtr.js";import{a as T,E as B,b as L}from"./el-dropdown-item-Bb1uXTT0.js";import"./el-popper-F_A9qiIe.js";import{E as U}from"./el-pagination-CM2qyTG0.js";import"./el-tag-CX3pn8fR.js";import{_ as V}from"./Dialog.vue_vue_type_style_index_0_lang-B0KuT73K.js";import{_ as F,d as q}from"./AddProject.vue_vue_type_script_setup_true_lang-WFCDXOKu.js";import{u as G}from"./useIcon-CA6tr2US.js";const H=a({size:{type:[Number,String],values:t,default:"",validator:e=>s(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:l},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:o(String),default:"cover"}}),M={error:e=>e instanceof Event},N=["src","alt","srcset"],$=r({name:"ElAvatar"});const I=k(S(r({...$,props:H,emits:M,setup(e,{emit:a}){const t=e,l=i("avatar"),o=n(!1),r=c((()=>{const{size:e,icon:a,shape:s}=t,o=[l.b()];return u(e)&&o.push(l.m(e)),a&&o.push(l.m("icon")),s&&o.push(l.m(s)),o})),S=c((()=>{const{size:e}=t;return s(e)?l.cssVarBlock({size:d(e)||""}):void 0})),k=c((()=>({objectFit:t.fit})));function z(e){o.value=!0,a("error",e)}return p((()=>t.src),(()=>o.value=!1)),(e,a)=>(m(),g("span",{class:h(_(r)),style:v(_(S))},[!e.src&&!e.srcSet||o.value?e.icon?(m(),f(_(b),{key:1},{default:y((()=>[(m(),f(j(e.icon)))])),_:1})):x(e.$slots,"default",{key:2}):(m(),g("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:v(_(k)),onError:z},null,44,N))],6))}}),[["__file","avatar.vue"]])),J={class:"flex cursor-pointer"},Q={class:"pr-16px"},R={class:"name"},Y={class:"assets-info"},K=r({__name:"ProjectList",props:{tableDataList:{type:Array,default:()=>[]},getProjectTag:{type:Function,required:!0},total:{type:Number,default:0}},setup(a){const{t:t}=C(),s=a,l=n(!1);let o="";const r=n(!1),i=()=>{r.value=!1},c=G({icon:"uil:edit"}),u=G({icon:"material-symbols:delete-outline"}),d=e=>{var a;"edit"==e.type?(async e=>{o=e,r.value=!0})(e.id):(a=e.id,E.alert("Are you sure you want to delete the selected data?","",{confirmButtonText:"YES",callback:async()=>{await q(a),s.getProjectTag(v.value,j.value)}}))},p=()=>{s.getProjectTag(v.value,j.value)},v=n(1),j=n(50),b=n(!1),x=n(!1),h=n(!1);return(s,n)=>(m(),g(D,null,[z(_(e),{columns:[],data:a.tableDataList,loading:l.value,"custom-content":"","card-wrap-style":{width:"210px",marginBottom:"20px",marginRight:"20px"}},{content:y((e=>[z(_(T),{trigger:"click",onCommand:d},{dropdown:y((()=>[z(_(B),null,{default:y((()=>[z(_(L),{icon:_(c),command:{type:"edit",id:e.id}},{default:y((()=>[P(w(_(t)("common.edit")),1)])),_:2},1032,["icon","command"]),z(_(L),{icon:_(u),command:{type:"del",id:e.id}},{default:y((()=>[P(w(_(t)("common.delete")),1)])),_:2},1032,["icon","command"])])),_:2},1024)])),default:y((()=>[A("div",J,[A("div",Q,[""!=e.logo?(m(),f(_(I),{key:0,src:e.logo,class:"avatar",fit:"cover"},null,8,["src"])):(m(),f(_(I),{key:1,class:"avatar avatar-placeholder"},{default:y((()=>[P(w(e.name.charAt(0)),1)])),_:2},1024))]),A("div",null,[A("div",R,w(e.name),1),A("div",Y,w(_(t)("project.totalAssets"))+" : "+w(e.AssetCount),1)])])])),_:2},1024)])),_:1},8,["data","loading"]),z(_(U),{"current-page":v.value,"onUpdate:currentPage":n[0]||(n[0]=e=>v.value=e),"page-size":j.value,"onUpdate:pageSize":n[1]||(n[1]=e=>j.value=e),"page-sizes":[50,70,100,200,400],small:b.value,disabled:h.value,background:x.value,layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","small","disabled","background","total"]),z(_(V),{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=e=>r.value=e),title:_(t)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:y((()=>[z(F,{closeDialog:i,projectid:_(o),getProjectData:s.$props.getProjectTag,schedule:!1},null,8,["projectid","getProjectData"])])),_:1},8,["modelValue","title"])],64))}});export{K as _};
