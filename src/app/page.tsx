'use client'

import {
  Notification,
  NotificationAction,
  NotificationActions,
  NotificationContent,
  NotificationDescription,
  NotificationIcon,
  NotificationTitle,
} from '@/app/components/notifications'
import { Car, Check, X } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-neutral-100 gap-2">
      <Notification>
        <NotificationIcon>
          <Car size={20} />
        </NotificationIcon>
        <NotificationContent>
          <NotificationTitle>
            Voce quer fazer parte da equipe?
          </NotificationTitle>
          <NotificationDescription>Convite - Ha 2 min</NotificationDescription>
        </NotificationContent>
        <NotificationActions>
          <NotificationAction
            className="bg-red-500"
            onClick={() => console.log('Recusar')}
          >
            <X size={15} />
          </NotificationAction>
          <NotificationAction
            className="bg-emerald-500"
            onClick={() => console.log('Aceitar')}
          >
            <Check size={15} />
          </NotificationAction>
        </NotificationActions>
      </Notification>

      <Notification>
        <NotificationContent>
          <NotificationTitle>
            Voce quer fazer parte da equipe?
          </NotificationTitle>
        </NotificationContent>
        <NotificationAction
          className="bg-red-500"
          onClick={() => console.log('Recusar')}
        >
          <X size={15} />
        </NotificationAction>
      </Notification>
    </div>
  )
}
