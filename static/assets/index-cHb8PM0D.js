import{r as a}from"./index-ANBIEAIq.js";const t=(t,p,e)=>a.post({url:"/api/poc/data",data:{search:t,pageIndex:p,pageSize:e}}),p=()=>a.get({url:"/api/poc/data/all"}),e=t=>a.post({url:"/api/poc/content",data:{id:t}}),o=(t,p,e)=>a.post({url:"/api/poc/add",data:{name:t,content:p,level:e}}),d=(t,p,e,o)=>a.post({url:"/api/poc/update",data:{id:t,name:p,content:e,level:o}}),s=t=>a.post({url:"/api/poc/delete",data:{ids:t}});export{t as a,p as b,o as c,s as d,e as g,d as u};
