const __vite__fileDeps=["assets/ColorUpdater-bElQaJEb.js","assets/index-C0VLdLxc.js","assets/index-gx08z4wl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-C0VLdLxc.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-bElQaJEb.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
