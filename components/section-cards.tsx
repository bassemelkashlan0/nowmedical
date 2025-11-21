"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, TrendingUp, DollarSign } from "lucide-react"

const cards = [
  {
    title: "Total Users",
    description: "Active users this month",
    value: "1,234",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Revenue",
    description: "Total revenue this month",
    value: "$45,231",
    change: "+8.2%",
    icon: DollarSign,
  },
  {
    title: "Active Now",
    description: "Users currently active",
    value: "573",
    change: "+23.1%",
    icon: Activity,
  },
  {
    title: "Growth",
    description: "Overall growth rate",
    value: "24.3%",
    change: "+4.7%",
    icon: TrendingUp,
  },
]

export function SectionCards() {
  return (
    <div className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
            <p className="text-xs text-green-600 mt-1">{card.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

