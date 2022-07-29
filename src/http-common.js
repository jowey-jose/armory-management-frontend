import axios from "axios";
import { Buffer } from "buffer";

const username = 'user'
const password = '8038a6a4-4463-4b0d-a084-9b81a54c3d2c' // Replcae by the auto-generated password from the backend server.

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

export default axios.create({


  baseURL: "http://localhost:8082/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Basic ${token}`
  }
});