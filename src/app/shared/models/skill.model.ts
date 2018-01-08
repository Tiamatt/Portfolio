import { ProjectModel } from "./project.model";

export class SkillModel{
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    features: string[];
    projects: ProjectModel[];
}