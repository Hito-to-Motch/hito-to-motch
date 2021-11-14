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
export default {
  name: 'HomePage',
  
  components: {
    Card
  },
  data(){
    return{
      items: jsonfile
    };
  }
}
</script>
