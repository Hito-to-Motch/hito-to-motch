<template>
    <section class="section">
        <font size="5">Signup</font><br><br>
        <div class="signup-form">
        Email
    <b-field>
      <b-input placeholder="Your Email"
                v-model="email"
                type="email"
                icon="email"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick">
      </b-input>
    </b-field>
    Password
    <b-field>
      <b-input type="password"
                v-model="password"
                placeholder="Your Password"
                icon="key"
                icon-right="close-circle"
                icon-right-clickable
                password-reveal
                >
      </b-input>
    </b-field><br>
        <b-button type="is-primary" expanded>Next</b-button>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'

/* Buefy */

  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      isEmailError(){
        return "Emailは必須項目です"
      },
      TypeCorrect(){
        return "is-danger"
      },
    }
  }
</script>