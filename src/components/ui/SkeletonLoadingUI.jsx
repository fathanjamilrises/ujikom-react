import React from 'react'

const SkeletonLoadingUI = () => {
  return (
    <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 animate-pulse">
          <div className="flex flex-col items-center text-center">
            <div className="w-50 h-50 bg-gray-300 rounded-full mb-6"></div>
            <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-200 h-28 rounded"></div>
            <div className="bg-gray-200 h-28 rounded"></div>
            <div className="bg-gray-200 h-28 rounded"></div>
          </div>
        </div>
      </section>
  )
}

export default SkeletonLoadingUI