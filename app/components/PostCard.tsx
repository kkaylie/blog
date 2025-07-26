import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface Props {
  title: string
  content: string
  description: string
  // action: React.ReactNode
  // footer: React.ReactNode
  className?: string
}

export function PostCard({
  className,
  title,
  content,
  description
}: // action,
// footer
Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {/* <CardAction>{action}</CardAction> */}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      {/* <CardFooter>
        <p>{footer}</p>
      </CardFooter> */}
    </Card>
  )
}
