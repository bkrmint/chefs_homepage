import { Skeleton } from "@/components/ui/skeleton"

const layout = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className=" h-[274px] w-full rounded-lg bg-black-200/40" />
      </section>

      <section>
        <Skeleton className="mt-6 flex w-full flex-col sm:mt-20" />
      type: 'resource',
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="w-full h-[440px] sm:w-[356px] bg-black-200/40" />
          <Skeleton className="w-full h-[440px] sm:w-[356px] bg-black-200/40" />
          <Skeleton className="w-full h-[440px] sm:w-[356px] bg-black-200/40" />
        </div>
      </section>
    </main>
  )
}

export default layout