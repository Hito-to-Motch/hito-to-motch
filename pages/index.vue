<template>
  <section class="section">
    <div v-for="(item, index) in items" :key="index">
      <div class="columns is-moblie">
        <card :title="item.title" :description="item.description" :image="item.image" :link="item.link"></card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import jsonfile from '~/assets/data.json'
import firebase from '~/plugins/firebase.js'

export default {
  name: 'HomePage',
  mounted() {
    let fref = firebase.database().ref()
    fref.on("value", (snapshot)=> {
      const data = Object.values(snapshot.val())
      const redata = data.map(v => {
        return {
          title: v.title,
          description: v.description,
          image: "http://shiramine.info/about/img_drn-01.jpg",
          link: "http://shiramine.info/about.html"
        }
      })
      this.items = redata
    })
  },
  components: {
    Card
  },
  data(){
    return{
      items: []
    };
  }
}
</script>
