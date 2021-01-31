
import { WorksItemPropsType } from "../../components/works/worksItem/worksItem"

export const WATCH_DESCRIPTION = 'WATCH_DESCRIPTION'
export const lOAD_WORKS = 'LOAD_WORKS'

export type WatchDescrType = ReturnType<typeof watchDescription> | ReturnType<typeof loadWorks>

export const watchDescription = (id:number, active: boolean) => {
  return {
    type: WATCH_DESCRIPTION, id, active
  } as const 
}
export const loadWorks = (works: Array<WorksItemPropsType>) => {
  return {
    type: lOAD_WORKS,
    works
  }as const
}
