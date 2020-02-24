<template lang="pug">
  section.about
    .container.section-container
      .about__top
        h2.section-title.section-title--black.section-title--small Обо мне
        button(id="add-button").add-button.add-button--small
        label.add-button__label(for="add-button") Добавить группу
      .about__content
        ul.about__groups-list
          li.about__groups-item.group.group--new
            form.form.about__form(
              @submit.prevent="addNewCategory"
              )
              .form__wrapper
                .form__top
                  .form__row
                    .form__block.form__block--halfwidth
                      input(
                        v-model="title"
                        placeholder="Название новой группы"
                        ).form__block-field.form__block-field--bottomline.form__block-field--semibold
                    .form__buttons
                      button(type="submit").save-button V
                        //- +icon('tick','save-button__pic')
                      //- button.cancel-button X
                        //- +icon('remove','cancel-button__pic')
                  hr.form__hr
                .form__bottom
                  .form__row.form__row--halfwidth
                    .form__block
                      input.form__block-field.form__block-field--padding.form__block-field--bottomline(type="text" placeholder="Новый навык")
                    .form__block.form__block-percents
                      input.form__block-field.form__block-field--padding.form__block-field--bottomline(type="text" placeholder="100")
                      span.form__block-percent %
                    .control-buttons
                      button.add-button
          li.about__groups-item.group(v-for="category in categories" :key="category.id")
            skillsGroup(
              v-if=""
              :category="category"
            )
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsGroup: () => import("./../skills-group")
  },
  data: () => ({
    title: ""
  }),
  computed : {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>