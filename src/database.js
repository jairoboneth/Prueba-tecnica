import pkg from 'mongoose';

const { connect } = pkg;
// connection to db
(async () => {
  try {
    const db = await connect("mongodb://localhost:27017/crud");
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();