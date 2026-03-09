export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function formatDate(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDateTime(date: Date = new Date()): string {
  const dateStr = formatDate(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${dateStr} ${hours}:${minutes}`;
}

export function parseDate(dateStr: string): Date | null {
  // Parse YYYY-MM or YYYY-MM-DD format
  const regex = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/;
  const match = dateStr.match(regex);

  if (!match) return null;

  const year = parseInt(match[1]);
  const month = parseInt(match[2]) - 1;
  const day = match[3] ? parseInt(match[3]) : 1;

  return new Date(year, month, day);
}

export function isDateInRange(
  mistakeDate: string,
  filterDate: string
): boolean {
  // If filterDate is YYYY-MM, match any day in that month
  // If filterDate is YYYY-MM-DD, match exact date

  if (filterDate.length === 7) {
    // Month filter
    return mistakeDate.startsWith(filterDate);
  } else {
    // Exact date filter
    return mistakeDate.startsWith(filterDate);
  }
}

export function getSeverityEmoji(severity: number): string {
  if (severity <= 1) return '🟢';
  if (severity <= 2) return '🟡';
  if (severity <= 3) return '🟠';
  return '🔴';
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + '...' : str;
}
