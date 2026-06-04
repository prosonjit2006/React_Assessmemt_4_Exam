import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";

export const iconMap: any = {
  dashboard: DashboardIcon,
  users: PeopleIcon,
  analytics: BarChartIcon,
  reports: AssessmentIcon,
  money: AttachMoneyIcon,
  settings: SettingsIcon,
};
export const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    path: "/admin/dashboard",
  },
  {
    id: "category",
    label: "Category",
    icon: "users",
    path: "/admin/category",
  },
  {
    id: "news",
    label: "News",
    icon: "analytics",
    path: "/admin/news",
  },
  {
    id: "user",
    label: "User",
    icon: "user",
    path: "/admin/user",
  },
];
