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
        this.$store.commit('auth/setUser', this.deepCopy(user))
        console.log(this.$store.state.auth.user);
      } catch(e) {
        alert("失敗:", e.message)
      }
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj))
    }
  }
}
</script>