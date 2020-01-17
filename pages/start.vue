<template>
  <main class="flex flex-wrap">
    <CombatCard :playerName="getPlayerName" :isPlayer="true" :char="getPC" />
    <CombatCard :char="getRandomCharacter" player-name="Enemy" />
    <section class="w-full flex flex-wrap justify-between px-4">
      <article class="w-3/12 h-16 bg-gray-400"></article>
      <article class="w-3/12 h-16 bg-gray-400"></article>
      <article class="w-3/12 h-16 bg-gray-400"></article>
      <article class="w-2/12 h-16 bg-gray-400"></article>

      <article class="w-3/12 h-16 bg-gray-400 mt-2"></article>
      <article class="w-3/12 h-16 bg-gray-400 mt-2"></article>
      <article class="w-3/12 h-16 bg-gray-400 mt-2"></article>
      <article class="w-2/12 h-16 bg-gray-400 mt-2"></article>
    </section>
    <section class="w-full">
      <ul>
        <li>Combat Starts</li>
      </ul>
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CombatCard from '~/components/CombatCard'
export default {
  components: {
    CombatCard
  },
  computed: {
    ...mapGetters('player', ['getPC', 'getPlayerName']),
    ...mapGetters('characters', ['getRandomCharacter'])
  },
  methods: {
    ...mapActions('player', ['setPlayerName'])
  }
}
</script>
