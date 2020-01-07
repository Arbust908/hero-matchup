<template>
  <div>
    <ul>
      <li v-for="pc in characters" :key="pc.id">
        <nuxt-link :to="`/characters/${pc.slug}`">
          {{ pc.fullName }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    characters() {
      return this.$store.state.characters.all
    }
  }
}
</script>
