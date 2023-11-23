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
      restricted: false,
    },
    {
      title: "Subscription",
      href: "/dashboard/subscription",
      items: [],
      restricted: false,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      items: [],
      restricted: false,
    },
  ],
};
