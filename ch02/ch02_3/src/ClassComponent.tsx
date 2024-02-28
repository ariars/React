import { Component } from 'react'

type ClassComponentProps = {
  href: string
  text: string
}

export default class App extends Component<ClassComponentProps> {
  render() {
    const { href, text } = this.props
    return (
      <ul>
        <li>
          <a href={href}>
            <p>{text}</p>
          </a>
        </li>
      </ul>
    )
  }
}
