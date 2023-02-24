import { IService, ISkill } from 'type'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { GiConsoleController } from 'react-icons/gi'
import { DiJavascript1 } from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop } from 'react-icons/si'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalabe SPA using <b>HTML</b>, <b>CSS</b> and <b>NextJS</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about: 'Handle database, server, API using <b>Express</b>',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I cant develop robust REST API using <b>Node API</b>',
  },
  {
    Icon: GiConsoleController,
    title: 'Hobbies',
    about:
      'I like to play video games, watch series and movies, play the guitar, listen to music and sing',
  },
]

export const languages: ISkill[] = [
  {
    name: 'JavaScript',
    level: '50%',
    Icon: DiJavascript1,
  },
  {
    name: 'ReactJS',
    level: '50%',
    Icon: GrReactjs,
  },
  {
    name: 'ReactNativet',
    level: '40%',
    Icon: TbBrandReactNative,
  },
  {
    name: 'NextJS',
    level: '60%',
    Icon: TbBrandNextjs,
  },
]

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: '30%',
    Icon: FiFigma,
  },
  {
    name: 'Photoshop',
    level: '30%',
    Icon: SiAdobephotoshop,
  },
]
