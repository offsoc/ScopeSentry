import{d as a,dE as e,r as l,Y as o,o as t,i as u,w as d,e as s,a as n,Z as r,I as m,H as i,t as c,l as v}from"./index-5vcJ2QQZ.js";import{a as p,E as f}from"./el-form-item-DCu0bDJP.js";import{E as T,a as V}from"./el-col-D1K5Gn4C.js";import{E as h}from"./el-switch-Cly3c4QB.js";import{E as b}from"./el-divider-BrE4ZIeE.js";import{E as x}from"./el-text-BkzwFLJI.js";import{u as _}from"./index-D3X1cvrx.js";const g=a({__name:"Configuration",props:{closeDialog:{type:Function},getList:{type:Function},nodeConfForm:{}},setup(a){const{t:g}=v(),k=a,{nodeConfForm:w}=e(k),N=l({...w.value}),y=l(!1),j=l(!1),E=l(!1);o((()=>{"1"===N.value.state?(E.value=!0,j.value=!1):"2"===N.value.state?(E.value=!1,j.value=!1):"3"===N.value.state&&(E.value=!1,j.value=!0)}));const U=l();return(a,e)=>(t(),u(n(f),{model:N.value,"label-width":"auto","status-icon":"",ref_key:"ruleFormRef",ref:U},{default:d((()=>[s(n(p),{label:n(g)("node.nodeName"),prop:"name"},{default:d((()=>[s(n(r),{modelValue:N.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>N.value.name=a),disabled:""},null,8,["modelValue"])])),_:1},8,["label"]),s(n(p),{label:n(g)("configuration.maxTaskNum"),prop:"MaxTaskNum"},{default:d((()=>[s(n(r),{modelValue:N.value.maxTaskNum,"onUpdate:modelValue":e[1]||(e[1]=a=>N.value.maxTaskNum=a)},null,8,["modelValue"])])),_:1},8,["label"]),s(n(p),{label:n(g)("configuration.portScanThread"),prop:"MaxTaskNum"},{default:d((()=>[s(n(r),{modelValue:N.value.portscanThread,"onUpdate:modelValue":e[2]||(e[2]=a=>N.value.portscanThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),s(n(p),{label:n(g)("configuration.dirScanThread"),prop:"MaxTaskNum"},{default:d((()=>[s(n(r),{modelValue:N.value.dirscanThread,"onUpdate:modelValue":e[3]||(e[3]=a=>N.value.dirscanThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),s(n(p),{label:n(g)("configuration.crawlerThread"),prop:"MaxTaskNum"},{default:d((()=>[s(n(r),{modelValue:N.value.crawlerThread,"onUpdate:modelValue":e[4]||(e[4]=a=>N.value.crawlerThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),s(n(p),{label:n(g)("common.state")},{default:d((()=>[s(n(h),{modelValue:E.value,"onUpdate:modelValue":e[5]||(e[5]=a=>E.value=a),"inline-prompt":"","active-text":n(g)("common.switchAction"),"inactive-text":n(g)("common.switchInactive"),disabled:j.value},null,8,["modelValue","active-text","inactive-text","disabled"])])),_:1},8,["label"]),s(n(V),null,{default:d((()=>[s(n(T),{span:16,offset:8},{default:d((()=>[s(n(p),null,{default:d((()=>[s(n(m),{type:"primary",onClick:e[6]||(e[6]=a=>(async a=>{y.value=!0,a&&await a.validate((async(a,e)=>{if(a){let a;a=await _(N.value.name,N.value.maxTaskNum,N.value.dirscanThread,N.value.portscanThread,N.value.crawlerThread,E.value),200===a.code&&(k.getList(),k.closeDialog()),y.value=!1}else y.value=!1}))})(U.value)),loading:y.value},{default:d((()=>[i(c(n(g)("task.save")),1)])),_:1},8,["loading"]),s(n(b),{direction:"vertical"}),s(n(x),{size:"small",type:"danger"},{default:d((()=>[i(c(n(g)("configuration.threadMsg")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]))}});export{g as _};
