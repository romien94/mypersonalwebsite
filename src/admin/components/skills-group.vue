<template lang="pug">
  .skill-container
    form.form.about__form(@submit.prevent="addNewSkill")
      .form__wrapper
        .form__top
          .form__row
            .form__block.form__block--halfwidth
              input(:value="category.category" disabled).form__block-field.form__block-field--bottomline.form__block-field--semibold
            .form__buttons
              button.save-button
                //- +icon('tick','save-button__pic')
              button.cancel-button
                //- +icon('remove','cancel-button__pic')
          hr.form__hr
        .form__content
            skillItem(
              v-for="skill in category.skills"
              :key="skill.id"
              :skill="skill"
            )
        .form__bottom
            .form__row.form__row--halfwidth
              .form__block
                input.form__block-field.form__block-field--padding.form__block-field--bottomline(type="text" placeholder="Новый навык" v-model="skill.title")
              .form__block.form__block-percents
                input.form__block-field.form__block-field--bottomline(type="text" placeholder="100" v-model="skill.percent")
                span.form__block-percent %
              .control-buttons
                  button(type="submit" :disabled="loading").add-button
</template>

<script>
import {mapActions} from 'vuex';
export default {
  components: {
    skillItem: () => import('./skill-item')
  },
  data() {
    return {
      loading: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    }
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills",["addSkill"]),
    async addNewSkill() {
      try {
        this.loading = true;
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
      } finally {
        this.loading = false;
      }      
    }
  }
}
</script>