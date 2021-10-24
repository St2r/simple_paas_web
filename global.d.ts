declare namespace NodeJS{
  // 扩充 process.env
  interface ProcessEnv {
    JWT_SECRET_KEY: string;
    SERVER_HOST_NAME: string;
  }
}