export const formatDate = (epochSeconds) => {
  const date = new Date(epochSeconds * 1000)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatTime = (epochSeconds) => {
  const date = new Date(epochSeconds * 1000)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

export const getRemainingTime = (epochSeconds) => {
  const eventDate = new Date(epochSeconds * 1000)
  const now = new Date()
  const timeDiff = eventDate.getTime() - now.getTime()
  
  const isPast = timeDiff < 0
  const absDiff = Math.abs(timeDiff)
  
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60))
  
  if (isPast) {
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    }
  } else {
    if (days > 0) {
      return `In ${days} day${days > 1 ? 's' : ''}`
    } else if (hours > 0) {
      return `In ${hours} hour${hours > 1 ? 's' : ''}`
    } else if (minutes > 0) {
      return `In ${minutes} minute${minutes > 1 ? 's' : ''}`
    } else {
      return 'Starting soon'
    }
  }
}