const __vite__fileDeps=["assets/Linker-DQxLfYxX.js","assets/Ranges-BETbDgRJ.js","assets/index-B5Ly5Kyj.js","assets/index-CEBWU9Td.css","assets/index-B9P1dsmv.js","assets/OptionsColor-R311A3Tr.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-B5Ly5Kyj.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DQxLfYxX.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};