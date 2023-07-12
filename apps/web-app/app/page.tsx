"use client";
import {Button} from "shared-ui"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button onClick={() => console.log('I was not clicked')}>Hello from NextJS</Button>
    </main>
  )
}
