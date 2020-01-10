<template>
  <div>
    <fa :icon="starBorn(rank)" v-for="(rank, index) in rating" :key="index" />
  </div>
</template>
<script>
export default {
  props: {
    stars: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rating() {
      const starFloor = Math.floor(this.stars)
      const starRoof = Math.ceil(this.stars)
      const isRound = this.stars === starFloor
      const rating = []
      for (let i = 0; i < starRoof; i++) {
        if (i === starRoof - 1 && !isRound) {
          rating.push(1)
        } else {
          rating.push(2)
        }
      }
      const maxNum = 5
      if (rating.length !== maxNum) {
        for (let i = rating.length; i < maxNum; i++) {
          rating.push(0)
        }
      }
      return rating
    }
  },
  methods: {
    starBorn(status) {
      return status === 2
        ? ['fas', 'star']
        : status === 1
        ? ['fas', 'star-half-alt']
        : ['far', 'star']
    }
  }
}
</script>
