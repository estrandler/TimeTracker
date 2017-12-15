import * as types from '../mutation-types'

const state = {
  projects: [
    'project1',
    'project2'
  ],
  periods: [
    {
      startTime: '2017-01-01 00:00:00',
      endTime: null,
      project: null
    }
  ]
}

const getters = {}

const mutations = {
  [types.PROJECT_ADD] (state, projectName) {
    state.projects.push(projectName)
  }
}

const actions = {
  addProject ({ commit }, projectName) {
    commit(types.PROJECT_ADD, projectName)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
