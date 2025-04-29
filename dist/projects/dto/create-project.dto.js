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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectDto {
    title;
    subtitle;
    description;
    technologies;
    repoUrl;
    liveUrl;
    previewImageUrl;
    iconUrl;
    featured;
}
exports.CreateProjectDto = CreateProjectDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Personal Portfolio Website',
        description: 'The main title of the project',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'A dynamic portfolio built with NestJS and React',
        description: 'A short tagline or subtitle for the project',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This project showcases my skills in full-stack development using modern technologies...',
        description: 'Detailed description of the project',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'NestJS',
            'React',
            'TypeScript',
            'MongoDB',
            'Mongoose',
            'Swagger',
        ],
        description: 'List of key technologies/stack used',
        type: [String],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProjectDto.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://github.com/yourusername/your-portfolio-repo',
        description: 'URL of the source code repository (e.g., GitHub, GitLab)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Repository URL must be a valid URL address.' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "repoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://your-portfolio.com',
        description: 'URL where the project is live/deployed',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Live URL must be a valid URL address.' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "liveUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://example.com/images/portfolio-preview.png',
        description: 'URL of a larger preview image or screenshot',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Preview Image URL must be a valid URL address.' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "previewImageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://example.com/icons/portfolio-icon.svg',
        description: 'URL of a smaller icon or logo for the project',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Icon URL must be a valid URL address.' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "iconUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: true,
        description: 'Whether this project should be marked as featured',
        default: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProjectDto.prototype, "featured", void 0);
//# sourceMappingURL=create-project.dto.js.map