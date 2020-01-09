<template>
  <article>
    <img :src="imageSrc" :alt="imageAlt" />
    <h3>
      {{ character.name }}
      <StarRating />
    </h3>
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
  computed: {
    imageSrc() {
      return require(`~/assets/img/characters/${this.character.img}`)
    },
    imageAlt() {
      return `Image of ${this.character.fullName}`
    }
  }
}
</script>
