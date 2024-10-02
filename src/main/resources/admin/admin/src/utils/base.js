const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootm117l/",
            name: "springbootm117l",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootm117l/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业车辆管理系统设计与实现"
        } 
    }
}
export default base
