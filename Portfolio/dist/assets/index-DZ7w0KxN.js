const __vite__fileDeps=["assets/ParallaxMover-viT-rMlu.js","assets/index-2CInkqIM.js","assets/index-gx08z4wl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-2CInkqIM.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-viT-rMlu.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
