import{_ as t,d as s,w as e,y as n,o as a,m as i,F as l,z as o,q as r,A as c}from"./index.a20f2826.js";import{u as d}from"./contentStore.cc7e0930.js";const m={class:"content_view"},p={class:"content_list"},u=["onClick"],v={style:{"margin-bottom":"20px"}};var _=t(s({props:{fileList:null,pathPrefix:null},setup(t){const s=t;d(),e((()=>s.fileList),(()=>{}),{deep:!0});const _=n();return(e,n)=>(a(),i("div",m,[(a(!0),i(l,null,o(t.fileList,(t=>(a(),i("div",p,[r("div",null,"创建于："+c(t.create_time),1),r("div",null,"修改于："+c(t.last_edit_time),1),r("div",null,[r("a",{onClick:e=>{return n=t.index,void _.push({name:s.pathPrefix.substring(1)+" detail",params:{index:n}});var n},class:"item_name"},c(t.name),9,u)]),r("div",v,c(t.content.substring(0,80)+(t.content.length>80?"......":"")),1)])))),256))]))}}),[["__scopeId","data-v-62ed405c"]]);export{_ as c};
