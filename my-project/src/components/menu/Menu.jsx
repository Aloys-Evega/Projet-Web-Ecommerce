import React from 'react'
import MenuHero from './MenuHero'
import { MenuFooter } from './MenuFooter'
import MenuBoissons from './MenuBoissons'
import MenuSalades from './MenuSalades'
import { MenuBeignet } from './MenuBeignet'


export const Menu = () => {
  return (
    <div className="px-8">
        <MenuHero/>
        <MenuBeignet/>
        <MenuBoissons/>
        <MenuSalades/>
        {/* <MenuComposer/> */}
        <MenuFooter/>
    </div>
  )
}
