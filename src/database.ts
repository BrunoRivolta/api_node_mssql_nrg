import sql from 'mssql'
import * as dotenv from "dotenv"
dotenv.config()

const sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  server: 'DESKTOP-L91ORGI',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true,
  },
  port: 49693
}

export async function getdata() {
  try {
    let pool = await sql.connect(sqlConfig)
    console.log('Conectado ao banco de dados!')
    return pool
  } catch (err) {
    console.log('Erro ao conectar com o banco de dados')
    console.log(err)
  }
}

export { sql }