<template>
  <section class="my-4">
    <CharacterSelectCard
      v-for="(char, i) in getCharacters"
      :key="i"
      :character="char"
      @click.native="toggleChar(char)"
    />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CharacterSelectCard from '~/components/CharacterSelectCard.vue'

export default {
  components: {
    CharacterSelectCard
  },
  computed: {
    ...mapGetters('characters', ['getCharacters']),
    ...mapGetters('player', ['getPC'])
  },
  methods: {
    ...mapActions('player', ['selectChar', 'deselectChar']),
    toggleChar(character) {
      if (this.getPC && this.getPC.name === character.name) {
        this.deselectChar()
      } else {
        this.selectChar(character)
      }
    }
  }
}
</script>
