import{d as e,dE as a,r as l,N as t,o as s,i as o,w as i,e as r,a as n,Z as u,I as m,H as d,t as v,l as p}from"./index-5vcJ2QQZ.js";import{a as c,E as g}from"./el-form-item-DCu0bDJP.js";import{E as f,a as b}from"./el-col-D1K5Gn4C.js";import{E as y}from"./el-divider-BrE4ZIeE.js";import"./el-tag-syt7MiqL.js";import"./el-popper-Bv917HkU.js";import{E as _}from"./el-select-v2-DQG2z8db.js";import{E as V}from"./el-switch-Cly3c4QB.js";import{r as h}from"./index-kuLHsiIe.js";const w=(e,a,l)=>h.post({url:"/api/sensitive/data",data:{search:e,pageIndex:a,pageSize:l}}),I=e=>h.post({url:"/api/sensitive/delete",data:{ids:e}}),j=e({__name:"Detail",props:{closeDialog:{type:Function},getList:{type:Function},sensitiveForm:{}},setup(e){const{t:w}=p(),I=e,{sensitiveForm:j}=a(I),x=l({...j.value}),E=t({name:[{required:!0,message:w("sensitiveInformation.sensitiveNameMsg"),trigger:"blur"}],regular:[{required:!0,message:w("sensitiveInformation.sensitiveRegularMsg"),trigger:"blur"}]}),k=[{value:"null",label:"null"},{value:"green",label:"green"},{value:"red",label:"red"},{value:"cyan",label:"cyan"},{value:"yellow",label:"yellow"},{value:"orange",label:"orange"},{value:"gray",label:"gray"},{value:"pink",label:"pink"}],F=l(!1),M=l(),N=async e=>{F.value=!0,e&&await e.validate((async(e,a)=>{if(e){let e;e=""!=x.value.id?await(l=x.value.id,t=x.value.name,s=x.value.regular,o=x.value.color,i=x.value.state,h.post({url:"/api/sensitive/update",data:{id:l,name:t,regular:s,color:o,state:i}})):await((e,a,l,t)=>h.post({url:"/api/sensitive/add",data:{name:e,regular:a,color:l,state:t}}))(x.value.name,x.value.regular,x.value.color,x.value.state),200===e.code&&(I.getList(),I.closeDialog()),F.value=!1}else F.value=!1;var l,t,s,o,i}))};return(e,a)=>(s(),o(n(g),{model:x.value,"label-width":"120px",rules:E,"status-icon":"",ref_key:"ruleFormRef",ref:M},{default:i((()=>[r(n(c),{label:n(w)("sensitiveInformation.sensitiveName"),prop:"name"},{default:i((()=>[r(n(u),{modelValue:x.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value.name=e),placeholder:n(w)("sensitiveInformation.sensitiveNameMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(n(c),{label:n(w)("sensitiveInformation.sensitiveRegular"),prop:"regular"},{default:i((()=>[r(n(u),{modelValue:x.value.regular,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value.regular=e),placeholder:n(w)("sensitiveInformation.sensitiveRegularMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(n(c),{label:n(w)("sensitiveInformation.sensitiveColor")},{default:i((()=>[r(n(_),{modelValue:x.value.color,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value.color=e),placeholder:"Please select color",options:k},null,8,["modelValue"])])),_:1},8,["label"]),r(n(c),{label:n(w)("common.state")},{default:i((()=>[r(n(V),{modelValue:x.value.state,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value.state=e),"inline-prompt":"","active-text":n(w)("common.switchAction"),"inactive-text":n(w)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),r(n(y)),r(n(b),null,{default:i((()=>[r(n(f),{span:2,offset:8},{default:i((()=>[r(n(c),null,{default:i((()=>[r(n(m),{type:"primary",onClick:a[4]||(a[4]=e=>N(M.value)),loading:F.value},{default:i((()=>[d(v(n(w)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"]))}});export{j as _,I as d,w as g};
