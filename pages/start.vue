<template>
  <main class="flex flex-wrap">
    <CombatCard :playerName="getPlayerName" :isPlayer="true" :char="getPC" />
    <CombatCard :char="getRandomCharacter" player-name="Enemy" />
    <section class="w-full flex flex-wrap justify-between px-2">
      <article
        class="w-4/12 h-16 bg-gray-400 text-teal-700 mt-2 text-3xl flex justify-center items-center hover:bg-teal-800 hover:text-gray-200 hover:shadow"
      >
        <fa :icon="['fad', 'swords']" />
      </article>
      <article
        class="w-4/12 h-16 bg-gray-400 text-teal-700 mt-2 text-3xl flex justify-center items-center hover:bg-teal-800 hover:text-gray-200 hover:shadow"
      >
        <fa :icon="['fad', 'shield']" />
      </article>
      <article
        class="w-4/12 h-16 bg-gray-400 text-teal-700 mt-2 text-3xl flex justify-center items-center hover:bg-teal-800 hover:text-gray-200 hover:shadow"
      >
        <fa :icon="['fad', 'heart']" />
      </article>
      <article
        class="w-4/12 h-16 bg-gray-400 text-teal-700 mt-2 text-3xl flex justify-center items-center hover:bg-teal-800 hover:text-gray-200 hover:shadow"
      >
        <fa :icon="['fad', 'book-spells']" />
      </article>
      <article
        class="w-4/12 h-16 bg-gray-400 text-teal-700 mt-2 text-3xl flex justify-center items-center hover:bg-teal-800 hover:text-gray-200 hover:shadow"
      >
        <fa :icon="['fad', 'sparkles']" />
      </article>
      <article
        class="w-4/12 h-16 bg-gray-400 text-teal-700 mt-2 text-3xl flex justify-center items-center hover:bg-teal-800 hover:text-gray-200 hover:shadow"
      >
        <fa :icon="['fad', 'treasure-chest']" />
      </article>
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
