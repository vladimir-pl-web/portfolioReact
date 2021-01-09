import { lOAD_WORKS, WATCH_DESCRIPTION } from './../actions/works';
import { WorksItemPropsType } from "../../components/works/worksItem/worksItem"
import { WatchDescrType } from "../actions/works"

export type WorksStateType = typeof initState

const initState = {
  works: [] as Array<WorksItemPropsType>
}

export const worksReducer = (state: WorksStateType = initState, action: WatchDescrType):WorksStateType => {
  switch (action.type) {
    case lOAD_WORKS: 
      return {
        ...state, works: action.works
      }
    case WATCH_DESCRIPTION:
      return {
        ...state, works: state.works.map((el) => {
          if (el.src === action.src) {
            return{...el, active:true}
          }
        return{...el, active:false}
      })}
    default: return state
  }
}