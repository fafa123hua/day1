// esm规范
import fs from "fs"
import { createIndexTemplate } from "./indexTemplate.js"

const inputConfig = {
    middleware: {
        router: true,
    }
}

// 创建一个文件夹
fs.mkdirSync('haha');

// 创建index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));

// 创建json
fs.writeFileSync(getRootPath() + "/package.json", "package");

// 安装依赖
function getRootPath() {
    return "./haha";
}