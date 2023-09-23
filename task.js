document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом "menu__link"
  const menuLinks = document.querySelectorAll(".menu__link");

  // Добавляем обработчик события click для каждого элемента
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Предотвращаем переход по ссылке, если есть вложенное меню
      if (link.nextElementSibling && link.nextElementSibling.classList.contains("menu_sub")) {
        event.preventDefault();

        // Находим ближайший родительский элемент с классом "menu"
        const menu = link.closest(".menu");

        // Находим все вложенные меню внутри найденного меню
        const subMenus = menu.querySelectorAll(".menu_sub");

        // Закрываем все вложенные меню, кроме текущего
        subMenus.forEach(function (subMenu) {
          if (subMenu !== link.nextElementSibling) {
            subMenu.classList.remove("menu_active");
          }
        });

        // Открываем или закрываем текущее вложенное меню
        link.nextElementSibling.classList.toggle("menu_active");
      }
    });
  });
});