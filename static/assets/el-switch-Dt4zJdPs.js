import{s as e,cj as a,x as i,a7 as t,a9 as n,b6 as l,ac as c,ab as s,aa as o,ax as v,d,aN as u,aS as r,A as f,bg as p,aB as y,B as b,r as m,C as h,a3 as k,aP as x,Y as I,o as g,c as V,f as S,a as T,n as w,ai as _,i as B,w as C,G as A,D as N,j as P,t as E,e as j,aE as F,J as G,F as K,aj as $,L as z,aO as D,b7 as J,aG as L,M}from"./index-L23m9uYc.js";const O=e({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:a},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:i},activeActionIcon:{type:i},activeIcon:{type:i},inactiveIcon:{type:i},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:t(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}}),Y={[n]:e=>l(e)||c(e)||s(e),[o]:e=>l(e)||c(e)||s(e),[v]:e=>l(e)||c(e)||s(e)},q=["onClick"],H=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Q=["aria-hidden"],R=["aria-hidden"],U=["aria-hidden"],W="ElSwitch",X=d({name:W});const Z=M(z(d({...X,props:O,emits:Y,setup(e,{expose:a,emit:i}){const t=e,{formItem:c}=u(),s=r(),d=f("switch"),{inputId:z}=p(t,{formItemContext:c}),M=y(b((()=>t.loading))),O=m(!1!==t.modelValue),Y=m(),X=m(),Z=b((()=>[d.b(),d.m(s.value),d.is("disabled",M.value),d.is("checked",ne.value)])),ee=b((()=>[d.e("label"),d.em("label","left"),d.is("active",!ne.value)])),ae=b((()=>[d.e("label"),d.em("label","right"),d.is("active",ne.value)])),ie=b((()=>({width:h(t.width)})));k((()=>t.modelValue),(()=>{O.value=!0}));const te=b((()=>!!O.value&&t.modelValue)),ne=b((()=>te.value===t.activeValue));[t.activeValue,t.inactiveValue].includes(te.value)||(i(n,t.inactiveValue),i(o,t.inactiveValue),i(v,t.inactiveValue)),k(ne,(e=>{var a;Y.value.checked=e,t.validateEvent&&(null==(a=null==c?void 0:c.validate)||a.call(c,"change").catch((e=>x())))}));const le=()=>{const e=ne.value?t.inactiveValue:t.activeValue;i(n,e),i(o,e),i(v,e),D((()=>{Y.value.checked=ne.value}))},ce=()=>{if(M.value)return;const{beforeChange:e}=t;if(!e)return void le();const a=e();[J(a),l(a)].includes(!0)||L(W,"beforeChange must return type `Promise<boolean>` or `boolean`"),J(a)?a.then((e=>{e&&le()})).catch((e=>{})):a&&le()};return I((()=>{Y.value.checked=ne.value})),a({focus:()=>{var e,a;null==(a=null==(e=Y.value)?void 0:e.focus)||a.call(e)},checked:ne}),(e,a)=>(g(),V("div",{class:w(T(Z)),onClick:$(ce,["prevent"])},[S("input",{id:T(z),ref_key:"input",ref:Y,class:w(T(d).e("input")),type:"checkbox",role:"switch","aria-checked":T(ne),"aria-disabled":T(M),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:T(M),tabindex:e.tabindex,onChange:le,onKeydown:_(ce,["enter"])},null,42,H),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?P("v-if",!0):(g(),V("span",{key:0,class:w(T(ee))},[e.inactiveIcon?(g(),B(T(N),{key:0},{default:C((()=>[(g(),B(A(e.inactiveIcon)))])),_:1})):P("v-if",!0),!e.inactiveIcon&&e.inactiveText?(g(),V("span",{key:1,"aria-hidden":T(ne)},E(e.inactiveText),9,Q)):P("v-if",!0)],2)),S("span",{ref_key:"core",ref:X,class:w(T(d).e("core")),style:K(T(ie))},[e.inlinePrompt?(g(),V("div",{key:0,class:w(T(d).e("inner"))},[e.activeIcon||e.inactiveIcon?(g(),B(T(N),{key:0,class:w(T(d).is("icon"))},{default:C((()=>[(g(),B(A(T(ne)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(g(),V("span",{key:1,class:w(T(d).is("text")),"aria-hidden":!T(ne)},E(T(ne)?e.activeText:e.inactiveText),11,R)):P("v-if",!0)],2)):P("v-if",!0),S("div",{class:w(T(d).e("action"))},[e.loading?(g(),B(T(N),{key:0,class:w(T(d).is("loading"))},{default:C((()=>[j(T(F))])),_:1},8,["class"])):T(ne)?G(e.$slots,"active-action",{key:1},(()=>[e.activeActionIcon?(g(),B(T(N),{key:0},{default:C((()=>[(g(),B(A(e.activeActionIcon)))])),_:1})):P("v-if",!0)])):T(ne)?P("v-if",!0):G(e.$slots,"inactive-action",{key:2},(()=>[e.inactiveActionIcon?(g(),B(T(N),{key:0},{default:C((()=>[(g(),B(A(e.inactiveActionIcon)))])),_:1})):P("v-if",!0)]))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?P("v-if",!0):(g(),V("span",{key:1,class:w(T(ae))},[e.activeIcon?(g(),B(T(N),{key:0},{default:C((()=>[(g(),B(A(e.activeIcon)))])),_:1})):P("v-if",!0),!e.activeIcon&&e.activeText?(g(),V("span",{key:1,"aria-hidden":!T(ne)},E(e.activeText),9,U)):P("v-if",!0)],2))],10,q))}}),[["__file","switch.vue"]]));export{Z as E};
