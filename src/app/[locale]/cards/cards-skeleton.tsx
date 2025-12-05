export default function CardsSkeleton() {
  return (
    <div
      className='grid justify-items-center gap-7 mt-10 md:px-30 mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className='
            flex flex-col justify-between gap-5
            bg-[#2A2A2A] overflow-x-hidden p-5 text-xl
            rounded-3xl text-center relative
            h-[400px] w-full max-w-[280px] /* Define dimensões fixas para o cartão */
            animate-pulse /* Adiciona a animação de carregamento */
          '
        >
          <div className='bg-gray-700 h-48 w-full rounded-2xl mx-auto' />
  
          <div className='bg-gray-500 h-6 w-3/4 rounded-full mx-auto' />
          
          <div className='bg-gray-800 h-4 w-1/2 rounded-xl mx-auto' />
        </div>
      ))}
    </div>
  )
}