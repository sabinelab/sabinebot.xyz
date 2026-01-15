import { getTranslations } from 'next-intl/server'

const valorantMaps: {
  name: string
  meta_agents: string[]
  image: string
  current_map_pool?: boolean
  sides: ('A' | 'B' | 'C')[]
}[] = [
  {
    name: 'Ascent',
    meta_agents: ['Jett', 'Killjoy', 'Sova', 'KAY/O', 'Omen', 'Vyse', 'Yoru', 'Waylay', 'Cypher', 'Chamber'],
    image: 'https://imgur.com/HUdWHux.png',
    sides: ['A', 'B']
  },
  {
    name: 'Bind',
    meta_agents: ['Raze', 'Brimstone', 'Viper', 'Skye', 'Fade', 'Gekko', 'Neon', 'Yoru', 'Cypher', 'Omen', 'KAY/O'],
    current_map_pool: true,
    image: 'https://imgur.com/vSP4vQB.png',
    sides: ['A', 'B']
  },
  {
    name: 'Breeze',
    meta_agents: ['Viper', 'Jett', 'Cypher', 'KAY/O', 'Sova', 'Harbor'],
    image: 'https://imgur.com/p5Bxsca.png',
    sides: ['A', 'B'],
    current_map_pool: true
  },
  {
    name: 'Fracture',
    meta_agents: ['Brimstone', 'Raze', 'Neon', 'Vyse', 'Killjoy', 'Cypher', 'Fade', 'Breach', 'Skye'],
    image: 'https://imgur.com/Fsas50g.png',
    sides: ['A', 'B']
  },
  {
    name: 'Haven',
    meta_agents: [
      'Cypher',
      'Omen',
      'Breach',
      'Killjoy',
      'Vyse',
      'Skye',
      'Sova',
      'Gekko',
      'Jett',
      'Yoru',
      'Iso',
      'Neon',
      'Viper',
      'Chamber'
    ],
    current_map_pool: true,
    image: 'https://imgur.com/oNm4lD3.png',
    sides: ['A', 'B', 'C']
  },
  {
    name: 'Icebox',
    meta_agents: ['Jett', 'Viper', 'Harbor', 'Killjoy', 'Sova', 'KAY/O', 'Gekko', 'Reyna', 'Sage'],
    image: 'https://imgur.com/aQrhYgx.png',
    sides: ['A', 'B']
  },
  {
    name: 'Pearl',
    meta_agents: ['Yoru', 'Jett', 'Astra', 'Viper', 'Vyse', 'Killjoy', 'Cypher', 'KAY/O', 'Fade', 'Sova'],
    image: 'https://imgur.com/P1189zs.png',
    sides: ['A', 'B'],
    current_map_pool: true
  },
  {
    name: 'Split',
    meta_agents: ['Raze', 'Yoru', 'Jett', 'Breach', 'Fade', 'Skye', 'Astra', 'Omen', 'Viper', 'Cypher'],
    image: 'https://imgur.com/36tar4S.png',
    sides: ['A', 'B'],
    current_map_pool: true
  },
  {
    name: 'Lotus',
    meta_agents: ['Raze', 'Yoru', 'Neon', 'Fade', 'Tejo', 'Gekko', 'Vyse', 'Cypher', 'Killjoy', 'Viper', 'Omen'],
    image: 'https://imgur.com/CLq6LKn.png',
    sides: ['A', 'B', 'C']
  },
  {
    name: 'Sunset',
    meta_agents: ['Raze', 'Neon', 'Fade', 'Sova', 'Breach', 'Gekko', 'Viper', 'Omen', 'Cypher'],
    image: 'https://imgur.com/MuMwr1F.png',
    sides: ['A', 'B']
  },
  {
    name: 'Abyss',
    meta_agents: ['Astra', 'Omen', 'KAY/O', 'Sova', 'Cypher', 'Vyse', 'Chamber', 'Jett', 'Yoru', 'Neon'],
    current_map_pool: true,
    image: 'https://imgur.com/7b8pgQz.png',
    sides: ['A', 'B']
  },
  {
    name: 'Corrode',
    meta_agents: ['Yoru', 'Waylay', 'Neon', 'Omen', 'Fade', 'Sova', 'Viper', 'Vyse', 'Chamber', 'Sage'],
    current_map_pool: true,
    image: 'https://imgur.com/2rmdsWE.png',
    sides: ['A', 'B']
  }
] as const

export default async function MetaAgents() {
  const t = await getTranslations()

  return (
    <>
      <div>
        <h1 className='flex flex-col text-center font-bold text-4xl md:text-5xl items-center pt-15'>
          {t('wiki.module.meta.title')}
        </h1>
      </div>
      <div className='flex items-center justify-center pt-10'>
        <div className='bg-[#2A2A2A]/30 p-5 rounded-2xl max-w-xs md:max-w-5xl mb-6 text-3xl'>
          <ul className='flex flex-col gap-10'>
            <li>
              <h1 className='text-2xl font-bold text-center' id='introduction-to-simulator'>
                {t('wiki.module.meta.introduction.title')}
              </h1>
              <p className='text-lg pt-3'>
                {t.rich('wiki.module.meta.introduction.description', {
                  a: chunks => (
                    <a
                      className='font-bold text-blue-400 underline'
                      href='https://www.thespike.gg/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {chunks}
                    </a>
                  )
                })}
              </p>
            </li>
            {valorantMaps
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((map, i) => (
                <li key={i}>
                  <h1 className='text-2xl font-bold text-center' id='introduction-to-simulator'>
                    {map.name}
                  </h1>
                  {map.meta_agents.map((agent, i) => (
                    <p className='text-lg pt-3' key={i}>
                      {agent}
                    </p>
                  ))}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
