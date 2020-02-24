<template lang="pug">
  .root-container
      header.header-container
        app-header
      section.menu-container
        app-menu
      main.main.admin__main
        router-view  
</template>

<script>
export default {
  components: {
    appHeader: () => import("./components/app-header"),
    appMenu: () => import("./components/app-menu")
  }
};
</script>