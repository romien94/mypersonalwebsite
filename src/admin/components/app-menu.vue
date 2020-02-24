<template lang="pug">
  nav.menu
    .container.menu__container
      ul.menu__list
        li.menu__item(
          v-for="tab in tabs"
          )
          router-link(
            v-text="tab.title"
            :to="tab.href"
            exact-active-class="active"
          ).menu__link
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {title:"Обо мне", href:"/"},
        {title:"Отзывы", href:"/reviews"},
        {title:"Работы", href:"/works"} 
      ]
    }
  }
}
</script>