import { Document } from 'mongoose';
export type ProjectDocument = Project & Document;
export declare class Project {
    title: string;
    subtitle?: string;
    description: string;
    technologies: string[];
    repoUrl?: string;
    liveUrl?: string;
    previewImageUrl?: string;
    iconUrl?: string;
    featured?: boolean;
}
export declare const ProjectSchema: import("mongoose").Schema<Project, import("mongoose").Model<Project, any, any, any, Document<unknown, any, Project, any> & Project & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Project, Document<unknown, {}, import("mongoose").FlatRecord<Project>, {}> & import("mongoose").FlatRecord<Project> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
