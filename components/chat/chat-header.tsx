import { MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ChatHeader() {
  return (
    <div className="p-4 border-b flex items-center gap-2">
      <MessageCircle className="h-5 w-5 text-primary" />
      <h2 className="font-semibold">Chat with Gift Advisor</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Describe who you're shopping for, their interests, and your budget.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}