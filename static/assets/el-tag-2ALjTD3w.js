import{s,cl as a,d as e,aS as l,A as o,B as n,o as t,c,f as i,J as r,n as u,a as p,i as f,w as d,e as k,bi as m,aj as y,D as g,j as b,F as v,h as C,L as h,M as B}from"./index-CkCEk9VW.js";const S=s({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:a},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),_={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},E=e({name:"ElTag"});const j=B(h(e({...E,props:S,emits:_,setup(s,{emit:a}){const e=s,h=l(),B=o("tag"),S=n((()=>{const{type:s,hit:a,effect:l,closable:o,round:n}=e;return[B.b(),B.is("closable",o),B.m(s||"primary"),B.m(h.value),B.m(l),B.is("hit",a),B.is("round",n)]})),_=s=>{a("close",s)},E=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(t(),c("span",{key:0,class:u(p(S)),style:v({backgroundColor:s.color}),onClick:E},[i("span",{class:u(p(B).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(p(g),{key:0,class:u(p(B).e("close")),onClick:y(_,["stop"])},{default:d((()=>[k(p(m))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(t(),f(C,{key:1,name:`${p(B).namespace.value}-zoom-in-center`,appear:""},{default:d((()=>[i("span",{class:u(p(S)),style:v({backgroundColor:s.color}),onClick:E},[i("span",{class:u(p(B).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),f(p(g),{key:0,class:u(p(B).e("close")),onClick:y(_,["stop"])},{default:d((()=>[k(p(m))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","tag.vue"]]));export{j as E,S as t};
