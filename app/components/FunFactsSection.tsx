// 'use client'
import React from 'react'

import clsx from 'clsx'
import { Gamepad2, UtensilsCrossed, PawPrint } from 'lucide-react'
// import { useInView } from 'react-intersection-observer'

const funFactsData = [
  {
    icon: Gamepad2,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    text: "wandering around Vancouver playing Pokémon Go. So if you're in Vancouver, you might just spot me at a community meetup!",
  },
  {
    icon: UtensilsCrossed,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    text: 'planning my travels based on where I can find the best local eats 🍣 🍜',
  },
  {
    icon: PawPrint,
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
    text: 'volunteering at local cat shelters, giving head scritches and helping kitties find their forever homes 🐱',
  },
]

export default function FunFactsSection() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // })

  return (
    <section className="mx-auto w-full">
      <div
        className={clsx(
          'transition-all duration-700',
          // inView && 'animate-fade-in-up',
        )}
      >
        <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-800">
          <span className="text-pink-500">🐾</span>A few fun facts
        </h2>
        <p className="mt-2 text-gray-600">
          When I&#39;m not coding, you might catch me:
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {funFactsData.map((fact, index) => (
          <div className="flex-grow" key={index}>
            <div className="flex flex-col items-start gap-4">
              <div
                className={clsx('flex-shrink-0 rounded-full p-2', fact.bgColor)}
              >
                <fact.icon className={clsx('h-6 w-6', fact.color)} />
              </div>
              <p className="text-gray-700">{fact.text}</p>
            </div>
          </div>
        ))}
      </div>

      <p
        className={clsx(
          'mt-10 text-center text-gray-500 italic transition-all duration-700',
          // inView && 'animate-fade-in animate-delay-[700ms]',
        )}
      >
        Cats, code, and carbs: my holy trinity.
      </p>
    </section>
  )
}
