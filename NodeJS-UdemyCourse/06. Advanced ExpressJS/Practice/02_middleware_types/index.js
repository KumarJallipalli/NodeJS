const express = require('express');

const app = express();

const PORT = 8000;

function globalLevelMiddleware (req, res, next) {
    console.log("This is Global Level Middleware, As it always runs")
    next();
}

function RouteLevelMiddleware (req, res, next) {
    console.log("This is Route Level Middleware");
    next();
}

app.use(globalLevelMiddleware());

app.get('/about', RouteLevelMiddleware);

app.get('/', (req, res) => {
    console.log("This is Final Middleware, as it is terminating Req");
    res.json({Message: "Response is Sent"});
})


app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));