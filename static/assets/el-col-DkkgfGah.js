import{s as t,d as e,A as s,B as a,ae as u,o as l,i as r,w as p,J as n,n as o,a as f,F as d,G as i,L as c,M as g,a7 as b,a8 as y,af as m,ab as $,ay as h}from"./index-ubEX2FhK.js";const j=Symbol("rowContextKey"),v=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=e({name:"ElRow"});const x=g(c(e({...N,props:v,setup(t){const e=t,c=s("row"),g=a((()=>e.gutter));u(j,{gutter:g});const b=a((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft=`-${e.gutter/2}px`,t):t})),y=a((()=>[c.b(),c.is(`justify-${e.justify}`,"start"!==e.justify),c.is(`align-${e.align}`,!!e.align)]));return(t,e)=>(l(),r(i(t.tag),{class:o(f(y)),style:d(f(b))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","row.vue"]])),w=t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:b([Number,Object]),default:()=>y({})},sm:{type:b([Number,Object]),default:()=>y({})},md:{type:b([Number,Object]),default:()=>y({})},lg:{type:b([Number,Object]),default:()=>y({})},xl:{type:b([Number,Object]),default:()=>y({})}}),E=e({name:"ElCol"});const O=g(c(e({...E,props:w,setup(t){const e=t,{gutter:u}=m(j,{gutter:a((()=>0))}),c=s("col"),g=a((()=>{const t={};return u.value&&(t.paddingLeft=t.paddingRight=u.value/2+"px"),t})),b=a((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const a=e[s];$(a)&&("span"===s?t.push(c.b(`${e[s]}`)):a>0&&t.push(c.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{$(e[s])?t.push(c.b(`${s}-${e[s]}`)):h(e[s])&&Object.entries(e[s]).forEach((([e,a])=>{t.push("span"!==e?c.b(`${s}-${e}-${a}`):c.b(`${s}-${a}`))}))})),u.value&&t.push(c.is("guttered")),[c.b(),t]}));return(t,e)=>(l(),r(i(t.tag),{class:o(f(b)),style:d(f(g))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","col.vue"]]));export{O as E,x as a};
