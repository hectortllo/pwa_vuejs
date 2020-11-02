const url = 'http://localhost:3000'

async function getPlaces () {
  const res = await fetch(`${url}/places`)
  return res.json()
}

function updatePlace (data) {
  let id = data.place.id
  console.log(data)
  fetch(`${url}/places/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

export default {
  getPlaces,
  updatePlace
}
