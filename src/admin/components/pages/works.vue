<template lang="pug">
  section.works
    .container.works__container
      h2.section-title.section-title--black.section-title--small Блок "Работы"
      form.form.works__form()
        .form__wrapper
          h3.form__title Редактирование работы
          .divider
          .form__content.form__content--row
            .form__content-left
              .form__row
                label.form__block.form__block--file
                  div.form__block-field--visual.file-load
                    .file-load__title Перетащите или загрузите для загрузки изображения
                    a.file-load__button Загрузить
                  input.form__block-field(type="file")
            .form__content-right
              .form__row
                label.form__block.form__block--fullwidth.form__block--bottomline.form__block--vertical
                  span.form__block-title Название
                  input.form__block-field.form__block-field--bottompadding(type="text" placeholder="")
              .form__row
                label.form__block.form__block--fullwidth.form__block--bottomline.form__block--vertical
                  span.form__block-title Ссылка
                  input.form__block-field.form__block-field--bottompadding(type="link" placeholder="")
              .form__row
                label.form__block.form__block--fullwidth.form__block--vertical
                  span.form__block-title Описание
                  textarea.form__block-field.form__block-field--bordered(type="link" placeholder="")
              .form__row.form__row--vertical
                label.form__block.form__block--fullwidth.form__block--bottomline.form__block--vertical
                  span.form__block-title Добавление тэга
                  input.form__block-field.form__block-field--bottompadding(type="link" placeholder="")
                  ul.tags__list
                    li.tags__item HTML5
                    li.tags__item CSS
                    li.tags__item Javascript
              .form__buttons
                button.cancel-button.cancel-button--purple Отмена
                button(type="submit").save-button.save-button--purple Сохранить
      .works__content
        ul.works__list
          li.works__item.works__item--template
            .template
              a.add-button.add-button--big-bordered
              .works__template-title Добавить работу
          li.works__item.work()
            .work__display
              .work__picture
                //- +image("content/slider/preview-1.png","work__picture-pic")
              .work__tags
                .tags
                  ul.tags__list
                    li.tags__item HTML5
                    li.tags__item CSS
                    li.tags__item Javascript
            .work__info
              .work__content
                .work__title Сайт школы образования
                .work__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work__link https://loftschool.com
              .control-buttons
                button.edit-button 
                  span.edit-button__text Править
                  //- +icon('pencil','edit-button__pic edit-button__pic--purple')
                button.delete-button 
                  span.delete-button__text Удалить
                  //- +icon('remove','delete-button__pic delete-button__pic--red')
</template>

