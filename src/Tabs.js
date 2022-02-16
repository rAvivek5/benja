import React from 'react'
import './Tabs.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Tabs() {
  const { t, i18n } = useTranslation()
  return (
    <div className='tabs'>
      <Link to='/Explore'>
        <h4 className='data'>{t('All Shops')}</h4>
      </Link>
      <Link to='/Restaurant'>
        <h4 className='data'>{t('Restaurant')}</h4>
      </Link>
      <Link to='KidsPlay'>
        <h4 className='data'>{t('KidsPlay')}</h4>
      </Link>
      <Link to='vaccination'>
        <h4 className='data'>{t('Vaccination Centers Near Me')}</h4>
      </Link>
      <Link to='/AtHome'>
        <h4 className='data'>{t('Serve us Home')}</h4>
      </Link>
    </div>
  )
}

export default Tabs
