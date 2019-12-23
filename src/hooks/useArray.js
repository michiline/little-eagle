import React, { useState, useEffect } from 'react'

const useArray = function (initialArray = []) {
  const [array, setArray] = useState(initialArray)
  const updateArray = ({ elem, index }) => {
    let newArray = [...array]
    newArray[index] = {
      ...newArray[index],
      ...elem
    }
    setArray(newArray)
  }
  return [array, updateArray]
}

export default useArray
