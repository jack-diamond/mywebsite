import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <h1 style={linkStyle}>Jack Diamond</h1>
      </Link>
      <Link href="/experience">
        <a style={linkStyle}>Experience</a>
      </Link>
      <Link href="/projects">
        <a style={linkStyle}>Projects</a>
      </Link>
      <Link href="/resume">
        <a style={linkStyle}>Resume</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }

        h1 {
          flex-direction: row;
          flex-grow: 2;
        }

        a {
          padding: 0 10px;
          text-decoration: none;
          font-size: 16px;
          color: #666;
          font-family: 'Helvetica';
        }
      `}</style>
    </div>
  )
}
