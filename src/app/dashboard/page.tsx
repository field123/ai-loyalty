import { LoyaltyDashboard } from "@/components/loyalty-dashboard";
import {retrieveAllUser, retrieveUser} from "@/app/cart/actions";

export default async function Dashboard() {

    return (
        <LoyaltyDashboard />
    )
}