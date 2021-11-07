import IndexPage from "@/pages/IndexPage";
import AdminPage from "@/pages/admin/AdminPage";
import LoginPage from "@/pages/login/LoginPage";
import MyPage from "@/pages/MyPage"

export default [
    { path: '/', component: IndexPage },
     { path: '/admin', component: AdminPage },
    { path: '/login', component: LoginPage },
    { path: '/my', component: MyPage },
]