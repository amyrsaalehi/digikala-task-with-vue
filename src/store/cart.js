// import createPersistedState from 'vuex-persistedstate'
// import SecureLS from 'secure-ls';
// const ls = new SecureLS({ isCompression: false });


export default {
    namespaced: true,
    state: () => ({}),
    mutations: {},
    actions: {},
    // plugins: [
    //     createPersistedState({
    //         storage: {
    //             getItem: key => ls.get(key),
    //             setItem: (key, value) => ls.set(key, value),
    //             removeItem: key => ls.remove(key)
    //         }
    //     })
    // ],
}