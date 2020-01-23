export const isObjectNull = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object

export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const to = ({ history, url }) => {
  history.push(url)
  // window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const externalTo = (url) => Object.assign(document.createElement('a'), { target: '_blank', href: url }).click()
