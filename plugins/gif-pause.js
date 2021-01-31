/**
 * Crudely injecting a function into the global scope
 *
 * Example Markup:
 * <figure data-gifpause onclick="gifpause_toggle(event)">
 *    <img
 *      src="animation.gif"
 *      data-still="animation-still.png"
 *      alt="My Animation"
 *    />
 *    <figcaption>My Animation (click to play)</figcaption>
 *  </figure>
 */
export default () => {
  // Add gifpause_Toggle function to global namespace
  window.gifpause_toggle = event => {
    // eslint-disable-next-line
    if (!event) return console.error('Missing property event')
    const img = event.target.querySelector('img')
    const isPaused = event.target.dataset.paused !== undefined
    if (isPaused) {
      img.dataset.still = img.src
      img.src = img.dataset.gif
      delete event.target.dataset.paused
    } else {
      img.dataset.gif = img.src
      img.src = img.dataset.still
      event.target.dataset.paused = ''
    }
  }

  // Add hover styles
  const styles = `
    [data-gifpause] {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }
    [data-gifpause]::before,
    [data-gifpause]::after {
      content: '';
      position: absolute;
      z-index: 1;
      transition: opacity .3s;
      opacity: 0;
    }
    [data-gifpause]::before {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: 3px;
      box-shadow: 0 0 5em rgba(0,0,0,.25) inset;
    }
    [data-gifpause]::after {
      content: 'pause';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: .5em 1em;
      background-color: rgba(0, 0, 0, .75);
      color: white;
      border-radius: 3px;
      font-weight: bold;
      text-transform: uppercase;
    }
    [data-gifpause][data-paused]::after {
      content: 'play';
      opacity: 0.75;
    }
    [data-gifpause]:hover::before,
    [data-gifpause]:hover::after {
      opacity: 1;
    }
  `
  const styleTag = document.createElement('style')
  styleTag.type = 'text/css'
  styleTag.dataset.gifpause = 'text/css'
  if (styleTag.styleSheet) styleTag.styleSheet.cssText = styles
  else styleTag.appendChild(document.createTextNode(styles))
  document.head.appendChild(styleTag)
}
