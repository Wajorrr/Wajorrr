import{E as e}from"./style.4840d0d2.js";import{_ as a,d as l,r as t,w as s,o as i,m as o,q as n,A as r,a as p,u}from"./index.1a6f07d7.js";const d={class:"detail_vue"},c={class:"title"};var f=a(l({props:{fileDetail:null},setup(a){const l=a,f=(e,a)=>{const l=new RegExp(/\.\/assets\/.*\.(png|jpg)/g),t=new RegExp(/assets\/.*\.(png|jpg)/g),s=m(e,a,l,1);return m(s,a,t,2)},m=(e,a,l,t)=>{const s=e.match(l),i=[],o=[];null==s||s.forEach((e=>{i.push(e),1===t?e=a+e.substring(1):2===t&&(e=a+"/"+e),o.push("https://www.wajorrr.com/api/images/"+e.replaceAll("/","&"))}));for(let n=0;n<i.length;n++)e=e.replace(i[n],o[n]);return e},v=t(void 0===l.fileDetail?"":f(l.fileDetail.content,l.fileDetail.path)),g=t(void 0===l.fileDetail?"":l.fileDetail.name);return s((()=>l.fileDetail),(()=>{v.value=f(l.fileDetail.content,l.fileDetail.path),g.value=l.fileDetail.name})),(a,l)=>(i(),o("div",d,[n("h1",c,r(g.value),1),p(u(e),{modelValue:v.value,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value=e),class:"mdEditor","preview-only":""},null,8,["modelValue"])]))}}),[["__scopeId","data-v-3a893e16"]]);export{f as d};
