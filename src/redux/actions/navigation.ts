export const NAVIGATE_TO = 'NAVIGATE_TO'

export type NavActionType = ReturnType<typeof navigateTo>
export const navigateTo = (name:string) => {
  return {
    type: NAVIGATE_TO, name
  }as const
}