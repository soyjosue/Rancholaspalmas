// export const shortDayWeek = () => ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'];
// export const longDayWeek = () => ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// export const getDayStart = (monthToShow = moment()) => {
//   if(!moment.isMoment(monthToShow)) return null;

//   let dateStart = moment(monthToShow).startOf('month');

//   // let dayWeek;

//   // switch(dateStart.day()) {
//   //   case 0: dayWeek = 'Dom'; break;
//   //   case 1: dayWeek = 'Lun'; break;
//   //   case 2: dayWeek = 'Mar'; break;
//   //   case 3: dayWeek = 'Mié'; break;
//   //   case 4: dayWeek = 'Jue'; break;
//   //   case 5: dayWeek = 'Vie'; break;
//   //   case 6: dayWeek = 'Sab'; break;
//   //   default: break;
//   // }

//   return dateStart.day();
// }

// export const getDateEnd = (monthToShow = moment()) => {
//   if(!moment.isMoment(monthToShow)) return null;

//   let dateEnd = moment(monthToShow).endOf('month');
  
//   console.log(dateEnd);
//   return dateEnd;
// }

// export const getDayMonth = (dateStart, dateEnd) => {
//   let repeat = dateEnd;
//   if(repeat === 42) {
//     repeat += 5;
//   } else {
//     repeat += 6;
//   }

//   let i = 1, y = 1, z = repeat === 31 ? 1 : 0;
//   console.log(repeat - dateEnd);
//   let cells = [];
//   while(i <= repeat) {
//     if( i <= dateStart) {
//       cells.push(null);
//       z++;
//     } else if((z !== 5) && (((i > dateEnd + z) && (i <= repeat) ))) {
//       cells.push(null);
//       z++
//     } else {
//       cells.push(y);
//       y++
//     }

//     i++;
//   }

//   return cells;
// }