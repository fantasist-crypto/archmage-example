export function useArchmage() {
  if (typeof window === 'undefined') {
    return
  }
  return (window as any).archmage
}
