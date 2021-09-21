const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

app.use((ctx) => {
    const url = ctx.request.url;
    console.log(url)
    if (url === '/') {
        ctx.body = fs.readFileSync('./index.html', 'utf-8')
    } else if (url.endsWith(".js")) {
        const p = path.resolve(__dirname, url.slice(1));
        ctx.type = "text/javascript"
        const source = fs.readFileSync(p, "utf-8")
        ctx.body = rewriteImport(source)
    } else if (url.startsWith('@modules')) {
        const modulesName = url.replace("/@modules", "");
        const prefix = path.resolve(__dirname, "node_modules", modulesName)
        const prefix = __dirname + "/node_modules" + modulesName;

        const mo = module

    }
});

function rewriteImport(source) {
    return source.replace(/(from\s+['"])(?![\.\/])g,"$1/@modules / ")
        .replace()
    }

    app.listen(8080, (ctx) => {
        console.log("localhost");
    });