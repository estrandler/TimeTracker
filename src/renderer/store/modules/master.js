import * as types from '../mutation-types'
import azure from '@/azure'

const state = {
  projects: [],
  periods: []
}

const getters = {
  activePeriods: state => state.periods.filter(p => p.endTime === null)
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
  }
}

const actions = {
  addProject ({ commit }, projectName) {
    azure.addProject(projectName)
      .then(azureProjectName => {
        commit(types.PROJECT_ADD, azureProjectName)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getAllProjects ({ commit }, username) {
    azure.getAllProjects(username)
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
