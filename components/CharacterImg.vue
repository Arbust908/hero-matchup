<template>
  <div>
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="w-16 h-16 object-cover shadow rounded-lg p-1"
    />
  </div>
</template>
<script>
export default {
  props: {
    sorce: {
      type: String,
      default: 'default.png'
    },
    description: {
      type: String,
      default: 'Default'
    }
  },
  computed: {
    imageSrc() {
      return require(`~/assets/img/characters/${this.sorce}`)
    },
    imageAlt() {
      return `Image of ${this.description}`
    }
  }
}
</script>
