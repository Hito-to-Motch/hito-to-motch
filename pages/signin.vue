<template>
  <section class="section">
    <font size="5">Signin</font><br><br>
  <div class="Signin-form">
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
    <div class="buttons">
            <b-button type="is-primary" expanded @click="signin">Signin</b-button>
    </div>
  </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async signin() {
      if(this.email == ''| this.password == ''){
        alert("EmailとPasswordを入力してください．")
      }
      else{
      try {
        const { user, } = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$store.commit('auth/setUser', this.deepCopy(user))
        console.log(this.$store.state.auth.user)
      } catch(e) {
        alert("EmailかPasswordが違います．", e.message)
      }
      }
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    clearIconClick() {
                this.email = '';
    }
  }
}
</script>
