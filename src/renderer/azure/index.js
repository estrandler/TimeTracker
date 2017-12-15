let azure = require('azure-storage')
let entGen = azure.TableUtilities.entityGenerator

let tableService = azure.createTableService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_ACCESS_KEY)

export default {
  addProject (projectName) {
    const entity = {
      PartitionKey: entGen.String('temp'),
      RowKey: entGen.String(projectName),
      ProjectName: entGen.String(projectName)
    }
    return new Promise((resolve, reject) => {
      tableService.insertEntity('project', entity, (error, result, response) => {
        if (!error) {
          resolve(projectName)
        }

        reject(new Error('insert failed'))
      })
    })
  },
  getAllProjects (username) {
    return new Promise((resolve, reject) => {
      tableService.queryEntities('project', new azure.TableQuery().where('PartitionKey eq ?', username), null, (error, result, response) => {
        if (!error) {
          console.log(result.entries)
          resolve(result.entries.map(r => r.ProjectName._))
        }

        reject(new Error('fetch failed'))
      })
    })
  },
  addPeriod (period) {
    const entity = {
      PartitionKey: entGen.String('temp'),
      RowKey: entGen.String(period.project),
      StartTime: entGen.DateTime(period.startTime),
      EndTime: entGen.DateTime(period.endTime)
    }

    return new Promise((resolve, reject) => {
      tableService.insertEntity('period', entity, (error, result, response) => {
        if (!error) {
          resolve(response)
        }

        reject(new Error('insert failed'))
      })
    })
  },
  test () {
    tableService.createTableIfNotExists('period', (error, result, response) => {
      if (!error) {}
    })
  }
}
