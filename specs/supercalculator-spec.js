
//const driver=require('protractor')
import { browser, element } from "protractor"

describe('Test example',function(){
    it('test',async() =>{
         browser.get('http://juliemr.github.io/protractor-demo/')
         let title=await browser.getTitle()
         console.log(title)
         element(by.model('first')).sendKeys('5')              
        element( by.model('operator')).all( by.tagName('option')).get(3).click()
        element( by.model('second')).sendKeys('6')        
        element( by.buttonText('Go!')).click()
        console.log(await element(by.binding('latest')).getText())
    })

})