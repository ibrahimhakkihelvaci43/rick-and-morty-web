import formatDate from './formatDate'

describe('formatDate', () => {
	test('should format the date correctly', () => {
		const originalDate = '2017-11-04T18:48:46.250Z'
		const formattedDate = formatDate(originalDate)
		expect(formattedDate).toBe('November 4, 2017')
	})
})
