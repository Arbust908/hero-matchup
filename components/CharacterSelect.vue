<template>
  <article
    class="flex p-2 bg-gray-300 rounded hover:shadow-lg hover:bg-gray-400 text-gray-800"
  >
    <img :src="imageSrc" :alt="imageAlt" class="rounded w-16 mr-2" />
    <div class="flex flex-col justify-between">
      <h3>{{ character.fullName }}</h3>
      <StarRating :stars="2.5" class="text-orange-700" />
    </div>
    <div class="flex flex-col ml-4 justify-around">
      <nuxt-link :to="`/characters/${character.slug}`">
        <fa
          :icon="['far', 'book']"
          class="text-3xl hover:text-teal-700"
          title="See More"
        />
      </nuxt-link>
      <fa
        :icon="['far', 'square']"
        @click=""
        class="text-3xl hover:text-teal-700"
        title="Celect"
      />
    </div>
  </article>
</template>
<script>
import StarRating from '~/components/StarRating.vue'
export default {
  components: {
    StarRating
  },
  props: {
    character: {
      type: Object,
      default() {
        return {
          id: 0,
          name: 'Li',
          img: 'li.png',
          fullName: 'Li Faierlif, Monk of the Heavens',
          slug: 'li',
          str: 14,
          dex: 20,
          con: 20,
          wis: 18,
          int: 12,
          cha: 8,
          luk: 99,
          level: 10,
          items: [],
          attacks: []
        }
      }
    }
  },
  data() {
    return {
      selectedCharacter: null
    }
  },
  computed: {
    imageSrc() {
      return require(`~/assets/img/characters/${this.character.img}`)
    },
    imageAlt() {
      return `Image of ${this.character.fullName}`
    }
  },
  methods: {
    selectChar(character) {
      this.$store.state.player = 
      this.$selectedCharacter = character
    }
  }
}
</script>
