<template>
  <div class="LoginDetection">
    <div v-if="user != null">
      <b-button type="is-primary" @click="Signout">Signout</b-button>
    </div>
    <div v-else>
      <NuxtLink to="/signin">
        <b-button type="is-primary">Signin</b-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import auth from "~/store/auth.js"
export default {
  data(){
    return{
      user: this.state
    };
  },
  methods:{
    async Signout(){
      try{
        this.$store.commit('auth/delUser')
      } catch(e){
        alert("失敗",e.message)
      }
    }
  }
}
</script>
