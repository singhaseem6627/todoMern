import { API_URL } from "./config"

export default async (todo, token) => {
  return  await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      text: todo.text,
      completed: false
    })
  })
    .then(response => response.json())
}