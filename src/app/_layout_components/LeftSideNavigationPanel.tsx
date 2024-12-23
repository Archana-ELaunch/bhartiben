import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'

type Props = {}

const LeftSideNavigationPanel = (props: Props) => {
    return (
        <div className='w-full h-full flex justify-center items-center z-40'>
            <NavigationMenu className='w-full'>
                <NavigationMenuList className='w-full flex justify-between'>
                    <NavigationMenuItem className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>
                        <NavigationMenuTrigger>Galalry</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='w-full bg-white  min-h-[300px]'>
                                dfj
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>
                        <NavigationMenuTrigger>Galalry</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='w-full bg-white  min-h-[300px]'>
                                dfj
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>
                        <NavigationMenuTrigger>Galalry</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='w-full bg-white  min-h-[300px]'>
                                dfj
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default LeftSideNavigationPanel