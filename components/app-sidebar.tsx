import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  UsersRound,
  House,
  List,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const listMenu = [
  { 
    name: "Dashboard",
    url: "/admin", 
    icon: House,

    name: "User Management",
    url: "/admin/user-management", 
    icon: UsersRound, 
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 [&>div]:bg-red-600 [&>div]:text-white">
      <div className="flex h-full w-full flex-col bg-blue-600 text-white">
        {/* Header Logo */}
        <SidebarHeader className="p-4 bg-red-600">
          <div className="flex items-center justify-center gap-3 px-3 py-2">
            <Image
              src="/img/smk_mvp_ars_logo_white.png"
              alt="SMK MVP ARS"
              width={200}
              height={200}
              className="w-auto h-auto max-h-12 object-contain"
              priority
            />
          </div>
        </SidebarHeader>

        {/* Content Menu */}
        <SidebarContent className="bg-red-600">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white/80 text-xs font-semibold px-2 mb-2">
              Menu Utama
            </SidebarGroupLabel>
            <SidebarGroupContent>
              
              {/* Dashboard */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              
              <SidebarMenu>
                
                {listMenu.map((menu) => (
                  <SidebarMenuItem key={menu.name}>
                    <SidebarMenuButton
                      asChild
                      className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                    >
                      <Link href={menu.url}>
                        <menu.icon className="w-4 h-4 mr-2" />
                        <span>{menu.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* categories */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin/categories">
                      <List className="w-4 h-4 mr-2" />
                      <span>categories</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Jurusan */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin/jurusan">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span>Jurusan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Artikel */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin/artikel">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Artikel</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* profile */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin/artikel">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="bg-red-600" />
      </div>
    </Sidebar>
  );
}