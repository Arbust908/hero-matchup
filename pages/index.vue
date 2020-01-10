<template>
  <main>
    <Logo />
    <h1 class="text-2xl uppercase underline">Hero Matchup</h1>
    <section class="my-4">
      <CharacterSelect
        v-for="(char, i) in characters"
        :key="i"
        :character="char"
      />
    </section>
    <nuxt-link
      :to="{ name: 'characters' }"
      class=" px-4 py-2 rounded shadow hover:bg-red-400 hover:text-red-100"
    >
      All Characters
    </nuxt-link>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CharacterSelect from '~/components/CharacterSelect.vue'

export default {
  head() {
    return {
      title: 'Hero Match-up',
      meta: [
        { name: 'twitter:title', content: 'Hero Match-up' },
        { name: 'twitter:description', content: 'Hero Match-up' },
        { name: 'twitter:image', content: 'Hero Match-up' },
        { name: 'twitter:card', content: 'summery_large_image' }
      ]
    }
  },
  components: {
    Logo,
    CharacterSelect
  },
  computed: {
    characters() {
      return this.$store.state.characters.all
    }
  }
}
</script>
