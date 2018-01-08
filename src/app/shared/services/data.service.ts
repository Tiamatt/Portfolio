import { SkillModel } from "../models/skill.model";
import { ProjectModel } from "../models/project.model";
import { ExperienceModel } from "../../main/experience/experience.model";
import { ActivityModel } from "../models/activity.model";

export class DataService {

    constructor(){};

    private nav: string[] = ['About', 'Skills', 'Projects', 'Experience', 'Activities', 'Contact'];

    private about: string = "I’m a Full Stack Developer with four years of experience in the full software development lifecycle – from concepts and requirements to deployment and support of web applications primarily using C#, .NET and MS SQL. Back in summer 2017 I became interested in Angular and fell in love with the great framework. I’m self-motivated and extremely passionate about web development in all its forms. Highly adaptable in quickly changing technical environments with strong organizational and analytical skills.";

    private projects: ProjectModel[] = [
        {
            id: 1,
            name: "Weather",
            descriptionHtml: "Under construction",
            imageSrc: "./assets/project-images/weather.png",
            websiteUrl: "https://tiamatt.github.io/Weather/",
            gitUrl: "https://github.com/Tiamatt/Weather/"
        },
        {
            id: 2,
            name: "Portfolio",
            descriptionHtml: "Under construction",
            imageSrc: "./assets/project-images/portfolio.png",
            websiteUrl: "https://tiamatt.github.io/Portfolio/",
            gitUrl: "https://github.com/Tiamatt/Portfolio/"
        },
        {
            id: 3,
            name: "PapaJohnsClone",
            descriptionHtml: "Under construction",
            imageSrc: "./assets/project-images/papa-johns-clone.png",
            websiteUrl: "https://tiamatt.github.io/PapaJohnsClone/",
            gitUrl: "https://github.com/Tiamatt/PapaJohnsClone/"
        },
        {
            id: 4,
            name: "Analytics",
            descriptionHtml: "Under construction",
            imageSrc: "./assets/project-images/analytics.png",
            websiteUrl: "https://tiamatt.github.io/Analytics/",
            gitUrl: "https://github.com/Tiamatt/Analytics/"
        }
    ];

    private skills: SkillModel[] = [
        { 
            id: 1, 
            name: "Angular", 
            description: `<strong>Why Angular?</strong><br>
            Angular is the next big deal. It is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google. Being the successor of the overwhelmingly successful Angular.js it’s bound to shape the future of frontend development in a similar way. Back in summer 2017 I became interested in Angular and totally fell in love with the great framework. The powerful features and capabilities of Angular allow me to create complex, customizable, modern, responsive and user friendly web applications. <br>
            <strong>Version</strong><br>
            I started studing first version of the framework - Angular 2.0  (it was announced Sep 2014). My first app (Weather) was written on Angular 4.0 and the latest one (Analytics) - on Angular 5.0.
            `,
            imageSrc: "./assets/skill-images/angular.png",
            features: ["Data binding", "Lifecycle Hooks", "Component Interaction"],
            projects: this.getProjectsByIds([1,2,3,4])
        },
        {
            id: 2,
            name: "TypeScript",
            description: "Under construction",
            imageSrc: "./assets/skill-images/typescript.png",
            features: null,
            projects: null
        },
        {
            id: 3, 
            name: "Angular CLI", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/angular-cli.jpeg",
            features: null,
            projects: null
        },
        {
            id: 4, 
            name: "Jasmine", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/jasmine.png",
            features: null,
            projects: null
        },
        {
            id: 5, 
            name: ".NET", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/dot-net.jpg",
            features: null,
            projects: null
        },
        {
            id: 6, 
            name: "C#", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/csharp.png",
            features: null,
            projects: null
        },
        {
            id: 7, 
            name: "ASP.NET", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/asp-net.png",
            features: null,
            projects: null
        },
        {
            id: 8, 
            name: "HTML5", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/html-five.jpg",
            features: null,
            projects: null
        },
        {
            id: 9, 
            name: "CSS3", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/css-three.jpg",
            features: null,
            projects: null
        },
        {
            id: 10, 
            name: "Bootstrap", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/bootstrap.png",
            features: null,
            projects: null
        }        
    ];

    private experiences: ExperienceModel[] = [
        {
            id: 4,
            title: 'Software Engineer at Assurant',
            period: 'Sep 2015 - present, Assurant, Duluth, GA',
            descriptions: [
                'Developed multiple web app from scratch such as PTAdmin app that handles authorization of users/teams for a number of corporate desktop and web apps; LossDraft app that provides reports of insurance claims, etc.',
                'Provided users with quality production support and customer service. Resolved production issues in a timely manner.',
                'Maintained a web app for insurance auditing that permits auditors to evaluate customer service. Fully supported backend, frontend and SQL Server database in dev, model and production environments.',
                'Developed multiple desktop applications that generate and email business reports and fill database tables with data on daily basis.'
            ],
            isRightSide: false
        },
        {
            id: 3,
            title: '.NET developer at Romantic LLC',
            period: 'Dec 2013 – June 2015, Baku, Azerbaijan',
            descriptions:[
                'Developed Romantic Analytics web app from scratch with ASP.NET Web Forms. Presented all kinds of business reports. Applied customized access control for the application based on users’ privileges.',
                'Developed Win Forms apps with CRUD functionality and sales indices calculation.',
                'Followed various development processes under the guidance of the architecture staff.',
                'Worked with SQL Server databases: extracted, transformed and manipulated various types of data.',
                'Developed console apps that generated and emailed corporate reports daily.'
            ],
            isRightSide: true
        },
        {
            id: 2,
            title: 'Business analyst at Romantic LLC',
            period: 'Sept 2012 – Dec 2013, Baku, Azerbaijan',
            descriptions: [
                'Built, tested and maintained database queries, stored procedures, functions and views with MS SQL Server.',
                'Created OLAP cubes and designed MDX queries with SQL Server Analysis Services (SSAS).',
                'Built data mining models with SQL Server Data Tools (SSDT).',
                'Deployed and supported standard reports, dashboards and data visualizations.'
            ],
            isRightSide: false
        },
        {
            id: 1,
            title: 'Junior Macroeconomic Analyst at Institute for Economic Reforms',
            period: 'July 2008 – Sept 2008, Baku, Azerbaijan',
            descriptions: [
                'Monitored and prepared analytical reports of GDP growth and inflation.',
                'Collected and maintained data based on consumer price index.',
                'Developed econometrics/statistical models (various types of regression models).',
                'Created and presented research documents.'
            ],
            isRightSide: true
        }
    ];

    private activities: ActivityModel[] = [
        {
            id: 1,
            name: 'MS MTA Certification',
            imageSrc: './assets/activity-images/ms-mta-certification.png',
            websiteUrl: 'https://www.microsoft.com/en-us/learning/exam-98-361.aspx'
        },
        {
            id: 2,
            name: 'CodeFights',
            imageSrc: './assets/activity-images/code-fights.png',
            websiteUrl: 'https://codefights.com/profile/samira_y'
        },
        {
            id: 3,
            name: 'FreeCodeCamp',
            imageSrc: './assets/activity-images/free-code-camp.png',
            websiteUrl: 'https://www.freecodecamp.com/tiamatt'
        },
        {
            id: 4,
            name: 'Atlanta Code Camp',
            imageSrc: './assets/activity-images/atlanta-code-camp.png',
            websiteUrl: 'https://atlantacodecamp.com'
        }
    ];

    // get all navs
    getNav(): string[]{
        return this.nav;
    }

    // get all abouts
    getAbout(): string{
        return this.about;
    }

    // get id + name only
    getSkills(): SkillModel[]{
        let result: SkillModel[] = [];
        for(let o of this.skills)
        {
            result.push({
                id: o.id, 
                name: o.name, 
                description: null,
                imageSrc: null,
                features: null,
                projects: null
            });
        }
        return result;     
    }

    // get by id
    getSkill(_id: number): SkillModel{
        return this.skills.find(x => x.id == _id);
    }
    
    // get id + name only
    getProjects(): ProjectModel[]{        
        let result: ProjectModel[] = [];
        for(let o of this.projects)
        {
            result.push({
                id: o.id, 
                name: o.name, 
                descriptionHtml: null,
                imageSrc: o.imageSrc,
                websiteUrl: null,
                gitUrl: null
            });
        }
        return result;     
    }

    // get id + name + websiteUrl only 
    getProjectsByIds(ids: number[]): ProjectModel[]{        
        let result: ProjectModel[] = [];
        if(!ids)
            return null;

        for(let o of this.projects)
        {
            if(ids.find(x => x == o.id)){
                result.push({
                    id: o.id, 
                    name: o.name, 
                    descriptionHtml: null,
                    imageSrc: null,
                    websiteUrl: o.websiteUrl,
                    gitUrl: null
                });
            }
        }
        return result;     
    }

    // get by id
    getProject(_id: number): ProjectModel{
        return this.projects.find(x => x.id == _id);
    }

    // get all experiences 
    getExperiences(): ExperienceModel[]{
        return this.experiences;
    }

    // get all activities 
    getActivities(): ActivityModel[]{
        return this.activities;
    }
    
}