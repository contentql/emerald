import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

const Button = ({
  children,
  className,
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button className={cn('btn btn-sm text-sm hover:bg-[#805AE9]', className)}>
      {children}
    </button>
  )
}

export default Button
