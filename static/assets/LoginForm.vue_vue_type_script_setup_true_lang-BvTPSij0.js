import{u as e,F as a}from"./useForm-D_LE7FZO.js";import{d as s,b as t,an as o,q as r,u as l,N as n,e as i,Q as u,X as d,r as c,Y as m,a3 as p,a as f,o as g,i as w,a0 as R,l as v}from"./index-BmBszaKw.js";import{E as b}from"./el-checkbox-Dt5IkAwT.js";import{l as h,g as y,a as I}from"./index-JthJwwhG.js";import{u as P}from"./useValidator-BVm0-xRH.js";const j=s({__name:"LoginForm",emits:["to-register"],setup(s,{emit:j}){const{required:x}=P(),k=t(),D=o(),E=r(),{currentRoute:F,addRoute:q,push:A}=l(),{t:L}=v(),V={username:[x()],password:[x()]},_=n([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>i("h2",{class:"text-2xl font-bold text-center w-[100%]"},[L("login.login")])}}},{field:"username",label:L("login.username"),component:"Input",colProps:{span:24}},{field:"password",label:L("login.password"),component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"}}},{field:"tool",colProps:{span:24},formItemProps:{slots:{default:()=>i(u,null,[i("div",{class:"flex justify-between items-center w-[100%]"},[i(b,{modelValue:M.value,"onUpdate:modelValue":e=>M.value=e,label:L("login.remember"),size:"small"},null)])])}}},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return i(u,null,[i("div",{class:"w-[100%]"},[i(d,{loading:C.value,type:"primary",class:"w-[100%]",onClick:T},(a=e=L("login.login"),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!R(a)?e:{default:()=>[e]}))])]);var a}}}}]),M=c(D.getRememberMe);m((()=>{(()=>{const e=D.getLoginInfo;if(e){const{username:a,password:s}=e;U({username:a,password:s})}})()}));const{formRegister:S,formMethods:z}=e(),{getFormData:N,getElFormExpose:O,setValues:U}=z,C=c(!1),Q=c("");p((()=>F.value),(e=>{var a;Q.value=null==(a=null==e?void 0:e.query)?void 0:a.redirect}),{immediate:!0});const T=async()=>{const e=await O();await(null==e?void 0:e.validate((async e=>{if(e){C.value=!0;const e=await N();try{const a=await h(e);a&&(f(M)?D.setLoginInfo({username:e.username,password:e.password}):D.setLoginInfo(void 0),D.setRememberMe(f(M)),D.setToken(a.data.access_token),D.setUsername(e.username),k.getDynamicRouter?X():(await E.generateRoutes("static").catch((()=>{})),E.getAddRouters.forEach((e=>{q(e)})),E.setIsAddRouters(!0),A({path:Q.value||E.addRouters[0].path})))}finally{C.value=!1}}})))},X=async()=>{const e={roleName:(await N()).username},a=k.getDynamicRouter&&k.getServerDynamicRouter?await y(e):await I(e);if(a){const e=a.data||[];D.setRoleRouters(e),k.getDynamicRouter&&k.getServerDynamicRouter?await E.generateRoutes("server",e).catch((()=>{})):await E.generateRoutes("frontEnd",e).catch((()=>{})),E.getAddRouters.forEach((e=>{q(e)})),E.setIsAddRouters(!0),A({path:Q.value||E.addRouters[0].path})}};return(e,s)=>(g(),w(f(a),{schema:_,rules:V,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:f(S)},null,8,["schema","onRegister"]))}});export{j as _};
