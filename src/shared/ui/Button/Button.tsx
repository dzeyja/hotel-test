import { ReactNode } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ButtonProps {
    className?: string
    children: ReactNode
}

export const Button = ({children ,className}:ButtonProps) => {
    return <button className={classNames(cls.Button, {}, [className])}>
                {children}
           </button>    
}