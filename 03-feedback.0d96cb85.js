let e={};const t=document.querySelector(".feedback-form");!function(){const a=localStorage.getItem("feedback-form-state");if(a){const n=JSON.parse(a);Object.entries(n).forEach((([a,n])=>{t.elements[a].value=n,e[a]=n}))}}(),t.addEventListener("input",(function(t){e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))})),t.addEventListener("submit",(function(a){""===t.elements.email.value||""===t.elements.message.value?alert("Потрібно заповнити всі поля вводу!"):(a.preventDefault(),a.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(e),e={})}));
//# sourceMappingURL=03-feedback.0d96cb85.js.map