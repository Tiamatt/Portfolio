import { IProject } from "../models/IProject.model";
import { IProjectDetail } from "../models/IProjectDetail.model";

export class DataService {
    constructor(){};

    private getAllProjects(){
        let projectList: IProject[] = [
            {
                id: 0,
                name: 'PapaJohnsClone',
                imageLink: './assets/projectImages/papaJohnsClone.png'
            },
            {
                id: 1,
                name: 'Portfolio',
                imageLink: './assets/projectImages/portfolio.png'
            }
        ];
        return projectList;
    };

    private getOfAllProjectDetails(){
        let projectList: IProjectDetail[] = [
            {
                id: 0,
                websiteUrl: 'https://tiamatt.github.io/PapaJohnsClone/',
                gitUrl: 'https://github.com/Tiamatt/PapaJohnsClone/',
                description: 'Tralala Papa'
            },
            {
                id: 1,
                websiteUrl: 'https://tiamatt.github.io/Portfolio/',
                gitUrl: 'https://github.com/Tiamatt/Portfolio/',
                description: 'Tralala Portfolio'
            }
        ];
        return projectList;
    };

    getProjectList(){
        return this.getAllProjects();
    };

    getProjectDetail(_id: number){
        let projectList: IProjectDetail[] = this.getOfAllProjectDetails();
        for(var item of projectList)
        {
            if(item.id == _id)
                return item;
        }
        return null;
    };

}