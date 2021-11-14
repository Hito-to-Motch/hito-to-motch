<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column is-three-fifths">
            <p class="title is-4">
              {{ title }}
            </p>
            <p class="content">
              {{ description }}
            </p>
          </div>
          <div class="column">
            <div class="card-picture has-text-centered">
              <b-image
              :src="image"
              ratio="6by4"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
            <nuxt-link :to="{ path: link }" class="card-footer-item">Details</nuxt-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    title: {
      type: String,
      required: true
    },
    description:{
      type: String,
      required:true
    },
    image:{
      type: String,
      required:true
    },
    link:{
      type: String,
      required:true
    }
  }
}
</script>