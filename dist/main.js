(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]),o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap);"]),o.push([e.id,'* {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nhtml,\r\nbody,\r\n* {\r\n  margin: 0.00001px;\r\n  padding: 0.000001px;\r\n}\r\n\r\n.body-y-scroll {\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card-text {\r\n  height: 80px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card-text::after {\r\n  content: "...Read more";\r\n  color: blue;\r\n  text-decoration: underline;\r\n}\r\n\r\n.shorten-text {\r\n  width: 80%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  position: relative;\r\n}\r\n\r\n/* mobile-first */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup2 {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0.00000111px;\r\n  z-index: 100;\r\n  overflow-y: scroll;\r\n  position: fixed;\r\n  padding: 15%;\r\n  background-color: burlywood;\r\n}\r\n\r\n.upperpopup {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.close {\r\n  color: #111;\r\n  font-weight: bolder;\r\n  font-size: 30px;\r\n}\r\n\r\n.middlepop_simple_titles {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  padding-top: 0.5rem;\r\n}\r\n\r\n.detail {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  font-family: "Lobster Two", cursive;\r\n  font-weight: 400;\r\n}\r\n\r\n.detail_p {\r\n  font-family: "Open Sans", sans-serif;\r\n  font-weight: 400;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.middlepopup_middle_detail {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border: 1px solid #111;\r\n  border-radius: 8px;\r\n  padding: 0.5rem;\r\n  height: 150px;\r\n  overflow: scroll;\r\n}\r\n\r\n.detail2 {\r\n  font-family: "Lobster Two", cursive;\r\n  font-weight: 700;\r\n}\r\n\r\n.popup_comment_section {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  height: 50px;\r\n  gap: 1rem;\r\n}\r\n\r\n.detail3 {\r\n  font-weight: 700;\r\n  padding-top: 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.date_comment {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.popup_form {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.detail4 {\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n\r\n#username {\r\n  padding: 1rem;\r\n  outline: none;\r\n  font-size: larger;\r\n  border-radius: 8px;\r\n}\r\n\r\n#username::placeholder {\r\n  color: gray;\r\n  font-size: larger;\r\n}\r\n\r\n#insight {\r\n  padding: 1rem;\r\n  outline: none;\r\n  height: 150px;\r\n  font-size: larger;\r\n  border-radius: 8px;\r\n}\r\n\r\n#insight::placeholder {\r\n  font-size: larger;\r\n}\r\n\r\n.button1 {\r\n  border-radius: 12px;\r\n  padding: 1rem;\r\n  font-family: "Open Sans", sans-serif;\r\n  font-weight: 700;\r\n  font-size: x-large;\r\n  transition: background-color 0.5s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.button1:hover {\r\n  background-color: rgba(128, 128, 128, 0.856);\r\n  color: #fff;\r\n}\r\n\r\n/* desktop  */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .popup,\r\n  .popup2 {\r\n    padding: 5%;\r\n  }\r\n\r\n  .image_u {\r\n    width: 50%;\r\n  }\r\n\r\n  .upperpopup {\r\n    justify-content: flex-end;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .middlepop_simple_titles {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding-bottom: 2rem;\r\n  }\r\n\r\n  .detail3,\r\n  .detail4 {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n',""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var c=r(e,i),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=async()=>{const e=[];return(await(async e=>{const t=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");return(await t.json()).meals.slice(0,18)})()).forEach((t=>{const n={id:t.idMeal,name:t.strMeal,image:t.strMealThumb,category:t.strCategory,origin:t.strArea,cookinginstruction:t.strInstructions};e.push(n)})),e},b="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wyu5tsnxyP8SUDrhnO7g/likes/",g=async e=>{const t=e.getAttribute("data-id"),n=(await(async()=>{const e=await fetch(b);return await e.json()})()).filter((e=>e.item_id===t));n.length>0&&(e.textContent=`${n[0].likes} Likes`)},y=(e,t)=>{e.innerHTML="",t.error&&(t=[]),t.map((t=>{const n=document.createElement("div");n.setAttribute("class","date_comment");const r=document.createElement("b");r.setAttribute("class","detail_p"),r.innerText=`${t.creation_date}`;const i=document.createElement("p");return i.setAttribute("class","detail_p"),i.innerText=`${t.username}: ${t.comment}`,n.appendChild(r),n.appendChild(i),e.appendChild(n),null}))},v=(e,t)=>{const n=t.length?t.length:0,r=document.createElement("span");r.setAttribute("id","spanh"),r.innerText=`Comments (${n})`,e.appendChild(r)},x=document.getElementById("body"),w=async e=>(await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments?item_id=${e}`)).json().then((e=>e)),A=document.querySelector(".f-list");document.addEventListener("DOMContentLoaded",(async()=>{await(async e=>{(await f()).forEach((t=>{const n=`\n      <li class="col-12 col-sm-6 col-lg-4 p-3">\n        <div class="meal-card | card m-0">\n          <img\n            src="${t.image}"\n            class="card-img-top"\n            alt="${t.name} image"\n          />\n          <div class="card-body">\n            <div class="card-details d-flex justify-content-between pb-3">\n              <div class="w-50">\n                <h5 class="card-title shorten-text">${t.name}</h5>\n                <span class="card-likes-txt d-block" data-id="${t.id}">0 Likes</span>\n              </div>\n              <div>\n                <button class="card-likes d-flex btn btn-danger" data-id="${t.id}">\n                  💛\n                </button>\n              </div>\n            </div>\n            <button href="#" data-id="${t.id}" onclick="handleCommentClick([${t.id}, '${t.name}', '${t.category}', '${t.image}', '${t.origin}'])" class="btn btn-dark d-block w-100">comments</button>\n          </div>\n        </div>\n      </li>\n    `;e.innerHTML+=n}))})(A);const e=document.getElementsByClassName("meal-card");document.querySelector(".meals-counts").textContent=(e=>e.length)([...e]),[...document.getElementsByClassName("card-likes-txt")].forEach((async e=>{await g(e)}))})),window.addEventListener("click",(async e=>{const t=e.target;if(t.classList.contains("card-likes")){const e=t.getAttribute("data-id");await(async e=>{await fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:e})})})(e);const n=t.parentElement.previousElementSibling.lastChild.previousSibling;await g(n)}})),window.handleCommentClick=async e=>{const[t,n,r,i,a]=e;await(async(e,t,n,r,i,a)=>{const o=await w(e),s=await(async e=>(await f()).splice(0).filter((t=>parseInt(t.id,10)===e))[0].cookinginstruction)(e),c=document.createElement("div");c.setAttribute("class","popup"),c.setAttribute("id","popup");const d=document.createElement("div");d.setAttribute("class","upperpopup");const l=document.createElement("figure");l.setAttribute("class","upperpopup_figure");const p=document.createElement("img");p.setAttribute("src",`${r}`),p.setAttribute("id","legendimage"),p.setAttribute("class","image_u"),p.setAttribute("alt","image"),p.setAttribute("width","250"),l.appendChild(p);const u=document.createElement("a");u.setAttribute("href","#"),u.setAttribute("class","close_container"),u.setAttribute("id","close");const m=document.createElement("i");m.setAttribute("class","lni lni-close close"),u.appendChild(m),d.appendChild(l),d.appendChild(u);const h=document.createElement("div");h.setAttribute("class","middlepopup");const b=document.createElement("div");b.setAttribute("class","middlepop_simple_titles");const g=document.createElement("h3");g.setAttribute("class","detail"),g.innerText="Name: ";const A=document.createElement("p");A.setAttribute("class","detail_p"),A.innerText=`${t}`,g.appendChild(A);const C=document.createElement("h3");C.setAttribute("class","detail"),C.innerText="Category: ";const E=document.createElement("p");E.setAttribute("class","detail_p"),E.innerText=`${n}`,C.appendChild(E);const T=document.createElement("h3");T.setAttribute("class","detail"),T.innerText="Origin: ";const _=document.createElement("p");_.setAttribute("class","detail_p"),_.innerText=`${i}`,T.appendChild(_),b.appendChild(g),b.appendChild(C),b.appendChild(T);const L=document.createElement("article"),k=document.createElement("h3");k.setAttribute("class","detail2"),k.innerText="Instruction";const S=document.createElement("p");S.setAttribute("class","detail_p"),S.innerText=`${s}`,L.appendChild(k),L.appendChild(S),h.appendChild(b),h.appendChild(L);const $=document.createElement("article"),O=document.createElement("h3");O.setAttribute("class","detail detail3"),O.innerText="",v(O,o),$.appendChild(O);const M=document.createElement("div");M.setAttribute("class","comment_holder"),$.appendChild(M),y(M,o);const j=document.createElement("form");j.setAttribute("class","popup_form"),j.setAttribute("id","form");const I=document.createElement("h3");I.setAttribute("class","detail detail4"),I.innerText="Add a Comment";const N=document.createElement("input");N.setAttribute("name","username"),N.setAttribute("class","detail_p"),N.setAttribute("id","username"),N.setAttribute("minlength","5"),N.setAttribute("placeholder","Your name"),N.setAttribute("required",!0),N.setAttribute("type","text");const B=document.createElement("input");B.setAttribute("name","insight"),B.setAttribute("class","detail_p"),B.setAttribute("value"," "),B.setAttribute("id","insight"),B.setAttribute("minlength","1"),B.setAttribute("placeholder","Your name"),B.setAttribute("required",!0),B.setAttribute("type","text");const z=document.createElement("button");z.setAttribute("type","submit"),z.setAttribute("class","button1"),z.setAttribute("id","comment"),z.innerText="Comment",j.appendChild(I),j.appendChild(N),j.appendChild(B),j.appendChild(z),c.appendChild(d),c.appendChild(h),c.appendChild($),c.appendChild(j),x.appendChild(c),u.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("popup").classList.remove("popup2"),x.innerHTML="",document.body.classList.remove("body-y-scroll")}));const H=document.getElementById("form");H.addEventListener("submit",(async t=>{if(t.preventDefault(),201===(await fetch(a,{method:"POST",body:JSON.stringify({item_id:e,username:H.username.value,comment:H.insight.value}),headers:{"Content-Type":"application/json; charset=UTF-8"}})).status){M.innerHTML="",O.innerHTML="",document.getElementById("form").reset();const t=await w(e);y(M,t),v(O,t)}}))})(t,n,r,i,a,"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments");const o=document.getElementById("popup");document.body.classList.add("body-y-scroll"),o.classList.add("popup2")}})()})();