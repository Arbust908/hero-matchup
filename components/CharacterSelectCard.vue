<template>
  <article
    :class="isSelectedBox()"
    class="flex justify-between p-2 rounded cursor-pointer hover:shadow-lg text-gray-800 mb-4 w-64"
  >
    <img :src="imageSrc" :alt="imageAlt" class="rounded w-16 mr-2" />
    <div class="flex flex-col justify-between flex-grow">
      <h3 class="uppercase">{{ character.name }}</h3>
      <StarRating :stars="character.ranking" class="text-orange-700" />
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
        :icon="isSelectedChar()"
        class="text-3xl hover:text-teal-700"
        title="Select"
      />
    </div>
  </article>
</template>
<script>
import { mapGetters } from 'vuex'
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
          attacks: [],
          ranking: 2.5
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
    },
    isSelected() {
      return this.getPC && this.getPC.name === this.character.name
    },
    ...mapGetters('player', ['getPC'])
  },
  methods: {
    isSelectedChar() {
      return this.isSelected ? ['fas', 'check-square'] : ['far', 'square']
    },
    isSelectedBox() {
      return this.isSelected
        ? 'bg-red-200 hover:bg-red-300'
        : 'bg-gray-300 hover:bg-gray-400'
    }
  }
}
</script>
