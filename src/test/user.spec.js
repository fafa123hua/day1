const User = require("./User")
test("shuold getName", () => {
    // 准备测试数据 given
    const user = new User("xiaohu")
        // 触发 when
    user.setName("xiaohei");
    // 验证 then
    expect(user.getName()).toBe("xiaohei")

})