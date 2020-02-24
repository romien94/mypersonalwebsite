<template lang="pug">
  .form__row
    .form__block.form__block-title
      input.form__block-field(type="text" v-model="editedSkill.title" :disabled="editMode")
    .form__block.form__block-percents
      input.form__block-field(type="text" v-model="editedSkill.percent" :disabled="editMode")
      span.form__block-percent %
    .control-buttons
      button(type="button" @click="editMode = !editMode").edit-button edi
        //- +icon('pencil','edit-button__pic')
      button(type="button" @click="removeExistedSkill" v-if="editMode").delete-button del
        //- +icon('trash','delete-button__pic')
      button(type="button" v-if="!editMode" @click="editExistedSkill") save
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      editMode: true,
      editedSkill: {...this.skill}
    }
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill","editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);  
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.skill);  
      } catch (error) {
        
      }
    }
  }
}
</script>