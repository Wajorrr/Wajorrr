import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,r as m,o as d,c as r,a as _,t as p,b as t,p as E,e as g,f as h,g as D,u as F,F as x,h as C}from"./index.0c3164ce.js";const c=e=>(E("data-v-ce9464a8"),e=e(),g(),e),y={class:"header"},k=_(" \u5934\u90E8 "),$=c(()=>t("br",null,null,-1)),S=c(()=>t("br",null,null,-1)),I=c(()=>t("br",null,null,-1)),B=c(()=>t("br",null,null,-1)),w=f({props:{title:{default:"\u6211\u662F\u9ED8\u8BA4\u503C"},data:{default:()=>[1,2,3,4]}},emits:["submit-data","submit-data2"],setup(e,{expose:i,emit:u}){let s=m([1,2,3,4,5]);const n=()=>{u("submit-data",s,!1)},a=()=>{u("submit-data2",s,!0)};return i({list:s}),(o,l)=>(d(),r("div",y,[k,$,_(" "+p(e.title)+" ",1),S,_(" "+p(e.data)+" ",1),I,t("button",{onClick:n},"\u7ED9\u7236\u7EC4\u4EF6\u6D3E\u53D1\u53C2\u6570"),B,t("button",{onClick:a},"\u7ED9\u7236\u7EC4\u4EF6\u6D3E\u53D1\u53C2\u6570")]))}});var N=v(w,[["__scopeId","data-v-ce9464a8"]]);const b=e=>(E("data-v-60dce260"),e=e(),g(),e),T={style:{display:"flex","flex-direction":"column"}},V={class:"container"},H=b(()=>t("div",{class:"container-left"}," container-left ",-1)),A={class:"container-right"},L=b(()=>t("div",{class:"container-right-up"}," container-right-up ",-1)),j={class:"container-right-down"},q=f({setup(e){h("");let i=m([1,2,3]);const u=(a,o)=>{console.log(a,"\u6211\u662F\u5B50\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684list",o)},s=(a,o)=>{console.log(a,o)},n=h(null);return console.log(n),(a,o)=>(d(),r("div",T,[D(N,{ref_key:"header",ref:n,onSubmitData2:s,onSubmitData:u,data:F(i),title:"\u8FD9\u662F\u5934\u90E8(\u7236\u7EC4\u4EF6\u4F20\u9012)"},null,8,["data"]),t("div",V,[H,t("div",A,[L,t("div",j,[(d(),r(x,null,C(100,l=>t("div",{class:"container-right-down-items",key:l},p(l),1)),64))])])])]))}});var J=v(q,[["__scopeId","data-v-60dce260"]]);export{J as default};
