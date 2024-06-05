import{a_ as e,s as a,aM as l,ab as t,aa as n,ax as r,bd as u,a9 as s,d as i,z as o,A as d,r as c,N as m,aN as v,B as b,aX as p,aS as N,aB as f,a3 as y,Y as V,bC as I,o as h,c as g,W as x,a as S,n as E,ai as w,J as A,e as F,w as B,i as _,aW as k,cz as M,D as K,j as T,aV as z,cA as O,aj as $,Z as C,L as P,aG as j,ac as D,aP as L,M as W}from"./index-Cx8c_DGm.js";const Y=100,G=600,J={beforeMount(a,l){const t=l.value,{interval:n=Y,delay:r=G}=e(t)?{}:t;let u,s;const i=()=>e(t)?t():t.handler(),o=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(o(),i(),document.addEventListener("mouseup",(()=>o()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{i()}),n)}),r))}))}},X=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:l,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||t(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),Z={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[r]:e=>t(e)||u(e),[s]:e=>t(e)||u(e)},q=["aria-label","onKeydown"],H=["aria-label","onKeydown"],Q=i({name:"ElInputNumber"});const R=W(P(i({...Q,props:X,emits:Z,setup(e,{expose:a,emit:l}){const i=e,{t:P}=o(),W=d("input-number"),Y=c(),G=m({currentValue:i.modelValue,userInput:null}),{formItem:X}=v(),Z=b((()=>t(i.modelValue)&&i.modelValue<=i.min)),Q=b((()=>t(i.modelValue)&&i.modelValue>=i.max)),R=b((()=>{const e=ne(i.step);return p(i.precision)?Math.max(ne(i.modelValue),e):(i.precision,i.precision)})),U=b((()=>i.controls&&"right"===i.controlsPosition)),ee=N(),ae=f(),le=b((()=>{if(null!==G.userInput)return G.userInput;let e=G.currentValue;if(u(e))return"";if(t(e)){if(Number.isNaN(e))return"";p(i.precision)||(e=e.toFixed(i.precision))}return e})),te=(e,a)=>{if(p(a)&&(a=R.value),0===a)return Math.round(e);let l=String(e);const t=l.indexOf(".");if(-1===t)return e;if(!l.replace(".","").split("")[t+a])return e;const n=l.length;return"5"===l.charAt(n-1)&&(l=`${l.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(l).toFixed(a))},ne=e=>{if(u(e))return 0;const a=e.toString(),l=a.indexOf(".");let t=0;return-1!==l&&(t=a.length-l-1),t},re=(e,a=1)=>t(e)?te(e+i.step*a):G.currentValue,ue=()=>{if(i.readonly||ae.value||Q.value)return;const e=Number(le.value)||0,a=re(e);oe(a),l(r,G.currentValue),be()},se=()=>{if(i.readonly||ae.value||Z.value)return;const e=Number(le.value)||0,a=re(e,-1);oe(a),l(r,G.currentValue),be()},ie=(e,a)=>{const{max:t,min:n,step:r,precision:o,stepStrictly:d,valueOnClear:c}=i;t<n&&j("InputNumber","min should not be greater than max.");let m=Number(e);if(u(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=D(c)?{min:n,max:t}[c]:c}return d&&(m=te(Math.round(m/r)*r,o)),p(o)||(m=te(m,o)),(m>t||m<n)&&(m=m>t?t:n,a&&l(s,m)),m},oe=(e,a=!0)=>{var t;const r=G.currentValue,u=ie(e);a?r===u&&e||(G.userInput=null,l(s,u),r!==u&&l(n,u,r),i.validateEvent&&(null==(t=null==X?void 0:X.validate)||t.call(X,"change").catch((e=>L()))),G.currentValue=u):l(s,u)},de=e=>{G.userInput=e;const a=""===e?null:Number(e);l(r,a),oe(a,!1)},ce=e=>{const a=""!==e?Number(e):"";(t(a)&&!Number.isNaN(a)||""===e)&&oe(a),be(),G.userInput=null},me=e=>{l("focus",e)},ve=e=>{var a;G.userInput=null,l("blur",e),i.validateEvent&&(null==(a=null==X?void 0:X.validate)||a.call(X,"blur").catch((e=>L())))},be=()=>{G.currentValue!==i.modelValue&&(G.currentValue=i.modelValue)},pe=e=>{document.activeElement===e.target&&e.preventDefault()};return y((()=>i.modelValue),((e,a)=>{const l=ie(e,!0);null===G.userInput&&l!==a&&(G.currentValue=l)}),{immediate:!0}),V((()=>{var e;const{min:a,max:n,modelValue:r}=i,u=null==(e=Y.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(n)?u.setAttribute("aria-valuemax",String(n)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",G.currentValue||0===G.currentValue?String(G.currentValue):""),u.setAttribute("aria-disabled",String(ae.value)),!t(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),l(s,e)}})),I((()=>{var e,a;const l=null==(e=Y.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow",`${null!=(a=G.currentValue)?a:""}`)})),a({focus:()=>{var e,a;null==(a=null==(e=Y.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=Y.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(h(),g("div",{class:E([S(W).b(),S(W).m(S(ee)),S(W).is("disabled",S(ae)),S(W).is("without-controls",!e.controls),S(W).is("controls-right",S(U))]),onDragstart:a[0]||(a[0]=$((()=>{}),["prevent"]))},[e.controls?x((h(),g("span",{key:0,role:"button","aria-label":S(P)("el.inputNumber.decrease"),class:E([S(W).e("decrease"),S(W).is("disabled",S(Z))]),onKeydown:w(se,["enter"])},[A(e.$slots,"decrease-icon",{},(()=>[F(S(K),null,{default:B((()=>[S(U)?(h(),_(S(k),{key:0})):(h(),_(S(M),{key:1}))])),_:1})]))],42,q)),[[S(J),se]]):T("v-if",!0),e.controls?x((h(),g("span",{key:1,role:"button","aria-label":S(P)("el.inputNumber.increase"),class:E([S(W).e("increase"),S(W).is("disabled",S(Q))]),onKeydown:w(ue,["enter"])},[A(e.$slots,"increase-icon",{},(()=>[F(S(K),null,{default:B((()=>[S(U)?(h(),_(S(z),{key:0})):(h(),_(S(O),{key:1}))])),_:1})]))],42,H)),[[S(J),ue]]):T("v-if",!0),F(S(C),{id:e.id,ref_key:"input",ref:Y,type:"number",step:e.step,"model-value":S(le),placeholder:e.placeholder,readonly:e.readonly,disabled:S(ae),size:S(ee),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:pe,onKeydown:[w($(ue,["prevent"]),["up"]),w($(se,["prevent"]),["down"])],onBlur:ve,onFocus:me,onInput:de,onChange:ce},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","input-number.vue"]]));export{R as E,J as v};
