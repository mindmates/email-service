/**
 * Created by kishore on 12/28/15.
 */
module.exports = function(app, config){
    var baseUrl = "/mailConfigs";

    var mailConfigRouter = require("../controllers/mailConfigController")(config);

    app.get(baseUrl+"/list", mailConfigRouter.fetchMailConfigs);
    app.get(baseUrl+"/:id", mailConfigRouter.findMailConfig);
    app.post(baseUrl+"/", mailConfigRouter.saveMailConfig);
    app.post(baseUrl+"/:id", mailConfigRouter.updateMailConfig);
    app.delete(baseUrl+"/:id", mailConfigRouter.deleteMailConfig);

};