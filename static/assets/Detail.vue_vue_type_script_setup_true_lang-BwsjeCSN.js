import{d as e,dE as a,r as l,N as t,o as r,i as o,w as n,e as u,a as i,Z as s,I as p,H as d,t as m,l as g}from"./index-C7FJj4Bp.js";import{a as c,E as f}from"./el-form-item-DGQT7cXn.js";import{E as v,a as y}from"./el-col-CLycMjBT.js";import{E as _}from"./el-divider-DK9S_Niq.js";import{E as V}from"./el-switch-DLGqKmW6.js";import{r as b}from"./index-DPWgdpfC.js";const h=(e,a,l)=>b.post({url:"/api/fingerprint/data",data:{search:e,pageIndex:a,pageSize:l}}),x=e=>b.post({url:"/api/fingerprint/delete",data:{ids:e}}),w=e({__name:"Detail",props:{closeDialog:{type:Function},getList:{type:Function},fingerprintForm:{}},setup(e){const{t:h}=g(),x=e,{fingerprintForm:w}=a(x),j=l({...w.value}),E=t({name:[{required:!0,message:h("fingerprint.nameMsg"),trigger:"blur"}],rule:[{required:!0,message:h("fingerprint.ruleMsg"),trigger:"blur"}]}),F=l(!1),U=l(),M=async e=>{F.value=!0,e&&await e.validate((async(e,a)=>{if(e){let e;e=""!=j.value.id?await(l=j.value.id,t=j.value.name,r=j.value.rule,o=j.value.category,n=j.value.parent_category,u=j.value.state,b.post({url:"/api/fingerprint/update",data:{id:l,name:t,rule:r,category:o,parent_category:n,state:u}})):await((e,a,l,t,r)=>b.post({url:"/api/fingerprint/add",data:{name:e,rule:a,category:l,parent_category:t,state:r}}))(j.value.name,j.value.rule,j.value.category,j.value.parent_category,j.value.state),200===e.code&&(x.getList(),x.closeDialog()),F.value=!1}else F.value=!1;var l,t,r,o,n,u}))};return(e,a)=>(r(),o(i(f),{model:j.value,"label-width":"120px",rules:E,"status-icon":"",ref_key:"ruleFormRef",ref:U},{default:n((()=>[u(i(c),{label:i(h)("fingerprint.name"),prop:"name"},{default:n((()=>[u(i(s),{modelValue:j.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value.name=e),placeholder:i(h)("fingerprint.nameMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(i(c),{label:i(h)("fingerprint.rule"),prop:"rule"},{default:n((()=>[u(i(s),{modelValue:j.value.rule,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value.rule=e),placeholder:i(h)("fingerprint.ruleMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(i(c),{label:i(h)("fingerprint.category")},{default:n((()=>[u(i(s),{modelValue:j.value.category,"onUpdate:modelValue":a[2]||(a[2]=e=>j.value.category=e),placeholder:i(h)("fingerprint.category")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(i(c),{label:i(h)("fingerprint.parentCategory")},{default:n((()=>[u(i(s),{modelValue:j.value.parent_category,"onUpdate:modelValue":a[3]||(a[3]=e=>j.value.parent_category=e),placeholder:i(h)("fingerprint.parentCategory")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(i(c),{label:i(h)("common.state")},{default:n((()=>[u(i(V),{modelValue:j.value.state,"onUpdate:modelValue":a[4]||(a[4]=e=>j.value.state=e),"inline-prompt":"","active-text":i(h)("common.switchAction"),"inactive-text":i(h)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),u(i(_)),u(i(y),null,{default:n((()=>[u(i(v),{span:2,offset:8},{default:n((()=>[u(i(c),null,{default:n((()=>[u(i(p),{type:"primary",onClick:a[5]||(a[5]=e=>M(U.value)),loading:F.value},{default:n((()=>[d(m(i(h)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"]))}});export{w as _,x as d,h as g};
