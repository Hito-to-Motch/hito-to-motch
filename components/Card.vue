<template>
  <div class="column">
    <div class="card0">
      <div class="card-content">
        <div class="columns">
          <div class="column is-three-fifths">
            <p class="card-title is-4">
              {{ title }}
            </p>
            <p class="card-description is-6">
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
    }
  }
}
</script>