<template>
  <div>
    <h1 class="text-3xl uppercase underline pb-8">{{ character.name }}</h1>
    <CharacterStats :character="character" />
    <ul class="bg-teal-200 p-8 rounded-lg my-6">
      <li
        v-for="pc in characters"
        :key="pc.id"
        class="rounded shadow bg-white mb-2 px-4 py-2 hover:bg-red-400 hover:text-red-100"
      >
        <nuxt-link :to="`/characters/${pc.slug}`">
          <!-- {name: characters-slug, params: {slug: pc.slug}} -->
          {{ pc.fullName }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import CharacterStats from '~/components/CharacterStats'
export default {
  components: {
    CharacterStats
  },
  data() {
    return {
      name: this.$route.params.slug
    }
  },
  head() {
    return {
      title: this.character.fullName + "'s Page"
    }
  },
  computed: {
    character() {
      return this.$store.state.characters.all.find(
        (char) => char.slug === this.name
      )
    },
    characters() {
      return this.$store.state.characters.all.filter(
        (char) => char.slug !== this.name
      )
    }
  }
}
</script>
