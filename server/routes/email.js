/**
 * Created by kishore on 12/28/15.
 */
module.exports = function(app, config){
    var baseUrl = "/email";

    var emailRouter = require("../controllers/emailController")(config);

    app.post(baseUrl+"/send", emailRouter.sendEmail);

};