if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>r(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pocket"}),self.skipWaiting(),e.precacheAndRoute([{url:"/css/app.e13076bf.css",revision:null},{url:"/index.html",revision:"f0548d9f74382af99b291981fc635e99"},{url:"/js/about.47d8519d.js",revision:null},{url:"/js/app.87b78963.js",revision:null},{url:"/js/chunk-vendors.e460c7ea.js",revision:null},{url:"/manifest.json",revision:"4646aa381a0a8e3a1e149fffe6d6cfa7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
