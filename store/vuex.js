const testStore = {
  state: {
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
  },
  getters: {
    getValue1: (state) => state.val1,
    getValue2: (state) => state.val2,
    getValue3: (state) => state.val3,
    getValue4: (state) => state.val4,
  },
  mutations: {
    setValue1(state, val) {
      state.val1 = val
    },
    setValue2(state, val) {
      state.val2 = val
    },
    setValue3(state, val) {
      state.val3 = val
    },
    setValue4(state, val) {
      state.val4 = val
    },
  },
}
export default testStore
