const CART_KEY = "my-special-cart";

export function addToCart(product: any) {
    const cart = getCart();
    cart.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
export function clearCart() {
    localStorage.removeItem(CART_KEY);
}
export function removeProduct(product: any) {
    const cart = getCart();
    const newCart = cart.filter((p: any) => p.id !== product.id);
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
}
export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

export function getCurrentCartValue() {
    const cart = getCart();
    return cart.reduce((acc: number, p: any) => acc + Number(p.price), 0);
}

export function getTierStatus(amount: number): string {
    if (amount >= 0 && amount < 500) {
        const nextTier = 'bronze';
        const remaining = 500 - amount;
        return `Next tier: ${nextTier}, reach ${remaining} more for bronze status`;
    } else if (amount >= 500 && amount < 1000) {
        const nextTier = 'silver';
        const remaining = 1000 - amount;
        return `Next tier: ${nextTier}, reach ${remaining} more for silver status`;
    } else if (amount >= 1000 && amount < 2000) {
        const nextTier = 'silver';
        const remaining = 2000 - amount;
        return `Next tier: ${nextTier}, reach ${remaining} more for silver status`;
    } else if (amount >= 2000) {
        const nextTier = 'gold';
        return `Next tier: ${nextTier}, you are already a gold status member!`;
    } else {
        return 'Invalid amount entered';
    }
}





