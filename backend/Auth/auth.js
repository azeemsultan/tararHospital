const jwt = require("jsonwebtoken");

function setToken(id, email, isAdmin, isApproved) {
  return jwt.sign(
    {
      id: id,
      isAdmin: isAdmin,
      email: email,
      isApproved: isApproved,
    },
    "TararHospital"
  );
}
exports.setToken = setToken;
