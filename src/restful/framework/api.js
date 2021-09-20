const { inherits } = require("util");

module.exports = {
    async inherits(ctx, next) {
        const model = ctx.app.$model[ctx.params.list]
        if (model) {
            ctx.list =
        } else {
            ctx.body = 'no this model'
        }
    },
    async list(ctx) {
        ctx.body = await ctx.list.find({})
    },
    async create(ctx) {
        const res = await ctx.list.create(ctx.request.body);
        ctx.body = res;
    },
    async update(ctx) {
        const res = await ctx.list.updateOne({ _id: ctx.params.id },
            ctx.request.body);
        ctx.body = res;
    },
    async del(ctx) {
        const res = await ctx.list.deleteOne({ _id: ctx.params.id });
        ctx.body = res;
    },

}