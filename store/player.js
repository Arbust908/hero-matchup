export const state = () => ({
  character: null,
  lastSave: 0,
  history: [],
  player: 'Guest'
})

export const getters = {
  getPC(state) {
    return state.character
  },
  getPlayerName(state) {
    return state.player
  }
}

export const mutations = {
  SELECT_CHAR(state, payload) {
    if (process.browser) {
      localStorage.setItem('player', JSON.stringify(payload))
    }
    state.character = payload
  },
  DESELECT_CHAR(state) {
    if (process.browser) {
      localStorage.setItem('player', null)
    }
    state.character = null
  },
  SET_PLAYER_NAME(state, payload) {
    if (process.browser) {
      localStorage.setItem('playerName', payload)
    }
    state.player = payload
  },
  SAVE_PLAYER(state) {
    if (process.browser) {
      localStorage.setItem('SAVEGAME_char', JSON.stringify(state.character))
      localStorage.setItem('SAVEGAME_lastSave', JSON.stringify(Date.now()))
    }
  },
  LOAD_PLAYER() {
    if (process.browser) {
      state.character = JSON.parse(localStorage.getItem('SAVEGAME_char'))
      state.character = JSON.parse(localStorage.getItem('SAVEGAME_lastSave'))
    }
  }
}

export const actions = {
  selectChar(context, payload) {
    context.commit('SELECT_CHAR', payload)
  },
  deselectChar(context) {
    context.commit('DESELECT_CHAR')
  },
  setPlayerName(context, payload) {
    context.commit('SET_PLAYER_NAME', payload)
  },
  savePlayer(context) {
    context.commit('SAVE_PLAYER')
  },
  loadPlayer(context) {
    context.commit('LOAD_PLAYER')
  }
}
