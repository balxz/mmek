const createLink = (href) => {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = href
  return link
}

export default createLink