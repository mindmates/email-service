/**
 * Created by kishore on 12/28/15.
 */
module.exports = function(app, config){
    var baseUrl = "/accounts";

    var accountRouter = require("../controllers/accountController")(config);

    app.get(baseUrl+"/list", accountRouter.fetchAccounts);
    app.get(baseUrl+"/:id", accountRouter.findAccount);
    app.post(baseUrl+"/", accountRouter.saveAccount);
    app.post(baseUrl+"/:id", accountRouter.updateAccount);
    app.delete(baseUrl+"/:id", accountRouter.deleteAccount);

};