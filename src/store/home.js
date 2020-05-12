import * as home from '../service/home'

const state = {
    banners: [{title: ''}],
    latest_activities: [],
    hot_news: [],
    announcements: [{title: ''}],//公告
    list: [],
}

const getters = {}

const actions = {
    async getList({commit}) {
        const res = await home.getList()
        commit('setList', res.data.data)
    },
}

const mutations = {
    setList(state, data) {
        state.list = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
