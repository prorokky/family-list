import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import MemberInfo from "@/views/MemberInfo";

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/info/:id",
            name: "Info",
            component: MemberInfo,
            props: true
        }
    ]
})




