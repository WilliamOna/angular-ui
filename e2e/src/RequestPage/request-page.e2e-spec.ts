import { browser } from "protractor";
import { RequestPage } from "./request-page.po"

describe('Request Page',()=>{
    let page:RequestPage;
    
    beforeEach(()=>{
        page = new RequestPage();        
    });

    it('should open to the home page',()=>{
        page.navigateTo();
        // note that sleeping is a bad practice... just trying to make it slow enough for you to see
        browser.sleep(1000)
        // we could assert that we are on the right page
    })

    it('should navigate to request page',()=>{
        page.navigateToRequestPage();
        browser.sleep(2000);
        // we could check to make sure we are on the right page
    })
    it('should click the toggle button and the text should display',()=>{
        page.clickTheToggleButton();
        
        expect(page.checkTextDisplay()).toContain("itemType");
        browser.sleep(2000);
    })

})