var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{_ as o}from"./Footer.fd5f6cb5.js";import{Y as s,R as a,s as c,h as i,W as d,X as p,r as f,o as g,a as b,b as m,t as h,q as x,F as u,z as w,Z as v,$ as y}from"./app.31827bcb.js";const k={components:{Footer:o},setup(e){const o=s({author:"",title:"",icon:"",description:"",color:"",cards:[],clickHandler:()=>{},ctrlShiftClickHandler:()=>{}});a((()=>{o.clickHandler=e=>{const t=`postslist/${e.toLowerCase()}`;window.open(t)},o.ctrlShiftClickHandler=e=>{const t=`folderslist/${e.toLowerCase()}`;window.open(t)}})),o.title="一鱼两吃",o.icon="home_icon.png",o.description="这是我的部落格也是一个知识管理系统。",o.color="#9CA3AF",o.cards=c().value.cards||[];return((e,o)=>{for(var s in o||(o={}))n.call(o,s)&&r(e,s,o[s]);if(t)for(var s of t(o))l.call(o,s)&&r(e,s,o[s]);return e})({},i(o))}},j=v();d("data-v-001ec74c");const C={class:"bg-gray-100"},H={class:"p-8 text-center text-5xl md:text-8xl font-bold"},$={key:0,class:"container w-full p-8 md:p-10 flex justify-center items-center"},O=m("div",{class:"before flex-grow h-0.5 bg-white"},null,-1),F=m("div",{class:"after flex-grow h-0.5 bg-white"},null,-1),L={class:"px-8 py-16"},S={class:"\n          container\n          mx-auto\n          grid grid-cols-1\n          sm:grid-cols-2\n          lg:grid-cols-3\n          xl:grid-cols-4\n          gap-6\n        "},_={class:"card-body my-40 relative z-10"},I={class:"text-5xl text-left font-bold"};p();const P=j(((e,t,n,l,r,o)=>{const s=f("Footer");return g(),b("div",C,[m("header",{class:"\n        h-screen\n        flex flex-col\n        justify-center\n        items-center\n        text-white\n      ",style:{"background-color":e.color}},[m("h1",H,h(e.title),1),e.icon?(g(),b("div",$,[O,m("img",{class:"flex-shrink-0 px-4 w-20 sm:w-24",src:e.$withBase(`/images/home/${e.icon}`),alt:"tech blog logo"},null,8,["src"]),F])):x("",!0),m("p",{class:"p-8 text-center text-lg font-bold",innerHTML:e.description},null,8,["innerHTML"])],4),m("main",L,[m("div",S,[(g(!0),b(u,null,w(e.cards,(t=>(g(),b("button",{key:t.name,class:"\n            card\n            rounded-2xl\n            pl-6\n            relative\n            bg-cover bg-center bg-no-repeat\n            hover:shadow-lg\n            hover:text-blue-400\n            text-white\n            transition-all\n          ",style:{backgroundImage:"url("+e.$withBase(`/images/home/${t.image}`)+")"},onClick:[y((n=>e.clickHandler(t.name)),["exact"]),y((n=>e.ctrlShiftClickHandler(t.name)),["ctrl","shift","exact"])]},[m("div",_,[m("h3",I,h(t.name),1)])],12,["onClick"])))),128))])]),m(s)])}));k.render=P,k.__scopeId="data-v-001ec74c";export{k as default};
