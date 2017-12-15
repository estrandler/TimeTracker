import * as types from '../mutation-types'
import azure from '@/azure'

const state = {
  projects: [],
  periods: [],
  username: null
}

const getters = {
  activePeriods: state => state.periods.filter(p => p.endTime === null),
  isAuthorized: state => state.username !== null && state.username.length > 0
}

const mutations = {
  [types.PROJECT_ADD] (state, projectName) {
    state.projects.push(projectName)
  },
  [types.PROJECT_SET_ALL] (state, projects) {
    state.projects = projects
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
  },
  [types.PROJECT_PERIOD_SET_ALL] (state, periods) {
    state.periods = periods
  },
  [types.USER_LOGIN] (state, username) {
    state.username = username
  }
}

const actions = {
  addProject ({ commit, state }, projectName) {
    azure.addProject(projectName, state.username)
      .then(azureProjectName => {
        commit(types.PROJECT_ADD, azureProjectName)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getAllProjects ({ commit, state }) {
    azure.getAllProjects(state.username)
      .then((projects) => {
        commit(types.PROJECT_SET_ALL, projects)
      })
      .catch(error => {
        console.log(error)
      })
  },
  startPeriod ({ commit }, projectName) {
    commit(types.PROJECT_PERIOD_START, projectName)
  },
  stopPeriod ({ commit, state }, projectName) {
    commit(types.PROJECT_PERIOD_STOP, projectName)
    let period = state.periods.find(p => p.project === projectName)
    if (period) {
      azure.addPeriod(period, state.username)
    }
  },
  getAllPeriods ({ commit, state }) {
    azure.getAllPeriods(state.username)
      .then(periods => {
        commit(types.PROJECT_PERIOD_SET_ALL, periods)
      })
      .catch(error => {
        console.log(error)
      })
  },
  login ({ commit }, username) {
    return new Promise((resolve, reject) => {
      commit(types.USER_LOGIN, username)
      resolve(username)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
