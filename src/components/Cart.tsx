"use client"

import {addToCart} from "@/app/cart";
import {Button} from "@/components/ui/button";

export default function AddToCartButton({product}: {product: any}) {

    return (
        <Button onClick={() => addToCart(product)} size="sm">Add to Cart</Button>
    );
}