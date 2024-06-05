import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-Cl5a1g_M.js";import{_ as o}from"./Dialog.vue_vue_type_style_index_0_lang-DNSEKIW8.js";import{d as t,l,r as a,N as i,U as s,o as r,i as m,w as p,e as n,H as u,t as d,a as c,c as f,Q as _,a4 as j,f as g}from"./index-Cr6AeRWq.js";import{u as v,F as b}from"./useForm-5NmR2Rgd.js";import{u as y}from"./useValidator-CfmeJv73.js";import{g as D}from"./index-CyLmsgQq.js";import"./el-card-f04OrW9f.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BgAeKG77.js";import"./refs-COABADRW.js";import"./el-form-item-DAdIpZ2w.js";import"./castArray-DolOOpA2.js";import"./el-col-B0jdjJOD.js";import"./el-tag-CxICoOpO.js";import"./el-checkbox-zfukSsNU.js";import"./useInput-8bUrr7Qz.js";import"./debounce-D2fEcvzH.js";import"./el-radio-group-DlaD2ltx.js";/* empty css                          */import"./el-input-number-DjDJ99ro.js";import"./el-pagination-14Id82WI.js";import"./el-select-v2-C2BLWs-e.js";import"./raf-FGCLxHfU.js";import"./el-switch-Dv-A2hxv.js";import"./el-divider-gyCaIvGK.js";import"./el-progress-DbNHGNbp.js";import"./InputPassword-CmeI5942.js";import"./style.css_vue_type_style_index_0_src_true_lang-819h2M_i.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DUWpnlaB.js";import"./IconPicker-2jg_b_V6.js";/* empty css                   */import"./el-tab-pane-Bekx6uf7.js";import"./tsxHelper-B2K87hSo.js";import"./index-RQ44C1fT.js";import"./index-XBrIPdP2.js";const k=t({__name:"Dialog",setup(t){const{required:k}=y(),{t:x}=l(),h=a(!1),C=a(!1),{formRegister:P,formMethods:V}=v(),{getElFormExpose:w}=V,I=i([{field:"field1",label:x("formDemo.input"),component:"Input",formItemProps:{rules:[k()]}},{field:"field2",label:x("formDemo.select"),component:"Select",optionApi:async()=>(await D()).data},{field:"field3",label:x("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:x("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:x("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:x("formDemo.timeSelect")}]),F=async()=>{const e=await w();null==e||e.validate((e=>{}))};return(t,l)=>{const a=s("BaseButton");return r(),m(c(e),{title:c(x)("dialogDemo.dialog"),message:c(x)("dialogDemo.dialogDes")},{default:p((()=>[n(a,{type:"primary",onClick:l[0]||(l[0]=e=>h.value=!h.value)},{default:p((()=>[u(d(c(x)("dialogDemo.open")),1)])),_:1}),n(a,{type:"primary",onClick:l[1]||(l[1]=e=>C.value=!C.value)},{default:p((()=>[u(d(c(x)("dialogDemo.combineWithForm")),1)])),_:1}),n(c(o),{modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),title:c(x)("dialogDemo.dialog")},{footer:p((()=>[n(a,{onClick:l[2]||(l[2]=e=>h.value=!1)},{default:p((()=>[u(d(c(x)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[(r(),f(_,null,j(1e4,(e=>g("div",{key:e},d(e),1))),64))])),_:1},8,["modelValue","title"]),n(c(o),{modelValue:C.value,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value=e),title:c(x)("dialogDemo.dialog")},{footer:p((()=>[n(a,{type:"primary",onClick:F},{default:p((()=>[u(d(c(x)("dialogDemo.submit")),1)])),_:1}),n(a,{onClick:l[4]||(l[4]=e=>C.value=!1)},{default:p((()=>[u(d(c(x)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[n(c(b),{schema:I,onRegister:c(P)},null,8,["schema","onRegister"])])),_:1},8,["modelValue","title"])])),_:1},8,["title","message"])}}});export{k as default};
