// Creating A Function//
function getSleepHours(day){
  if (day = 'monday') {return 8}
  else if (day = 'tuesday') {return 9}
  else if (day = 'wednesday') {return 7}
  else if (day = 'thursday') { return 6}
  else if (day = 'friday') { return 7}
  else if (day = 'saturday') {return 9}
  else if (day = 'sunday') {return 8}
}
// Testing Function //
console.log(getSleepHours('monday'))
console.log(getSleepHours('tuesday'))
console.log(getSleepHours('wednesday'))

// Creating Another Function//
function getActualSleepHours(){
  getActualSleepHours = getSleepHours('monday') +getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday') 
  return getActualSleepHours
}

// Creating a third function //
function getIdealSleepHours() {
  let idealHours = 8
  return idealHours * 7
}

// Testing the third function //
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// Creating a Fourth Function//
function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
if (actualSleepHours = idealSleepHours) {console.log('you got the perfect amount of sleep')} 
else if (actualSleepHours > idealSleepHours) {console.log('you got more sleep than needed')}
else if (actualSleepHours < idealSleepHours) {console.log('you have to get some more rest')}}