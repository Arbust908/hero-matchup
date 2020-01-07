<template>
  <main>
    <Logo />
    <h1 class="text-2xl uppercase underline">Hero Matchup</h1>
    <nuxt-link
      :to="{ name: 'characters' }"
      class=" px-4 py-2 rounded shadow hover:bg-red-400 hover:text-red-100"
    >
      Choose Character
    </nuxt-link>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

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
    Logo
  }
}
</script>
