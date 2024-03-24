
import {
    Fragment,
    useState,
    useContext
} from 'react'
import {
    Disclosure
    , Menu,
    Transition
}
    from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    UserIcon
}
from '@heroicons/react/24/outline'
import {
     ArrowRightCircleIcon,
     UsersIcon } 
from '@heroicons/react/24/solid'
import { IconBrandPaypal } from "@tabler/icons-react";
import { Tooltip, user } from "@nextui-org/react";
import { AuthContext } from "@/contexts/AuthContext";

interface navProps {

    hidden?: string
    open?: number,
    boxUser: () => void
    signOut: () => void

}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar(props: navProps) {

    const { user } = useContext(AuthContext)

    return (

        <Disclosure as="nav" className=" bg-white  border-b-1 border-indigo-600">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className=" rela inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <IconBrandPaypal color="#4F46E5" size={25} />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? ' text-white' : 'text-white rounded-md'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <span className='text-indigo-600 font-extrabold cursor-pointer hover:border-b-1 border-indigo-600'> {item.name} </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=" flex  justify-between     pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-indigo-600 p-1 me-3.5 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6 " aria-hidden="true" />
                                </button>
                                {/*  Gestão de Utilizador  items-center */}

                                <div className='flex justify-center items-center text-white'>
                                <Tooltip content="Gestão de Utilizador">
                                    <button onClick={props.boxUser} className="flex justify-center items-center h-8 w-8 rounded-full bg-indigo-600 text-sm">
                                        {user?.tipo === "admin" ? (<UsersIcon className=" h-5 w-5   items-center" aria-hidden="true" />)
                                            : (<UserIcon className=" h-6 w-6 " aria-hidden="true" />)
                                        }
                                    </button>
                                    </Tooltip>
                                </div>

                                {/* LOGOUT */}
                                <div className='flex justify-end items-end    text-white  sm:ml-3 md:ml-3'>
                                    {/* <div > */}
                                    <Tooltip content="Logout">
                                        <button onClick={props.signOut} className=" flex p-1   h-8 w-8 rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <ArrowRightCircleIcon className=" h-6 w-6 " aria-hidden="true" />
                                        </button>
                                    </Tooltip>

                                    {/* </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

