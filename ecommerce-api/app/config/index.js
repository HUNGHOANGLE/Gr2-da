const config = {
  database: {
    connection: "postgres://postgres:12345678@localhost:5432/gr2",
  },
  api: {
    host: "localhost",
    port: 8080 ,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: null,
    fromEmail: null,
  },
  webClient: {
    url: "http://localhost:3007",
  },
};

module.exports = config;
