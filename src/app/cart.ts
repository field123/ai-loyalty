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