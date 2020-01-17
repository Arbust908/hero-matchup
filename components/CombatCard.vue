<template>
  <section :class="backgroundColor()" class="w-1/2 p-2">
    <h2 class="gray-400 text-sm">{{ playerName }}</h2>
    <article class="flex flex-col justify-center">
      <CharacterImg
        :sorce="char.img"
        :description="char.fullName"
        class="flex justify-center pb-4"
      />
      <h3 class="text-center leading-none">{{ char.fullName }}</h3>
      <section class="flex items-center">
        hp:
        <div class="relative flex-grow h-4">
          <div class="bg-red-600 w-full h-4 absolute left-0 z-10"></div>
          <div
            :style="barSize()"
            class="bg-green-600 w-full h-4 absolute left-0 z-20"
          ></div>
        </div>
      </section>
    </article>
  </section>
</template>
<script>
import CharacterImg from '~/components/CharacterImg'
export default {
  components: {
    CharacterImg
  },
  props: {
    playerName: {
      type: String,
      default: 'Guest'
    },
    isPlayer: {
      type: Boolean,
      default: false
    },
    char: Object
  },
  data() {
    return {
      currentHealth: this.totalHealth()
    }
  },
  methods: {
    backgroundColor() {
      return this.isPlayer ? 'bg-green-300' : 'bg-red-300'
    },
    totalHealth() {
      return this.con * this.level
    },
    barSize() {
      return 'width:' + (this.currentHealth * 100) / this.totalHealth() + '%'
    }
  }
}
</script>
