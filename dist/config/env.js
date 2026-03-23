import dotenv from "dotenv";
dotenv.config();
function requiredEnv(name) {
    const value = process.env[name];
    if (!value)
        throw new Error(`Missing required environment variable: ${name}`);
    return value;
}
export const env = {
    port: Number(process.env.PORT) || 5000,
    db: {
        host: requiredEnv("DB_HOST"),
        user: requiredEnv("DB_USER"),
        password: requiredEnv("DB_PASSWORD"),
        name: requiredEnv("DB_NAME"),
    },
    jwt: {
        secret: requiredEnv("JWT_SECRET"),
        refreshSecret: process.env.JWT_REFRESH_SECRET || requiredEnv("JWT_SECRET"),
    }
};
//# sourceMappingURL=env.js.map