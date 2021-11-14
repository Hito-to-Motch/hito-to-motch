<template>
    <section class="Signup">
        <font size="6">Signup</font><br><br>
        <b-field 
          label="メールアドレス"
          :type="{'is-danger': isEmailError()}"
          :message="isEmailError()"
          horizontal
        >
          <b-input 
            type="text"
            name="email" 
            v-model="email"
            v-validate="'required|email'" 
            data-vv-as="メールアドレス"                
          ></b-input>
        </b-field>  
        <b-field label="Email"
        
            message="">
            <b-input type="email"
                value="">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value=""
                password-reveal
                maxlength="30">
            </b-input>
        </b-field>
        <b-button type="is-primary">Next</b-button>
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
        return "メールは必須項目です"
      },
      TypeCorrect(){
        return "is-danger"
      },
    }
  }
</script>