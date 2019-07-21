export const state = {
  count: 0,
};

export const actions = {
  increment: ({ commit }) => commit('increment'),
  descrement: ({ commit }) => commit('descrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000);
    });
  },
};

export const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
};

export const mutations = {
  increment(state) {
    state.count++;
  },
  descrement(state) {
    state.count--;
  },
};
