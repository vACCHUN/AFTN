export function getDateTime(): string {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  
  const date: Date = new Date();
  const formattedDate: string = new Intl.DateTimeFormat('hu-HU', options).format(date);
  
  return formattedDate;
}
