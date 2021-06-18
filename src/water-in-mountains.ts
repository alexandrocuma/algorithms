const WaterMountains = (array) => {
  let i = 0
  let row = 0
  let water = 0
  let no_water = 0
  let nexMountain = 0
  let initialMountain = 0
  while (i < array.length) {
    console.log(`Array number: ${array[i]}`)
    if (array[i] < initialMountain) {
      water = (initialMountain - array[i]) + water
      if (array[i] < nexMountain) {
        no_water = (initialMountain - nexMountain) * row
        row = 0
      }
      nexMountain = array[i]
      row += 1
    }
    console.log(`initialMountain ${initialMountain}, Water gathered: ${water}`)
    if (array[i] >= initialMountain) {
      initialMountain = array[i]
      nexMountain = 0
      no_water = 0
      row = 0
    }
    i++
  }
  no_water = ((initialMountain - nexMountain) * row) + no_water
  return water - no_water
}

const WATER_MOUNTAINS_TEST = [
  [1, 2, 0, 2],
  [3, 1, 3, 0, 3],
  [3, 1, 1, 0, 3],
  [3, 3, 1, 2, 3, 0, 1],
  [3, 3, 1, 2, 2, 0, 1],
  [2, 2, 1, 2, 2, 0, 1],
  [1, 3, 0, 1, 3, 1, 1, 1],
]

console.log(`
        __    __
     __|__|  |__|
  __|__|__|__|__|__
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[0]))

console.log(`\n
   __    __    __
  |__|  |__|  |__|
  |__|__|__|  |__|
__|__|__|__|__|__|__
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[1]))

console.log(`\n
   __          __
  |__|        |__|
  |__|__ __   |__|
__|__|__|__|__|__|__
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[2]))

console.log(`\n
   __ __       __
  |__|__|   __|__|
  |__|__|__|__|__|   __
__|__|__|__|__|__|__|__|
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[3]))

console.log(`\n
   __ __      
  |__|__|   __ __
  |__|__|__|__|__|   __
__|__|__|__|__|__|__|__|
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[4]))

console.log(`\n
       
   __ __    __ __
  |__|__|__|__|__|   __
__|__|__|__|__|__|__|__|
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[5]))

console.log(`\n
      __       __
     |__|     |__|
   __|__|   __|__|__ __ __
__|__|__|__|__|__|__|__|__|
`)
console.log('The water trapped is :', WaterMountains(WATER_MOUNTAINS_TEST[6]))