<template>
  <section class="section">
    <div id="innerHTMLtext">
      <div class="columns is-moblie">
        <card title="picture" description="descrition for picture." image="http://shiramine.info/about/img_893-01.jpg" link="http://shiramine.info/about.html"></card>
      </div>
      <div class="columns is-moblie">
        <card title="picture" description="descrition for picture." image="http://shiramine.info/about/img_drn-01.jpg" link="http://shiramine.info/about.html"></card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
export default {
  name: 'HomePage',
  
  components: {
    Card
  }
}
</script>
