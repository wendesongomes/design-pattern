
# Teste Design Pattern

Fiz esse projeto só para testar um design pattern, e gostaria opnião de todos, para saber se algo deve ser melhorado.

``` typescript
import { ButtonHTMLAttributes } from 'react'
import { cn } from '../service/utils'

interface NotificationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Notification({ children, className }: NotificationProps) {
  return (
    <div
      className={cn(
        'bg-neutral-950 text-neutral-50 rounded-md px-4 py-2 flex justify-center items-center gap-3',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function NotificationContent({
  children,
  className,
}: NotificationProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

export function NotificationTitle({ children, className }: NotificationProps) {
  return <h2 className={cn('text-sm', className)}>{children}</h2>
}

export function NotificationDescription({
  children,
  className,
}: NotificationProps) {
  return (
    <p className={cn('text-xs text-neutral-200/30', className)}>{children}</p>
  )
}

export function NotificationActions({
  children,
  className,
}: NotificationProps) {
  return <div className={cn('flex gap-2', className)}>{children}</div>
}

export function NotificationAction({
  children,
  className,
  ...props
}: NotificationProps) {
  return (
    <button className={cn('p-2 rounded-sm', className)} {...props}>
      {children}
    </button>
  )
}

export function NotificationIcon({ children, className }: NotificationProps) {
  return <div className={cn('text-purple-500', className)}>{children}</div>
}
```

