import React from 'react'
import MenuHero from './MenuHero'
import MenuBeignet from './MenuBeignet'
import { MenuFooter } from './MenuFooter'
import MenuBoissons from './MenuBoissons'
import MenuSalades from './MenuSalades'


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
