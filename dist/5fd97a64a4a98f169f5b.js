(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{380:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"reviews"},[i("div",{staticClass:"container reviews__container"},[i("h2",{staticClass:"section-title"},[t._v('Блок "Отзывы"        ')]),t.editMode?i("form",{staticClass:"form reviews__form",on:{submit:function(e){return e.preventDefault(),t.addNewReview(e)}}},[i("div",{staticClass:"form__wrapper"},[i("h3",{staticClass:"form__title"},[t._v("Новый отзыв")]),i("div",{staticClass:"divider"}),i("div",{staticClass:"form__content"},[i("div",{staticClass:"form__content-left"},[i("div",{staticClass:"user__avatar user__avatar--big user__avatar--blue"}),i("label",{staticClass:"form__block form__block--vertical"},[i("input",{staticClass:"form__block-field form__block-field--hidden",attrs:{type:"file"},on:{change:t.handleFile}}),i("a",{staticClass:"user__avatar-link"},[t._v("Добавить фото")])])]),i("div",{staticClass:"form__content-right"},[i("div",{staticClass:"form__row"},[i("label",{staticClass:"form__block form__block--vertical form__block--bottomline form__block--fullwidth"},[i("span",{staticClass:"form__block-title"},[t._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.review.author,expression:"review.author"}],staticClass:"form__block-field form__block-field--bottompadding",attrs:{type:"text"},domProps:{value:t.review.author},on:{input:function(e){e.target.composing||t.$set(t.review,"author",e.target.value)}}})])]),i("div",{staticClass:"form__row"},[i("label",{staticClass:"form__block form__block--vertical form__block--bottomline form__block--fullwidth"},[i("span",{staticClass:"form__block-title"},[t._v("Титул автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.review.occ,expression:"review.occ"}],staticClass:"form__block-field form__block-field--bottompadding",attrs:{type:"text"},domProps:{value:t.review.occ},on:{input:function(e){e.target.composing||t.$set(t.review,"occ",e.target.value)}}})])]),i("div",{staticClass:"form__row"},[i("label",{staticClass:"form__block form__block--vertical form__block--fullwidth"},[i("span",{staticClass:"form__block-title"},[t._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.review.text,expression:"review.text"}],staticClass:"form__block-field form__block-field--bordered",domProps:{value:t.review.text},on:{input:function(e){e.target.composing||t.$set(t.review,"text",e.target.value)}}})])]),i("div",{staticClass:"form__buttons"},[i("button",{staticClass:"cancel-button cancel-button--purple",attrs:{type:"button"},on:{click:function(e){return t.changeEditMode(!1)}}},[t._v("Отмена")]),i("button",{staticClass:"save-button save-button--purple",attrs:{type:"submit"}},[t._v("Сохранить")])])])])])]):t._e(),i("div",{staticClass:"reviews__content reviews__content--fullwidth"},[i("ul",{staticClass:"reviews__list"},[i("li",{staticClass:"reviews__item reviews__item--new"},[i("div",{staticClass:"template"},[i("button",{staticClass:"add-button add-button--big-bordered",attrs:{type:"button"},on:{click:function(e){return t.changeEditMode(!0)}}}),i("div",{staticClass:"works__template-title"},[t._v("Добавить Отзыв")])])]),i("li",{staticClass:"reviews__item review"},[i("reviewItem")],1)])])])])};o._withStripped=!0;var s=i(130);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={data:function(){return{editMode:!1,review:{photo:{},author:"",occ:"",text:""}}},components:{reviewItem:function(){return i.e(8).then(i.bind(null,385))}},methods:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){a(t,e,i[e])})}return t}({handleFile:function(t){var e=t.target.files[0];this.review.photo=e;var i=new FormData;i.append("photo",this.review.photo),this.$axios.post("/reviews",i)}},Object(s.b)("reviews",["addReview"]),{changeEditMode:function(t){this.editMode=t},addNewReview:function(){this.addReview(this.review)}})},l=i(93),n=Object(l.a)(r,o,[],!1,null,null,null);n.options.__file="src/admin/components/pages/reviews.vue";e.default=n.exports}}]);