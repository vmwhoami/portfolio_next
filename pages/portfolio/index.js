import Link from 'next/link'

const Portfolio = () => {
  return (
    <div >
      <Link href="/"> to home</Link>
      <Link href="/portfolio/id"> To items</Link>

      <h1>Hello from portfolio page</h1>
    </div >
  )
}

export default Portfolio