const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();

router.post("/", (req, res) => {
  const { username, name, password } = req.body;
  if (!!username && !!name && !!password) {
    return res
      .status(400)
      .json(jsonResponse(400, { error: "Campos requeridos" }));
  }
  else {
    return res
      .status(200)
      .json(jsonResponse(200, { message: "Usuario creado" }));
  }
});

module.exports = router;
