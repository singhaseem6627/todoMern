import { API_URL } from "./config"

export default async (todo, token) => {
  return await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
  })
}