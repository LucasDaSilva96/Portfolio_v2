const __vite__fileDeps=["assets/OpacityUpdater-CHajr_Jd.js","assets/index-B5Ly5Kyj.js","assets/index-CEBWU9Td.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-B5Ly5Kyj.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-CHajr_Jd.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
