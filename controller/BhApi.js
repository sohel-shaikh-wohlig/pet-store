'use strict';
 
const _ = require("underscore");
const axios = require("axios")
const pool = require("../db/conn")
 
class BhService {
  async login(){
    try {
        const result = await axios.post('https://testapi.blue-horizon.com/api/user/login', {
            email: 'example@gmail.com',
            password: 'Example@123'
          })
        return result.data
    } catch (error) {
        return error
    }
  }
  async getData(){
    try {
        const client = await pool.connect()
        const result = await client.query('select * from daily_security_price')
        client.release()
        return result
    } catch (error) {
        return error
    }
  }
}
module.exports = BhService;