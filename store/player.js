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
  },
  INIT_HEALTH(state) {
    if (state.character != null) {
      state.character.maxHealth = state.character.con * state.character.level
      state.character.currentHealth = state.character.maxHealth
    }
  },
  TAKE_DAMEGE(state, payload) {
    state.character.currentHealth = state.character.currentHealth - payload
  }
}

export const actions = {
  selectChar(context, payload) {
    context.commit('SELECT_CHAR', payload)
    context.commit('INIT_HEALTH')
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
