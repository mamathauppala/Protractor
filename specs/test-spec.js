import { element, browser } from "protractor"

describe('Testing google',function(){
    it('google search',function(){
        browser.waitForAngularEnabled(false)
        browser.get("https://www.google.com/")
        element(by.name('q')).sendKeys("selenium")

    })
})