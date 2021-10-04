const home = require("./homeRoute");

module.exports = app => {
    app.use(home);
};