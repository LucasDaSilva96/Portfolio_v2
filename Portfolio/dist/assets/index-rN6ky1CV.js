const __vite__fileDeps=["assets/ParallaxMover-rGu3zkej.js","assets/index-Do5rKiN6.js","assets/index-CEBWU9Td.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-Do5rKiN6.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-rGu3zkej.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};