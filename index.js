import{a as h,S as m,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",f="50822348-bdabbbb26163a7cc5d8d36121";function g(s){const r=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return h.get(`${p}?${r}`).then(o=>o.data.hits)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y={overlay:!0,nav:!0,captionsData:"alt",captionDelay:250},L=new m(".gallery a",y);function b(s){l.innerHTML=s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-card">
        <a href=${o}>
        <img class="card-photo"src=${r} alt="${i}"/>
        </a>
        <ul class="card-list">
        <li><h3>Likes</h3><p>${e}</p></li>
        <li><h3>Views</h3><p>${t}</p></li>
        <li><h3>Comments</h3><p>${a}</p></li>
        <li><h3>Downloads</h3><p>${d}</p></li>
        </ul>
        </li>`).join(""),L.refresh()}function S(){l.innerHTML=""}function w(){c.classList.remove("hidden")}function $(){c.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim().toLowerCase();r&&(w(),S(),g(r).then(o=>{o.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight",maxWidth:432,messageSize:"16",class:"my-toast"}):b(o)}).catch(o=>{n.show({message:o,messageColor:"white",color:"red",position:"topRight"})}).finally(()=>{$()}),u.reset())}
//# sourceMappingURL=index.js.map
