<template>
  <main class="flex flex-col items-center">
    <h1 class="text-2xl uppercase underline mb-4">Hero Matchup</h1>
    <article class="pb-4 flex flex-col">
      <label for="playerName" class="text-left">Player Name</label>
      <input
        v-model="playerName"
        @input="setName()"
        type="text"
        name="playerName"
        placeholder="YourName"
        class="border-b border-gray-600"
      />
    </article>
    <nuxt-link
      v-show="getPC"
      to="/start"
      class="px-4 py-2 rounded shadow hover:bg-red-400 hover:text-red-100"
    >
      Let's Start {{ playerName }}
    </nuxt-link>
    <section class="my-4">
      <CharacterSelect />
    </section>
    <!-- <nuxt-link
      :to="{ name: 'characters' }"
      class=" px-4 py-2 rounded shadow hover:bg-red-400 hover:text-red-100"
    >
      All Characters
    </nuxt-link> -->
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    CharacterSelect
  },
  data() {
    return {
      playerName: 'Guest'
    }
  },
  computed: {
    ...mapGetters('player', ['getPC', 'getPlayerName'])
  },
  created() {
    this.playerName = this.getPlayerName
  },
  methods: {
    ...mapActions('player', ['setPlayerName']),
    setName() {
      if (this.playerName !== 'Guest') {
        this.setPlayerName(this.playerName)
      }
    }
  }
}
</script>
