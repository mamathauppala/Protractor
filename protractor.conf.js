require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    directconnect :true,
    
    specs: ['specs/login-spec.js'],
    onPrepare:() =>{
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
    }
    
  }