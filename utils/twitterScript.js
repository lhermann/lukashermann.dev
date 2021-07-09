let addScriptPromise = null

export async function parseTwitterWidget () {
  const twttr = await loadTwitterScript()
  twttr.widgets.load()
}

export async function loadTwitterScript () {
  if (window.twttr) Promise.resolve(window.twttr)
  return await addPlatformScript('//platform.twitter.com/widgets.js')
}

/** Adds proviced script to the page, once **/
function addPlatformScript (src) {
  if (!addScriptPromise) {
    const element = document.createElement('script')
    element.setAttribute('src', src)
    document.body.appendChild(element)
    addScriptPromise = new Promise(resolve => {
      element.onload = () => {
        resolve(window.twttr)
      }
    })
  }
  return addScriptPromise
}
