import{s as e,x as o,d as l,z as a,af as s,c0 as t,B as n,dw as r,o as i,c,f as d,J as u,n as f,a as p,t as v,e as y,w as g,i as m,G as b,D as h,j as C,F as x,L as k,dx as w,a7 as A,a9 as F,b6 as $,aZ as B,ca as I,aC as R,r as D,dy as _,C as S,dz as L,a3 as M,aO as O,Y as E,dA as H,dB as T,b2 as z,bl as j,bX as P,A as N,ae as q,W as V,ds as K,cb as U,K as Z,aF as G,ak as J,h as W,cc as X,dC as Y,M as Q,a5 as ee,cF as oe,U as le,aA as ae,H as se,E as te}from"./index-5vcJ2QQZ.js";import{c as ne}from"./refs-DcxNlh2e.js";import{i as re}from"./el-popper-Bv917HkU.js";const ie=Symbol("dialogInjectionKey"),ce=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),de=["aria-level"],ue=["aria-label"],fe=["id"],pe=l({name:"ElDialogContent"});var ve=k(l({...pe,props:ce,emits:{close:()=>!0},setup(e){const o=e,{t:l}=a(),{Close:k}=w,{dialogRef:A,headerRef:F,bodyId:$,ns:B,style:I}=s(ie),{focusTrapRef:R}=s(t),D=n((()=>[B.b(),B.is("fullscreen",o.fullscreen),B.is("draggable",o.draggable),B.is("align-center",o.alignCenter),{[B.m("center")]:o.center}])),_=ne(R,A),S=n((()=>o.draggable)),L=n((()=>o.overflow));return r(A,F,S,L),(e,o)=>(i(),c("div",{ref:p(_),class:f(p(D)),style:x(p(I)),tabindex:"-1"},[d("header",{ref_key:"headerRef",ref:F,class:f([p(B).e("header"),{"show-close":e.showClose}])},[u(e.$slots,"header",{},(()=>[d("span",{role:"heading","aria-level":e.ariaLevel,class:f(p(B).e("title"))},v(e.title),11,de)])),e.showClose?(i(),c("button",{key:0,"aria-label":p(l)("el.dialog.close"),class:f(p(B).e("headerbtn")),type:"button",onClick:o[0]||(o[0]=o=>e.$emit("close"))},[y(p(h),{class:f(p(B).e("close"))},{default:g((()=>[(i(),m(b(e.closeIcon||p(k))))])),_:1},8,["class"])],10,ue)):C("v-if",!0)],2),d("div",{id:p($),class:f(p(B).e("body"))},[u(e.$slots,"default")],10,fe),e.$slots.footer?(i(),c("footer",{key:0,class:f(p(B).e("footer"))},[u(e.$slots,"footer")],2)):C("v-if",!0)],6))}}),[["__file","dialog-content.vue"]]);const ye=e({...ce,appendToBody:Boolean,appendTo:{type:A(String),default:"body"},beforeClose:{type:A(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[F]:e=>$(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},me=(e,o)=>{var l;const a=B().emit,{nextZIndex:s}=I();let t="";const r=R(),i=R(),c=D(!1),d=D(!1),u=D(!1),f=D(null!=(l=e.zIndex)?l:s());let p,v;const y=_("namespace",H),g=n((()=>{const o={},l=`--${y.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=S(e.width))),o})),m=n((()=>e.alignCenter?{display:"flex"}:{}));function b(){null==v||v(),null==p||p(),e.openDelay&&e.openDelay>0?({stop:p}=T((()=>x()),e.openDelay)):x()}function h(){null==p||p(),null==v||v(),e.closeDelay&&e.closeDelay>0?({stop:v}=T((()=>k()),e.closeDelay)):k()}function C(){e.beforeClose?e.beforeClose((function(e){e||(d.value=!0,c.value=!1)})):h()}function x(){z&&(c.value=!0)}function k(){c.value=!1}return e.lockScroll&&L(c),M((()=>e.modelValue),(l=>{l?(d.value=!1,b(),u.value=!0,f.value=re(e.zIndex)?s():f.value++,O((()=>{a("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&h()})),M((()=>e.fullscreen),(e=>{o.value&&(e?(t=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=t)})),E((()=>{e.modelValue&&(c.value=!0,u.value=!0,b())})),{afterEnter:function(){a("opened")},afterLeave:function(){a("closed"),a(F,!1),e.destroyOnClose&&(u.value=!1)},beforeLeave:function(){a("close")},handleClose:C,onModalClick:function(){e.closeOnClickModal&&C()},close:h,doClose:k,onOpenAutoFocus:function(){a("openAutoFocus")},onCloseAutoFocus:function(){a("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&C()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:r,bodyId:i,closed:d,style:g,overlayDialogStyle:m,rendered:u,visible:c,zIndex:f}},be=["aria-label","aria-labelledby","aria-describedby"],he=l({name:"ElDialog",inheritAttrs:!1});const Ce=Q(k(l({...he,props:ye,emits:ge,setup(e,{expose:o}){const l=e,a=j();P({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},n((()=>!!a.title)));const s=N("dialog"),t=D(),r=D(),c=D(),{visible:v,titleId:b,bodyId:h,style:k,overlayDialogStyle:w,rendered:A,zIndex:F,afterEnter:$,afterLeave:B,beforeLeave:I,handleClose:R,onModalClick:_,onOpenAutoFocus:S,onCloseAutoFocus:L,onCloseRequested:M,onFocusoutPrevented:O}=me(l,t);q(ie,{dialogRef:t,headerRef:r,bodyId:h,ns:s,rendered:A,style:k});const E=Y(_),H=n((()=>l.draggable&&!l.fullscreen));return o({visible:v,dialogContentRef:c}),(e,o)=>(i(),m(X,{to:e.appendTo,disabled:"body"===e.appendTo&&!e.appendToBody},[y(W,{name:"dialog-fade",onAfterEnter:p($),onAfterLeave:p(B),onBeforeLeave:p(I),persisted:""},{default:g((()=>[V(y(p(K),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":p(F)},{default:g((()=>[d("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:p(b),"aria-describedby":p(h),class:f(`${p(s).namespace.value}-overlay-dialog`),style:x(p(w)),onClick:o[0]||(o[0]=(...e)=>p(E).onClick&&p(E).onClick(...e)),onMousedown:o[1]||(o[1]=(...e)=>p(E).onMousedown&&p(E).onMousedown(...e)),onMouseup:o[2]||(o[2]=(...e)=>p(E).onMouseup&&p(E).onMouseup(...e))},[y(p(U),{loop:"",trapped:p(v),"focus-start-el":"container",onFocusAfterTrapped:p(S),onFocusAfterReleased:p(L),onFocusoutPrevented:p(O),onReleaseRequested:p(M)},{default:g((()=>[p(A)?(i(),m(ve,Z({key:0,ref_key:"dialogContentRef",ref:c},e.$attrs,{center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:p(H),overflow:e.overflow,fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:p(R)}),G({header:g((()=>[e.$slots.title?u(e.$slots,"title",{key:1}):u(e.$slots,"header",{key:0,close:p(R),titleId:p(b),titleClass:p(s).e("title")})])),default:g((()=>[u(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:g((()=>[u(e.$slots,"footer")]))}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):C("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,be)])),_:3},8,["mask","overlay-class","z-index"]),[[J,p(v)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}}),[["__file","dialog.vue"]])),xe={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},ke={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},we=l({__name:"Dialog",props:{modelValue:ee.bool.def(!1),title:ee.string.def("Dialog"),fullscreen:ee.bool.def(!1),maxHeight:ee.oneOfType([String,Number]).def("600px")},setup(e){const o=j(),l=e,a=n((()=>{const e=["fullscreen","title","maxHeight"],o={...ae(),...l};for(const l in o)-1!==e.indexOf(l)&&delete o[l];return o})),s=D(!1),t=()=>{s.value=!p(s)},r=D(oe(l.maxHeight)?`${l.maxHeight}px`:l.maxHeight);M((()=>s.value),(async e=>{if(await O(),e){const e=document.documentElement.offsetHeight;r.value=e-55-60-(o.footer?63:0)+"px"}else r.value=oe(l.maxHeight)?`${l.maxHeight}px`:l.maxHeight}),{immediate:!0});const c=n((()=>({height:p(r)})));return(l,n)=>{const r=le("Icon");return i(),m(p(Ce),Z(a.value,{fullscreen:s.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),G({header:g((({close:o})=>[d("div",xe,[u(l.$slots,"title",{},(()=>[se(v(e.title),1)])),d("div",ke,[e.fullscreen?(i(),m(r,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:s.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:t},null,8,["icon"])):C("",!0),y(r,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:o},null,8,["onClick"])])])])),default:g((()=>[y(p(te),{style:x(c.value)},{default:g((()=>[u(l.$slots,"default")])),_:3},8,["style"])])),_:2},[p(o).footer?{name:"footer",fn:g((()=>[u(l.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{we as _,ge as a,ye as d,me as u};
