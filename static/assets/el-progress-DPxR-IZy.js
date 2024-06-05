import{s as e,a7 as t,d as a,A as s,B as r,cE as n,bE as o,aL as i,aY as l,bi as c,a_ as u,ac as p,o as d,c as f,n as h,a as y,f as v,F as g,J as k,t as b,j as x,i as $,w as m,G as w,D as B,L as F,M as N}from"./index-ubEX2FhK.js";const D=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:t(Function),default:e=>`${e}%`}}),I=["aria-valuenow"],L={viewBox:"0 0 100 100"},S=["d","stroke","stroke-linecap","stroke-width"],T=["d","stroke","opacity","stroke-linecap","stroke-width"],E={key:0},W=a({name:"ElProgress"});const _=N(F(a({...W,props:D,setup(e){const t=e,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},F=s("progress"),N=r((()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:Y(t.percentage)}))),D=r((()=>(t.strokeWidth/t.width*100).toFixed(1))),W=r((()=>["circle","dashboard"].includes(t.type)?Number.parseInt(""+(50-Number.parseFloat(D.value)/2),10):0)),_=r((()=>{const e=W.value,a="dashboard"===t.type;return`\n          M 50 50\n          m 0 ${a?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${a?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${a?"":"-"}${2*e}\n          `})),M=r((()=>2*Math.PI*W.value)),j=r((()=>"dashboard"===t.type?.75:1)),A=r((()=>`${-1*M.value*(1-j.value)/2}px`)),P=r((()=>({strokeDasharray:`${M.value*j.value}px, ${M.value}px`,strokeDashoffset:A.value}))),z=r((()=>({strokeDasharray:`${M.value*j.value*(t.percentage/100)}px, ${M.value}px`,strokeDashoffset:A.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),C=r((()=>{let e;return e=t.color?Y(t.percentage):a[t.status]||a.default,e})),G=r((()=>"warning"===t.status?n:"line"===t.type?"success"===t.status?o:i:"success"===t.status?l:c)),J=r((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),V=r((()=>t.format(t.percentage)));const Y=e=>{var a;const{color:s}=t;if(u(s))return s(e);if(p(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>p(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(d(),f("div",{class:h([y(F).b(),y(F).m(e.type),y(F).is(e.status),{[y(F).m("without-text")]:!e.showText,[y(F).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(d(),f("div",{key:0,class:h(y(F).b("bar"))},[v("div",{class:h(y(F).be("bar","outer")),style:g({height:`${e.strokeWidth}px`})},[v("div",{class:h([y(F).be("bar","inner"),{[y(F).bem("bar","inner","indeterminate")]:e.indeterminate},{[y(F).bem("bar","inner","striped")]:e.striped},{[y(F).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:g(y(N))},[(e.showText||e.$slots.default)&&e.textInside?(d(),f("div",{key:0,class:h(y(F).be("bar","innerText"))},[k(e.$slots,"default",{percentage:e.percentage},(()=>[v("span",null,b(y(V)),1)]))],2)):x("v-if",!0)],6)],6)],2)):(d(),f("div",{key:1,class:h(y(F).b("circle")),style:g({height:`${e.width}px`,width:`${e.width}px`})},[(d(),f("svg",L,[v("path",{class:h(y(F).be("circle","track")),d:y(_),stroke:`var(${y(F).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":e.strokeLinecap,"stroke-width":y(D),fill:"none",style:g(y(P))},null,14,S),v("path",{class:h(y(F).be("circle","path")),d:y(_),stroke:y(C),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":y(D),style:g(y(z))},null,14,T)]))],6)),!e.showText&&!e.$slots.default||e.textInside?x("v-if",!0):(d(),f("div",{key:2,class:h(y(F).e("text")),style:g({fontSize:`${y(J)}px`})},[k(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(d(),$(y(B),{key:1},{default:m((()=>[(d(),$(w(y(G))))])),_:1})):(d(),f("span",E,b(y(V)),1))]))],6))],10,I))}}),[["__file","progress.vue"]]));export{_ as E};
