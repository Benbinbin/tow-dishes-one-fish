import{e,u as t,f as a,r as o,o as n,a as l,b as s,t as u,w as r,d as m}from"./app.31827bcb.js";var c=e({name:"404",setup(){var e,o,n;const l=t(),s=a(),u=null!=(e=s.value.notFound)?e:["Not Found"];return{getMsg:()=>u[Math.floor(Math.random()*u.length)],homeLink:null!=(o=s.value.home)?o:l.value,homeText:null!=(n=s.value.backToHome)?n:"Back to home"}}});const h={class:"theme-container"},d={class:"theme-default-content"},i=s("h1",null,"404",-1);c.render=function(e,t,a,c,v,f){const k=o("RouterLink");return n(),l("div",h,[s("div",d,[i,s("blockquote",null,u(e.getMsg()),1),s(k,{to:e.homeLink},{default:r((()=>[m(u(e.homeText),1)])),_:1},8,["to"])])])};export{c as default};
