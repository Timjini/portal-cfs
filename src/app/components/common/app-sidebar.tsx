import { Calendar, Home, Inbox, Search, Settings, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"
import { Badge } from "@/components/ui/badge"


type BadgeVariant = "secondary" | "default" | "outline" | "destructive" | null | undefined;

type NavItem = {
  title: string;
  url: string;
  icon: React.ComponentType<any>; 
  feature: string;
  badge: BadgeVariant;
}

const items: NavItem[] = [
  { title: "Home", url: "/dashboard", icon: Home, feature: "", badge: undefined },
  { title: "Inbox", url: "#", icon: Inbox, feature: "Coming soon", badge: "secondary" },
  { title: "Calendar", url: "#", icon: Calendar, feature: "Coming soon", badge: "secondary" },
  { title: "Search", url: "#", icon: Search, feature: "Coming soon", badge: "secondary" },
  { title: "Settings", url: "/user-setting", icon: Settings, feature: "New", badge: "secondary" },
]

const APP_NAME = process.env.APP_NAME

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col justify-between h-full">
      {/* Header */}
      <div className="p-4 flex items-center gap-2 border-b">
        <img src="/images/cfs-dark.png" alt="App Logo" className="w-8 h-auto" />
        <span className="font-bold text-lg">{APP_NAME}</span>
      </div>

      {/* Menu */}
      <SidebarContent className="flex-1 overflow-y-auto sidebarMenu">
        <SidebarGroup>
          <SidebarGroupLabel>PORTAL</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center justify-between w-full gap-2">
                      <div className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                      {item.feature && item.badge && (
                        <Badge variant={item.badge}>
                          {item.feature}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <div className="p-4 border-t flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/path-to-user-image.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <LogOut size={16} />
          Logout
        </Button>
        <ModeToggle />
      </div>
    </Sidebar>
  )
}
