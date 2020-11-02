const url = 'http://localhost:3000'

async function getPlaces () {
  const res = await fetch(`${url}/places`)
  return res.json()
}

function updatePlace (data) {
  let id = data.id
  fetch(`${url}/places/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default {
  getPlaces,
  updatePlace
}
