const __vite__fileDeps=["assets/Collider-Bey2DAHM.js","assets/index-B5Ly5Kyj.js","assets/index-CEBWU9Td.css","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./index-B5Ly5Kyj.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-Bey2DAHM.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
