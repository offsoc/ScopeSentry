import{r as a}from"./index-CtI1U4Dj.js";const t=()=>a.get({url:"/api/configuration/subfinder/data"}),i=t=>a.post({url:"/api/configuration/subfinder/save",data:{content:t}}),o=()=>a.get({url:"/api/configuration/rad/data"}),n=t=>a.post({url:"/api/configuration/rad/save",data:{content:t}}),e=()=>a.get({url:"/api/configuration/system/data"}),s=(t,i,o,n,e,s,r)=>a.post({url:"/api/configuration/system/save",data:{timezone:t,MaxTaskNum:i,DirscanThread:o,PortscanThread:n,CrawlerThread:e,UrlThread:s,UrlMaxNum:r}}),r=()=>a.get({url:"/api/notification/data"}),d=(t,i,o,n,e,s)=>a.post({url:"/api/notification/add",data:{name:t,url:i,method:o,contentType:n,data:e,state:s}}),c=(t,i,o,n,e,s,r)=>a.post({url:"/api/notification/add",data:{id:t,name:i,url:o,method:n,contentType:e,data:s,state:r}}),u=t=>a.post({url:"/api/notification/delete",data:{ids:t}}),p=()=>a.get({url:"/api/notification/config/data"}),f=(t,i,o,n,e,s,r)=>a.post({url:"/api/notification/config/update",data:{dirScanNotification:t,portScanNotification:i,sensitiveNotification:o,subdomainNotification:n,subdomainTakeoverNotification:e,pageMonNotification:s,vulNotification:r}});export{t as a,i as b,o as c,n as d,u as e,r as f,e as g,p as h,d as i,c as j,s,f as u};
