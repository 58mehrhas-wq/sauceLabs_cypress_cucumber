class SauceDemoHomePage {

    HomePage() {
        return '.app_logo'
    }

    SLBgpk() {
        return "[data-test=item-4-title-link] > [data-test=inventory-item-name]"

    }

    BackpackPage() {
        return '.inventory_details_desc.large_size'
    }

    SLBgPkAddToCart() {
        return '#add-to-cart'
    }

    SLBgPkATCText() {
        return '#add-to-cart-sauce-labs-backpack'
    }

    SLBgPkRemoveBtn() {
        return '[data-test=remove]'
        
    }

    cartBadge() {
        return '.shopping_cart_badge'
    }

    shoppinCartBtn() {
        return '[data-test=shopping-cart-badge]'
        
    }

    loginLogo() {
        return '.login_logo'        
    }

}

export default SauceDemoHomePage;