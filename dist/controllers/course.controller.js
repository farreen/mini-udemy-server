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
const CourseService = __importStar(require("../services/course.service"));
const createCourse = async (req, res) => {
    const { title, description } = req.body;
    await CourseService.createCourse(title, description, req.user.id);
    res.status(201).json({ message: "Course created" });
};
exports.createCourse = createCourse;
const getAllCourses = async (req, res) => {
    const courses = await CourseService.getAllCourses();
    res.json(courses);
};
exports.getAllCourses = getAllCourses;
const getCourseById = async (req, res) => {
    const { id } = req.params;
    const course = await CourseService.getCourseById(Number(id));
    res.json(course);
};
exports.getCourseById = getCourseById;
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await CourseService.updateCourse(Number(id), title, description, req.user.id);
    res.json({ message: "Course updated" });
};
exports.updateCourse = updateCourse;
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await CourseService.deleteCourse(Number(id), req.user.id);
    res.json({ message: "Course deleted" });
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=course.controller.js.map