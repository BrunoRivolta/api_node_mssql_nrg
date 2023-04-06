import sql from 'mssql'
import * as dotenv from "dotenv"
dotenv.config()

const sqlConfig = {
  user: 'sa',
  password: '1234',
  database: "equatorial",
  server: 'DESKTOP-L91ORGI',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 8080
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