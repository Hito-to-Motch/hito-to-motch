<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <p> {{ desc }} </p>
    <div style="height:1000px">
      <kiji style="height:100%" :doc="doc"/>
    </div>
  </div>
</template>
 
<script>
import Kiji from '~/components/Kiji'
import firebase from "~/plugins/firebase.js";

export default {
  data() {
    return {
      title: 'タイトル',
      desc: '',
      doc: '',
    }
  },
  components: {
    Kiji,
  },
  mounted() {
    let fref = firebase.database().ref(this.$route.query.id);
    fref.on("value", (snapshot) => {
      const data = snapshot.val();
      this.title = data.title
      this.desc = data.description
      this.doc = data.document
      console.log(data);
    });
    console.log(this.$route.query.id);
  }
}
</script>