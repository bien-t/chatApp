export const formatDate = (timestamp: number) => new Intl.DateTimeFormat('en-GB', {
  timeStyle: 'short',
  dateStyle: 'medium'
}).format(new Date(timestamp));
