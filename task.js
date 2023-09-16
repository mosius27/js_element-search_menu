document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы с классом "menu__link"
    const menuLinks = document.querySelectorAll(".menu__link");
  
    // Добавляем обработчик события click для каждого элемента
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        // Предотвращаем переход по ссылке
        event.preventDefault();
  
        // Находим ближайший родительский элемент с классом "menu"
        const menu = link.closest(".menu");
  
        // Находим все вложенные меню внутри найденного меню
        const subMenus = menu.querySelectorAll(".menu_sub");
  
        // Скрываем все вложенные меню
        subMenus.forEach(function (subMenu) {
          subMenu.classList.remove("menu_active");
        });
  
        // Если текущий элемент содержит вложенное меню, то открываем его
        const subMenu = link.nextElementSibling;
        if (subMenu && subMenu.classList.contains("menu_sub")) {
          subMenu.classList.toggle("menu_active");
        }
      });
    });
  });