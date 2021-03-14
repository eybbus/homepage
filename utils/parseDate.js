import dayjs from 'dayjs'

export const getReadableDate = (date) => {
	const today = dayjs()
	return dayjs(date).format('DD/MM/YYYY')
}