export const state = () => ({
    counter: 0,
    projectName: 'ATFX',
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}