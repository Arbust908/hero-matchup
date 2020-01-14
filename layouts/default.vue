<template>
  <div class="max-w-xs border border-gray-600 mx-auto">
    <TopNav />
    <nuxt class="font-bold font-mono text-gray-700" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import TopNav from '~/components/TopNav'
export default {
  components: {
    TopNav
  },
  created() {
    if (process.browser && localStorage.getItem('playerName') !== null) {
      this.setPlayerName(localStorage.getItem('playerName'))
    }
    if (process.browser && localStorage.getItem('player') !== null) {
      this.selectChar(JSON.parse(localStorage.getItem('player')))
    }
  },
  methods: {
    ...mapActions('player', ['setPlayerName', 'selectChar'])
  }
}
</script>
