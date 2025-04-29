"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_schema_1 = require("./schemas/project.schema");
let ProjectsService = class ProjectsService {
    projectModel;
    constructor(projectModel) {
        this.projectModel = projectModel;
    }
    async create(createProjectDto) {
        const projectToCreate = {
            ...createProjectDto,
            featured: createProjectDto.featured ?? false,
        };
        const createdProject = new this.projectModel(projectToCreate);
        return createdProject.save();
    }
    async findAll() {
        return this.projectModel
            .find()
            .sort({ featured: -1, createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        const project = await this.projectModel.findById(id).exec();
        if (!project) {
            throw new common_1.NotFoundException(`Project with ID "${id}" not found`);
        }
        return project;
    }
    async update(id, updateProjectDto) {
        const updatedProject = await this.projectModel
            .findByIdAndUpdate(id, updateProjectDto, { new: true })
            .exec();
        if (!updatedProject) {
            throw new common_1.NotFoundException(`Project with ID "${id}" not found`);
        }
        return updatedProject;
    }
    async remove(id) {
        const result = await this.projectModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Project with ID "${id}" not found`);
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map