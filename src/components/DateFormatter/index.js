import moment from 'moment'

const DateFormatter = ({ date }) => {
  return moment(date).format('DD/MM/YYYY HH:mm')
}

export default DateFormatter
