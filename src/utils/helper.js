import moment from "moment";
import 'moment/locale/es';

export const shortDayWeek = () => [
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sab",
  "Dom",
];
export const longDayWeek = () => [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

export function getCalendary(month = 0) {
  const calendary = {};
  let week = 0, 
    array = []

  let dateEnd = moment()
    .endOf('month')
    .add(month, 'month')
    .format('DD')

  let dayStart = moment().startOf('month').startOf('month').add(month, 'month').day();

  dayStart = dayStart === 0 ? dayStart + 7: dayStart;
  for(let i = 0; i < dayStart-1; i++) {
    array.push('')
  }
  
  for(let i = 0; i < parseInt(dateEnd); i++) {
    let date = moment()
      .startOf('month')
      .add(month, 'month')
      .add(i, 'days')
      .format('dddd DD')

    array.push(date.split(' ')[1]);
    if(date.split(' ')[0] === 'domingo') {
      calendary[week] = array;
      array = []
      week += 1;
    } else if(i === parseInt(dateEnd) - 2) {
      calendary[week] = array;
    }
  }

  return calendary;
}

export function getMoment(month = 0) {
  return moment().add(month, 'month').format('MM-YYYY');
}