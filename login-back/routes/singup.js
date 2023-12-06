const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponse");// Importamos la función jsonResponse del archivo utils.js

router.post("/", (req, res) => {
  const { Username, Name, password } = req.body;
  if (!!!Username || !!!Name || !!!password) {
    return res
      .status(400)
      .json(jsonResponse(400, { error: "Campos requeridos" }));
  } else {
    return res
      .status(200)
      .json(jsonResponse(200, { message: "Usuario creado" }));
  }
});

module.exports = router;
