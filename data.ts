import { IProject, IService, ISkill } from 'type'
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
    level: 40,
    Icon: DiJavascript1,
  },
  {
    name: 'ReactJS',
    level: 40,
    Icon: GrReactjs,
  },
  {
    name: 'ReactNative',
    level: 30,
    Icon: TbBrandReactNative,
  },
  {
    name: 'NextJS',
    level: 50,
    Icon: TbBrandNextjs,
  },
]

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: 20,
    Icon: FiFigma,
  },
  {
    name: 'Photoshop',
    level: 20,
    Icon: SiAdobephotoshop,
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Hollow Knigth SilkSong',
    description: 'Description of the project',
    imagePath:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/capsule_616x353.jpg?t=1673569692',
    deployedUrl: '',
    category: ['NextJS'],
    githubUrl: '',
    techs: ['NextJS', 'TailwindCSS'],
  },
  {
    id: 2,
    name: 'CJ Bugado',
    description: 'Description of the project',
    imagePath: 'https://i.ytimg.com/vi/lFWwISPurcc/maxresdefault.jpg',
    deployedUrl: '',
    category: ['React', 'Node', 'Express'],
    githubUrl: '',
    techs: ['React', 'TailwindCSS', 'Node', 'Express REST API'],
  },
  {
    id: 3,
    name: 'Red Dead 2',
    description: 'Description of the project',
    imagePath:
      'https://pyxis.nymag.com/v1/imgs/3a8/276/54608c0aa57dbba1a57ca55657e54bf70a-12-rockstar-games-lede.jpg',
    deployedUrl: '',
    category: ['ReactNative'],
    githubUrl: '',
    techs: ['ReactNative', 'Node', 'Express'],
  },
  {
    id: 4,
    name: 'Harry Potter',
    description: 'Description of the project',
    imagePath:
      'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e',
    deployedUrl: '',
    category: ['ReactNative'],
    githubUrl: '',
    techs: ['ReactNative'],
  },
  {
    id: 5,
    name: 'Liga das Lendas 2',
    description: 'Description of the project',
    imagePath: 'https://i.ytimg.com/vi/k7WW3SSHb9s/maxresdefault.jpg',
    deployedUrl: '',
    category: ['NextJS'],
    githubUrl: '',
    techs: ['NextJS', 'TailwindCSS', 'Express REST API'],
  },
  {
    id: 6,
    name: 'LoL Always beta',
    description: 'Description of the project',
    imagePath: 'https://i.ytimg.com/vi/XGbNtDFttVk/maxresdefault.jpg',
    deployedUrl: '',
    category: ['React', 'Node'],
    githubUrl: '',
    techs: ['React', 'TailwindCSS', 'Node'],
  },
  {
    id: 7,
    name: 'LoL Always beta2',
    description: 'Description of the project',
    imagePath: 'https://i.ytimg.com/vi/XGbNtDFttVk/maxresdefault.jpg',
    deployedUrl: '',
    category: ['React', 'Node'],
    githubUrl: '',
    techs: ['React', 'TailwindCSS', 'Node'],
  },
]
