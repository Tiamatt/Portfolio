import { SkillModel } from "../models/skill.model";
import { ProjectModel } from "../models/project.model";
import { ExperienceModel } from "../../main/experience/experience.model";
import { ActivityModel } from "../models/activity.model";
import { TechnicalSkillModel } from "../models/technical-skill.model";

export class DataService {

    constructor(){};

    private nav: string[] = ['About', 'Skills', 'Projects', 'Experience', 'Activities', 'Contact'];

    private about: string = "I am a Full Stack Developer with five years of experience in a full software development lifecycle – from concepts and requirements to deployment and support of web applications. Back in summer 2017 I became interested in Angular and fell in love with this great framework. I’m self-motivated and extremely passionate about web development in all its forms. Highly adaptable in quickly changing technical environments with strong organizational and analytical skills.";

    private projects: ProjectModel[] = [
        {
            id: 1,
            name: "Weather",
            descriptionHtml: "I built this project at the time I started studying Angular. Here I applied my knowledge to create components; to use a service with BehaviorSubject to subscribe and listen to variables changes; to put app-routing data into separate (feature) module.",
            imageSrc: "./assets/project-images/weather.png",
            websiteUrl: "https://tiamatt.github.io/Weather/",
            gitUrl: "https://github.com/Tiamatt/Weather/",
            technologies: [
                'Angular 4',
                'TypeScript',
                'Angular CLI v1.2.2',
                'Node.js v8.5.0 and npm v5.3.0',
                'ng4-geoautocomplete (for location autocomplete)',
                'Google map API (for location autocomplete)',
                'OpenWeatherMap API (for weather icons)',
                'IP Address API (for user’s current location)',
                'Bootstrap v3.3.7',
                'Google fonts',
                'Weather Icons v1.3.2']
        },
        {
            id: 2,
            name: "Portfolio",
            descriptionHtml: "As I'm working in a corporate environment and can't share my internal projects, here I'm presenting some of my hobby apps.",
            imageSrc: "./assets/project-images/portfolio.png",
            websiteUrl: "https://tiamatt.github.io/Portfolio/",
            gitUrl: "https://github.com/Tiamatt/Portfolio/",
            technologies: [
                'Angular 4',
                'TypeScript',
                'Angular CLI v1.4.2',
                'Node.js v8.5.0 and npm v5.3.0',
                'Bootstrap v4.0.0-beta',
                'Font Awesome v4.7.0',
                'Google fonts']
        },
        {
            id: 3,
            name: "PapaJohnsClone",
            descriptionHtml: "This web app is a light version of papajohns.com re-written on Angular (frontend) and .NET Core (backend) for studying purposes. User can view items by categories, add selected items to shopping cart, customize pizza and redirect to shopping cart.",
            imageSrc: "./assets/project-images/papa-johns-clone.png",
            websiteUrl: "https://tiamatt.github.io/PapaJohnsClone/",
            gitUrl: "https://github.com/Tiamatt/PapaJohnsClone/",
            technologies: [
                'Angular 4',
                'TypeScript',
                'Angular CLI v1.4.2',
                'Node.js v8.5.0 and npm v5.3.0',
                'C#',
                '.NET Core 2.0',
                'ASP.NET Web API',
                'Entity Framework Core 2.0',
                'MS SQL Server v17.1',
                'Visual Studio 2017',
                'Bootstrap v4.0.0-beta',
                'Font Awesome v4.7.0',
                'Google fonts']
        },
        {
            id: 4,
            name: "Analytics",
            descriptionHtml: "This web app is a custom admin panel built with Angular and .NET Core. User can create/read/update/delete items, filter them by criteria. This  project is currently in progress.",
            imageSrc: "./assets/project-images/analytics.png",
            websiteUrl: "https://tiamatt.github.io/Analytics/",
            gitUrl: "https://github.com/Tiamatt/Analytics/",
            technologies: [
                'Angular 4',
                'TypeScript',
                'Angular CLI v1.4.2',
                'Node.js v8.5.0 and npm v5.3.0',
                'C#',
                '.NET Core 2.0',
                'ASP.NET Web API',
                'Entity Framework Core 2.0',
                'MS SQL Server v17.1',
                'Visual Studio 2017',
                'Bootstrap v4.0.0-beta',
                'Font Awesome v4.7.0',
                'Google fonts']
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
            name: "Entity Framework", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/entity-framework.jpg",
            features: null,
            projects: null
        },
        {
            id: 9, 
            name: "ADO.NET", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/ado-net.jpg",
            features: null,
            projects: null
        },
        {
            id: 10, 
            name: "LINQ", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/linq.png",
            features: null,
            projects: null
        },
        {
            id: 11, 
            name: "JavaScript", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/javascript.jpg",
            features: null,
            projects: null
        },        
        {
            id: 12, 
            name: "HTML5", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/html-five.jpg",
            features: null,
            projects: null
        },
        {
            id: 13, 
            name: "CSS3", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/css-three.jpg",
            features: null,
            projects: null
        },
        {
            id: 14, 
            name: "Bootstrap", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/bootstrap.png",
            features: null,
            projects: null
        },
        {
            id: 15, 
            name: "jQuery", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/jquery.png",
            features: null,
            projects: null
        },
        {
            id: 16, 
            name: "AJAX", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/ajax.png",
            features: null,
            projects: null
        },
        {
            id: 17, 
            name: "JSON", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/json.jpg",
            features: null,
            projects: null
        },
        {
            id: 18, 
            name: "XML", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/xml.png",
            features: null,
            projects: null
        },
        {
            id: 19, 
            name: "MS SQL Server", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/ms-sql-server.png",
            features: null,
            projects: null
        },
        {
            id: 20, 
            name: "MySql", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/mysql.png",
            features: null,
            projects: null
        },
        {
            id: 21, 
            name: "Firebase", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/firebase.png",
            features: null,
            projects: null
        },
        {
            id: 22, 
            name: "TFS", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/tfs.png",
            features: null,
            projects: null
        },
        {
            id: 23, 
            name: "GitHub", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/git-hub.gif",
            features: null,
            projects: null
        },
        {
            id: 24, 
            name: "Visual Studio", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/visual-studio.png",
            features: null,
            projects: null
        },
        {
            id: 25, 
            name: "VS Code", 
            description: "Under construction",
            imageSrc: "./assets/skill-images/vs-code.png",
            features: null,
            projects: null
        }
    ];

    private technicalSkills: TechnicalSkillModel[] = [
        {
            group: 'Angular',
            description: 'Angular (2/4/5/6), TypeScript, Angular CLI, Jasmine & Karma',
        },
        {
            group: '.NET',
            description: '.NET (Core 2.x, Framework 4.x), C#, ASP.NET Web API (RESTful web services), ASP.NET MVC 5, ASP.NET Web Forms, Entity Framework, ADO.NET, LINQ, Azure',
        },
        {
            group:'Other frontend',
            description: 'JavaScript (ES5/ES6), HTML5, CSS3/SCSS, Bootstrap (3.x/4.x), jQuery, React (basics), AJAX, JSON, XML',
        },
        {
            group: 'Other backend',
            description: 'PHP, Phalcon Framework',
        },
        {
            group: 'Databases',
            description: 'MS SQL Server, MySql, Firebase',
        },
        {
            group: 'Version controls',
            description: 'Team Foundation Server (TFS), Git/GitHub',
        },
        {
            group: 'IDEs',
            description: 'Visual Studio, Visual Studio Code, PhpStorm',
        },
        {
            group: 'DevOps (familiar)',
            description: 'Jenkins, Flyway, Docker, Jira/Trello, Git',
        },
        {
            group: 'Testing (familiar)',
            description: 'Jasmine & Karma, Selenium',
        },
    ];

    private experiences: ExperienceModel[] = [
        {
            id: 5,
            title: 'Full Stack Developer at NovoLogic Inc.',
            period: 'Feb 2018 - present (Lawrenceville, GA)',
            descriptions: [
                'Developed fully responsive sophisticated web application (using Angular/PHP) for such clients as Chick-fil-A, Panera Bread, Zaxby’s, etc.',
                'Created pages with data visualization using Angular charts, graphs and gauges.',
                'Built reusable custom pipes, custom directives and custom filters.',
                'Managed permissions with Access Control Lists (ACL).',
                'Implemented Continuous Development (via Jira, Git, Docker),  Continuous Integration (via Jenkins, FlyWay) and Continuous Deployment (to AWS). Also practiced the basics of Continuous Testing (via Jasmine & Karma, Selenium).',
                'Participated in daily scrum standups, pair programming, code refactoring and proactive knowledge sharing to learn new technologies and methodologies.',   
            ],
            isRightSide: true
        },
        {
            id: 4,
            title: 'Software Engineer at Assurant Inc.',
            period: 'Sep 2015 - Feb 2018 (Duluth, GA)',
            descriptions: [
                'Developed multiple ASP.NET web applications from scratch and fully independently within the global insurance industry such as custom reports of insurance claims. Fully supported backend, frontend and SQL Server database in dev, model and production environments.',
                'Maintained a complex web application as part of a team for insurance auditing department to provide customer service evaluation.',
                'Developed multiple desktop applications that generate and email business reports on daily basis.',
                'Provided users with quality production support and customer service. Resolved production issues in a timely manner.',
            ],
            isRightSide: false
        },
        {
            id: 3,
            title: '.NET developer at Romantic LLC',
            period: 'Dec 2013 – June 2015 (Baku, Azerbaijan)',
            descriptions:[
                'Developed Romantic Analytics web application from scratch with ASP.NET Web Forms. Presented all kinds of business reports. Applied customized access control for the application based on users’ privileges.',
                'Developed WinForms applications with CRUD functionality and sales indices calculation.',
                'Followed various development processes under the guidance of the architecture staff.',
                'Worked with SQL Server databases: extracted, transformed and manipulated various types of data.',
                'Developed console applications that generated and emailed corporate reports daily.',
            ],
            isRightSide: true
        },
        {
            id: 2,
            title: 'Business analyst at Romantic LLC',
            period: 'Sep 2012 – Dec 2013 (Baku, Azerbaijan) ',
            descriptions: [
                'Built, tested and maintained MS SQL database queries, stored procedures, functions and views.',
                'Created OLAP cubes and designed MDX queries with SQL Server Analysis Services (SSAS).',
                'Built data mining models with SQL Server Data Tools (SSDT).',
                'Deployed and supported standard reports, dashboards and data visualizations.',
            ],
            isRightSide: false
        },
        {
            id: 1,
            title: 'Junior Macroeconomic Analyst at Institute for Economic Reforms',
            period: 'July 2008 – Sep 2008 (Baku, Azerbaijan)',
            descriptions: [
                'Monitored and prepared analytical reports of GDP growth and inflation.',
                'Collected and maintained data based on consumer price index.',
                'Developed econometrics/statistical models (various types of regression models).',
                'Created and presented research documents.',
            ],
            isRightSide: true
        }
    ];

    private activities: ActivityModel[] = [
        {
            id: 1,
            name: 'MS MTA Certification',
            imageSrc: './assets/activity-images/ms-mta-certification.png',
            websiteUrl: 'https://github.com/Tiamatt/Resume', // 'https://www.microsoft.com/en-us/learning/exam-98-361.aspx'
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
            websiteUrl: 'https://www.freecodecamp.org/tiamatt/front-end-certification'
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

    getTechnicalSkills(): TechnicalSkillModel[] {
        return this.technicalSkills;
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
                gitUrl: null,
                technologies: null
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
                    gitUrl: null,
                    technologies: null
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