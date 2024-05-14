"use client"
import {resolveTier} from "@/lib/resolve-tier";
import {getCurrentCartValue} from "@/app/cart";

export function TierButton() {
    return <div className="px-6 py-2 text-black font-bold italic border-b-2 border-black">Tier: {resolveTier(getCurrentCartValue())}</div>
}