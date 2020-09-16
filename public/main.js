const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
  fetch('http://138.197.149.50:3000/car', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Voltage',
      quote: '12000mV'
    })
  })
})

