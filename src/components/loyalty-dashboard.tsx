import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import {retrieveUsers} from "@/app/cart/actions";
import {resolveTier} from "@/lib/resolve-tier";

export async function LoyaltyDashboard() {
  const users = await retrieveUsers();

  const customersMetrics = users.reduce((acc, user) => {
    const tier = resolveTier(user.loyalty_value);
    return {
      ...acc,
      ...(tier === 'bronze' && { bronze: {
        number: acc.bronze.number + 1,
        totalSpend: acc.bronze.totalSpend + Number(user.loyalty_value),
        } }),
        ...(tier === 'silver' && { silver: {
            number: acc.silver.number + 1,
            totalSpend: acc.silver.totalSpend + Number(user.loyalty_value),
          } }),
        ...(tier === 'gold' && { gold: {
            number: acc.gold.number + 1,
            totalSpend: acc.gold.totalSpend + Number(user.loyalty_value),
          } }),
    }
  }, {
    bronze: {
      number: 0,
      totalSpend: 0,
    },
    silver: {
        number: 0,
        totalSpend: 0,
    },
    gold: {
        number: 0,
        totalSpend: 0,
    },
  })

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
              <span className="text-4xl font-bold">{customersMetrics.bronze.number}</span>
              <span className="text-gray-500 dark:text-gray-400">Customers</span>
              <span className="text-gray-500 dark:text-gray-400">Total Spend: ${formatNumber(customersMetrics.bronze.totalSpend)}</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Silver</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
              <span className="text-4xl font-bold">{customersMetrics.silver.number}</span>
              <span className="text-gray-500 dark:text-gray-400">Customers</span>
              <span className="text-gray-500 dark:text-gray-400">Total Spend: ${formatNumber(customersMetrics.silver.totalSpend)}</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gold</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
              <span className="text-4xl font-bold">{customersMetrics.gold.number}</span>
              <span className="text-gray-500 dark:text-gray-400">Customers</span>
              <span className="text-gray-500 dark:text-gray-400">Total Spend: ${formatNumber(customersMetrics.gold.totalSpend)}</span>
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
                  {users.map((user) => (
                    <TableRow key={user.guid}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{resolveTier(user.loyalty_value)}</TableCell>
                      <TableCell>{user.loyalty_value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

function formatNumber(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}