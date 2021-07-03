import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
const envDir = "./config";

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    envDir,
    build: {
      outDir: loadEnv(mode, envDir).VITE_OUT_DIR,
    },
  });
};
// process.cwd() 方法返回 Node.js 进程的当前工作目录。

// import vue from "@vitejs/plugin-vue";
// import path from "path";
// import { defineConfig } from "vite";
// const envDir = "./config";
// export default ({ mode }) => {
//   require("dotenv").config({ path: `${envDir}/.env.${mode}` });
//   return defineConfig({
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "src"),
//       },
//     },
//     envDir,
//     build: {
//       outDir: process.env.VITE_OUT_DIR,
//     },
//   });
// };
