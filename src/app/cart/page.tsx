import { Navbar} from "@/components/Navbar"
import Cart from "@/components/cart"

import Footer from "@/components/footer"
import ShippingRatesPage from "@/components/Shipping"


export default function Checkout() {
    return (
        <>
        <Navbar/>
        
        <Cart/>
        <Footer/>
        <ShippingRatesPage/>
        
        </>
    )
}
