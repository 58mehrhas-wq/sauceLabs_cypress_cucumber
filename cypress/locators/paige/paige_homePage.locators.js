class PaigeHomePageLocator {
    closePopup() {
        return 'a[aria-label$="close"]'
    }

    popupAppearance() {
        return '.ltkpopup-split-content'
    }

    paigeBtn() {
        return 'app-header-default[class="desktop-sticky-header sticky-unstuck sticky-top"] img[alt="PAIGE"]'
        // return select('a').withText('PAIGE')
    }

    womenTab() {
        return '[aria-label="Open Women menu"] > app-menu-item > .pg-navTop_navLink > .menuItem--label'
    }

    pantsOption() {
        return '#primaryMenu-flyout0-women > div > div.pg-navFlyout_column2 > ul > li:nth-child(3) > app-menu-item > a > span'
    }
}

export default PaigeHomePageLocator;