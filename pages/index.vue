<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Free"
        description="Open source on " 
        image="https://picsum.photos/600/400"
      >
      </card>
    </div>
    <div class="columns is-mobile">
      <card
        title="Free1"
        description="Sample"
        image="https://picsum.photos/600/400"
      >
      </card>
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
