export const state = () => ({
  all: [
    {
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
      energy: [],
      defence: 0,
      ranking: 4.5,
      maxHealth: 0,
      currentHealth: 0
    },
    {
      id: 1,
      name: 'Grimund',
      img: 'grimund.png',
      fullName: 'Grimund Bronzeheart',
      slug: 'grimund',
      str: 16,
      dex: 12,
      con: 14,
      wis: 12,
      int: 10,
      cha: 14,
      luk: 20,
      level: 10,
      items: [],
      attacks: [],
      energy: [],
      defence: 0,
      ranking: 3,
      maxHealth: 0,
      currentHealth: 0
    },
    {
      id: 2,
      name: 'Azabaz',
      img: 'azabaz.png',
      fullName: 'Azabaz Dragons´ Bane ',
      slug: 'azabaz',
      str: 20,
      dex: 20,
      con: 20,
      wis: 20,
      int: 20,
      cha: 20,
      luk: 99,
      level: 10,
      items: [],
      attacks: [],
      energy: [],
      defence: 0,
      ranking: 2,
      maxHealth: 0,
      currentHealth: 0
    },
    {
      id: 3,
      name: 'Kinowe',
      img: 'kinowe.png',
      fullName: 'Kinowe Starlight',
      slug: 'kinowe',
      str: 16,
      dex: 12,
      con: 14,
      wis: 12,
      int: 10,
      cha: 14,
      luk: 20,
      level: 10,
      items: [],
      attacks: [],
      energy: [],
      defence: 0,
      ranking: 1,
      maxHealth: 0,
      currentHealth: 0
    }
  ]
})

export const getters = {
  getCharacters(state) {
    return state.all
  },
  // getCharacter(state, slug) {
  //   return state.all.find((char) => char.slug === slug)
  // },
  getCharacter: (state) => (slug) =>
    state.all.find((char) => char.slug === slug),
  // getCharactersExept(state, slug) {
  //   return state.all.filter((char) => char.slug === slug)
  // }
  getCharactersExept: (state) => (slug) =>
    state.all.filter((char) => char.slug !== slug),
  getRandomCharacter(state) {
    const rand = Math.floor(Math.random() * (state.all.length - 1)) + 0
    return state.all[rand]
  }
}

export const mutations = {}

export const actions = {}
