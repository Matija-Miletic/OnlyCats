import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getCat() {
  const db = await request.get('https://api.thecatapi.com/v1/images/search')
  return db.body
}
