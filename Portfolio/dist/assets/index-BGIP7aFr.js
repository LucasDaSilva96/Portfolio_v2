const __vite__fileDeps=["assets/PolygonDrawer-CUbpn4ks.js","assets/PolygonDrawerBase-CCNu0HZz.js","assets/index-B5Ly5Kyj.js","assets/index-CEBWU9Td.css","assets/TriangleDrawer-CbKDV_1F.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-B5Ly5Kyj.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CUbpn4ks.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CbKDV_1F.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};