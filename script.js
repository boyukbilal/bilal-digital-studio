const menu=document.getElementById("menu"),links=document.getElementById("links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll("#links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
function demoForm(e){e.preventDefault();document.getElementById("note").textContent="Demo formu çalışıyor. Gerçek projede WhatsApp, e-posta veya CRM'e bağlanabilir.";return false;}