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
exports.unenrollFromCourse = exports.checkEnrollment = exports.getCourseEnrollments = exports.getMyEnrollments = exports.enrollInCourse = void 0;
const EnrollmentService = __importStar(require("../services/enrollment.service"));
const enrollInCourse = async (req, res) => {
    const { courseId } = req.params;
    await EnrollmentService.enrollInCourse(req.user.id, Number(courseId));
    res.json({ message: "Successfully enrolled in course" });
};
exports.enrollInCourse = enrollInCourse;
const getMyEnrollments = async (req, res) => {
    const enrollments = await EnrollmentService.getStudentEnrollments(req.user.id);
    res.json(enrollments);
};
exports.getMyEnrollments = getMyEnrollments;
const getCourseEnrollments = async (req, res) => {
    const { courseId } = req.params;
    const enrollments = await EnrollmentService.getCourseEnrollments(Number(courseId));
    res.json(enrollments);
};
exports.getCourseEnrollments = getCourseEnrollments;
const checkEnrollment = async (req, res) => {
    const { courseId } = req.params;
    const isEnrolled = await EnrollmentService.checkEnrollmentStatus(req.user.id, Number(courseId));
    res.json({ enrolled: isEnrolled });
};
exports.checkEnrollment = checkEnrollment;
const unenrollFromCourse = async (req, res) => {
    const { courseId } = req.params;
    await EnrollmentService.unenrollFromCourse(req.user.id, Number(courseId));
    res.json({ message: "Successfully unenrolled from course" });
};
exports.unenrollFromCourse = unenrollFromCourse;
//# sourceMappingURL=enrollment.controller.js.map