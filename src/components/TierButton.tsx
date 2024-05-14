"use client"
import {resolveTier} from "@/lib/resolve-tier";
import {getCurrentCartValue} from "@/app/cart";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {retrieveUser} from "@/app/cart/actions";

export function TierButton() {
    const queryParams = useSearchParams()

    const [profile, setProfile] = useState<any>(null)

    useEffect(() => {
        retrieveUser(queryParams.get("email") ?? "").then((res) => {
            setProfile(res[0] as  any)
        })
    }, [])

    return <div className="px-6 py-2 text-black font-bold italic border-b-2 border-black">Tier: {profile && resolveTier(profile.loyalty_value)}</div>
}