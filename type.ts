import { IconType } from 'react-icons/lib'

export interface IService {
  title: string
  about: string
  Icon: IconType | string
}

export interface ISkill {
  name: string
  level: number
  Icon: IconType
}

export type Category =
  | 'React'
  | 'Node'
  | 'Express'
  | 'NextJS'
  | 'ReactNative'
  | 'All'

export interface IProject {
  id: number
  name: string
  description: string
  imagePath: string
  deployedUrl: string
  category: Category[]
  githubUrl: string
  techs: string[]
}
