import{aZ as e,B as t,cB as l,cC as a,c1 as o,a7 as n,s,a8 as i,d as r,A as u,r as c,N as d,cD as p,a as f,a3 as m,P as v,O as h,aj as g,ab as b,Y as y,b2 as S,bC as x,G as w,ac as O,aO as I,be as V,L as T,o as M,c as C,t as z,n as R,F as E,f as k,bK as B,x as N,aL as L,aM as D,af as $,J as F,aX as W,e as K,K as H,ay as A,bW as P,aT as j,z as q,aN as _,bg as G,bh as U,ad as Q,bd as Y,aW as X,ct as J,aS as Z,aP as ee,bf as te,b8 as le,a_ as ae,a9 as oe,aa as ne,D as se,bw as ie,ae as re,U as ue,V as ce,W as de,w as pe,j as fe,Q as me,a4 as ve,i as he,ai as ge,b9 as be,ak as ye,aF as Se,b_ as xe,b$ as we}from"./index-Dk21xwtr.js";import{u as Oe,a as Ie,E as Ve}from"./el-popper-F_A9qiIe.js";import{t as Te,E as Me}from"./el-tag-CX3pn8fR.js";import{c as Ce,r as ze}from"./raf-p14jZNMx.js";import{u as Re,i as Ee,f as ke,e as Be,C as Ne}from"./useInput-CkicsvFD.js";import{d as Le}from"./debounce-6Yuy_eHi.js";var De=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function $e(e,t){if(e.length!==t.length)return!1;for(var l=0;l<e.length;l++)if(a=e[l],o=t[l],!(a===o||De(a)&&De(o)))return!1;var a,o;return!0}const Fe=()=>{const a=e().proxy.$props;return t((()=>{const e=(e,t,l)=>({});return a.perfMode?l(e):function(e,t){void 0===t&&(t=$e);var l=null;function a(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];if(l&&l.lastThis===this&&t(a,l.lastArgs))return l.lastResult;var n=e.apply(this,a);return l={lastResult:n,lastArgs:a,lastThis:this},n}return a.clear=function(){l=null},a}(e)}))},We="itemRendered",Ke="scroll",He="forward",Ae="backward",Pe="auto",je="smart",qe="start",_e="center",Ge="horizontal",Ue="vertical",Qe="rtl",Ye="negative",Xe="positive-ascending",Je="positive-descending",Ze={[Ge]:"left",[Ue]:"top"},et={[Ge]:"deltaX",[Ue]:"deltaY"},tt=o({type:n([Number,Function]),required:!0}),lt=o({type:Number}),at=o({type:Number,default:2}),ot=o({type:String,values:["ltr","rtl"],default:"ltr"}),nt=o({type:Number,default:0}),st=o({type:Number,required:!0}),it=o({type:String,values:["horizontal","vertical"],default:Ue}),rt=s({className:{type:String,default:""},containerElement:{type:n([String,Object]),default:"div"},data:{type:n(Array),default:()=>i([])},direction:ot,height:{type:[String,Number],required:!0},innerElement:{type:[String,Object],default:"div"},style:{type:n([Object,String,Array])},useIsScrolling:{type:Boolean,default:!1},width:{type:[Number,String],required:!1},perfMode:{type:Boolean,default:!0},scrollbarAlwaysOn:{type:Boolean,default:!1}}),ut=s({cache:at,estimatedItemSize:lt,layout:it,initScrollOffset:nt,total:st,itemSize:tt,...rt}),ct={type:Number,default:6},dt={type:Number,default:0},pt={type:Number,default:2};s({columnCache:at,columnWidth:tt,estimatedColumnWidth:lt,estimatedRowHeight:lt,initScrollLeft:nt,initScrollTop:nt,itemKey:{type:n(Function),default:({columnIndex:e,rowIndex:t})=>`${t}:${e}`},rowCache:at,rowHeight:tt,totalColumn:st,totalRow:st,hScrollbarSize:ct,vScrollbarSize:ct,scrollbarStartGap:dt,scrollbarEndGap:pt,role:String,...rt});const ft=s({alwaysOn:Boolean,class:String,layout:it,total:st,ratio:{type:Number,required:!0},clientSize:{type:Number,required:!0},scrollFrom:{type:Number,required:!0},scrollbarSize:ct,startGap:dt,endGap:pt,visible:Boolean}),mt=(e,t)=>e<t?He:Ae,vt=e=>"ltr"===e||e===Qe||e===Ge;let ht=null;function gt(e=!1){if(null===ht||e){const e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";const l=document.createElement("div"),a=l.style;return a.width="100px",a.height="100px",e.appendChild(l),document.body.appendChild(e),e.scrollLeft>0?ht=Je:(e.scrollLeft=1,ht=0===e.scrollLeft?Ye:Xe),document.body.removeChild(e),ht}return ht}const bt=r({name:"ElVirtualScrollBar",props:ft,emits:["scroll","start-move","stop-move"],setup(e,{emit:l}){const a=t((()=>e.startGap+e.endGap)),o=u("virtual-scrollbar"),n=u("scrollbar"),s=c(),i=c();let r=null,b=null;const y=d({isDragging:!1,traveled:0}),S=t((()=>p[e.layout])),x=t((()=>e.clientSize-f(a))),w=t((()=>({position:"absolute",width:`${Ge===e.layout?x.value:e.scrollbarSize}px`,height:`${Ge===e.layout?e.scrollbarSize:x.value}px`,[Ze[e.layout]]:"2px",right:"2px",bottom:"2px",borderRadius:"4px"}))),O=t((()=>{const t=e.ratio,l=e.clientSize;if(t>=100)return Number.POSITIVE_INFINITY;if(t>=50)return t*l/100;const a=l/3;return Math.floor(Math.min(Math.max(t*l,20),a))})),I=t((()=>{if(!Number.isFinite(O.value))return{display:"none"};const t=`${O.value}px`,l=function({move:e,size:t,bar:l},a){const o={},n=`translate${l.axis}(${e}px)`;return o[l.size]=t,o.transform=n,o.msTransform=n,o.webkitTransform=n,"horizontal"===a?o.height="100%":o.width="100%",o}({bar:S.value,size:t,move:y.traveled},e.layout);return l})),V=t((()=>Math.floor(e.clientSize-O.value-f(a)))),T=()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",C),document.onselectstart=b,b=null;const e=f(i);e&&(e.removeEventListener("touchmove",z),e.removeEventListener("touchend",C))},M=e=>{e.stopImmediatePropagation(),e.ctrlKey||[1,2].includes(e.button)||(y.isDragging=!0,y[S.value.axis]=e.currentTarget[S.value.offset]-(e[S.value.client]-e.currentTarget.getBoundingClientRect()[S.value.direction]),l("start-move"),(()=>{window.addEventListener("mousemove",z),window.addEventListener("mouseup",C);const e=f(i);e&&(b=document.onselectstart,document.onselectstart=()=>!1,e.addEventListener("touchmove",z),e.addEventListener("touchend",C))})())},C=()=>{y.isDragging=!1,y[S.value.axis]=0,l("stop-move"),T()},z=t=>{const{isDragging:a}=y;if(!a)return;if(!i.value||!s.value)return;const o=y[S.value.axis];if(!o)return;Ce(r);const n=-1*(s.value.getBoundingClientRect()[S.value.direction]-t[S.value.client])-(i.value[S.value.offset]-o);r=ze((()=>{y.traveled=Math.max(e.startGap,Math.min(n,V.value)),l("scroll",n,V.value)}))},R=e=>{const t=Math.abs(e.target.getBoundingClientRect()[S.value.direction]-e[S.value.client])-i.value[S.value.offset]/2;y.traveled=Math.max(0,Math.min(t,V.value)),l("scroll",t,V.value)};return m((()=>e.scrollFrom),(e=>{y.isDragging||(y.traveled=Math.ceil(e*V.value))})),v((()=>{T()})),()=>h("div",{role:"presentation",ref:s,class:[o.b(),e.class,(e.alwaysOn||y.isDragging)&&"always-on"],style:w.value,onMousedown:g(R,["stop","prevent"]),onTouchstartPrevent:M},h("div",{ref:i,class:n.e("thumb"),style:I.value,onMousedown:M},[]))}}),yt=({name:l,getOffset:o,getItemSize:n,getItemOffset:s,getEstimatedTotalSize:i,getStartIndexForOffset:d,getStopIndexForStartIndex:p,initCache:m,clearCache:v,validateProps:g})=>r({name:null!=l?l:"ElVirtualList",props:ut,emits:[We,Ke],setup(l,{emit:r,expose:h}){g(l);const w=e(),O=u("vl"),T=c(m(l,w)),M=Fe(),C=c(),z=c(),R=c(),E=c({isScrolling:!1,scrollDir:"forward",scrollOffset:b(l.initScrollOffset)?l.initScrollOffset:0,updateRequested:!1,isScrollbarDragging:!1,scrollbarAlwaysOn:l.scrollbarAlwaysOn}),k=t((()=>{const{total:e,cache:t}=l,{isScrolling:a,scrollDir:o,scrollOffset:n}=f(E);if(0===e)return[0,0,0,0];const s=d(l,n,f(T)),i=p(l,s,n,f(T)),r=a&&o!==Ae?1:Math.max(1,t),u=a&&o!==He?1:Math.max(1,t);return[Math.max(0,s-r),Math.max(0,Math.min(e-1,i+u)),s,i]})),B=t((()=>i(l,f(T)))),N=t((()=>vt(l.layout))),L=t((()=>[{position:"relative",["overflow-"+(N.value?"x":"y")]:"scroll",WebkitOverflowScrolling:"touch",willChange:"transform"},{direction:l.direction,height:b(l.height)?`${l.height}px`:l.height,width:b(l.width)?`${l.width}px`:l.width},l.style])),D=t((()=>{const e=f(B),t=f(N);return{height:t?"100%":`${e}px`,pointerEvents:f(E).isScrolling?"none":void 0,width:t?`${e}px`:"100%"}})),$=t((()=>N.value?l.width:l.height)),{onWheel:F}=(({atEndEdge:e,atStartEdge:t,layout:l},o)=>{let n,s=0;const i=l=>l<0&&t.value||l>0&&e.value;return{hasReachedEdge:i,onWheel:e=>{Ce(n);const t=e[et[l.value]];i(s)&&i(s+t)||(s+=t,a()||e.preventDefault(),n=ze((()=>{o(s),s=0})))}}})({atStartEdge:t((()=>E.value.scrollOffset<=0)),atEndEdge:t((()=>E.value.scrollOffset>=B.value)),layout:t((()=>l.layout))},(e=>{var t,l;null==(l=(t=R.value).onMouseUp)||l.call(t),K(Math.min(E.value.scrollOffset+e,B.value-$.value))})),W=()=>{const{total:e}=l;if(e>0){const[e,t,l,a]=f(k);r(We,e,t,l,a)}const{scrollDir:t,scrollOffset:a,updateRequested:o}=f(E);r(Ke,t,a,o)},K=e=>{(e=Math.max(e,0))!==f(E).scrollOffset&&(E.value={...f(E),scrollOffset:e,scrollDir:mt(f(E).scrollOffset,e),updateRequested:!0},I(A))},H=(e,t=Pe)=>{const{scrollOffset:a}=f(E);e=Math.max(0,Math.min(e,l.total-1)),K(o(l,e,t,a,f(T)))},A=()=>{E.value.isScrolling=!1,I((()=>{M.value(-1,null,null)}))},P=()=>{const e=C.value;e&&(e.scrollTop=0)};y((()=>{if(!S)return;const{initScrollOffset:e}=l,t=f(C);b(e)&&t&&(f(N)?t.scrollLeft=e:t.scrollTop=e),W()})),x((()=>{const{direction:e,layout:t}=l,{scrollOffset:a,updateRequested:o}=f(E),n=f(C);if(o&&n)if(t===Ge)if(e===Qe)switch(gt()){case Ye:n.scrollLeft=-a;break;case Xe:n.scrollLeft=a;break;default:{const{clientWidth:e,scrollWidth:t}=n;n.scrollLeft=t-e-a;break}}else n.scrollLeft=a;else n.scrollTop=a}));const j={ns:O,clientSize:$,estimatedTotalSize:B,windowStyle:L,windowRef:C,innerRef:z,innerStyle:D,itemsToRender:k,scrollbarRef:R,states:E,getItemStyle:e=>{const{direction:t,itemSize:a,layout:o}=l,i=M.value(v&&a,v&&o,v&&t);let r;if(V(i,String(e)))r=i[e];else{const a=s(l,e,f(T)),o=n(l,e,f(T)),u=f(N),c=t===Qe,d=u?a:0;i[e]=r={position:"absolute",left:c?void 0:`${d}px`,right:c?`${d}px`:void 0,top:u?0:`${a}px`,height:u?"100%":`${o}px`,width:u?`${o}px`:"100%"}}return r},onScroll:e=>{f(N)?(e=>{const{clientWidth:t,scrollLeft:a,scrollWidth:o}=e.currentTarget,n=f(E);if(n.scrollOffset===a)return;const{direction:s}=l;let i=a;if(s===Qe)switch(gt()){case Ye:i=-a;break;case Je:i=o-t-a}i=Math.max(0,Math.min(i,o-t)),E.value={...n,isScrolling:!0,scrollDir:mt(n.scrollOffset,i),scrollOffset:i,updateRequested:!1},I(A)})(e):(e=>{const{clientHeight:t,scrollHeight:l,scrollTop:a}=e.currentTarget,o=f(E);if(o.scrollOffset===a)return;const n=Math.max(0,Math.min(a,l-t));E.value={...o,isScrolling:!0,scrollDir:mt(o.scrollOffset,n),scrollOffset:n,updateRequested:!1},I(A)})(e),W()},onScrollbarScroll:(e,t)=>{const l=(B.value-$.value)/t*e;K(Math.min(B.value-$.value,l))},onWheel:F,scrollTo:K,scrollToItem:H,resetScrollTop:P};return h({windowRef:C,innerRef:z,getItemStyleCache:M,scrollTo:K,scrollToItem:H,resetScrollTop:P,states:E}),j},render(e){var t;const{$slots:l,className:a,clientSize:o,containerElement:n,data:s,getItemStyle:i,innerElement:r,itemsToRender:u,innerStyle:c,layout:d,total:p,onScroll:f,onScrollbarScroll:m,onWheel:v,states:g,useIsScrolling:b,windowStyle:y,ns:S}=e,[x,I]=u,V=w(n),T=w(r),M=[];if(p>0)for(let h=x;h<=I;h++)M.push(null==(t=l.default)?void 0:t.call(l,{data:s,key:h,index:h,isScrolling:b?g.isScrolling:void 0,style:i(h)}));const C=[h(T,{style:c,ref:"innerRef"},O(T)?M:{default:()=>M})],z=h(bt,{ref:"scrollbarRef",clientSize:o,layout:d,onScroll:m,ratio:100*o/this.estimatedTotalSize,scrollFrom:g.scrollOffset/(this.estimatedTotalSize-o),total:p}),R=h(V,{class:[S.e("window"),a],style:y,onScroll:f,onWheel:v,ref:"windowRef",key:0},O(V)?[C]:{default:()=>[C]});return h("div",{key:0,class:[S.e("wrapper"),g.scrollbarAlwaysOn?"always-on":""]},[R,z])}}),St=yt({name:"ElFixedSizeList",getItemOffset:({itemSize:e},t)=>t*e,getItemSize:({itemSize:e})=>e,getEstimatedTotalSize:({total:e,itemSize:t})=>t*e,getOffset:({height:e,total:t,itemSize:l,layout:a,width:o},n,s,i)=>{const r=vt(a)?o:e,u=Math.max(0,t*l-r),c=Math.min(u,n*l),d=Math.max(0,(n+1)*l-r);switch(s===je&&(s=i>=d-r&&i<=c+r?Pe:_e),s){case qe:return c;case"end":return d;case _e:{const e=Math.round(d+(c-d)/2);return e<Math.ceil(r/2)?0:e>u+Math.floor(r/2)?u:e}default:return i>=d&&i<=c?i:i<d?d:c}},getStartIndexForOffset:({total:e,itemSize:t},l)=>Math.max(0,Math.min(e-1,Math.floor(l/t))),getStopIndexForStartIndex:({height:e,total:t,itemSize:l,layout:a,width:o},n,s)=>{const i=n*l,r=vt(a)?o:e,u=Math.ceil((r+s-i)/l);return Math.max(0,Math.min(t-1,n+u-1))},initCache(){},clearCache:!0,validateProps(){}}),xt=(e,t,l)=>{const{itemSize:a}=e,{items:o,lastVisitedIndex:n}=l;if(t>n){let e=0;if(n>=0){const t=o[n];e=t.offset+t.size}for(let l=n+1;l<=t;l++){const t=a(l);o[l]={offset:e,size:t},e+=t}l.lastVisitedIndex=t}return o[t]},wt=(e,t,l,a,o)=>{for(;l<=a;){const n=l+Math.floor((a-l)/2),s=xt(e,n,t).offset;if(s===o)return n;s<o?l=n+1:s>o&&(a=n-1)}return Math.max(0,l-1)},Ot=(e,t,l,a)=>{const{total:o}=e;let n=1;for(;l<o&&xt(e,l,t).offset<a;)l+=n,n*=2;return wt(e,t,Math.floor(l/2),Math.min(l,o-1),a)},It=({total:e},{items:t,estimatedItemSize:l,lastVisitedIndex:a})=>{let o=0;if(a>=e&&(a=e-1),a>=0){const e=t[a];o=e.offset+e.size}return o+(e-a-1)*l},Vt=yt({name:"ElDynamicSizeList",getItemOffset:(e,t,l)=>xt(e,t,l).offset,getItemSize:(e,t,{items:l})=>l[t].size,getEstimatedTotalSize:It,getOffset:(e,t,l,a,o)=>{const{height:n,layout:s,width:i}=e,r=vt(s)?i:n,u=xt(e,t,o),c=It(e,o),d=Math.max(0,Math.min(c-r,u.offset)),p=Math.max(0,u.offset-r+u.size);switch(l===je&&(l=a>=p-r&&a<=d+r?Pe:_e),l){case qe:return d;case"end":return p;case _e:return Math.round(p+(d-p)/2);default:return a>=p&&a<=d?a:a<p?p:d}},getStartIndexForOffset:(e,t,l)=>((e,t,l)=>{const{items:a,lastVisitedIndex:o}=t;return(o>0?a[o].offset:0)>=l?wt(e,t,0,o,l):Ot(e,t,Math.max(0,o),l)})(e,l,t),getStopIndexForStartIndex:(e,t,l,a)=>{const{height:o,total:n,layout:s,width:i}=e,r=vt(s)?i:o,u=xt(e,t,a),c=l+r;let d=u.offset+u.size,p=t;for(;p<n-1&&d<c;)p++,d+=xt(e,p,a).size;return p},initCache({estimatedItemSize:e=50},t){const l={items:{},estimatedItemSize:e,lastVisitedIndex:-1,clearCacheAfterIndex:(e,a=!0)=>{var o,n;l.lastVisitedIndex=Math.min(l.lastVisitedIndex,e-1),null==(o=t.exposed)||o.getItemStyleCache(-1),a&&(null==(n=t.proxy)||n.$forceUpdate())}};return l},clearCache:!1,validateProps:({itemSize:e})=>{}});var Tt=T(r({props:{item:{type:Object,required:!0},style:Object,height:Number},setup:()=>({ns:u("select")})}),[["render",function(e,t,l,a,o,n){return e.item.isTitle?(M(),C("div",{key:0,class:R(e.ns.be("group","title")),style:E([e.style,{lineHeight:`${e.height}px`}])},z(e.item.label),7)):(M(),C("div",{key:1,class:R(e.ns.be("group","split")),style:E(e.style)},[k("span",{class:R(e.ns.be("group","split-dash")),style:E({top:e.height/2+"px"})},null,6)],6))}],["__file","group-item.vue"]]);const Mt={label:"label",value:"value",disabled:"disabled",options:"options"};function Ct(e){const l=t((()=>({...Mt,...e.props})));return{aliasProps:l,getLabel:e=>B(e,l.value.label),getValue:e=>B(e,l.value.value),getDisabled:e=>B(e,l.value.disabled),getOptions:e=>B(e,l.value.options)}}const zt=s({allowCreate:Boolean,autocomplete:{type:n(String),default:"none"},automaticDropdown:Boolean,clearable:Boolean,clearIcon:{type:N,default:L},effect:{type:n(String),default:"light"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},defaultFirstOption:Boolean,disabled:Boolean,estimatedOptionHeight:{type:Number,default:void 0},filterable:Boolean,filterMethod:Function,height:{type:Number,default:274},itemHeight:{type:Number,default:34},id:String,loading:Boolean,loadingText:String,modelValue:{type:n([Array,String,Number,Boolean,Object])},multiple:Boolean,multipleLimit:{type:Number,default:0},name:String,noDataText:String,noMatchText:String,remoteMethod:Function,reserveKeyword:{type:Boolean,default:!0},options:{type:n(Array),required:!0},placeholder:{type:String},teleported:Oe.teleported,persistent:{type:Boolean,default:!0},popperClass:{type:String,default:""},popperOptions:{type:n(Object),default:()=>({})},remote:Boolean,size:D,props:{type:n(Object),default:()=>Mt},valueKey:{type:String,default:"value"},scrollbarAlwaysOn:Boolean,validateEvent:{type:Boolean,default:!0},placement:{type:n(String),values:Ie,default:"bottom-start"},fallbackPlacements:{type:n(Array),default:["bottom-start","top-start","right","left"]},tagType:{...Te.type,default:"info"},ariaLabel:{type:String,default:void 0}}),Rt=s({data:Array,disabled:Boolean,hovering:Boolean,item:{type:n(Object),required:!0},index:Number,style:Object,selected:Boolean,created:Boolean}),Et=Symbol("ElSelectV2Injection"),kt=r({props:Rt,emits:["select","hover"],setup(e,{emit:t}){const l=$(Et),a=u("select"),{hoverItem:o,selectOptionClick:n}=function(e,{emit:t}){return{hoverItem:()=>{e.disabled||t("hover",e.index)},selectOptionClick:()=>{e.disabled||t("select",e.item,e.index)}}}(e,{emit:t}),{getLabel:s}=Ct(l.props);return{ns:a,hoverItem:o,selectOptionClick:n,getLabel:s}}}),Bt=["aria-selected"];var Nt=T(kt,[["render",function(e,t,l,a,o,n){return M(),C("li",{"aria-selected":e.selected,style:E(e.style),class:R([e.ns.be("dropdown","item"),e.ns.is("selected",e.selected),e.ns.is("disabled",e.disabled),e.ns.is("created",e.created),e.ns.is("hovering",e.hovering)]),onMouseenter:t[0]||(t[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:t[1]||(t[1]=g(((...t)=>e.selectOptionClick&&e.selectOptionClick(...t)),["stop"]))},[F(e.$slots,"default",{item:e.item,index:e.index,disabled:e.disabled},(()=>[k("span",null,z(e.getLabel(e.item)),1)]))],46,Bt)}],["__file","option-item.vue"]]),Lt=r({name:"ElSelectDropdown",props:{loading:Boolean,data:{type:Array,required:!0},hoveringIndex:Number,width:Number},setup(e,{slots:l,expose:a}){const o=$(Et),n=u("select"),{getLabel:s,getValue:i,getDisabled:r}=Ct(o.props),d=c([]),p=c(),v=t((()=>e.data.length));m((()=>v.value),(()=>{var e,t;null==(t=(e=o.tooltipRef.value).updatePopper)||t.call(e)}));const h=t((()=>W(o.props.estimatedOptionHeight))),g=t((()=>h.value?{itemSize:o.props.itemHeight}:{estimatedSize:o.props.estimatedOptionHeight,itemSize:e=>d.value[e]})),b=(e,t)=>o.props.multiple?((e=[],t)=>{const{props:{valueKey:l}}=o;return A(t)?e&&e.some((e=>P(B(e,l))===B(t,l))):e.includes(t)})(e,i(t)):((e,t)=>{if(A(t)){const{valueKey:l}=o.props;return B(e,l)===B(t,l)}return e===t})(e,i(t)),y=(e,t)=>{const{disabled:l,multiple:a,multipleLimit:n}=o.props;return l||!t&&!!a&&n>0&&e.length>=n},S=t=>e.hoveringIndex===t;a({listRef:p,isSized:h,isItemDisabled:y,isItemHovering:S,isItemSelected:b,scrollToItem:e=>{const t=p.value;t&&t.scrollToItem(e)},resetScrollTop:()=>{const e=p.value;e&&e.resetScrollTop()}});const x=e=>{const{index:t,data:a,style:n}=e,i=f(h),{itemSize:u,estimatedSize:c}=f(g),{modelValue:d}=o.props,{onSelect:p,onHover:m}=o,v=a[t];if("Group"===v.type)return K(Tt,{item:v,style:n,height:i?u:c},null);const x=b(d,v),w=y(d,x),O=S(t);return K(Nt,H(e,{selected:x,disabled:r(v)||w,created:!!v.created,hovering:O,item:v,onSelect:p,onHover:m}),{default:e=>{var t;return(null==(t=l.default)?void 0:t.call(l,e))||K("span",null,[s(v)])}})},{onKeyboardNavigate:w,onKeyboardSelect:O}=o,I=e=>{const{code:t}=e,{tab:l,esc:a,down:n,up:s,enter:i}=j;switch(t!==l&&(e.preventDefault(),e.stopPropagation()),t){case l:case a:o.expanded=!1;break;case n:w("forward");break;case s:w("backward");break;case i:O()}};return()=>{var t,a,s,i;const{data:r,width:u}=e,{height:c,multiple:d,scrollbarAlwaysOn:m}=o.props,v=f(h)?St:Vt;return K("div",{class:[n.b("dropdown"),n.is("multiple",d)],style:{width:`${u}px`}},[null==(t=l.header)?void 0:t.call(l),(null==(a=l.loading)?void 0:a.call(l))||(null==(s=l.empty)?void 0:s.call(l))||K(v,H({ref:p},f(g),{className:n.be("dropdown","list"),scrollbarAlwaysOn:m,data:r,height:c,width:u,total:r.length,onKeydown:I}),{default:e=>K(x,e,null)}),null==(i=l.footer)?void 0:i.call(l)])}}});function Dt(e,l){const{aliasProps:a,getLabel:o,getValue:n}=Ct(e),s=c(0),i=c(null),r=t((()=>e.allowCreate&&e.filterable));return{createNewOption:function(t){if(r.value)if(t&&t.length>0){if(function(t){const a=e=>n(e)===t;return e.options&&e.options.some(a)||l.createdOptions.some(a)}(t))return;const o={[a.value.value]:t,[a.value.label]:t,created:!0,[a.value.disabled]:!1};l.createdOptions.length>=s.value?l.createdOptions[s.value]=o:l.createdOptions.push(o)}else if(e.multiple)l.createdOptions.length=s.value;else{const e=i.value;l.createdOptions.length=0,e&&e.created&&l.createdOptions.push(e)}},removeNewOption:function(t){if(!r.value||!t||!t.created||t.created&&e.reserveKeyword&&l.inputValue===o(t))return;const a=l.createdOptions.findIndex((e=>n(e)===n(t)));~a&&(l.createdOptions.splice(a,1),s.value--)},selectNewOption:function(t){r.value&&(e.multiple&&t.created?s.value++:i.value=t)},clearAllNewOption:function(){r.value&&(l.createdOptions.length=0,s.value=0)}}}const $t=(e,l)=>{const{t:a}=q(),o=u("select"),n=u("input"),{form:s,formItem:i}=_(),{inputId:r}=G(e,{formItemContext:i}),{getLabel:p,getValue:f,getDisabled:v,getOptions:h}=Ct(e),g=d({inputValue:"",cachedOptions:[],createdOptions:[],hoveringIndex:-1,inputHovering:!1,selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,previousQuery:null,previousValue:void 0,selectedLabel:"",menuVisibleOnFocus:!1,isBeforeHide:!1}),b=c(-1),S=c(-1),x=c(null),w=c(null),O=c(null),V=c(null),T=c(null),M=c(null),C=c(null),z=c(null),R=c(null),E=c(null),k=c(null),{wrapperRef:N,isFocused:L,handleFocus:D,handleBlur:$}=U(T,{afterFocus(){e.automaticDropdown&&!K.value&&(K.value=!0,g.menuVisibleOnFocus=!0)},beforeBlur(e){var t,l;return(null==(t=O.value)?void 0:t.isFocusInsideContent(e))||(null==(l=V.value)?void 0:l.isFocusInsideContent(e))},afterBlur(){K.value=!1,g.menuVisibleOnFocus=!1}}),F=c([]),W=c([]),K=c(!1),H=t((()=>e.disabled||(null==s?void 0:s.disabled))),P=t((()=>{const t=W.value.length*e.itemHeight;return t>e.height?e.height:t})),se=t((()=>F.value.some((e=>""===f(e))))),ie=t((()=>e.multiple?Q(e.modelValue)&&e.modelValue.length>0:!Y(e.modelValue)&&(""!==e.modelValue||se.value))),re=t((()=>e.clearable&&!H.value&&g.inputHovering&&ie.value)),ue=t((()=>e.remote&&e.filterable?"":X)),ce=t((()=>ue.value&&o.is("reverse",K.value))),de=t((()=>(null==i?void 0:i.validateState)||"")),pe=t((()=>J[de.value])),fe=t((()=>e.remote?300:0)),me=t((()=>e.loading?e.loadingText||a("el.select.loading"):!(e.remote&&!g.inputValue&&0===F.value.length)&&(e.filterable&&g.inputValue&&F.value.length>0&&0===W.value.length?e.noMatchText||a("el.select.noMatch"):0===F.value.length?e.noDataText||a("el.select.noData"):null))),ve=t=>{const l=l=>{if(e.filterable&&ae(e.filterMethod))return!0;if(e.filterable&&e.remote&&ae(e.remoteMethod))return!0;const a=new RegExp(Be(t),"i");return!t||a.test(p(l)||"")};return e.loading?[]:[...g.createdOptions,...e.options].reduce(((t,a)=>{const o=h(a);if(Q(o)){const e=o.filter(l);e.length>0&&t.push({label:p(a),isTitle:!0,type:"Group"},...e,{type:"Group"})}else(e.remote||l(a))&&t.push(a);return t}),[])},he=()=>{F.value=ve(""),W.value=ve(g.inputValue)},ge=t((()=>{const e=new Map;return F.value.forEach(((t,l)=>{e.set(Je(f(t)),{option:t,index:l})})),e})),be=t((()=>{const e=new Map;return W.value.forEach(((t,l)=>{e.set(Je(f(t)),{option:t,index:l})})),e})),ye=t((()=>W.value.every((e=>v(e))))),Se=Z(),xe=t((()=>"small"===Se.value?"small":"default")),we=()=>{var e;S.value=(null==(e=x.value)?void 0:e.offsetWidth)||200},Oe=t((()=>{const t=(()=>{if(!w.value)return 0;const e=window.getComputedStyle(w.value);return Number.parseFloat(e.gap||"6px")})();return{maxWidth:`${k.value&&1===e.maxCollapseTags?g.selectionWidth-g.collapseItemWidth-t:g.selectionWidth}px`}})),Ie=t((()=>({maxWidth:`${g.selectionWidth}px`}))),Ve=t((()=>({width:`${Math.max(g.calculatorWidth,11)}px`}))),Te=t((()=>Q(e.modelValue)?0===e.modelValue.length&&!g.inputValue:!e.filterable||!g.inputValue)),Me=t((()=>{var t;const l=null!=(t=e.placeholder)?t:a("el.select.placeholder");return e.multiple||!ie.value?l:g.selectedLabel})),Ce=t((()=>{var e,t;return null==(t=null==(e=O.value)?void 0:e.popperRef)?void 0:t.contentRef})),ze=t((()=>{if(e.multiple){const t=e.modelValue.length;if(e.modelValue.length>0&&be.value.has(e.modelValue[t-1])){const{index:l}=be.value.get(e.modelValue[t-1]);return l}}else if(e.modelValue&&be.value.has(e.modelValue)){const{index:t}=be.value.get(e.modelValue);return t}return-1})),Ne=t({get:()=>K.value&&!1!==me.value,set(e){K.value=e}}),De=t((()=>e.multiple?e.collapseTags?g.cachedOptions.slice(0,e.maxCollapseTags):g.cachedOptions:[])),$e=t((()=>e.multiple&&e.collapseTags?g.cachedOptions.slice(e.maxCollapseTags):[])),{createNewOption:Fe,removeNewOption:We,selectNewOption:Ke,clearAllNewOption:He}=Dt(e,g),{handleCompositionStart:Ae,handleCompositionUpdate:Pe,handleCompositionEnd:je}=Re((e=>rt(e))),qe=()=>{H.value||(g.menuVisibleOnFocus?g.menuVisibleOnFocus=!1:K.value=!K.value)},_e=()=>{g.inputValue.length>0&&!K.value&&(K.value=!0),Fe(g.inputValue),Ue(g.inputValue)},Ge=Le(_e,fe.value),Ue=t=>{g.previousQuery!==t&&(g.previousQuery=t,e.filterable&&ae(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&ae(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&W.value.length?I(Qe):I(it))},Qe=()=>{const e=W.value.filter((e=>!e.disabled&&"Group"!==e.type)),t=e.find((e=>e.created)),l=e[0];g.hoveringIndex=Xe(W.value,t||l)},Ye=t=>{l(oe,t),(t=>{Ee(e.modelValue,t)||l(ne,t)})(t),g.previousValue=String(t)},Xe=(t=[],l)=>{if(!A(l))return t.indexOf(l);const a=e.valueKey;let o=-1;return t.some(((e,t)=>B(e,a)===B(l,a)&&(o=t,!0))),o},Je=t=>A(t)?B(t,e.valueKey):t,Ze=()=>{we()},et=()=>{g.selectionWidth=w.value.getBoundingClientRect().width},tt=()=>{g.calculatorWidth=M.value.getBoundingClientRect().width},lt=()=>{var e,t;null==(t=null==(e=O.value)?void 0:e.updatePopper)||t.call(e)},at=()=>{var e,t;null==(t=null==(e=V.value)?void 0:e.updatePopper)||t.call(e)},ot=(t,l)=>{if(e.multiple){let l=e.modelValue.slice();const a=Xe(l,f(t));a>-1?(l=[...l.slice(0,a),...l.slice(a+1)],g.cachedOptions.splice(a,1),We(t)):(e.multipleLimit<=0||l.length<e.multipleLimit)&&(l=[...l,f(t)],g.cachedOptions.push(t),Ke(t)),Ye(l),t.created&&Ue(""),e.filterable&&!e.reserveKeyword&&(g.inputValue="")}else b.value=l,g.selectedLabel=p(t),Ye(f(t)),K.value=!1,Ke(t),t.created||He();nt()},nt=()=>{var e;null==(e=T.value)||e.focus()},st=(e,t=void 0)=>{const l=W.value;if(!["forward","backward"].includes(e)||H.value||l.length<=0||ye.value)return;if(!K.value)return qe();void 0===t&&(t=g.hoveringIndex);let a=-1;"forward"===e?(a=t+1,a>=l.length&&(a=0)):"backward"===e&&(a=t-1,(a<0||a>=l.length)&&(a=l.length-1));const o=l[a];if(v(o)||"Group"===o.type)return st(e,a);g.hoveringIndex=a,ut(a)},it=()=>{e.multiple?g.hoveringIndex=W.value.findIndex((t=>e.modelValue.some((e=>Je(e)===Je(t))))):g.hoveringIndex=W.value.findIndex((t=>Je(t)===Je(e.modelValue)))},rt=t=>{if(g.inputValue=t.target.value,!e.remote)return _e();Ge()},ut=e=>{R.value.scrollToItem(e)},ct=e=>{const t=Je(e);if(ge.value.has(t)){const{option:e}=ge.value.get(t);return e}return{value:e,label:e}},dt=()=>{if(e.multiple)if(e.modelValue.length>0){g.cachedOptions.length=0,g.previousValue=e.modelValue.toString();for(const t of e.modelValue){const e=ct(t);g.cachedOptions.push(e)}}else g.cachedOptions=[],g.previousValue=void 0;else if(ie.value){g.previousValue=e.modelValue;const t=W.value,l=t.findIndex((t=>Je(f(t))===Je(e.modelValue)));g.selectedLabel=~l?p(t[l]):Je(e.modelValue)}else g.selectedLabel="",g.previousValue=void 0;He(),we()};return m(K,(e=>{e?Ue(""):(g.inputValue="",g.previousQuery=null,g.isBeforeHide=!0,Fe("")),l("visible-change",e)})),m((()=>e.modelValue),((t,l)=>{var a;t&&t.toString()===g.previousValue||dt(),!Ee(t,l)&&e.validateEvent&&(null==(a=null==i?void 0:i.validate)||a.call(i,"change").catch((e=>ee())))}),{deep:!0}),m((()=>e.options),(()=>{const e=T.value;(!e||e&&document.activeElement!==e)&&dt()}),{deep:!0,flush:"post"}),m((()=>W.value),(()=>R.value&&I(R.value.resetScrollTop))),te((()=>{g.isBeforeHide||he()})),te((()=>{const{valueKey:t,options:l}=e,a=new Map;for(const e of l){const l=f(e);let o=l;if(A(o)&&(o=B(l,t)),a.get(o))break;a.set(o,!0)}})),y((()=>{dt()})),le(x,Ze),le(w,et),le(M,tt),le(R,lt),le(N,lt),le(E,at),le(k,(()=>{g.collapseItemWidth=k.value.getBoundingClientRect().width})),{inputId:r,collapseTagSize:xe,currentPlaceholder:Me,expanded:K,emptyText:me,popupHeight:P,debounce:fe,allOptions:F,filteredOptions:W,iconComponent:ue,iconReverse:ce,tagStyle:Oe,collapseTagStyle:Ie,inputStyle:Ve,popperSize:S,dropdownMenuVisible:Ne,hasModelValue:ie,shouldShowPlaceholder:Te,selectDisabled:H,selectSize:Se,showClearBtn:re,states:g,isFocused:L,nsSelect:o,nsInput:n,calculatorRef:M,inputRef:T,menuRef:R,tagMenuRef:E,tooltipRef:O,tagTooltipRef:V,selectRef:x,wrapperRef:N,selectionRef:w,prefixRef:C,suffixRef:z,collapseItemRef:k,popperRef:Ce,validateState:de,validateIcon:pe,showTagList:De,collapseTagList:$e,debouncedOnInputChange:Ge,deleteTag:(t,a)=>{let o=e.modelValue.slice();const n=Xe(o,f(a));n>-1&&!H.value&&(o=[...e.modelValue.slice(0,n),...e.modelValue.slice(n+1)],g.cachedOptions.splice(n,1),Ye(o),l("remove-tag",f(a)),We(a)),t.stopPropagation(),nt()},getLabel:p,getValue:f,getDisabled:v,getValueKey:Je,handleBlur:$,handleClear:()=>{let t;t=Q(e.modelValue)?[]:void 0,e.multiple?g.cachedOptions=[]:g.selectedLabel="",K.value=!1,Ye(t),l("clear"),He(),nt()},handleClickOutside:e=>{if(K.value=!1,L.value){const t=new FocusEvent("focus",e);$(t)}},handleDel:t=>{if(e.multiple&&(t.code!==j.delete&&0===g.inputValue.length)){t.preventDefault();const l=e.modelValue.slice(),a=ke(l,(e=>!g.cachedOptions.some((t=>f(t)===e&&v(t)))));if(a<0)return;l.splice(a,1);const o=g.cachedOptions[a];g.cachedOptions.splice(a,1),We(o),Ye(l)}},handleEsc:()=>{g.inputValue.length>0?g.inputValue="":K.value=!1},handleFocus:D,focus:nt,blur:()=>{var e;null==(e=T.value)||e.blur()},handleMenuEnter:()=>I((()=>{~ze.value&&ut(g.hoveringIndex)})),handleResize:Ze,resetSelectionWidth:et,resetCalculatorWidth:tt,updateTooltip:lt,updateTagTooltip:at,updateOptions:he,toggleMenu:qe,scrollTo:ut,onInput:rt,onKeyboardNavigate:st,onKeyboardSelect:()=>{if(!K.value)return qe();~g.hoveringIndex&&W.value[g.hoveringIndex]&&ot(W.value[g.hoveringIndex],g.hoveringIndex)},onSelect:ot,onHover:e=>{g.hoveringIndex=e},handleCompositionStart:Ae,handleCompositionEnd:je,handleCompositionUpdate:Pe}},Ft=r({name:"ElSelectV2",components:{ElSelectMenu:Lt,ElTag:Me,ElTooltip:Ve,ElIcon:se},directives:{ClickOutside:Ne},props:zt,emits:[oe,ne,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:l}){const a=t((()=>{const{modelValue:t,multiple:l}=e,a=l?[]:void 0;return Q(t)?l?t:a:l?a:t})),o=$t(d({...ie(e),modelValue:a}),l);return re(Et,{props:d({...ie(e),height:o.popupHeight,modelValue:a}),tooltipRef:o.tooltipRef,onSelect:o.onSelect,onHover:o.onHover,onKeyboardNavigate:o.onKeyboardNavigate,onKeyboardSelect:o.onKeyboardSelect}),{...o,modelValue:a}}}),Wt=["id","autocomplete","aria-expanded","aria-label","disabled","readonly","name"],Kt=["textContent"];var Ht=T(Ft,[["render",function(e,t,l,a,o,n){const s=ue("el-tag"),i=ue("el-tooltip"),r=ue("el-icon"),u=ue("el-select-menu"),c=ce("click-outside");return de((M(),C("div",{ref:"selectRef",class:R([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:t[14]||(t[14]=t=>e.states.inputHovering=!0),onMouseleave:t[15]||(t[15]=t=>e.states.inputHovering=!1),onClick:t[16]||(t[16]=g(((...t)=>e.toggleMenu&&e.toggleMenu(...t)),["prevent","stop"]))},[K(i,{ref:"tooltipRef",visible:e.dropdownMenuVisible,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,placement:e.placement,pure:"",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,trigger:"click",persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:t[13]||(t[13]=t=>e.states.isBeforeHide=!1)},{default:pe((()=>[k("div",{ref:"wrapperRef",class:R([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(M(),C("div",{key:0,ref:"prefixRef",class:R(e.nsSelect.e("prefix"))},[F(e.$slots,"prefix")],2)):fe("v-if",!0),k("div",{ref:"selectionRef",class:R([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.modelValue.length)])},[e.multiple?F(e.$slots,"tag",{key:0},(()=>[(M(!0),C(me,null,ve(e.showTagList,(t=>(M(),C("div",{key:e.getValueKey(e.getValue(t)),class:R(e.nsSelect.e("selected-item"))},[K(s,{closable:!e.selectDisabled&&!e.getDisabled(t),size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:E(e.tagStyle),onClose:l=>e.deleteTag(l,t)},{default:pe((()=>[k("span",{class:R(e.nsSelect.e("tags-text"))},z(e.getLabel(t)),3)])),_:2},1032,["closable","size","type","style","onClose"])],2)))),128)),e.collapseTags&&e.modelValue.length>e.maxCollapseTags?(M(),he(i,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:pe((()=>[k("div",{ref:"collapseItemRef",class:R(e.nsSelect.e("selected-item"))},[K(s,{closable:!1,size:e.collapseTagSize,type:e.tagType,style:E(e.collapseTagStyle),"disable-transitions":""},{default:pe((()=>[k("span",{class:R(e.nsSelect.e("tags-text"))}," + "+z(e.modelValue.length-e.maxCollapseTags),3)])),_:1},8,["size","type","style"])],2)])),content:pe((()=>[k("div",{ref:"tagMenuRef",class:R(e.nsSelect.e("selection"))},[(M(!0),C(me,null,ve(e.collapseTagList,(t=>(M(),C("div",{key:e.getValueKey(e.getValue(t)),class:R(e.nsSelect.e("selected-item"))},[K(s,{class:"in-tooltip",closable:!e.selectDisabled&&!e.getDisabled(t),size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:l=>e.deleteTag(l,t)},{default:pe((()=>[k("span",{class:R(e.nsSelect.e("tags-text"))},z(e.getLabel(t)),3)])),_:2},1032,["closable","size","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):fe("v-if",!0)])):fe("v-if",!0),e.selectDisabled?fe("v-if",!0):(M(),C("div",{key:1,class:R([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[de(k("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":t[0]||(t[0]=t=>e.states.inputValue=t),style:E(e.inputStyle),autocomplete:e.autocomplete,"aria-autocomplete":"list","aria-haspopup":"listbox",autocapitalize:"off","aria-expanded":e.expanded,"aria-label":e.ariaLabel,class:R([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,role:"combobox",readonly:!e.filterable,spellcheck:"false",type:"text",name:e.name,onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onInput:t[3]||(t[3]=(...t)=>e.onInput&&e.onInput(...t)),onCompositionstart:t[4]||(t[4]=(...t)=>e.handleCompositionStart&&e.handleCompositionStart(...t)),onCompositionupdate:t[5]||(t[5]=(...t)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...t)),onCompositionend:t[6]||(t[6]=(...t)=>e.handleCompositionEnd&&e.handleCompositionEnd(...t)),onKeydown:[t[7]||(t[7]=ge(g((t=>e.onKeyboardNavigate("backward")),["stop","prevent"]),["up"])),t[8]||(t[8]=ge(g((t=>e.onKeyboardNavigate("forward")),["stop","prevent"]),["down"])),t[9]||(t[9]=ge(g(((...t)=>e.onKeyboardSelect&&e.onKeyboardSelect(...t)),["stop","prevent"]),["enter"])),t[10]||(t[10]=ge(g(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop","prevent"]),["esc"])),t[11]||(t[11]=ge(g(((...t)=>e.handleDel&&e.handleDel(...t)),["stop"]),["delete"]))],onClick:t[12]||(t[12]=g(((...t)=>e.toggleMenu&&e.toggleMenu(...t)),["stop"]))},null,46,Wt),[[be,e.states.inputValue]]),e.filterable?(M(),C("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:R(e.nsSelect.e("input-calculator")),textContent:z(e.states.inputValue)},null,10,Kt)):fe("v-if",!0)],2)),e.shouldShowPlaceholder?(M(),C("div",{key:2,class:R([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[k("span",null,z(e.currentPlaceholder),1)],2)):fe("v-if",!0)],2),k("div",{ref:"suffixRef",class:R(e.nsSelect.e("suffix"))},[e.iconComponent?de((M(),he(r,{key:0,class:R([e.nsSelect.e("caret"),e.nsInput.e("icon"),e.iconReverse])},{default:pe((()=>[(M(),he(w(e.iconComponent)))])),_:1},8,["class"])),[[ye,!e.showClearBtn]]):fe("v-if",!0),e.showClearBtn&&e.clearIcon?(M(),he(r,{key:1,class:R([e.nsSelect.e("caret"),e.nsInput.e("icon")]),onClick:g(e.handleClear,["prevent","stop"])},{default:pe((()=>[(M(),he(w(e.clearIcon)))])),_:1},8,["class","onClick"])):fe("v-if",!0),e.validateState&&e.validateIcon?(M(),he(r,{key:2,class:R([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:pe((()=>[(M(),he(w(e.validateIcon)))])),_:1},8,["class"])):fe("v-if",!0)],2)],2)])),content:pe((()=>[K(u,{ref:"menuRef",data:e.filteredOptions,width:e.popperSize,"hovering-index":e.states.hoveringIndex,"scrollbar-always-on":e.scrollbarAlwaysOn},Se({default:pe((t=>[F(e.$slots,"default",xe(we(t)))])),_:2},[e.$slots.header?{name:"header",fn:pe((()=>[k("div",{class:R(e.nsSelect.be("dropdown","header"))},[F(e.$slots,"header")],2)]))}:void 0,e.$slots.loading&&e.loading?{name:"loading",fn:pe((()=>[k("div",{class:R(e.nsSelect.be("dropdown","loading"))},[F(e.$slots,"loading")],2)]))}:e.loading||0===e.filteredOptions.length?{name:"empty",fn:pe((()=>[k("div",{class:R(e.nsSelect.be("dropdown","empty"))},[F(e.$slots,"empty",{},(()=>[k("span",null,z(e.emptyText),1)]))],2)]))}:void 0,e.$slots.footer?{name:"footer",fn:pe((()=>[k("div",{class:R(e.nsSelect.be("dropdown","footer"))},[F(e.$slots,"footer")],2)]))}:void 0]),1032,["data","width","hovering-index","scrollbar-always-on"])])),_:3},8,["visible","teleported","popper-class","popper-options","fallback-placements","effect","placement","transition","persistent","onBeforeShow"])],34)),[[c,e.handleClickOutside,e.popperRef]])}],["__file","select.vue"]]);Ht.install=e=>{e.component(Ht.name,Ht)};const At=Ht;export{At as E};
