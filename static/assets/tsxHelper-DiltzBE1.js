import{b2 as t,co as e,cp as n,cq as c,cr as i,cs as o,bM as r}from"./index-D8t8duXH.js";const s=(e,n)=>{if(!t||!e||!n)return!1;const c=e.getBoundingClientRect();let i;return i=n instanceof Element?n.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},c.top<i.bottom&&c.bottom>i.top&&c.right>i.left&&c.left<i.right},l=t=>{let e,n;return"touchend"===t.type?(n=t.changedTouches[0].clientY,e=t.changedTouches[0].clientX):t.type.startsWith("touch")?(n=t.touches[0].clientY,e=t.touches[0].clientX):(n=t.clientY,e=t.clientX),{clientX:e,clientY:n}};function u(t,i){return e(n(t,i,c),t+"")}function a(t){return i(t)&&o(t)}const h=(t,e="default",n)=>{if(!t||!Reflect.has(t,e))return null;if(!r(t[e]))return null;const c=t[e];return c?c(n):null};export{h as a,u as b,s as c,l as g,a as i};
