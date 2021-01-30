import { NavActionType, NAVIGATE_TO } from "../actions/navigation"

export type initNavType = typeof initState
export type navType = typeof initState.navLinks
const initState = {
  navLinks: [
    { name: 'home', active: true,  to: '/', iconCode: "🏠"},
    { name: 'skills', active: false,  to: '/skills', iconCode: "📝"},
    { name: 'works', active: false,  to: '/works', iconCode: "💼"},
    { name: 'contacts', active: false,  to: '/contacts', iconCode: "☎️"},
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