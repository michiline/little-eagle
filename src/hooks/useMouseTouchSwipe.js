import { useState, useEffect, useRef } from 'react'

const useMouseListeners = function ({ activeImgId, length}) {
  const [w, setW] = useState(window.innerWidth)
  const locked = useRef(false)
  const i = useRef(activeImgId)
  const n = useRef(length)

  const C = useRef(null)
  const rID = useRef(null)

  const x0 = useRef(0)
  const ini = useRef(0)
  const anf = useRef(0)
  const fin = useRef(0)

  const cf = useRef(0)

  const N = length
  const NF = 30
  const TFN = {
  	'ease-in-out': (k) => .5*(Math.sin((k - .5)*Math.PI) + 1)
  }

  const next = () => {
    if (i.current + 1 < N) {
      anf.current = 24
      fin.current = fin.current + 1
      i.current = i.current + 1
      ani()
    }
  }

  const previous = () => {
      if (i.current >= 1) {
        anf.current = 24
        fin.current = fin.current - 1
        i.current = i.current - 1
        ani()
      }
    }

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e

  const ani = () => {
    const newI = ini.current + (fin.current - ini.current) * TFN['ease-in-out'](cf.current / anf.current)
    if (newI) {
       C.current.style.setProperty('--i', newI)
    }
    if (cf.current === anf.current) {
      stopAni()
      return
    }

    cf.current = cf.current + 1
    rID.current = requestAnimationFrame(ani)
  }

  const stopAni = () => {
    cf.current = 0
    cancelAnimationFrame(rID.current)
    rID.current = null
  }

  const lock = (e) => {
    x0.current = unify(e).clientX
    locked.current = true
  }

  const drag = (e) => {
    e.preventDefault()

    if (locked.current) {
      let dx = unify(e).clientX - x0.current
      let f = +(dx/w).toFixed(2)
      C.current.style.setProperty('--i', i.current - f)
    }
  }

  const move = (e) => {
    if (locked.current) {
      let dx = unify(e).clientX - x0.current
      let s = Math.sign(dx)
      let f = +(s * dx / w).toFixed(2)

      ini.current = i.current - s * f

      if ((i.current > 0 || s < 0) && (i.current < N - 1 || s > 0) && f > .2) {
        i.current = i.current - s
        f = 1 - f
      }

      fin.current = i.current
      anf.current = Math.round(f * NF)
      n.current = 2 + Math.round(f)

      ani()
      x0.current = null
      locked.current = false
    }
  }

  const resize = () => {
    setW(document.body.clientWidth)
  }

  useEffect(() => {
    C.current = document.querySelector('#container')
    C.current.style.setProperty('--n', N)
    C.current.style.setProperty('--i', i.current)
    window.addEventListener('mousedown', lock)
    window.addEventListener('touchstart', lock)
    window.addEventListener('mousemove', drag)
    window.addEventListener('touchmove', drag)
    window.addEventListener('mouseup', move)
    window.addEventListener('touchend', move)
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('mousedown', lock)
      window.removeEventListener('mousemove', drag)
      window.removeEventListener('mouseup', move)
      window.removeEventListener('touchstart', lock)
      window.removeEventListener('touchmove', drag)
      window.removeEventListener('touchend', move)
      window.removeEventListener('resize', resize)
    }
  })
  return [previous, next]
}

export default useMouseListeners
