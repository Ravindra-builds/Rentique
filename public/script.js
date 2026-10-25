(() => {
  'use strict'

  const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=880&auto=format&fit=crop'

  // Bootstrap client-side validation for every form with .needs-validation
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })

  // Ask before destructive actions: <form data-confirm="Are you sure?">
  document.querySelectorAll('form[data-confirm]').forEach(form => {
    form.addEventListener('submit', event => {
      if (!window.confirm(form.dataset.confirm)) event.preventDefault()
    })
  })

  // Swap broken listing images for a default photo
  document.addEventListener('error', event => {
    const img = event.target
    if (img.tagName === 'IMG' && img.classList.contains('js-fallback') && img.src !== FALLBACK_IMAGE) {
      img.src = FALLBACK_IMAGE
    }
  }, true)

  // Show / hide password
  document.querySelectorAll('[data-toggle-password]').forEach(btn => {
    const input = document.querySelector(btn.dataset.togglePassword)
    if (!input) return
    btn.addEventListener('click', () => {
      const show = input.type === 'password'
      input.type = show ? 'text' : 'password'
      btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password')
      btn.innerHTML = show ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>'
    })
  })

  // Live image preview on the listing form
  document.querySelectorAll('input[data-preview]').forEach(input => {
    const box = document.querySelector(input.dataset.preview)
    if (!box) return
    const placeholder = '<span><i class="fa-regular fa-image d-block fs-3 mb-2"></i>Paste an image URL to preview</span>'
    input.addEventListener('input', () => {
      const url = input.value.trim()
      if (!/^https?:\/\//i.test(url)) {
        box.innerHTML = placeholder
        return
      }
      const img = new Image()
      img.alt = 'Listing photo preview'
      img.onload = () => box.replaceChildren(img)
      img.onerror = () => { box.innerHTML = '<span><i class="fa-solid fa-triangle-exclamation d-block fs-3 mb-2"></i>Couldn’t load that image</span>' }
      img.src = url
    })
  })

  // Listing map (Leaflet + OpenStreetMap)
  const mapEl = document.getElementById('map')
  if (mapEl && window.L) {
    const lat = Number(mapEl.dataset.lat)
    const lng = Number(mapEl.dataset.lng)
    const map = L.map(mapEl, { scrollWheelZoom: false }).setView([lat, lng], 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    const redIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })

    // Build the popup with textContent so listing text is never parsed as HTML
    const popup = document.createElement('div')
    const label = document.createElement('strong')
    label.textContent = mapEl.dataset.label
    popup.append(label, document.createElement('br'), 'Approximate location')

    L.marker([lat, lng], { icon: redIcon }).addTo(map).bindPopup(popup).openPopup()
  }
})()
