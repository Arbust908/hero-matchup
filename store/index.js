export const state = () => ({
  global: {
    player: {},
    enemy: {},
    turn: 0,
    effects: []
  }
})

export const getters = {}

export const mutations = {}

export const actions = {
  executeAction(context, payload) {
    context.commit('player/TAKEDAMAGE', payload)
  }
}
