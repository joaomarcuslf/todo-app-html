!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e,n){},function(t,e){var n=document.querySelector("[data-lists]"),r=document.querySelector("[data-new-list-form]"),a=document.querySelector("[data-new-list-input]"),i=document.querySelector("[data-delete-list-button]"),o=document.querySelector("[data-list-display-container]"),u=document.querySelector("[data-list-title]"),l=document.querySelector("[data-list-count]"),c=document.querySelector("[data-tasks]"),d=document.getElementById("task-template"),s=document.querySelector("[data-new-task-form]"),f=document.querySelector("[data-new-task-input]"),m=document.querySelector("[data-clear-complete-tasks-button]"),p=JSON.parse(localStorage.getItem("task.lists"))||[],v=localStorage.getItem("task.selectedListId");function y(){S(),g()}function S(){localStorage.setItem("task.lists",JSON.stringify(p)),localStorage.setItem("task.selectedListId",v)}function g(){b(n),p.forEach((function(t){var e=document.createElement("li");e.dataset.listId=t.id,e.classList.add("list-name"),e.innerText=t.name,t.id===v&&e.classList.add("active-list"),n.appendChild(e)}));var t=p.find((function(t){return t.id===v}));null==v?o.style.display="none":(o.style.display="",u.innerText=t.name,k(t),b(c),function(t){t.tasks.forEach((function(t){var e=document.importNode(d.content,!0),n=e.querySelector("input");n.id=t.id,n.checked=t.complete;var r=e.querySelector("label");r.htmlFor=t.id,r.append(t.name),c.appendChild(e)}))}(t))}function k(t){var e=t.tasks.filter((function(t){return!t.complete})).length,n=1===e?"task":"tasks";l.innerText="".concat(e," ").concat(n," remaining")}function b(t){for(;t.firstChild;)t.removeChild(t.firstChild)}n.addEventListener("click",(function(t){"li"===t.target.tagName.toLowerCase()&&(v=t.target.dataset.listId,y())})),c.addEventListener("click",(function(t){if("input"===t.target.tagName.toLowerCase()){var e=p.find((function(t){return t.id===v}));e.tasks.find((function(e){return e.id===t.target.id})).complete=t.target.checked,S(),k(e)}})),m.addEventListener("click",(function(t){var e=p.find((function(t){return t.id===v}));e.tasks=e.tasks.filter((function(t){return!t.complete})),y()})),i.addEventListener("click",(function(t){p=p.filter((function(t){return t.id!==v})),v=null,y()})),r.addEventListener("submit",(function(t){t.preventDefault();var e=a.value;if(null!=e&&""!==e){var n,r=(n=e,{id:Date.now().toString(),name:n,tasks:[]});a.value=null,p.push(r),y()}})),s.addEventListener("submit",(function(t){t.preventDefault();var e=f.value;if(null!=e&&""!==e){var n,r=(n=e,{id:Date.now().toString(),name:n,complete:!1});f.value=null,p.find((function(t){return t.id===v})).tasks.push(r),y()}})),g()}]);