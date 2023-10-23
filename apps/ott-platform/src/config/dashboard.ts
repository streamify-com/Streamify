import { type SidebarNavItem } from "@shared-components/types";

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Account",
      href: "/dashboard/account",
      items: [],
    },
    {
      title: "Subscription",
      href: "/dashboard/subscription",
      items: [],
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      items: [],
    },
  ],
};
