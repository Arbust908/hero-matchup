<template>
  <main class="flex flex-wrap">
    <section class="w-1/2 bg-green-300 p-2">
      <h2 class="gray-400 text-sm">{{ getPlayerName }}</h2>
      <article class="flex flex-col justify-center">
        <CharacterImg
          :sorce="getPC.img"
          :description="getPC.fullName"
          class="flex justify-center pb-4"
        />
        <h3 class="text-center leading-none">{{ getPC.fullName }}</h3>
      </article>
    </section>
    <section class="w-1/2 bg-red-300">
      <h2>Enemy</h2>
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CharacterImg from '~/components/CharacterImg'
export default {
  components: {
    CharacterImg
  },
  computed: {
    ...mapGetters('player', ['getPC', 'getPlayerName'])
  },
  methods: {
    ...mapActions('player', ['setPlayerName'])
  }
}
</script>
