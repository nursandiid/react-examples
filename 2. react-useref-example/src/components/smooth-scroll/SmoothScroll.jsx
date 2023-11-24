import { useRef, createRef } from 'react'
import reactSvg from '../../assets/react.svg'
import Card from '../../components/ui/Card'

export default function SmoothScroll() {
  const imageRef = useRef(null)
  const firstParagraphRef = useRef(null)
  const cardsRef = useRef({})
  const numbers = [...Array(8).keys()]
  cardsRef.card = numbers.map((_, i) => cardsRef.current[i] ?? createRef())

  function goTo(ref, minus) {
    window.scrollTo({
      top: ref.offsetTop - minus,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Jump by clicking an image */}
      <div className="text-center mt-8 md:max-w-lg m-auto">
        <img
          src={reactSvg}
          ref={imageRef}
          alt=""
          className="h-20 inline-block animate-bounce cursor-pointer"
          onClick={() => goTo(firstParagraphRef.current, 10)}
        />
        <p className="text-gray-500 font-light text-sm">Click on image</p>

        <p className="mt-8" ref={firstParagraphRef}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          nemo voluptatum porro molestiae accusantium facere architecto
          asperiores repellendus fugit hic, vel adipisci autem voluptate
          recusandae, id officia sapiente modi amet.
        </p>
      </div>

      {/* Jump to text in card by clicking button, these cards is created with array */}
      <div className="md:max-w-lg m-auto my-8">
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {numbers.map((_, index) => (
            <button
              key={index + 1}
              className="btn rounded-full border border-slate-400 hover:bg-slate-500 hover:text-white transition-all duration-300"
              onClick={() => goTo(cardsRef.card[index].current, 80)}
            >
              Go to card {index + 1}
            </button>
          ))}
        </div>

        {numbers.map((_, index) => (
          <Card
            key={index}
            title={`Card ${index + 1}`}
            className={index > 0 ? 'mt-8' : ''}
          >
            <p ref={cardsRef.card[index]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              natus reiciendis maxime quo quidem enim minus tempore quae in
              asperiores?
            </p>
          </Card>
        ))}
      </div>

      {/* Jump to top page */}
      <div className="flex justify-center fixed bottom-8 left-1/2 -translate-x-1/2">
        <button
          className="btn btn-primary rounded-xl"
          onClick={() => goTo(imageRef.current, 1000)}
        >
          ↑
        </button>
      </div>
    </>
  )
}
