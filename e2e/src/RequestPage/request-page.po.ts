import { browser, by, element } from "protractor";

// note we could probably have two page objects one for home and one for request
export class RequestPage{
    navigateTo(): Promise<unknown>{
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }
    navigateToRequestPage(): Promise<void>{
        return element(by.id("request-nav")).click() as Promise<void>;
    }
    clickTheToggleButton(): Promise<void>{
        return element(by.id("toggle-button")).click() as Promise<void>;
    }
    checkTextDisplay():Promise<string>{
        return element(by.id("info")).getText() as Promise<string>;
    }
}