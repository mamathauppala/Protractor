const driver=require('protractor')
import { browser, ExpectedConditions } from "protractor"

describe('Testing clarendo TIM login',()=>{
    it('login',()=>{
        driver.browser.get('https://timwebapp-clarendo-staging.azurewebsites.net/#/login')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.$$('button[aria-label="Language"]').click()
        driver.browser.$$('span[translate="TOOLBAR.ENGLISH"]').click()
        driver.browser.element(driver.by.model('vm.form.userName')).sendKeys("mamathastaging")
        driver.browser.element(driver.by.model('vm.form.password')).sendKeys("Mammu@4322")
        let ele=element(driver.by.buttonText('Logga in'))
        let condition =ExpectedConditions.elementToBeClickable(ele)
        browser.wait(condition,30000)
        ele.click()
        browser.sleep(5000)
       

    })

})