export const useLikes = () => {
  const STORAGE_KEY = 'edm-atlantic-likes'

  // Get all likes from localStorage
  const getLikes = (): Set<string> => {
    if (typeof window === 'undefined') return new Set()
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? new Set(JSON.parse(stored)) : new Set()
    } catch {
      return new Set()
    }
  }

  // Save likes to localStorage
  const saveLikes = (likes: Set<string>) => {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...likes]))
    } catch (error) {
      console.error('Failed to save likes:', error)
    }
  }

  // Check if an item is liked
  const isLiked = (itemId: string): boolean => {
    return getLikes().has(itemId)
  }

  // Toggle like status
  const toggleLike = (itemId: string): boolean => {
    const likes = getLikes()
    
    if (likes.has(itemId)) {
      likes.delete(itemId)
    } else {
      likes.add(itemId)
    }
    
    saveLikes(likes)
    return likes.has(itemId)
  }

  // Get like count for display (returns number of likes for an item)
  const getLikeCount = (itemId: string): number => {
    return isLiked(itemId) ? 1 : 0
  }

  // Get total likes count
  const getTotalLikesCount = (): number => {
    return getLikes().size
  }

  return {
    isLiked,
    toggleLike,
    getLikeCount,
    getTotalLikesCount
  }
}
