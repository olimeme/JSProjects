// const getSleepHours = days =>{
//   days = days.toLowerCase();
//   switch(days)
//   {
//     case 'monday': return 7;
//     case 'tuesday': return 7;
//     case 'wednesday': return 7;
//     case 'thursday': return 7;
//     case 'friday': return 7;
//     case 'saturday': return 8;
//     case 'sunday': return 8;
//     default: alert('No such day');
//   }
// }

const getActualSleepHours = () => 5+6+7+8+5+6+8;
                                  // getSleepHours('monday')+
                                  // getSleepHours('tuesday')+
                                  // getSleepHours('wednesday')+
                                  // getSleepHours('thursday')+
                                  // getSleepHours('friday')+
                                  // getSleepHours('saturday')+
                                  // getSleepHours('sunday');

const getIdealSleepHours = (idealHours) =>{
  return idealHours * 7;
}

const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(6);
  if(actualSleepHours==idealSleepHours)
    console.log("Doing great!");
  else if(actualSleepHours>idealSleepHours)
    console.log(`You slept ${actualSleepHours - idealSleepHours} hours longer`);
  else
    console.log(`You need ${idealSleepHours - actualSleepHours} hours of sleep`);
}

calculateSleepDebt();
