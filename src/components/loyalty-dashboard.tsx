import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function LoyaltyDashboard() {
  return (
    <main className="flex flex-col gap-8 px-4 py-8 md:px-6 md:py-12 bg-white dark:bg-gray-950">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold md:text-3xl">Loyalty Program Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">3 Tiered Loyalty Program</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Bronze</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
              <span className="text-4xl font-bold">1,234</span>
              <span className="text-gray-500 dark:text-gray-400">Customers</span>
              <span className="text-gray-500 dark:text-gray-400">Total Spend: $2,345</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Silver</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
              <span className="text-4xl font-bold">789</span>
              <span className="text-gray-500 dark:text-gray-400">Customers</span>
              <span className="text-gray-500 dark:text-gray-400">Total Spend: $78,900</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gold</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
              <span className="text-4xl font-bold">456</span>
              <span className="text-gray-500 dark:text-gray-400">Customers</span>
              <span className="text-gray-500 dark:text-gray-400">Total Spend: $91,200</span>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardFooter>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Spend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Bronze</TableCell>
                    <TableCell>$10 / $100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>Bronze</TableCell>
                    <TableCell>$15 / $100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Johnson</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>Bronze</TableCell>
                    <TableCell>$20 / $100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Alice Williams</TableCell>
                    <TableCell>alice@example.com</TableCell>
                    <TableCell>Silver</TableCell>
                    <TableCell>$10 / $1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tom Davis</TableCell>
                    <TableCell>tom@example.com</TableCell>
                    <TableCell>Silver</TableCell>
                    <TableCell>$50 / $1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sarah Lee</TableCell>
                    <TableCell>sarah@example.com</TableCell>
                    <TableCell>Silver</TableCell>
                    <TableCell>$75 / $1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Chen</TableCell>
                    <TableCell>michael@example.com</TableCell>
                    <TableCell>Gold</TableCell>
                    <TableCell>$100 / $2000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Emily Park</TableCell>
                    <TableCell>emily@example.com</TableCell>
                    <TableCell>Gold</TableCell>
                    <TableCell>$150 / $2000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>David Kim</TableCell>
                    <TableCell>david@example.com</TableCell>
                    <TableCell>Gold</TableCell>
                    <TableCell>$200 / $2000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
