const __vite__fileDeps=["assets/OutOfCanvasUpdater-Dc0xDow2.js","assets/index-A3_YoE0Q.js","assets/index-gx08z4wl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-A3_YoE0Q.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-Dc0xDow2.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};