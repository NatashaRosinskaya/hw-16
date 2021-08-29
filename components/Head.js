const charset = document.createElement('meta')
const viewport = document.createElement('meta')
const title = document.createElement('title')
const link = document.createElement('link')
const font = document.createElement('link')

charset.setAttribute('charset', 'UTF-8')
viewport.setAttribute('name', 'viewport')
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', 'css/style.css')
font.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap')
font.setAttribute('rel', 'stylesheet')


document.head.appendChild(charset)
document.head.appendChild(viewport)
document.head.appendChild(link)
document.head.appendChild(title)
document.head.appendChild(font)

export {title}