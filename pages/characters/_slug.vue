<template>
  <div>
    <h1 class="text-3xl uppercase underline pb-8">{{ character.name }}</h1>
    <CharacterStats :character="character" />
    <ul class="flex w-11/12 bg-gray-200 p-8 rounded-lg my-6 mx-auto">
      <li
        v-for="pc in otherCharacters"
        :key="pc.id"
        class="rounded shadow bg-white mx-2 mb-2 px-4 py-2 hover:bg-red-400 hover:text-red-100"
      >
        <nuxt-link :to="`/characters/${pc.slug}`">
          <CharacterImg :sorce="pc.img" :description="pc.fullName" />
          <!-- {name: characters-slug, params: {slug: pc.slug}} -->
          {{ pc.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CharacterStats from '~/components/CharacterStats'
import CharacterImg from '~/components/CharacterImg'
export default {
  components: {
    CharacterImg,
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
    ...mapGetters('characters', [
      'getCharacters',
      'getCharacter',
      'getCharactersExept'
    ]),
    character() {
      return this.getCharacter(this.name)
    },
    otherCharacters() {
      return this.getCharactersExept(this.name)
    }
  }
}
</script>
