import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, MessageCircle, ListChecks, History } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Find the Perfect Gift with AI</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let our AI assistant help you discover thoughtful gifts for any occasion,
          from birthdays to anniversaries and everything in between.
        </p>
        <Button size="lg" asChild>
          <Link href="/chat">
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Gift Search
          </Link>
        </Button>
      </section>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <Card className="p-6 space-y-4">
          <Gift className="h-12 w-12 text-primary" />
          <h2 className="text-xl font-semibold">Personalized Recommendations</h2>
          <p className="text-muted-foreground">
            Get tailored gift suggestions based on the recipient's interests, occasion, and your budget.
          </p>
        </Card>

        <Card className="p-6 space-y-4">
          <ListChecks className="h-12 w-12 text-primary" />
          <h2 className="text-xl font-semibold">Save & Compare</h2>
          <p className="text-muted-foreground">
            Create gift lists, save favorites, and compare options to make the best choice.
          </p>
        </Card>

        <Card className="p-6 space-y-4">
          <History className="h-12 w-12 text-primary" />
          <h2 className="text-xl font-semibold">Chat History</h2>
          <p className="text-muted-foreground">
            Access your previous conversations and recommendations anytime.
          </p>
        </Card>
      </div>
    </div>
  )
}