const jwt = require('jsonwebtoken');
//authentication, if we send token them only endpont hits
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send('invalid credentials');
  } else {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(403).send('invalid credentials');
      } else {
        next();
      }
    });
  }
}