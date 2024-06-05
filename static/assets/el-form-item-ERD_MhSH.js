import{ck as e,s as r,cl as t,a7 as n,ad as i,ac as a,b6 as l,r as s,B as u,d as o,aS as f,A as d,a3 as c,aP as p,ae as v,N as g,bw as h,bs as y,o as m,c as b,J as w,n as q,a as F,L as O,a_ as x,af as j,bt as A,aG as E,Y as P,P as S,bC as k,b8 as R,e as $,Q as _,aO as B,bl as M,aC as W,cm as I,C as V,cn as C,w as z,i as N,G as D,F as L,H as T,t as J,j as G,f as Z,T as Y,M as H,al as Q}from"./index-L23m9uYc.js";import{c as U}from"./castArray-CmgHK4Wz.js";function K(r){return e(r,4)}const X=r({size:{type:String,values:t},disabled:Boolean}),ee=r({...X,model:Object,rules:{type:n(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),re={validate:(e,r,t)=>(i(e)||a(e))&&l(r)&&a(t)};function te(){const e=s([]),r=u((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const i=t(n);e.value.splice(i,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}const ne=(e,r)=>{const t=U(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},ie=o({name:"ElForm"});var ae=O(o({...ie,props:ee,emits:re,setup(e,{expose:r,emit:t}){const n=e,i=[],a=f(),l=d("form"),s=u((()=>{const{labelPosition:e,inline:r}=n;return[l.b(),l.m(a.value||"default"),{[l.m(`label-${e}`)]:e,[l.m("inline")]:r}]})),o=(e=[])=>{n.model&&ne(i,e).forEach((e=>e.resetField()))},O=(e=[])=>{ne(i,e).forEach((e=>e.clearValidate()))},j=u((()=>!!n.model)),A=async e=>P(void 0,e),E=async(e=[])=>{if(!j.value)return!1;const r=(e=>{if(0===i.length)return[];const r=ne(i,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const i of r)try{await i.validate("")}catch(n){t={...t,...n}}return 0===Object.keys(t).length||Promise.reject(t)},P=async(e=[],r)=>{const t=!x(r);try{const t=await E(e);return!0===t&&(null==r||r(t)),t}catch(i){if(i instanceof Error)throw i;const e=i;return n.scrollToError&&S(Object.keys(e)[0]),null==r||r(!1,e),t&&Promise.reject(e)}},S=e=>{var r;const t=ne(i,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView(n.scrollIntoViewOptions))};return c((()=>n.rules),(()=>{n.validateOnRuleChange&&A().catch((e=>p()))}),{deep:!0}),v(y,g({...h(n),emit:t,resetFields:o,clearValidate:O,validateField:P,getField:e=>i.find((r=>r.prop===e)),addField:e=>{i.push(e)},removeField:e=>{e.prop&&i.splice(i.indexOf(e),1)},...te()})),r({validate:A,validateField:P,resetFields:o,clearValidate:O,scrollToField:S}),(e,r)=>(m(),b("form",{class:q(F(s))},[w(e.$slots,"default")],2))}}),[["__file","form.vue"]]);function le(){return le=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},le.apply(this,arguments)}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,r){return(ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function oe(e,r,t){return(oe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(e,n));return t&&ue(i,t.prototype),i}).apply(null,arguments)}function fe(e){var r="function"==typeof Map?new Map:void 0;return fe=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return oe(e,arguments,se(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ue(n,e)},fe(e)}var de=/%[sdj%]/g,ce=function(){};function pe(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function ve(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var i=0,a=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(de,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}})):e}function ge(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function he(e,r,t){var n=0,i=e.length;!function a(l){if(l&&l.length)t(l);else{var s=n;n+=1,s<i?r(e[s],a):t([])}}([])}var ye=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,ue(r,t),n}(fe(Error));function me(e,r,t,n,i){if(r.first){var a=new Promise((function(r,a){var l=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);he(l,t,(function(e){return n(e),e.length?a(new ye(e,pe(e))):r(i)}))}));return a.catch((function(e){return e})),a}var l=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),u=s.length,o=0,f=[],d=new Promise((function(r,a){var d=function(e){if(f.push.apply(f,e),++o===u)return n(f),f.length?a(new ye(f,pe(f))):r(i)};s.length||(n(f),r(i)),s.forEach((function(r){var n=e[r];-1!==l.indexOf(r)?he(n,t,d):function(e,r,t){var n=[],i=0,a=e.length;function l(e){n.push.apply(n,e||[]),++i===a&&t(n)}e.forEach((function(e){r(e,l)}))}(n,t,d)}))}));return d.catch((function(e){return e})),d}function be(e,r){return function(t){var n,i;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(i=t)&&void 0!==i.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function we(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=le({},e[t],n):e[t]=n}return e}var qe,Fe=function(e,r,t,n,i,a){!e.required||t.hasOwnProperty(e.field)&&!ge(r,a||e.type)||n.push(ve(i.messages.required,e.fullField))},Oe=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,xe=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,je={integer:function(e){return je.number(e)&&parseInt(e,10)===e},float:function(e){return je.number(e)&&!je.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!je.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Oe)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(qe)return qe;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),l=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),u=function(e){return e&&e.exact?a:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+i+r(e)+")","g")};u.v4=function(e){return e&&e.exact?l:new RegExp(""+r(e)+t+r(e),"g")},u.v6=function(e){return e&&e.exact?s:new RegExp(""+r(e)+i+r(e),"g")};var o=u.v4().source,f=u.v6().source;return qe=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+o+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(xe)}},Ae="enum",Ee={required:Fe,whitespace:function(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(ve(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){if(e.required&&void 0===r)Fe(e,r,t,n,i);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?je[a](r)||n.push(ve(i.messages.types[a],e.fullField,e.type)):a&&typeof r!==e.type&&n.push(ve(i.messages.types[a],e.fullField,e.type))}},range:function(e,r,t,n,i){var a="number"==typeof e.len,l="number"==typeof e.min,s="number"==typeof e.max,u=r,o=null,f="number"==typeof r,d="string"==typeof r,c=Array.isArray(r);if(f?o="number":d?o="string":c&&(o="array"),!o)return!1;c&&(u=r.length),d&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?u!==e.len&&n.push(ve(i.messages[o].len,e.fullField,e.len)):l&&!s&&u<e.min?n.push(ve(i.messages[o].min,e.fullField,e.min)):s&&!l&&u>e.max?n.push(ve(i.messages[o].max,e.fullField,e.max)):l&&s&&(u<e.min||u>e.max)&&n.push(ve(i.messages[o].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e[Ae]=Array.isArray(e[Ae])?e[Ae]:[],-1===e[Ae].indexOf(r)&&n.push(ve(i.messages[Ae],e.fullField,e[Ae].join(", ")))},pattern:function(e,r,t,n,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(ve(i.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(ve(i.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Pe=function(e,r,t,n,i){var a=e.type,l=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,a)&&!e.required)return t();Ee.required(e,r,n,l,i,a),ge(r,a)||Ee.type(e,r,n,l,i)}t(l)},Se={string:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"string")&&!e.required)return t();Ee.required(e,r,n,a,i,"string"),ge(r,"string")||(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i),Ee.pattern(e,r,n,a,i),!0===e.whitespace&&Ee.whitespace(e,r,n,a,i))}t(a)},method:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.type(e,r,n,a,i)}t(a)},number:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},boolean:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.type(e,r,n,a,i)}t(a)},regexp:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),ge(r)||Ee.type(e,r,n,a,i)}t(a)},integer:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},float:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},array:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Ee.required(e,r,n,a,i,"array"),null!=r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},object:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.type(e,r,n,a,i)}t(a)},enum:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.enum(e,r,n,a,i)}t(a)},pattern:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"string")&&!e.required)return t();Ee.required(e,r,n,a,i),ge(r,"string")||Ee.pattern(e,r,n,a,i)}t(a)},date:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"date")&&!e.required)return t();var l;if(Ee.required(e,r,n,a,i),!ge(r,"date"))l=r instanceof Date?r:new Date(r),Ee.type(e,l,n,a,i),l&&Ee.range(e,l.getTime(),n,a,i)}t(a)},url:Pe,hex:Pe,email:Pe,required:function(e,r,t,n,i){var a=[],l=Array.isArray(r)?"array":typeof r;Ee.required(e,r,n,a,i,l),t(a)},any:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i)}t(a)}};function ke(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Re=ke(),$e=function(){function e(e){this.rules=null,this._messages=Re,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=we(ke(),e)),this._messages},r.validate=function(r,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var a=r,l=t,s=n;if("function"==typeof l&&(s=l,l={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,a),Promise.resolve(a);if(l.messages){var u=this.messages();u===Re&&(u=ke()),we(u,l.messages),l.messages=u}else l.messages=this.messages();var o={};(l.keys||Object.keys(this.rules)).forEach((function(e){var t=i.rules[e],n=a[e];t.forEach((function(t){var l=t;"function"==typeof l.transform&&(a===r&&(a=le({},a)),n=a[e]=l.transform(n)),(l="function"==typeof l?{validator:l}:le({},l)).validator=i.getValidationMethod(l),l.validator&&(l.field=e,l.fullField=l.fullField||e,l.type=i.getType(l),o[e]=o[e]||[],o[e].push({rule:l,value:n,source:a,field:e}))}))}));var f={};return me(o,l,(function(r,t){var n,i=r.rule,s=!("object"!==i.type&&"array"!==i.type||"object"!=typeof i.fields&&"object"!=typeof i.defaultField);function u(e,r){return le({},r,{fullField:i.fullField+"."+e,fullFields:i.fullFields?[].concat(i.fullFields,[e]):[e]})}function o(n){void 0===n&&(n=[]);var o=Array.isArray(n)?n:[n];!l.suppressWarning&&o.length&&e.warning("async-validator:",o),o.length&&void 0!==i.message&&(o=[].concat(i.message));var d=o.map(be(i,a));if(l.first&&d.length)return f[i.field]=1,t(d);if(s){if(i.required&&!r.value)return void 0!==i.message?d=[].concat(i.message).map(be(i,a)):l.error&&(d=[l.error(i,ve(l.messages.required,i.field))]),t(d);var c={};i.defaultField&&Object.keys(r.value).map((function(e){c[e]=i.defaultField})),c=le({},c,r.rule.fields);var p={};Object.keys(c).forEach((function(e){var r=c[e],t=Array.isArray(r)?r:[r];p[e]=t.map(u.bind(null,e))}));var v=new e(p);v.messages(l.messages),r.rule.options&&(r.rule.options.messages=l.messages,r.rule.options.error=l.error),v.validate(r.value,r.rule.options||l,(function(e){var r=[];d&&d.length&&r.push.apply(r,d),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(d)}if(s=s&&(i.required||!i.required&&r.value),i.field=r.field,i.asyncValidator)n=i.asyncValidator(i,r.value,o,r.source,l);else if(i.validator){try{n=i.validator(i,r.value,o,r.source,l)}catch(d){console.error,l.suppressValidatorError||setTimeout((function(){throw d}),0),o(d.message)}!0===n?o():!1===n?o("function"==typeof i.message?i.message(i.fullField||i.field):i.message||(i.fullField||i.field)+" fails"):n instanceof Array?o(n):n instanceof Error&&o(n.message)}n&&n.then&&n.then((function(){return o()}),(function(e){return o(e)}))}),(function(e){!function(e){for(var r,t,n=[],i={},l=0;l<e.length;l++)r=e[l],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(i=pe(n),s(n,i)):s(null,a)}(e)}),a)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!Se.hasOwnProperty(e.type))throw new Error(ve("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?Se.required:Se[this.getType(e)]||void 0},e}();$e.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");Se[e]=r},$e.warning=ce,$e.messages=Re,$e.validators=Se;const _e=r({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:n([String,Array])},required:{type:Boolean,default:void 0},rules:{type:n([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:t}}),Be="ElLabelWrap";var Me=o({name:Be,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=j(y,void 0),n=j(A);n||E(Be,"usage: <el-form-item><label-wrap /></el-form-item>");const i=d("form"),a=s(),l=s(0),o=(n="update")=>{B((()=>{r.default&&e.isAutoWidth&&("update"===n?l.value=(()=>{var e;if(null==(e=a.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(a.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===n&&(null==t||t.deregisterLabelWidth(l.value)))}))},f=()=>o("update");return P((()=>{f()})),S((()=>{o("remove")})),k((()=>f())),c(l,((r,n)=>{e.updateAll&&(null==t||t.registerLabelWidth(r,n))})),R(u((()=>{var e,r;return null!=(r=null==(e=a.value)?void 0:e.firstElementChild)?r:null})),f),()=>{var s,u;if(!r)return null;const{isAutoWidth:o}=e;if(o){const e=null==t?void 0:t.autoLabelWidth,u={};if((null==n?void 0:n.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-l.value),n="left"===t.labelPosition?"marginRight":"marginLeft";r&&(u[n]=`${r}px`)}return $("div",{ref:a,class:[i.be("item","label-wrap")],style:u},[null==(s=r.default)?void 0:s.call(r)])}return $(_,{ref:a},[null==(u=r.default)?void 0:u.call(r)])}}});const We=["role","aria-labelledby"],Ie=o({name:"ElFormItem"});var Ve=O(o({...Ie,props:_e,setup(e,{expose:r}){const t=e,n=M(),i=j(y,void 0),o=j(A,void 0),p=f(void 0,{formItem:!1}),O=d("form-item"),E=W().value,k=s([]),R=s(""),_=I(R,100),H=s(""),Q=s();let X,ee=!1;const re=u((()=>{if("top"===(null==i?void 0:i.labelPosition))return{};const e=V(t.labelWidth||(null==i?void 0:i.labelWidth)||"");return e?{width:e}:{}})),te=u((()=>{if("top"===(null==i?void 0:i.labelPosition)||(null==i?void 0:i.inline))return{};if(!t.label&&!t.labelWidth&&fe)return{};const e=V(t.labelWidth||(null==i?void 0:i.labelWidth)||"");return t.label||n.label?{}:{marginLeft:e}})),ne=u((()=>[O.b(),O.m(p.value),O.is("error","error"===R.value),O.is("validating","validating"===R.value),O.is("success","success"===R.value),O.is("required",ve.value||t.required),O.is("no-asterisk",null==i?void 0:i.hideRequiredAsterisk),"right"===(null==i?void 0:i.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[O.m("feedback")]:null==i?void 0:i.statusIcon}])),ie=u((()=>l(t.inlineMessage)?t.inlineMessage:(null==i?void 0:i.inlineMessage)||!1)),ae=u((()=>[O.e("error"),{[O.em("error","inline")]:ie.value}])),le=u((()=>t.prop?a(t.prop)?t.prop:t.prop.join("."):"")),se=u((()=>!(!t.label&&!n.label))),ue=u((()=>t.for||(1===k.value.length?k.value[0]:void 0))),oe=u((()=>!ue.value&&se.value)),fe=!!o,de=u((()=>{const e=null==i?void 0:i.model;if(e&&t.prop)return C(e,t.prop).value})),ce=u((()=>{const{required:e}=t,r=[];t.rules&&r.push(...U(t.rules));const n=null==i?void 0:i.rules;if(n&&t.prop){const e=C(n,t.prop).value;e&&r.push(...U(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,i]of t)n.required!==e&&(r[i]={...n,required:e});else r.push({required:e})}return r})),pe=u((()=>ce.value.length>0)),ve=u((()=>ce.value.some((e=>e.required)))),ge=u((()=>{var e;return"error"===_.value&&t.showMessage&&(null==(e=null==i?void 0:i.showMessage)||e)})),he=u((()=>`${t.label||""}${(null==i?void 0:i.labelSuffix)||""}`)),ye=e=>{R.value=e},me=async e=>{const r=le.value;return new $e({[r]:e}).validate({[r]:de.value},{firstFields:!0}).then((()=>(ye("success"),null==i||i.emit("validate",t.prop,!0,""),!0))).catch((e=>((e=>{var r,n;const{errors:a,fields:l}=e;ye("error"),H.value=a?null!=(n=null==(r=null==a?void 0:a[0])?void 0:r.message)?n:`${t.prop} is required`:"",null==i||i.emit("validate",t.prop,!1,H.value)})(e),Promise.reject(e))))},be=async(e,r)=>{if(ee||!t.prop)return!1;const n=x(r);if(!pe.value)return null==r||r(!1),!1;const i=(e=>ce.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((({trigger:e,...r})=>r)))(e);return 0===i.length?(null==r||r(!0),!0):(ye("validating"),me(i).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:t}=e;return null==r||r(!1,t),!n&&Promise.reject(t)})))},we=()=>{ye(""),H.value="",ee=!1},qe=async()=>{const e=null==i?void 0:i.model;if(!e||!t.prop)return;const r=C(e,t.prop);ee=!0,r.value=K(X),await B(),we(),ee=!1};c((()=>t.error),(e=>{H.value=e||"",ye(e?"error":"")}),{immediate:!0}),c((()=>t.validateStatus),(e=>ye(e||"")));const Fe=g({...h(t),$el:Q,size:p,validateState:R,labelId:E,inputIds:k,isGroup:oe,hasLabel:se,fieldValue:de,addInputId:e=>{k.value.includes(e)||k.value.push(e)},removeInputId:e=>{k.value=k.value.filter((r=>r!==e))},resetField:qe,clearValidate:we,validate:be});return v(A,Fe),P((()=>{t.prop&&(null==i||i.addField(Fe),X=K(de.value))})),S((()=>{null==i||i.removeField(Fe)})),r({size:p,validateMessage:H,validateState:R,validate:be,clearValidate:we,resetField:qe}),(e,r)=>{var t;return m(),b("div",{ref_key:"formItemRef",ref:Q,class:q(F(ne)),role:F(oe)?"group":void 0,"aria-labelledby":F(oe)?F(E):void 0},[$(F(Me),{"is-auto-width":"auto"===F(re).width,"update-all":"auto"===(null==(t=F(i))?void 0:t.labelWidth)},{default:z((()=>[F(se)?(m(),N(D(F(ue)?"label":"div"),{key:0,id:F(E),for:F(ue),class:q(F(O).e("label")),style:L(F(re))},{default:z((()=>[w(e.$slots,"label",{label:F(he)},(()=>[T(J(F(he)),1)]))])),_:3},8,["id","for","class","style"])):G("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),Z("div",{class:q(F(O).e("content")),style:L(F(te))},[w(e.$slots,"default"),$(Y,{name:`${F(O).namespace.value}-zoom-in-top`},{default:z((()=>[F(ge)?w(e.$slots,"error",{key:0,error:H.value},(()=>[Z("div",{class:q(F(ae))},J(H.value),3)])):G("v-if",!0)])),_:3},8,["name"])],6)],10,We)}}}),[["__file","form-item.vue"]]);const Ce=H(ae,{FormItem:Ve}),ze=Q(Ve);export{Ce as E,ze as a};
