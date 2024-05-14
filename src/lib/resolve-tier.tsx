export function resolveTier(amount: number) {

    if(amount >= 500 && amount < 1000) {
        return "bronze"
    }

    if(amount >= 1000 && amount < 2000) {
        return "silver"
    }

    if (amount >= 2000) {
        return "gold"
    }

    return "none"
}