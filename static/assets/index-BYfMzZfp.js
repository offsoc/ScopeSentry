import{r as a}from"./index-Djy9NJ1B.js";const t=()=>a.get({url:"/api/configuration/subfinder/data"}),i=t=>a.post({url:"/api/configuration/subfinder/save",data:{content:t}}),o=()=>a.get({url:"/api/configuration/rad/data"}),n=t=>a.post({url:"/api/configuration/rad/save",data:{content:t}}),s=()=>a.get({url:"/api/configuration/system/data"}),e=(t,i,o,n)=>a.post({url:"/api/configuration/system/save",data:{timezone:t,MaxTaskNum:i,DirscanThread:o,PortscanThread:n}}),d=()=>a.get({url:"/api/notification/data"}),r=(t,i,o,n,s,e)=>a.post({url:"/api/notification/add",data:{name:t,url:i,method:o,contentType:n,data:s,state:e}}),c=(t,i,o,n,s,e,d)=>a.post({url:"/api/notification/add",data:{id:t,name:i,url:o,method:n,contentType:s,data:e,state:d}}),u=t=>a.post({url:"/api/notification/delete",data:{ids:t}}),p=()=>a.get({url:"/api/notification/config/data"}),f=(t,i,o,n,s,e,d)=>a.post({url:"/api/notification/config/update",data:{dirScanNotification:t,portScanNotification:i,sensitiveNotification:o,subdomainNotification:n,subdomainTakeoverNotification:s,pageMonNotification:e,vulNotification:d}});export{t as a,i as b,o as c,n as d,u as e,d as f,s as g,p as h,r as i,c as j,e as s,f as u};
