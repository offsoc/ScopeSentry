import{d as e,dE as a,r as l,N as t,o,i as u,w as s,e as r,a as i,Z as d,I as m,H as n,t as p,l as v}from"./index-BmBszaKw.js";import{a as c,E as f}from"./el-form-item-C5jC4cNB.js";import{E as g,a as D}from"./el-col-BdnEbz2u.js";import{E as _}from"./el-divider-BN2cfX23.js";import{u as y,e as b}from"./index-CA4a4hIT.js";const w=e({__name:"PortDetail",props:{closeDialog:{type:Function},getList:{type:Function},portDictForm:{}},setup(e){const{t:w}=v(),V=e,{portDictForm:h}=a(V),j=l({...h.value}),F=t({name:[{required:!0,message:w("portDict.nameMsg"),trigger:"blur"}],regular:[{required:!0,message:w("portDict.valueMsg"),trigger:"blur"}]}),x=l(!1),E=l();return(e,a)=>(o(),u(i(f),{model:j.value,"label-width":"auto",rules:F,"status-icon":"",ref_key:"ruleFormRef",ref:E},{default:s((()=>[r(i(c),{label:i(w)("portDict.name"),prop:"name"},{default:s((()=>[r(i(d),{modelValue:j.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value.name=e),placeholder:i(w)("portDict.nameMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(i(c),{label:i(w)("portDict.value")},{default:s((()=>[r(i(d),{modelValue:j.value.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value.value=e),type:"textarea",prop:"value",placeholder:i(w)("portDict.valueMsg"),autosize:{minRows:11}},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(i(_)),r(i(D),null,{default:s((()=>[r(i(g),{span:2,offset:8},{default:s((()=>[r(i(c),null,{default:s((()=>[r(i(m),{type:"primary",onClick:a[2]||(a[2]=e=>(async e=>{x.value=!0,e&&await e.validate((async(e,a)=>{if(e){let e;e=""!=j.value.id?await y(j.value.id,j.value.name,j.value.value):await b(j.value.name,j.value.value),200===e.code&&(V.getList(),V.closeDialog()),x.value=!1}else x.value=!1}))})(E.value)),loading:x.value},{default:s((()=>[n(p(i(w)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"]))}});export{w as _};
