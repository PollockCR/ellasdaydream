import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: "/posts",
    title: "posts"
  },
  {
    path: "/share",
    title: "share memories"
  },
]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMenu: false}

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({      
      showMenu: !state.showMenu    
    }))
  }

  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => 
      <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    )
    return (
      <nav className="site-navigation">
        <button onClick={this.handleToggleClick} aria-label="navigation" className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
          <div className="icon-menu-line"><RiMenu3Line/></div>
          <div className="icon-menu-close"><RiCloseLine/></div>
        </button>
        <ul className="menu-items">
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation
