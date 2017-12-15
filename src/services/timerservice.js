import { TimerRepository } from '../repositories/timerrepository.js';


export default TimerService =  {
    get: (userName) => {
        return TimerRepository.get(userName);
    },

    getByProjectName: (userName, projectName) => {
        return TimerRepository.get(userName).filter(m => m.ProjectName == projectName);
    },

    start: (userName, projectName) => {
        let timer = this.getByProjectName(userName, projectName);

        if (!timer)
            timer = { UserName: userName, ProjectName: projectName, StartTime: null };

        timer.StartTime = new Date();

        TimerRepository.save(timer);
    },

    stop: (userName, projectName) => {
        let timer = this.getByProjectName(userName, projectName);

        if (!timer)
            return;
            
        timer.StopTime = new Date();
        TimerRepository.save(timer);
    }
};