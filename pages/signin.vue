<template>
  <section class="section">
    サインイン
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="signin">サインイン</button>
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
      try {
        const { user, } = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$store.commit('setUser', user)
        console.log(user)
      } catch(e) {
        alert("失敗:", e.message)
      }
    }
  }
}
</script>