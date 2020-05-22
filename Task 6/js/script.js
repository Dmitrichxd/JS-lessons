let menuItems = document.getElementsByClassName("menu-item"),
    newMenuItem = document.createElement("li");

menuItems[1].innerHTML = 'Второй пункт';
menuItems[2].innerHTML = 'Третий пункт';
newMenuItem.classList.add("menu-item");
newMenuItem.innerHTML = 'Пятый пункт';
document.getElementsByClassName("menu")[0].appendChild(newMenuItem);
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";
document.getElementById("title").innerText = "Мы продаем только подлинную технику Apple";
document.getElementsByClassName("adv")[0].remove();
document.getElementById("prompt").innerText = "А как Вы относитесь к технике Apple?";