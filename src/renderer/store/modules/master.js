import * as types from '../mutation-types'

const state = {
  projects: [
    'project1',
    'project2'
  ],
  periods: []
}

const getters = {
  activePeriods: state => state.periods.filter(p => p.endTime === null)
}

const mutations = {
  [types.PROJECT_ADD] (state, projectName) {
    state.projects.push(projectName)
  },
  [types.PROJECT_PERIOD_START] (state, projectName) {
    state.periods.push({ startTime: new Date(), endTime: null, project: projectName })
  },
  [types.PROJECT_PERIOD_STOP] (state, projectName) {
    state.periods
      .filter(p => p.project === projectName)
      .filter(p => p.endTime === null)
      .map(p => {
        p.endTime = new Date()
        return p
      })
  }
}

const actions = {
  addProject ({ commit }, projectName) {
    commit(types.PROJECT_ADD, projectName)
  },
  startPeriod ({ commit }, projectName) {
    commit(types.PROJECT_PERIOD_START, projectName)
  },
  stopPeriod ({ commit }, projectName) {
    commit(types.PROJECT_PERIOD_STOP, projectName)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
