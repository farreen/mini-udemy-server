"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getAllCourses = exports.createCourse = void 0;
const CourseModel = __importStar(require("../models/course.model"));
const createCourse = async (title, description, adminId) => {
    await CourseModel.createCourse(title, description, adminId);
};
exports.createCourse = createCourse;
const getAllCourses = async () => {
    return await CourseModel.getAllCourses();
};
exports.getAllCourses = getAllCourses;
const getCourseById = async (id) => {
    const course = await CourseModel.getCourseById(id);
    if (!course) {
        throw new Error("Course not found");
    }
    return course;
};
exports.getCourseById = getCourseById;
const updateCourse = async (id, title, description, adminId) => {
    await CourseModel.updateCourse(id, title, description, adminId);
};
exports.updateCourse = updateCourse;
const deleteCourse = async (id, adminId) => {
    await CourseModel.deleteCourse(id, adminId);
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=course.service.js.map