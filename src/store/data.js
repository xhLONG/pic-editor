const dataModule = {
    namespaced: true,
    state: {
        selectComponent: null,
        elementList: [],
    },
    mutations: {
        changeState: function(state, obj){
            state[obj.prop] = obj.value;
        },

        addElement: function(state, obj){
            state.elementList.push(obj);
        },
    },
    actions: {
    },
};

export default dataModule;