export const saveTo = (value) => {
  if (value == null) {
    return
  }
  localStorage.setItem('formData', JSON.stringify(value))
}

export const loadFromLS = (key: string) => {
  console.log('parsed', JSON.parse(localStorage.getItem(key)))
  return JSON.parse(localStorage.getItem(key))
}