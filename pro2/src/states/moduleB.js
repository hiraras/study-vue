const initialState = {
    name: 'moduleB',
    obj: {
        a: 1,
    }
}
const getters = {
    getName: function(state) {
        return state.name;
    }
}
const mutations = {
    changeObj: function(state, value) {
        state.obj.a = value;
    },
    changeName: function(state, newName) {
        state.name = newName;
    }
}
const actions = {
    changeObj: function(context, value) {
        context.commit('changeObj', value);
    },
    changeName: function(context, newName) {
        context.commit('changeName', newName);
    }
}
export default {
    state: initialState,
    getters,
    mutations,
    actions,
    namespaced: true,
}