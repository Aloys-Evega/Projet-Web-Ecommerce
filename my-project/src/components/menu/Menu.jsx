import React from 'react'
import MenuHero from './MenuHero'
import MenuBeignet from './MenuBeignet'
import { MenuBoissons } from './MenuBoissons'
import { MenuSalades } from './MenuSalades'
import { MenuComposer } from './MenuComposer'


export const Menu = () => {
  return (
    <div className="px-8">
        <MenuHero/>
        <MenuBeignet/>
        <MenuBoissons/>
        <MenuSalades/>
        <MenuComposer/>
    </div>
  )
}
