// const { static: staticFiles } = require("express");
// const swaggerUi = require("swagger-ui-express");

// const swaggerDocument = require("./swagger.js");
// const authMiddleware = require("../controllers/authenticated.js");

// const path = require("path");
// const auth = require("./auth.js");
// const userLogs = require("../modules/logger/router/user-logs.router");

const user = require('../modules/user/userRouter');


const init = (app) => {
    if (!app) {
        return echo.warn(`router.init() "app" parameter is required.`);
    }
    if (!app) {
        return echo.warn(`router.init() "app" parameter is required.`);
    }

    // const uploadsPath = path.resolve(__dirname, "../../uploads");
    // app.use(routes.root, auth());
    // app.use("/api-docs", authMiddleware, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    // app.use("/settings/user-logs", userLogs());
    // app.use("/uploads", staticFiles(uploadsPath));
    // app.use("/logout", auth());
};

module.exports = init;
