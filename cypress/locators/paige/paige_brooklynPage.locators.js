class PaigeBrooklynPage {

     brooklynPageTile() {
        return '.pg-productInfo_title--main'
    }
    
     size26() {
        return '.pg-productInfo_button-list > :nth-child(4) > a'
    }
    
     inStock() {
        return '.availability'
    }
    
     size31() {
        return 'a[aria-label="Size Selected: 31. 10 available."]'
    }
    
     soldOut() {
        return '.not-availability'
    }
    
     size29() {
        return 'a[aria-label="Size Selected: 29. 12 available."]'
    }
    
     addToShoppingBag() {
        return '#add-to-shopping-bag-button'
    }
    
     goodNewsShippingMsg() {
        return '#toolsMenu-flyout2-myBag > div > div > div > app-bag-flyout > div > div > div.bag-flyout-footer > div.shipping-message'
    }
    
     checkoutBtn() {
        return 'div > div > app-bag-flyout > div > div > div.bag-flyout-footer > div:nth-child(3) > button'
    }
    
     checkoutItems() {
        return 'app-bag-product-item:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)'
    }
    
     estimatedTotal() {
        return '.pg-myBagOrderSummary_detailsLarge'
    }
    
     checkoutAsGuest() {
        return 'div.pg-myBagOrderSummary_buttons.pg-myBagOrderSummary_section > a:nth-child(2)'
    }
}

export default PaigeBrooklynPage;
