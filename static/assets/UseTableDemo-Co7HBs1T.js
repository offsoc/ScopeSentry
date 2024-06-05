import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-Ch3g--7k.js";import{d as t,a,l,N as o,e as i,H as n,X as s,r as d,o as r,c as m,w as p,t as u,$ as c,Q as b,a0 as f,_ as g}from"./index-Dk21xwtr.js";import{_ as D}from"./Table.vue_vue_type_script_lang-2z1tSha4.js";import{a as _}from"./index-BCh_iTA6.js";import{E as h}from"./el-tag-CX3pn8fR.js";import{u as v}from"./useTable-jXLU4IOU.js";import"./el-card-SL_UCAqP.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-F_A9qiIe.js";import"./el-checkbox-D_kjMNFE.js";import"./useInput-CkicsvFD.js";import"./debounce-6Yuy_eHi.js";import"./el-pagination-CM2qyTG0.js";import"./el-image-viewer-CzRXxFju.js";import"./tsxHelper-DvdsRWdD.js";import"./el-dropdown-item-Bb1uXTT0.js";import"./castArray-iLnkynXB.js";import"./refs-aSJcFwVo.js";import"./index-DtT2P8Cm.js";import"./raf-p14jZNMx.js";import"./index-CtI1U4Dj.js";function j(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const x=g(t({__name:"UseTableDemo",setup(t){const{tableRegister:f,tableMethods:g,tableState:x}=v({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=x,l=await _({pageIndex:a(e),pageSize:a(t)});return{list:l.data.list,total:l.data.total}}}),{loading:y,dataList:C,total:k,currentPage:w,pageSize:S}=x,{setProps:R,setColumn:T,getElTableExpose:A,addColumn:I,delColumn:z,refresh:E}=g,{t:P}=l(),H=o([{field:"expand",type:"expand",slots:{default:e=>{const{row:t}=e;return i("div",{class:"ml-30px"},[i("div",null,[P("tableDemo.title"),n("："),t.title]),i("div",null,[P("tableDemo.author"),n("："),t.author]),i("div",null,[P("tableDemo.displayTime"),n("："),t.display_time])])}}},{field:"selection",type:"selection"},{field:"index",label:P("tableDemo.index"),type:"index"},{field:"content",label:P("tableDemo.header"),children:[{field:"title",label:P("tableDemo.title")},{field:"author",label:P("tableDemo.author")},{field:"display_time",label:P("tableDemo.displayTime")},{field:"importance",label:P("tableDemo.importance"),formatter:(e,t,a)=>i(h,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[P(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:P("tableDemo.pageviews")}]},{field:"action",label:P("tableDemo.action"),slots:{default:e=>{let t;return i(s,{type:"primary",onClick:()=>O(e)},j(t=P("tableDemo.action"))?t:{default:()=>[t]})}}}]),O=e=>{},U=d(!0),$=e=>{U.value=e},M=e=>{R({reserveIndex:e})},N=e=>{T([{field:"selection",path:"hidden",value:!e}])},Q=d(1),q=()=>{T([{field:"title",path:"label",value:`${P("tableDemo.title")}${a(Q)}`}]),Q.value++},B=e=>{T([{field:"expand",path:"hidden",value:!e}])},K=async()=>{const e=await A();null==e||e.toggleAllSelection()},L=d(!0),V=()=>{a(L)?(z("action"),L.value=!1):(I({field:"action",label:P("tableDemo.action"),slots:{default:e=>{let t;return i(s,{type:"primary",onClick:()=>O(e)},j(t=P("tableDemo.action"))?t:{default:()=>[t]})}}}),L.value=!0)},W=d(!1),X=()=>{R({stripe:!a(W)}),W.value=!a(W)},F=d("auto"),G=()=>{"auto"===a(F)?(R({height:300}),F.value=300):(R({height:"auto"}),F.value="auto")},J=async()=>{const e=await A();null==e||e.getSelectionRows()};return(t,l)=>(r(),m(b,null,[i(a(e),{title:`UseTable ${a(P)("tableDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:p((()=>[i(a(s),{onClick:l[0]||(l[0]=e=>$(!0))},{default:p((()=>[n(u(a(P)("tableDemo.show"))+" "+u(a(P)("tableDemo.pagination")),1)])),_:1}),i(a(s),{onClick:l[1]||(l[1]=e=>$(!1))},{default:p((()=>[n(u(a(P)("tableDemo.hidden"))+" "+u(a(P)("tableDemo.pagination")),1)])),_:1}),i(a(s),{onClick:l[2]||(l[2]=e=>M(!0))},{default:p((()=>[n(u(a(P)("tableDemo.reserveIndex")),1)])),_:1}),i(a(s),{onClick:l[3]||(l[3]=e=>M(!1))},{default:p((()=>[n(u(a(P)("tableDemo.restoreIndex")),1)])),_:1}),i(a(s),{onClick:l[4]||(l[4]=e=>N(!0))},{default:p((()=>[n(u(a(P)("tableDemo.showSelections")),1)])),_:1}),i(a(s),{onClick:l[5]||(l[5]=e=>N(!1))},{default:p((()=>[n(u(a(P)("tableDemo.hiddenSelections")),1)])),_:1}),i(a(s),{onClick:q},{default:p((()=>[n(u(a(P)("tableDemo.changeTitle")),1)])),_:1}),i(a(s),{onClick:l[6]||(l[6]=e=>B(!0))},{default:p((()=>[n(u(a(P)("tableDemo.showExpandedRows")),1)])),_:1}),i(a(s),{onClick:l[7]||(l[7]=e=>B(!1))},{default:p((()=>[n(u(a(P)("tableDemo.hiddenExpandedRows")),1)])),_:1}),i(a(s),{onClick:K},{default:p((()=>[n(u(a(P)("tableDemo.selectAllNone")),1)])),_:1}),i(a(s),{onClick:V},{default:p((()=>[n(u(a(P)("tableDemo.delOrAddAction")),1)])),_:1}),i(a(s),{onClick:X},{default:p((()=>[n(u(a(P)("tableDemo.showOrHiddenStripe")),1)])),_:1}),i(a(s),{onClick:G},{default:p((()=>[n(u(a(P)("tableDemo.fixedHeaderOrAuto")),1)])),_:1}),i(a(s),{onClick:J},{default:p((()=>[n(u(a(P)("tableDemo.getSelections")),1)])),_:1})])),_:1},8,["title"]),i(a(e),{title:`UseTable ${a(P)("tableDemo.example")}`},{default:p((()=>[i(a(D),{pageSize:a(S),"onUpdate:pageSize":l[8]||(l[8]=e=>c(S)?S.value=e:null),currentPage:a(w),"onUpdate:currentPage":l[9]||(l[9]=e=>c(w)?w.value=e:null),showAction:"",columns:H,data:a(C),loading:a(y),pagination:U.value?{total:a(k)}:void 0,onRegister:a(f),onRefresh:a(E)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister","onRefresh"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-daa5600d"]]);export{x as default};
