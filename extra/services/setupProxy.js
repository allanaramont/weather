const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy( "/HPImageArchive.aspx",{
            target: "https://www.bing.com",
            changeOrigin: true
        } )
    );
}