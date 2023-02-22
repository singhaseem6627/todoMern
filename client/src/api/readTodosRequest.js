import { API_URL } from "./config"

export default  async(token) => {
  return await fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  })
    .then(response => response.json())
}