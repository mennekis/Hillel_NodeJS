const logLevel = process.env.NODE_ENV === "production" ? "error" : "info";

module.exports = {
   logLevel,
   db: {
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
   },
};
