export const isObjectNull = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object

export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const to = ({ history, url }) => {
  history.push(url)
  scrollTo(0)
}

export const externalTo = (url) => Object.assign(document.createElement('a'), { target: '_blank', href: url }).click()

export const scrollToElem = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

export const scrollTo = (top) => window.scrollTo({ top: top, behavior: 'smooth' })
