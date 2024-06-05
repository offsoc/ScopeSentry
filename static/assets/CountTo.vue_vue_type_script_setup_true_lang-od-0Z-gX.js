import{d as a,a5 as t,N as l,bm as e,Y as r,B as n,a3 as s,a as i,o,c as u,t as c,n as p,k as m,cF as d}from"./index-C7FJj4Bp.js";const V=a({__name:"CountTo",props:{startVal:t.number.def(0),endVal:t.number.def(2021),duration:t.number.def(3e3),autoplay:t.bool.def(!0),decimals:t.number.validate((a=>a>=0)).def(0),decimal:t.string.def("."),separator:t.string.def(","),prefix:t.string.def(""),suffix:t.string.def(""),useEasing:t.bool.def(!0),easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(a,{expose:t,emit:V}){const{getPrefixCls:f}=m(),F=f("count-to"),g=a,S=V,b=a=>{const{decimals:t,decimal:l,separator:e,suffix:r,prefix:n}=g;a=Number(a).toFixed(t);const s=(a+="").split(".");let i=s[0];const o=s.length>1?l+s[1]:"",u=/(\d+)(\d{3})/;if(e&&!d(e))for(;u.test(i);)i=i.replace(u,"$1"+e+"$2");return n+i+o+r},A=l({localStartVal:g.startVal,displayValue:b(g.startVal),printVal:null,paused:!1,localDuration:g.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),x=e(A,"displayValue");r((()=>{g.autoplay&&y(),S("mounted")}));const D=n((()=>g.startVal>g.endVal));s([()=>g.startVal,()=>g.endVal],(()=>{g.autoplay&&y()}));const y=()=>{const{startVal:a,duration:t}=g;A.localStartVal=a,A.startTime=null,A.localDuration=t,A.paused=!1,A.rAF=requestAnimationFrame(q)},T=()=>{cancelAnimationFrame(A.rAF)},k=()=>{A.startTime=null,A.localDuration=+A.remaining,A.localStartVal=+A.printVal,requestAnimationFrame(q)},q=a=>{const{useEasing:t,easingFn:l,endVal:e}=g;A.startTime||(A.startTime=a),A.timestamp=a;const r=a-A.startTime;A.remaining=A.localDuration-r,t?i(D)?A.printVal=A.localStartVal-l(r,0,A.localStartVal-e,A.localDuration):A.printVal=l(r,A.localStartVal,e-A.localStartVal,A.localDuration):i(D)?A.printVal=A.localStartVal-(A.localStartVal-e)*(r/A.localDuration):A.printVal=A.localStartVal+(e-A.localStartVal)*(r/A.localDuration),i(D)?A.printVal=A.printVal<e?e:A.printVal:A.printVal=A.printVal>e?e:A.printVal,A.displayValue=b(A.printVal),r<A.localDuration?A.rAF=requestAnimationFrame(q):S("callback")};return t({pauseResume:()=>{A.paused?(k(),A.paused=!1):(T(),A.paused=!0)},reset:()=>{A.startTime=null,cancelAnimationFrame(A.rAF),A.displayValue=b(g.startVal)},start:y,pause:T}),(a,t)=>(o(),u("span",{class:p(i(F))},c(x.value),3))}});export{V as _};
