import{r as a}from"./index-XBrIPdP2.js";const i=()=>a.get({url:"/api/dictionary/subdomain/data"}),t=i=>a.post({url:"/api/dictionary/subdomain/save",data:{dict:i}}),d=()=>a.get({url:"/api/dictionary/dir/data"}),r=i=>a.post({url:"/api/dictionary/dir/save",data:{dict:i}}),o=(i,t,d)=>a.post({url:"/api/dictionary/port/data",data:{search:i,pageIndex:t,pageSize:d}}),s=i=>a.post({url:"/api/dictionary/port/delete",data:{ids:i}}),p=(i,t,d)=>a.post({url:"/api/dictionary/port/upgrade",data:{id:i,name:t,value:d}}),e=(i,t)=>a.post({url:"/api/dictionary/port/add",data:{name:i,value:t}});export{d as a,r as b,o as c,s as d,e,i as g,t as s,p as u};
