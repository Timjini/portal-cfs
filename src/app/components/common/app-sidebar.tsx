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

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

const APP_NAME = process.env.APP_NAME;

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col justify-between h-full">
      {/* Header */}
      <div className="p-4 flex items-center gap-2 border-b">
        <img src="/path-to-logo.png" alt="App Logo" className="w-8 h-8" />
        <span className="font-bold text-lg">{APP_NAME}</span>
      </div>

      {/* Menu */}
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
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
        <ModeToggle/>
      </div>
    </Sidebar>
  )
}
