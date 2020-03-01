//import { element, browser } from "protractor"

let homepage=function(){

    let language=$$('button[aria-label="Language"]')
    let english=$$('span[translate="TOOLBAR.ENGLISH"]')
    let swedish=$$('span[translate="TOOLBAR.SWEDISH"]')
    let uname=element(by.model('vm.form.userName'))
    let pwd=element(by.model('vm.form.password'))
    let login=$$('button[ng-click="vm.Login()"]')


    this.get=function(url){
        browser.get(url)
    }
    this.selectLanguage=function(lan){
        language.click();
        if(lan==="English"){
            english.click()
        }else{
            swedish.click()
        }
    }
    this.enterusername=function(username){
        uname.sendKeys(username)
    }
    this.enterpassword=function(password){
        pwd.sendKeys(password)
    }
    this.clickonlogin=async function(){
        await login.click()
    }
    this.homepageverify= function(){
        return browser.getTitle()
    }

    
}
module.exports=new homepage()