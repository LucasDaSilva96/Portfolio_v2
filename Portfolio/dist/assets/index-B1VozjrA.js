const __vite__fileDeps=["assets/LifeUpdater-6fiH1J3z.js","assets/ValueWithRandom-Bjwwc6Nx.js","assets/index-DqaPinY_.js","assets/index-CEBWU9Td.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DqaPinY_.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-6fiH1J3z.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};