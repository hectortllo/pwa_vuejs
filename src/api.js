const url = 'http://localhost:3000'

async function getPlaces () {
  const res = await fetch(`${url}/places`)
  return res.json()
}

function updatePlace (id, data) {
  fetch(`${url}/places/${id}`, {
    method: 'PUT',
    body: data
  })
}

export default {
  getPlaces,
  updatePlace
}
