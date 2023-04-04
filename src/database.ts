//Utilizar o MySQL

import {createPool} from 'mysql2/promise'

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'Lucasknupp10@',
        database: 'api_equatorial',
        connectionLimit: 10
    })
    return connection
}


import sql from 'mssql'

const sqlConfig = {
  user: 'sa',
  password: '1234',
  database: 'equatorial',
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

/*
export async function getdata(query: string) {
 try {
  let pool = await sql.connect(sqlConfig)
  const result = await pool.query(query)
  console.log(result)
  console.log('Conectado ao banco de dados!')
 } catch (err) {
  console.log('Erro ao conectar com o banco de dados')
  console.log(err)
 }
}

getdata('select * from o_material')
*/