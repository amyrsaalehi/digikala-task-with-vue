// These can be use for Composition API
import { computed } from 'vue';
import { useStore } from 'vuex';

export function useState(arr) {
    const store = useStore();
    const keyPair = arr.map(item => [item, computed(() => store.state[item])])
    return Object.fromEntries(keyPair)
}

export function useGetters(arr) {
    const store = useStore();
    const keyPair = arr.map(item => [item, computed(() => store.getters[item])])
    return Object.fromEntries(keyPair)
}

export function useMutations(arr) {
    const store = useStore();
    const keyPair = arr.map(item => [item, input => store.commit(item, input)])
    return Object.fromEntries(keyPair)
}

export function useActions(arr) {
    const store = useStore();
    const keyPair = arr.map(item => [item, input => store.dispatch(item, input)])
    return Object.fromEntries(keyPair)
}