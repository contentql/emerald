import KeyDownIcon from '../svg/KeyDownIcon'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <MenuButton className='flex items-center gap-1'>
          More
          <KeyDownIcon />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className='absolute left-1/2 z-10 mt-3 w-56 origin-top-left translate-x-[-50%] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
        <div className='py-1'>
          <MenuItem>
            <a
              href={'/subscribe'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Subscribe Page
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/author/celia'}
              className='block px-4 py-2  text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Single Author Page
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/tag/arcane'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Single Tag Page
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/blogpost'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Centered Post
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/recommendations'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Recommendations
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/contact'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Contact
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/404'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              404 Page
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={'/documentation'}
              className='block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
              Documentation
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
