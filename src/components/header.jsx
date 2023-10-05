function Header({bgColor,tcolor}) {
  const headStyle={
    backgroundColor:bgColor,
    color:tcolor,
  }
  return (
    // <div style={headStyle} classname="header">
    <div className="header">
      <h1>Feedback UI</h1>
    </div>
  )
}

Header.defaultProps={
  text:'Feedback UI',
  bgColor:'rgba(0,0,0,0.4)',
  tcolor:'#ff6a95'
}
export default Header
