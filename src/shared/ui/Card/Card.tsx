import type { ReactNode } from 'react'
import './Card.css'

export interface CardProps {
  children: ReactNode
  className?: string
  title?: string
}

export const Card = ({ children, className = '', title }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      {title && <div className="card__title">{title}</div>}
      <div className="card__content">{children}</div>
    </div>
  )
}
