const __vite__fileDeps=["assets/Linker-DpGmQ0LU.js","assets/Ranges-B84JFx9F.js","assets/index-DvUImvl3.js","assets/index-gx08z4wl.css","assets/index-CmWs70IU.js","assets/OptionsColor-C09vmuZH.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DvUImvl3.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DpGmQ0LU.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};