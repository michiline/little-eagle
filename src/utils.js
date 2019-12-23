export const isObjectNull = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object

export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
