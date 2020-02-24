<template lang="pug">
  .header
    .container.header__container
      .header__info
        .user.header__user
          .user__avatar.user__avatar--small
            img(src="../../images/content/user.jpg").user__avatar-pic
          .user__name Роман Усков
        .user__title Панель администратора
      .header__buttons
        a.exit-button(@click="logoutUser") Выйти
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions("user",["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login")
    }
  }  
}
</script>