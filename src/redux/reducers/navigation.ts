import { NavActionType, NAVIGATE_TO } from "../actions/navigation"

export type initNavType = typeof initState
export type navType = typeof initState.navLinks
const initState = {
  navLinks: [
    { name: 'Main', active: false },
    { name: 'Skills', active: false },
    { name: 'My works', active: false },
    { name: 'Contacts', active: false },
  ]
}
export const navReducer = (state: initNavType = initState, action: NavActionType): initNavType => {
  switch (action.type) {
    case NAVIGATE_TO:
      return {
        ...state, navLinks: state.navLinks.map((el) => {
          if (el.name === action.name) {
            return { ...el, active:true}
          }
        return{...el, active:false}
      })}
    default: return state
  }
}