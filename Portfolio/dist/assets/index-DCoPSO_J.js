const __vite__fileDeps=["assets/ParallaxMover-2f6EIFM_.js","assets/index-C0VLdLxc.js","assets/index-gx08z4wl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-C0VLdLxc.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-2f6EIFM_.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};