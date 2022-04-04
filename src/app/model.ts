export class Project{
    constructor(
        public id: string,
        public projectName: string,
        public startDate: string,
        public endDate: string
    ){}
}
export class Certification{
    constructor(
        public id: string,
        public name: string,
        public completeDate: string
    ){}
}
export class Employee{
    constructor(
        public id : string,
        public name : string,
        public role : string,
        public level : string,
        public projects : Array<Project>,
        public certifications : Array<Certification>
    ){}
}