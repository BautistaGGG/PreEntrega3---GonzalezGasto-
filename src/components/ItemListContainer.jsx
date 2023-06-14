/* eslint-disable react/prop-types */

function ItemListContainer({greeting}) {
  return (
    <section className="bg-slate-500 text-center absolute right-0">
        <h1 className="p-4">
          {greeting}
        </h1>
    </section>
  )
}

export default ItemListContainer