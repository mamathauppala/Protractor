require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    directconnect :true,
    
    specs: ['specs/posse-spec.js']
  }