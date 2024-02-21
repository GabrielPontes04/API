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

      // Selecciona todos los elementos <section> dentro de la lista
      var sidebarGroups = document.querySelectorAll('.sidebar-links .sidebar-group');

      var nada = document.querySelectorAll('.site-name can-hide');
      console.log(nada);
      // Itera sobre cada elemento y realiza las modificaciones necesarias
      sidebarGroups.forEach(function (group) {
        // Encuentra el elemento del icono dentro de este grupo
        var icon = group.querySelector('.arrow');

        // Oculta el icono cambiando su estilo
        icon.style.display = 'none';

        // También puedes cambiar el icono por completo si lo deseas
        // Por ejemplo, puedes cambiar la clase CSS del icono para usar otro icono
        // icon.classList.remove('right');
        // icon.classList.add('down');
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
