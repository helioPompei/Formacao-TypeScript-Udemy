import winston from "winston";
import config from "config";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  degub: 4,
};

const level = () => {
  const env = config.get<string>("env") || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};
