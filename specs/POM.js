let Homepage=require('../pages/homepage')

describe('Testing clarendo TIM login',function(){
    it('TIM login',async function(){
        Homepage.get("https://timwebapp-clarendo-staging.azurewebsites.net/#/login")
        Homepage.selectLanguage("English")
        Homepage.enterusername("mamathastaging")
        Homepage.enterpassword("Mammu@4322")
        await Homepage.clickonlogin()
        expect(await Homepage.homepageverify()).toEqual('Dashboard')
        
        



    })

})