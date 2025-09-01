const base = {
    get() {
        return {
            url : "http://localhost:8080/biyejiuyexinxiguanli/",
            name: "biyejiuyexinxiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/biyejiuyexinxiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "毕业就业信息管理系统"
        } 
    }
}
export default base
