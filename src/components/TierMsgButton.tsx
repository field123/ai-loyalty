"use client"
import {resolveTier} from "@/lib/resolve-tier";
import {getCurrentCartValue} from "@/app/cart";
import {useSearchParams} from "next/navigation";
import {retrieveUser} from "@/app/cart/actions";
import {useEffect, useState} from "react";

export function TierMsgButton() {
    const queryParams = useSearchParams()

    const [profile, setProfile] = useState<any>(null)

    useEffect(() => {
        retrieveUser(queryParams.get("email") ?? "").then((res) => {
            setProfile(res[0] as  any)
        })
    }, [])




    return (
        <div className="text-gray-500 dark:text-gray-400 font-medium">
            {profile && getTierStatus(profile.loyalty_value)}
        </div>
    )
}

function getTierStatus(amount: number): string {
    if (amount >= 0 && amount < 500) {
        const nextTier = 'bronze';
        const remaining = 500 - amount;
        return `Next tier: ${nextTier}, reach ${remaining} more for ${nextTier} status`;
    } else if (amount >= 500 && amount < 1000) {
        const nextTier = 'silver';
        const remaining = 1000 - amount;
        return `Next tier: ${nextTier}, reach ${remaining} more for ${nextTier} status`;
    } else if (amount >= 1000 && amount < 2000) {
        const nextTier = 'gold';
        const remaining = 2000 - amount;
        return `Next tier: ${nextTier}, reach ${remaining} more for ${nextTier} status`;
    } else if (amount >= 2000) {
        return `You are already a gold status member!`;
    } else {
        return 'Invalid amount entered';
    }
}