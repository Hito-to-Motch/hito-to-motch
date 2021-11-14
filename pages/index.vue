<template>
  <section class="section">
    <div v-for="(item, index) in items" :key="index">
      <div class="columns is-moblie">
        <n-card
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :link="item.link"
        ></n-card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";
import NCard from "~/components/NCard";
import firebase from "~/plugins/firebase.js";

export default {
  name: "HomePage",
  mounted() {
    let fref = firebase.database().ref();
    fref.on("value", (snapshot) => {
      const data = snapshot.val();
      const redata = []
      for (let k in snapshot.val()) {
        let v = data[k]
        redata.push({
          title: v.title,
          description: v.description,
          image: "http://shiramine.info/about/img_drn-01.jpg",
          link: `/project/page?id=${k}`,
        })
      }
      this.items = redata;
    });
  },
  components: {
    Card,
    NCard,
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
