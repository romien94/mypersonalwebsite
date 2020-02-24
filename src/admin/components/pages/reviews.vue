<template lang="pug">
  section.reviews
    .container.reviews__container
      h2.section-title Блок "Отзывы"        
      form.form.reviews__form(
        v-if="editMode"
        @submit.prevent="addNewReview"
        )
        .form__wrapper
          h3.form__title Новый отзыв
          .divider
          .form__content
            .form__content-left
              .user__avatar.user__avatar--big.user__avatar--blue
                //- +icon('user','user__avatar-icon')
              label.form__block.form__block--vertical
                input.form__block-field.form__block-field--hidden(type="file" @change="handleFile")
                a.user__avatar-link Добавить фото
            .form__content-right
              .form__row
                label.form__block.form__block--vertical.form__block--bottomline.form__block--fullwidth
                  span.form__block-title Имя автора
                  input.form__block-field.form__block-field--bottompadding(type="text" v-model="review.author")
              .form__row
                label.form__block.form__block--vertical.form__block--bottomline.form__block--fullwidth
                  span.form__block-title Титул автора
                  input.form__block-field.form__block-field--bottompadding(type="text" v-model="review.occ")
              .form__row
                label.form__block.form__block--vertical.form__block--fullwidth
                  span.form__block-title Отзыв
                  textarea.form__block-field.form__block-field--bordered(v-model="review.text")
              .form__buttons
                button.cancel-button.cancel-button--purple(type="button" @click="changeEditMode(false)") Отмена
                button(type="submit").save-button.save-button--purple Сохранить
      .reviews__content.reviews__content--fullwidth
        ul.reviews__list
          li.reviews__item.reviews__item--new
            .template
              button(type="button" @click="changeEditMode(true)").add-button.add-button--big-bordered
              .works__template-title Добавить Отзыв
          li.reviews__item.review
            reviewItem
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      editMode: false,
      review: {
        photo: {},
        author: '',
        occ: '',
        text: ''
      }
    }
  },
  components: {
    reviewItem: () => import("../review-item")
  },
  methods: {
    handleFile(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      const formData = new FormData();
      formData.append("photo",this.review.photo);
      this.$axios.post("/reviews",formData)
    },
    ...mapActions("reviews",["addReview"]),
    changeEditMode(editModeValue) {
      this.editMode = editModeValue;
    }, 
    addNewReview() {
      this.addReview(this.review);
    }
  }
}
</script>