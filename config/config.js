module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  dev: {
    username: "traineeUser",
    password: "traineePassword",
    database: "postgres",
    // host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
    host: "traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
    dialect: 'postgres' 
  },
  // production: {
  //   username: "CHANGE_ME",
  //   password: "CHANGE_ME",
  //   database: "grader",
  //   host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
  //   dialect: 'postgres' 
  // }
  // ,
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOSTNAME,
  //   dialect: 'mysql',
  //   use_env_variable: 'DATABASE_URL'
  // }
};
