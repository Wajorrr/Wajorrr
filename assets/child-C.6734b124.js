import{B as s}from"./eventBus.2d9e5888.js";import{d as l,r as e,m as r,i as t,A as a,q as n,o}from"./index.00355e4b.js";const u={style:{background:"rgb(150,150,150)"}},d=n("h1",null,"我是child-C",-1),i=n("br",null,null,-1),c=l({props:{str:null},setup(l){const n=e("");return s.on("BtoC",(s=>{n.value=s})),(s,e)=>(o(),r("div",u,[d,t(" 通过父组件接受child-B传参："+a(l.str)+" ",1),i,t(" 通过eventBus接受child-B传参："+a(n.value),1)]))}});export{c as default};
