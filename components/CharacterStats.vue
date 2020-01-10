<template>
  <section>
    <CharacterImg
      :sorce="character.img"
      :description="character.fullName"
      class="m-4"
    />
    <h2>{{ character.fullName }}</h2>
    <h4>hp {{ currentHp }} / {{ maxHp }}</h4>
    <h4>Armor xx</h4>
    <ul>
      <li>STR: {{ character.str }}</li>
      <li>DEX: {{ character.dex }}</li>
      <li>CON: {{ character.con }}</li>
      <li>WIS: {{ character.wis }}</li>
      <li>INT: {{ character.int }}</li>
      <li>CHA: {{ character.cha }}</li>
    </ul>
  </section>
</template>
<script>
import CharacterImg from '~/components/CharacterImg.vue'
export default {
  components: {
    CharacterImg
  },
  props: {
    character: {
      type: Object,
      default() {
        return {
          id: 0,
          name: 'Li',
          img: 'li',
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
      damage: 5
    }
  },
  computed: {
    maxHp() {
      return this.character.con * this.character.level
    },
    currentHp() {
      return this.maxHp - this.damage
    }
  }
}
</script>
