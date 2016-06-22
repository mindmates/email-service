/**
 * Created by kishore on 12/28/15.
 */
module.exports = function(app, config){
    var baseUrl = "/templates";

    var templateRouter = require("../controllers/templateController")(config);

    app.get(baseUrl+"/list", templateRouter.fetchTemplates);
    app.get(baseUrl+"/:id", templateRouter.findTemplate);
    app.post(baseUrl+"/", templateRouter.saveTemplate);
    app.post(baseUrl+"/:id", templateRouter.updateTemplate);
    app.delete(baseUrl+"/:id", templateRouter.deleteTemplate);

};