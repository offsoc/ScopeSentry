import{r as a}from"./index-DPWgdpfC.js";const e=()=>a.get({url:"/api/node/data"}),d=()=>a.get({url:"/api/node/data/online"}),t=(e,d,t,o,r,s)=>a.post({url:"/api/node/config/update",data:{name:e,maxTaskNum:d,dirscanThread:t,portscanThread:o,crawlerThread:r,state:s}}),o=e=>a.post({url:"/api/node/delete",data:{names:e}}),r=e=>a.post({url:"/api/node/log/data",data:{name:e}});export{d as a,r as b,o as d,e as g,t as u};
