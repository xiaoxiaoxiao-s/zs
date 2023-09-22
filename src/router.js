import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home'
import Team from "./pages/Team";
import Dynamic from "./pages/Dynamic";
import DynamicDetail from "./pages/Dynamic/detail";
import Case from "./pages/Case";
import CaseDetail from "./pages/Case/detail";
import My from "./pages/My";

import AdminCase from "./pages/AdminCase";
import AdminCaseDetail from "./pages/AdminCase/detail";
import AdminDynamic from "./pages/AdminDynamic";
import AdminDynamicDetail from "./pages/AdminDynamic/detail";
import AdminNum from "./pages/AdminNum";
import AdminLogin from "./pages/AdminLogin";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/team", component: Team },
    { path: "/dynamic", component: Dynamic },
    { path: "/dynamic/detail", component: DynamicDetail },
    { path: "/case", component: Case },
    { path: "/case/detail", component: CaseDetail },
    { path: "/my", component: My },
    { path: "/admin/case", component: AdminCase },
    { path: "/admin/case/detail", component: AdminCaseDetail },
    { path: "/admin/dynamic", component: AdminDynamic },
    { path: "/admin/dynamic/detail", component: AdminDynamicDetail },
    { path: "/admin/num", component: AdminNum },
    { path: "/admin/login", component: AdminLogin },
  ],
});
