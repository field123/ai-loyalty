"use client"

import {addToCart} from "@/app/cart";
import {Button} from "@/components/ui/button";
import {createOrder} from "@/app/cart/actions";

export default function CheckoutBtn({product}: {product: any}) {

    return (
        <Button onClick={async () => {
            const formData = new FormData()
            formData.set('userGuid', '1')
            formData.set('subtotal', product.price)
            formData.set('shipping', '5')
            formData.set('total', (parseFloat(product.price) + 5).toString())
            formData.set('orderLine', JSON.stringify([{productGuid: product.guid, quantity: 1}]))

        }} size="sm">Add to Cart</Button>
    );
}