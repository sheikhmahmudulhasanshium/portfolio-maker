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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const create_project_dto_1 = require("./dto/create-project.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const swagger_1 = require("@nestjs/swagger");
const project_schema_1 = require("./schemas/project.schema");
let ProjectsController = class ProjectsController {
    projectsService;
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    async create(createProjectDto) {
        return this.projectsService.create(createProjectDto);
    }
    findAll() {
        return this.projectsService.findAll();
    }
    async findOne(id) {
        return this.projectsService.findOne(id);
    }
    async update(id, updateProjectDto) {
        return this.projectsService.update(id, updateProjectDto);
    }
    async remove(id) {
        await this.projectsService.remove(id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new project entry' }),
    (0, swagger_1.ApiBody)({ type: create_project_dto_1.CreateProjectDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The project has been successfully created.',
        type: project_schema_1.Project,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Validation failed.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all projects (Public)' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of all projects retrieved successfully.',
        type: [project_schema_1.Project],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a specific project by its ID (Public)' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The unique identifier of the project',
        type: String,
        required: true,
        example: '605c72ef9a3d7e3e1c4f5a0a',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Project details found.', type: project_schema_1.Project }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Project with the specified ID not found.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid ID format provided.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing project by its ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The ID of the project to update',
        type: String,
        required: true,
    }),
    (0, swagger_1.ApiBody)({ type: update_project_dto_1.UpdateProjectDto }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The project has been successfully updated.',
        type: project_schema_1.Project,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Project with the specified ID not found.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Validation failed.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a project by its ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'The ID of the project to delete',
        type: String,
        required: true,
    }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'The project has been successfully deleted.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Project with the specified ID not found.',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "remove", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, swagger_1.ApiTags)('Projects'),
    (0, common_1.Controller)('projects'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map