/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jtgoOSqfLk2
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Cart() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[80px_1fr_80px_100px] items-center bg-gray-100 dark:bg-gray-800 px-4 py-3">
              <span className="text-sm font-medium">Image</span>
              <span className="text-sm font-medium">Product</span>
              <span className="text-sm font-medium">Quantity</span>
              <span className="text-sm font-medium">Price</span>
            </div>
            <div className="divide-y dark:divide-gray-800">
              <div className="grid grid-cols-[80px_1fr_80px_100px] items-center px-4 py-4">
                <img
                  alt="Product Image"
                  className="rounded-md"
                  height={64}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width={64}
                />
                <div className="space-y-1">
                  <h3 className="text-base font-medium">Cozy Blanket</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Warm and Soft for Chilly Nights</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span>2</span>
                  <Button size="icon" variant="outline">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-base font-medium">$59.99</span>
              </div>
              <div className="grid grid-cols-[80px_1fr_80px_100px] items-center px-4 py-4">
                <img
                  alt="Product Image"
                  className="rounded-md"
                  height={64}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width={64}
                />
                <div className="space-y-1">
                  <h3 className="text-base font-medium">Autumn Mug</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enjoy Your Hot Beverages in Style</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span>1</span>
                  <Button size="icon" variant="outline">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-base font-medium">$12.99</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Loyalty Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Current Points:</span>
                <span className="font-medium">1,250</span>
              </div>
              <Button className="w-full" variant="outline">
                Redeem Points
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-medium">$72.98</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Loyalty Discount</span>
                <span className="font-medium text-green-500">-$5.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>$67.98</span>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
