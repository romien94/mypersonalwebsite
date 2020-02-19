import Vue from 'vue';
import axios from 'axios';

const baseUrl = 'https://webdev-api.loftschool.com';
const token = '';

const login = {
  template: '',
  data: () => ({
    user: {
      name: '',
      password: ''
    },
    methods: {
      login() {
        axios.post(baseUrl + '/login', this.user).then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error.response.data)
        })
      }
    }
  })
}

const category = {
  template: '',
}