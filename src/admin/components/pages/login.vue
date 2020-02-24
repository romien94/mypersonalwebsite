<template lang="pug">
  .login
    .container.login__container
      .login__image
        //- +image('background/rock-bg.png','login__image-pic')
      form(@submit.prevent="login").form.login__form
        .form__wrapper
          .form__top
            .form__title Авторизация
            .form__buttons
              button.close-button
          .form__content
            .form__row
              .form__block
                label.form__label.form__label--user
                  .form__label-left
                      //- +icon("user","form__label-icon form__Label-icon--user") 
                  .form__label-right
                    span.form__field-name Логин
                    input(v-model="user.name").form__field
            .form__row
              .form__block
                label.form__label.form__label--user
                  .form__label-left
                    //- +icon("user","form__label-icon form__Label-icon--user")
                  .form__label-right
                    span.form__field-name Пароль
                    input(v-model="user.password" type="password").form__field
          .form__buttons.form__buttons--center
            button.button Отправить
</template>

<script>
import $axios from './../../requests';
export default {
  data: () => ({
    user: {
      name: '',
      pasword: ''
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post("/login", this.user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`
        this.$router.replace("/");
      } catch (error) {
        
      }
    }
  }
}
</script>