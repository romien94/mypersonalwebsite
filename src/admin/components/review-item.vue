<template lang="pug">
  .review-container
    .user.review__user
      .user__avatar.user__avatar--small file
        //- +image('users/dmitry.png','user__avatar-pic')
      .user__info
        .user__info-name author
        .user__info-occupation occ
    hr.divider.divider--gray
    .review__commentary
      p text
    .control-buttons
      .control-buttons__block
        span.control-buttons__block-text Править
        button.edit-button
          //- +icon('pencil','edit-button__pic edit-button__pic--purple')
      .control-buttons__block
        span.control-buttons__block-text Удалить
        button.delete-button
          //- +icon('remove','delete-button__pic delete-button__pic--red')
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      review: {
        file: '',
        author: '',
        occ: '',
        text: ''
      }
    }
  }
}
</script>