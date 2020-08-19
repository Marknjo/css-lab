import React from 'react'

const LayoutChallenge = () => {
  return (
    <div className="grid">
      <header className="grid--header grid__item">
        <p>Header Layout</p>
      </header>
      <aside className="grid--sidebar grid__item">
        <h2>Sidebar</h2>
      </aside>

      <article className="grid--articles grid__item_1 grid__item"><h2>
        Item 1
      </h2></article>
      <article className="grid--articles grid__item_2 grid__item"><h2>
        Item 2
      </h2></article>
      <article className="grid--articles grid__item_3 grid__item"><h2>
        Item 3
      </h2></article>
      <main className="grid__item grid--main">
        <h1>Main content</h1>
      </main>
      <footer className="grid__item grid--footer">
        <p> Grid Footer</p>
      </footer>
    </div>
  )
}



export default LayoutChallenge

