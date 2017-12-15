let data = [];


let mockData = [{
    UserName: "Erik",
    ProjectName: "Coop",
    StartTime: null,
    StopTime: null
}, {
    UserName: "Kroken",
    ProjectName: "Huskvarna",
    StartTime: null,
    StopTime: null
}, {
    UserName: "Anton",
    ProjectName: "Systembolaget",
    StartTime: null,
    StopTime: null
}];


export default TimerRepository = {
    get: (userName) => {
        return data.filter(m => m.UserName);
    },

    save: (timer) => {
        let timerFromDb = data[timer];

        if (timerFromDb) {
            timerFromDb.UserName = timer.UserName;
            timerFromDb.ProjectName = timer.ProjectName;
            timerFromDb.StartTime = timer.StartTime;
            timerFromDb.StopTime = timer.StopTime;
        } else {
            data.push(timer);
        }
    },

    stop: (timer) => {
        timer.StopTime = new Date();
        this.save(timer);
    }

};