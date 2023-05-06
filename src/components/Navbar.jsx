import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons'

import userImg from '../assets/Asset 2@4x.png'
import { useState } from 'react'

export const Navbar = () => {
  const settings = [
    'Nuevo Juego',
    'Modo Oscuro',
    'Actiivar Puntero',
    'Descripción'
  ]

  const [open, setOpen] = useState(false)

  const settingMenu = () => {
    setOpen(!open)
  }

  const notificationBtn = () => {
    setOpen(!open)
  }

  const MenuSetting = () => {
    return (
      <ul className='menuSetting'>
        {settings.map((setting, index) => {
          return <li key={index}>{setting}</li>
        })}
      </ul>
    )
  }

  const modalNotification = () => {
    return <aside className='notification' />
  }

  return (
    <nav>
      <h2>
        TresEnRaya<span>.X</span>
      </h2>
      <ul>
        <li className='itemNotification' onClick={notificationBtn}>
          {' '}
          <FontAwesomeIcon icon={faBell} className='icon bell' />
        </li>
        <li className='itemSetting' onClick={settingMenu}>
          <FontAwesomeIcon icon={faGear} className='icon gear' />
          {open && <MenuSetting />}
        </li>
        <li>
          <div className='contenUser'>
            <img src={userImg} alt='User' className='userImg' />
            <span>Invitado</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}
