import{d as s,r as e,w as i,m as l,a,C as t,o as r}from"./index.1a6f07d7.js";import{d as f}from"./detail_view.c3c5c1c6.js";import"./style.4840d0d2.js";const n=s({props:{fileList:null},setup(s){const n=s,d=t(),p=()=>parseInt(d.params.index),o=e(n.fileList[p()]);return i((()=>d.params),(()=>{null!=d.params.index&&(o.value=n.fileList[p()>n.fileList.length?0:p()])})),i((()=>n.fileList),(()=>{o.value=n.fileList[p()>n.fileList.length?0:p()]})),(s,e)=>(r(),l("div",null,[a(f,{fileDetail:o.value},null,8,["fileDetail"])]))}});export{n as default};
