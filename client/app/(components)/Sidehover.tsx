import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Smallsidebar } from "./Smallsidebar"
import { Sidebar } from "@/components/ui/sidebar"

export function Sidehover() {
  return (
    
      <HoverCardTrigger asChild>
        <Smallsidebar/>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <Sidebar/>
      </HoverCardContent>

  )
}
