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
const express_1 = require("express");
const EnrollmentController = __importStar(require("../controllers/enrollment.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const enrollmentRouter = (0, express_1.Router)();
// Student routes
enrollmentRouter.post("/course/:courseId", auth_middleware_1.protect, (0, auth_middleware_1.allowRoles)("student"), EnrollmentController.enrollInCourse);
enrollmentRouter.get("/my-courses", auth_middleware_1.protect, (0, auth_middleware_1.allowRoles)("student"), EnrollmentController.getMyEnrollments);
enrollmentRouter.get("/course/:courseId/check", auth_middleware_1.protect, EnrollmentController.checkEnrollment);
enrollmentRouter.delete("/course/:courseId", auth_middleware_1.protect, (0, auth_middleware_1.allowRoles)("student"), EnrollmentController.unenrollFromCourse);
// Admin route to see enrollments for a course
enrollmentRouter.get("/course/:courseId/students", auth_middleware_1.protect, (0, auth_middleware_1.allowRoles)("admin"), EnrollmentController.getCourseEnrollments);
exports.default = enrollmentRouter;
//# sourceMappingURL=enrollment.route.js.map