import {
  ActivityIcon,
  BellRingIcon,
  BluetoothIcon,
  CircleGaugeIcon,
  LucideIcon,
  PauseCircleIcon,
  ScanLineIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  info: string;
};

export const FEATURES: Feature[] = [
  {
    icon: ScanLineIcon,
    title: "Мониторинг в реальном времени",
    info: "Датчики непрерывно отслеживают положение тела и замечают отклонения во время сидения.",
  },
  {
    icon: BellRingIcon,
    title: "Обратная связь по посадке",
    info: "Понятные подсказки помогают вовремя обратить внимание на положение спины и скорректировать его.",
  },
  {
    icon: PauseCircleIcon,
    title: "Напоминания о перерывах",
    info: "Не забывайте делать паузы и поддерживать комфортный рабочий ритм.",
  },
  {
    icon: ActivityIcon,
    title: "Данные рабочих сессий",
    info: "Смотрите, как менялась посадка в течение дня, и отслеживайте свои рабочие привычки.",
  },
  {
    icon: CircleGaugeIcon,
    title: "Персональная настройка",
    info: "Откалибруйте комфортное положение, настройте чувствительность уведомлений, вибрацию и напоминания о перерывах.",
  },
  {
    icon: BluetoothIcon,
    title: "Без лишних устройств",
    info: "Беспроводное подключение к приложению без браслетов и дополнительных датчиков.",
  },
];
