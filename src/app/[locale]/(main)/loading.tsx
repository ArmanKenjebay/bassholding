import LoadingPage from '@/app/[locale]/_components/LoadingPage'
import { Progress } from '@nextui-org/progress'

export default function Loading() {
  return (
    <div className="absolute top-0 h-screen w-screen">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="w-screen sticky top-0"
        classNames={{
          indicator: 'bg-primary-gold',
        }}
      />
      <LoadingPage />
    </div>
  )
}
