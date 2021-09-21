const { remark } = require("remark")
const remarkHtml = require('remark-html')
module.exports = (source, callback) => {
    remark().use(remarkHtml).process(source).then((file) => {
        callback(null, 'export default ${String(file)}')
    })
}