const __vite__fileDeps=["assets/SizeUpdater-BbnpWaUa.js","assets/index-DvUImvl3.js","assets/index-gx08z4wl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-DvUImvl3.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-BbnpWaUa.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};