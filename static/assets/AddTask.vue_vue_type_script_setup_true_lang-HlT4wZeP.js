import{d as e,bw as a,r as l,N as t,Y as o,o as n,i as u,w as i,e as s,a as c,Z as d,H as m,j as r,t as p,I as v,l as f,a2 as g}from"./index-5vcJ2QQZ.js";import{E as b,a as k}from"./el-checkbox-DLONfMTE.js";/* empty css                          */import{E as h}from"./el-divider-BrE4ZIeE.js";import{a as _,E as V}from"./el-form-item-DCu0bDJP.js";import{E as x,a as w}from"./el-col-D1K5Gn4C.js";import{E as S}from"./el-switch-Cly3c4QB.js";import"./el-tooltip-l0sNRNKZ.js";import{E as y}from"./el-popper-Bv917HkU.js";import{a as j,E as N}from"./el-radio-group-DCPzcd32.js";import"./el-tag-syt7MiqL.js";import{E as U}from"./el-select-v2-DQG2z8db.js";import{E as A}from"./el-input-number-CqVFN3gb.js";import{E as I}from"./el-text-BkzwFLJI.js";import{a as M}from"./index-D3X1cvrx.js";import{b as T}from"./index-usU51_tD.js";import{c as E,e as C}from"./index-DGvA8pgK.js";import{c as L}from"./index-D3rW6bN_.js";const P=e({__name:"AddTask",props:{closeDialog:{type:Function},getList:{type:Function},vTaskForm:{},create:{type:Boolean},schedule:{type:Boolean},taskid:{}},setup(e){const{t:P}=f(),F=e,{vTaskForm:q}=a(F),D=l({...q.value}),B=t({name:[{required:!0,message:P("task.msgTaskName"),trigger:"blur"}],target:[{required:!0,message:P("task.msgTarget"),trigger:"blur"}],node:[{required:!0,message:P("task.nodeMsg"),trigger:"blur"}]}),H=l(!1),J=l(),z=t([]),K=t([]),O=t([]);o((()=>{(async()=>{const e=await M();e.data.list.length>0?(Y.value=!1,e.data.list.forEach((e=>{z.push({value:e,label:e})}))):(Y.value=!0,g.warning(P("node.onlineNodeMsg")))})(),(async()=>{const e=await T();e.data.list.length>0&&(O.push({value:"All Poc",label:"All Poc"}),e.data.list.forEach((e=>{O.push({value:e.id,label:e.name})})))})(),(async()=>{const e=await L("",1,1e4);e.data.list.length>0&&e.data.list.forEach((e=>{K.push({value:e.id,label:e.name})}))})()}));const R=l(!1),Y=l(!1),Z=e=>{R.value=!1,e?(D.value.allNode=!0,D.value.node=[],z.forEach((e=>D.value.node.push(e.value)))):(D.value.allNode=!1,D.value.node=[])};return(e,a)=>(n(),u(c(V),{model:D.value,"label-width":"120px",rules:B,"status-icon":"",ref_key:"ruleFormRef",ref:J,disabled:!e.create},{default:i((()=>[s(c(_),{label:c(P)("task.taskName"),prop:"name"},{default:i((()=>[s(c(d),{modelValue:D.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>D.value.name=e),placeholder:c(P)("task.msgTaskName")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),s(c(_),{label:c(P)("task.taskTarget"),prop:"target"},{default:i((()=>[s(c(d),{modelValue:D.value.target,"onUpdate:modelValue":a[1]||(a[1]=e=>D.value.target=e),placeholder:c(P)("task.msgTarget"),type:"textarea",rows:"10"},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),s(c(y),{content:c(P)("task.selectNodeMsg"),placement:"top"},{default:i((()=>[s(c(_),{label:c(P)("task.nodeSelect"),prop:"node"},{default:i((()=>[s(c(U),{modelValue:D.value.node,"onUpdate:modelValue":a[3]||(a[3]=e=>D.value.node=e),filterable:"",options:z,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:i((()=>[s(c(b),{modelValue:D.value.allNode,"onUpdate:modelValue":a[2]||(a[2]=e=>D.value.allNode=e),disabled:Y.value,indeterminate:R.value,onChange:Z},{default:i((()=>[m(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"]),s(c(w),null,{default:i((()=>[s(c(x),{span:6},{default:i((()=>[s(c(_),{label:c(P)("project.scheduledTasks")},{default:i((()=>[s(c(y),{effect:"dark",content:c(P)("project.msgScheduledTasks"),placement:"top"},{default:i((()=>[s(c(S),{modelValue:D.value.scheduledTasks,"onUpdate:modelValue":a[4]||(a[4]=e=>D.value.scheduledTasks=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["content"])])),_:1},8,["label"])])),_:1}),D.value.scheduledTasks?(n(),u(c(x),{key:0,span:12},{default:i((()=>[s(c(_),{label:c(P)("project.cycle"),prop:"type"},{default:i((()=>[s(c(A),{modelValue:D.value.hour,"onUpdate:modelValue":a[5]||(a[5]=e=>D.value.hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),s(c(I),{style:{position:"relative",left:"16px"}},{default:i((()=>[m("Hour")])),_:1})])),_:1},8,["label"])])),_:1})):r("",!0)])),_:1}),s(c(h),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:i((()=>[m(p(c(P)("subdomain.subdomainName")),1)])),_:1}),e.$props.schedule?r("",!0):(n(),u(c(w),{key:0},{default:i((()=>[s(c(x),{span:6},{default:i((()=>[s(c(y),{content:c(P)("task.duplicatesMsg"),placement:"top"},{default:i((()=>[s(c(_),{label:c(P)("task.duplicates")},{default:i((()=>[s(c(S),{modelValue:D.value.duplicates,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value.duplicates=e),"inline-prompt":"","active-text":c(P)("common.true"),"inactive-text":c(P)("common.false")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1},8,["content"])])),_:1})])),_:1})),s(c(w),null,{default:i((()=>[s(c(x),{span:6},{default:i((()=>[s(c(_),{label:c(P)("task.subdomainScan")},{default:i((()=>[s(c(S),{modelValue:D.value.subdomainScan,"onUpdate:modelValue":a[7]||(a[7]=e=>D.value.subdomainScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),s(c(x),{span:12},{default:i((()=>[D.value.subdomainScan?(n(),u(c(_),{key:0,label:c(P)("task.config"),prop:"type"},{default:i((()=>[s(c(k),{modelValue:D.value.subdomainConfig,"onUpdate:modelValue":a[8]||(a[8]=e=>D.value.subdomainConfig=e)},{default:i((()=>[s(c(b),{label:"Subfinder",name:"subdomainConfig",checked:!0}),s(c(b),{label:"Ksubdomain",name:"subdomainConfig",checked:!0})])),_:1},8,["modelValue"])])),_:1},8,["label"])):r("",!0)])),_:1})])),_:1}),s(c(h),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:i((()=>[m(p(c(P)("task.portScan")),1)])),_:1}),s(c(w),null,{default:i((()=>[s(c(x),{span:6},{default:i((()=>[s(c(_),{label:c(P)("task.portScan")},{default:i((()=>[s(c(S),{modelValue:D.value.portScan,"onUpdate:modelValue":a[9]||(a[9]=e=>D.value.portScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),s(c(x),{span:12},{default:i((()=>[D.value.portScan?(n(),u(c(_),{key:0,label:c(P)("task.portSelect"),prop:"portScan"},{default:i((()=>[s(c(U),{modelValue:D.value.ports,"onUpdate:modelValue":a[10]||(a[10]=e=>D.value.ports=e),filterable:"",options:K,placeholder:"Please select port",style:{width:"80%"}},null,8,["modelValue","options"])])),_:1},8,["label"])):r("",!0)])),_:1})])),_:1}),s(c(h),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:i((()=>[m(p(c(P)("dirScan.dirScanName")),1)])),_:1}),s(c(_),{label:c(P)("dirScan.dirScanName")},{default:i((()=>[s(c(S),{modelValue:D.value.dirScan,"onUpdate:modelValue":a[11]||(a[11]=e=>D.value.dirScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),s(c(h),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:i((()=>[m(p(c(P)("crawler.crawlerName")),1)])),_:1}),s(c(w),null,{default:i((()=>[s(c(x),{span:6},{default:i((()=>[s(c(y),{effect:"dark",content:c(P)("task.msgUrl"),placement:"top"},{default:i((()=>[s(c(_),{label:c(P)("task.url")},{default:i((()=>[s(c(S),{modelValue:D.value.urlScan,"onUpdate:modelValue":a[12]||(a[12]=e=>D.value.urlScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1},8,["content"])])),_:1}),s(c(x),{span:6},{default:i((()=>[D.value.urlScan?(n(),u(c(_),{key:0,label:c(P)("task.sensitiveInfoScan"),prop:"type"},{default:i((()=>[s(c(S),{modelValue:D.value.sensitiveInfoScan,"onUpdate:modelValue":a[13]||(a[13]=e=>D.value.sensitiveInfoScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])):r("",!0)])),_:1}),s(c(x),{span:6},{default:i((()=>[s(c(y),{effect:"dark",content:c(P)("task.waybackUrlMsg"),placement:"top"},{default:i((()=>[D.value.urlScan?(n(),u(c(_),{key:0,label:"waybackurl",prop:"type"},{default:i((()=>[s(c(S),{modelValue:D.value.waybackurl,"onUpdate:modelValue":a[14]||(a[14]=e=>D.value.waybackurl=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1})):r("",!0)])),_:1},8,["content"])])),_:1}),s(c(x),{span:12,offset:6},{default:i((()=>[D.value.urlScan?(n(),u(c(_),{key:0,label:c(P)("task.pageMonitoring"),prop:"type"},{default:i((()=>[s(c(j),{modelValue:D.value.pageMonitoring,"onUpdate:modelValue":a[15]||(a[15]=e=>D.value.pageMonitoring=e)},{default:i((()=>[s(c(N),{label:"None",name:"pageMonitoring"}),s(c(y),{effect:"dark",content:c(P)("task.msgPageMonitoringAll"),placement:"top"},{default:i((()=>[s(c(N),{label:"All",name:"pageMonitoring",checked:!0})])),_:1},8,["content"]),s(c(y),{effect:"dark",content:c(P)("task.msgPageMonitoringJs"),placement:"top"},{default:i((()=>[s(c(N),{label:"JS",name:"pageMonitoring"})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1},8,["label"])):r("",!0)])),_:1})])),_:1}),s(c(_),{label:c(P)("crawler.crawlerName"),prop:"type"},{default:i((()=>[s(c(y),{effect:"dark",content:c(P)("task.msgCrawler"),placement:"top"},{default:i((()=>[s(c(S),{modelValue:D.value.crawlerScan,"onUpdate:modelValue":a[16]||(a[16]=e=>D.value.crawlerScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["content"])])),_:1},8,["label"]),s(c(h),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:i((()=>[m(p(c(P)("task.vulScan")),1)])),_:1}),s(c(w),null,{default:i((()=>[s(c(x),{span:6},{default:i((()=>[s(c(_),{label:c(P)("task.vulScan")},{default:i((()=>[s(c(S),{modelValue:D.value.vulScan,"onUpdate:modelValue":a[17]||(a[17]=e=>D.value.vulScan=e),"inline-prompt":"","active-text":c(P)("common.switchAction"),"inactive-text":c(P)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),s(c(x),{span:18},{default:i((()=>[D.value.vulScan?(n(),u(c(_),{key:0,label:c(P)("task.vulList"),prop:"type"},{default:i((()=>[s(c(U),{modelValue:D.value.vulList,"onUpdate:modelValue":a[18]||(a[18]=e=>D.value.vulList=e),filterable:"",options:O,placeholder:"Please select vul",style:{width:"80%"},multiple:"","collapse-tags":"","collapse-tags-tooltip":"","tag-type":"info","max-collapse-tags":3},null,8,["modelValue","options"])])),_:1},8,["label"])):r("",!0)])),_:1})])),_:1}),s(c(h)),s(c(w),null,{default:i((()=>[s(c(x),{span:2,offset:7},{default:i((()=>[s(c(_),null,{default:i((()=>[s(c(v),{type:"primary",onClick:a[19]||(a[19]=e=>(async e=>{H.value=!0,e&&await e.validate((async(e,a)=>{D.value.allNode||(D.value.allNode=!1),e?(""===F.taskid?200===(await E(D.value.name,D.value.target,D.value.node,D.value.allNode,D.value.subdomainScan,D.value.subdomainConfig,D.value.urlScan,D.value.duplicates,D.value.sensitiveInfoScan,D.value.pageMonitoring,D.value.crawlerScan,D.value.vulScan,D.value.vulList,D.value.portScan,D.value.ports,D.value.dirScan,D.value.waybackurl,D.value.scheduledTasks,D.value.hour)).code&&(F.getList(),F.closeDialog()):200===(await C(F.taskid,D.value.name,D.value.target,D.value.node,D.value.allNode,D.value.subdomainScan,D.value.subdomainConfig,D.value.urlScan,D.value.duplicates,D.value.sensitiveInfoScan,D.value.pageMonitoring,D.value.crawlerScan,D.value.vulScan,D.value.vulList,D.value.portScan,D.value.ports,D.value.dirScan,D.value.waybackurl,D.value.scheduledTasks,D.value.hour)).code&&(F.getList(),F.closeDialog()),H.value=!1):H.value=!1}))})(J.value)),loading:H.value},{default:i((()=>[m(p(c(P)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","disabled"]))}});export{P as _};
