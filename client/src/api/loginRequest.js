import { API_URL } from "./config"

export default async(password) => {
  return  await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      password,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Login failed')
      }
    })
}