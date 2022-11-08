const INPUT = document.querySelector("#input")
const SUBMIT = document.querySelector("#submit")
const ARRAY = [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14]

SUBMIT.addEventListener('click', (event) => {
    event.preventDefault()
    findNumber(ARRAY, Number(INPUT.value))
    INPUT.value =''
})

const findNumber = (arr, value) => {
   let low = 0
   let high = arr.length - 1
   while (low <= high) {
      let mid = Math.round((low + high) / 2)
      let guess = arr[mid]
      console.log(high)
      if (guess === value) {
          return alert(`Индекс в массиве ${mid} числа ${value}`)
      }
      if (guess > value) {
          high = mid - 1
      } else {
          low = mid + 1
      }
  }
    return alert(`В базе данных нет номера ${value}`)
}
