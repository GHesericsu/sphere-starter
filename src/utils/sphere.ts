
import { Sphere, Env } from "@spherelabs/sdk"
import * as dotenv from 'dotenv'
dotenv.config();
console.log(process.env.API_KEY)

const env: Env = "mainnet"
const apiKey: string = `${process.env.API_KEY}`
const signer: string = `${process.env.PRIVATE_KEY}`
const sphere = new Sphere({ env, apiKey, signer })

export default sphere;