export interface JwtPayload {
  id: number;
  role: "admin" | "instructor" | "student";
}
