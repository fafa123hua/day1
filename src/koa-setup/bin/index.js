// esm
import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageJsonTemplate } from "./packageJsonTemplate.js";
import { question } from "./question/index.js";
import { createConfig } from "./config.js";
import execa from "execa";
import path from 'path'
const answer = await question();
const config = createConfig(answer);

// 核心：自动化思维
// happy path
// 1. 创建了文件夹 （项目名）
fs.mkdirSync(getRootPath());

// // 2. 创建了 index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(config));

// // 3. 创建了 Package.json
fs.writeFileSync(
    getRootPath() + "/package.json",
    createPackageJsonTemplate(config)
);

// // 4. 安装依赖
execa("yarn", {
    cwd: getRootPath(),
    stdio: [2, 2, 2],
});

function getRootPath() {
    return path.resolve(process.cwd(), config.packageName)
}