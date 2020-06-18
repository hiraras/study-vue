const initialState = {
    name: 'moduleA',
    obj: {
        a: 1,
    }
}
const getters = {
    getName: function(state) {
        return `this is module ${state.name}`;
    }
}
const mutations = {
    changeObj: function(state, value) {
        state.obj.a = value;
    }
}
const actions = {
    changeObj: function(context, value) {
        context.commit('changeObj', value);
    },
}
export default {
    state: initialState,
    getters,
    mutations,
    actions,
    namespaced: true,
}