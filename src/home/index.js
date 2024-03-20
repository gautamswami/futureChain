import { GUI } from 'https://cdn.skypack.dev/dat.gui'
import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
const SIDES = ['top', 'right', 'bottom', 'left']


const CONFIG = {
  perspective: false,
  reduced: 1,
  rx: -24,
  ry: -24,
  bn: 5,
  hl: 1,
  hu: 359,
  sl: 1,
  su: 4,
  dl: 0,
  du: 5,
  cell: 5,
  depth: 100,
}

const GENERATE_BEAMS = () => {
  for (const SIDE of SIDES) {
    const CONTAINER = document.querySelector(`.warp__side--${SIDE}`)
    CONTAINER.innerHTML = ''
    const NUMBER = gsap.utils.random(1, CONFIG.bn, 1);
    const BEAMS = new Array(NUMBER).fill({}).map((beam) => {
      return {
        hue: gsap.utils.random(CONFIG.hl, CONFIG.hu, 1),
        x: gsap.utils.random(0, (100 / CONFIG.cell) - 1, 1),
        speed: gsap.utils.random(CONFIG.sl, CONFIG.su),
        delay: gsap.utils.random(CONFIG.dl, CONFIG.du),
      }
    })
    for (const BEAM of BEAMS) {
      CONTAINER.appendChild(Object.assign(document.createElement('div'), {
        className: 'beam',
        style: `
          --hue: ${BEAM.hue};
          --ar: ${gsap.utils.random(1, 10, 1)};
          --x: ${BEAM.x};
          --speed: ${BEAM.speed};
          --delay: ${BEAM.delay};
        `
      }))
    }
  }
}

const TOGGLE = () => {
  const showingPerspective = CONFIG.exploded
  if (!document.startViewTransition) return document.body.toggleAttribute('data-perspective')
  document.startViewTransition(() => {
    document.body.toggleAttribute('data-perspective')
  })
}

const UPDATE_CAMERA = () => {
  document.documentElement.style.setProperty('--rx', CONFIG.rx)
  document.documentElement.style.setProperty('--ry', CONFIG.ry)
}
const UPDATE_GRID = () => {
  document.documentElement.style.setProperty('--grid-size', `${CONFIG.cell}%`)
  GENERATE_BEAMS()
}

const UPDATE_PERSPECTIVE = () => {
  document.documentElement.style.setProperty('--perspective', CONFIG.depth);
}

const UPDATE_MOTION_PREF = () => {
  document.documentElement.style.setProperty('--reduced', CONFIG.reduced);
}

const CTRL = new GUI({
  width: 320
})

CTRL.add(CONFIG, 'perspective').name('Change View').onChange(TOGGLE)
// CTRL.add(CONFIG, 'cell', 1, 50, 1).name('Cell Size (%)').oChange(UPDATE_GRID)
CTRL.add(CONFIG, 'depth', 30, 500, 1).name('Perspective (px)').onChange(UPDATE_PERSPECTIVE)
CTRL.add(CONFIG, 'reduced', 0, 60, 0.1).name('Motion Multiplier').onChange(UPDATE_MOTION_PREF)
const BEAM_FOLDER = CTRL.addFolder('Beams')
BEAM_FOLDER.add(CONFIG, 'bn', 1, 20, 1).name('Per side (limit)').onChange(GENERATE_BEAMS)
BEAM_FOLDER.add(CONFIG, 'hl', 1, 359, 1).name('Hue (Lower)').onChange(GENERATE_BEAMS)
BEAM_FOLDER.add(CONFIG, 'hu', 1, 359, 1).name('Hue (Upper)').onChange(GENERATE_BEAMS)
BEAM_FOLDER.add(CONFIG, 'sl', 0.2, 10, 0.1).name('Speed (Lower)').onChange(GENERATE_BEAMS)
BEAM_FOLDER.add(CONFIG, 'su', 1, 10, 0.1).name('Speed (Upper)').onChange(GENERATE_BEAMS)
const CAMERA_FOLDER = CTRL.addFolder('Camera')
CAMERA_FOLDER.add(CONFIG, 'rx', -360, 360, 1).name('Rotate X').onChange(UPDATE_CAMERA)
CAMERA_FOLDER.add(CONFIG, 'ry', -360, 360, 1).name('Rotate Y').onChange(UPDATE_CAMERA)

GENERATE_BEAMS()
UPDATE_CAMERA()
UPDATE_PERSPECTIVE()
UPDATE_MOTION_PREF()