module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
