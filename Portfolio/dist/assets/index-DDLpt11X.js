const __vite__fileDeps=["assets/ParallaxMover-NhN7HaKS.js","assets/index-A3_YoE0Q.js","assets/index-gx08z4wl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-A3_YoE0Q.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-NhN7HaKS.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
