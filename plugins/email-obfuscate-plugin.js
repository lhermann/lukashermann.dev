function defuscate (event) {
  const el = event.target
  const regex = new RegExp(el.obfuscateSnare, 'g')
  el.href = el.href?.replace(regex, '')
}

const eventListeneerOptions = { once: true }

function bind (el, { value }) {
  el.obfuscateSnare = value
  el.addEventListener('focus', defuscate, eventListeneerOptions)
  el.addEventListener('mouseenter', defuscate, eventListeneerOptions)

  for (const child of el.children) {
    if (child.nodeName === 'B') {
      child.style.visibility = 'hidden'
      child.style.fontSize = 0
    }
    if (child.nodeName === 'I') child.style.fontStyle = 'normal'
  }
}

function unbind (el) {
  el.removeEventListener('focus', defuscate, eventListeneerOptions)
  el.removeEventListener('mouseenter', defuscate, eventListeneerOptions)
}

const directive = {
  bind,
  update: bind,
  unbind,
}

export function install (Vue, options = {}) {
  if (install.installed) return
  install.installed = true

  Vue.directive('email-obfuscate', directive)
}

const VEmailObfuscate = {
  install,
}

export default VEmailObfuscate
