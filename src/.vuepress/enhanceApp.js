/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.mixin({
    mounted() {

      var siteName = document.querySelector('span.site-name.can-hide');

      if (siteName) {
        siteName.style.display = 'none';
      }

      var darkThemeToggle = document.getElementById('dark-theme-toggle');
      var logoImage = document.querySelector('.logo');

      // Verificar el estado inicial del checkbox al cargar la página
      if (darkThemeToggle.checked) {
        logoImage.src = "/img/logo.png";
      } else {
        logoImage.src = "/img/logocentrado-preview.png";
      }

      darkThemeToggle.addEventListener('change', function () {
        // Cambiar la imagen dependiendo del estado del checkbox
        if (darkThemeToggle.checked) {
          logoImage.src = "/img/logo.png";
        } else {
          logoImage.src = "/img/logocentrado-preview.png";
        }
      });

      // Selecciona todos los elementos <section> dentro de la lista
      var sidebarGroups = document.querySelectorAll('.sidebar-links .sidebar-group');
      // Itera sobre cada elemento y realiza las modificaciones necesarias
      sidebarGroups.forEach(function (group) {
        // Encuentra el elemento del icono dentro de este grupo
        var icon = group.querySelector('.arrow');
        // Oculta el icono cambiando su estilo
        icon.style.display = 'none';
      });
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        const simularItem = sidebar.getElementsByTagName('section');
        if (simularItem) {
          for (var i = 0; i < simularItem.length; i++) {
            if (simularItem[i].classList.contains("is-sub-group")) {

              simularItem[i].classList.remove("is-sub-group");
            }
          }
        }
      }
    }
  });

}
