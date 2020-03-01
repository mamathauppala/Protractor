
describe('Testing clarendo TIM login',()=>{
    it('login',async()=>{
        browser.get('https://timwebapp-clarendo-staging.azurewebsites.net/#/login')
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)       
        $$('button[aria-label="Language"]').click()
        $$('span[translate="TOOLBAR.ENGLISH"]').click()
        element(by.model('vm.form.userName')).sendKeys("mamathastaging")
        element(by.model('vm.form.password')).sendKeys("Mammu@4322")
        await $$('button[ng-click="vm.Login()"]').click()
        
        browser.sleep(5000)
       

    })

})