window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display')
  }, 4000)
}

let hamburgerMenu = document.getElementById('hamburger-menu')
let container = document.getElementById('container')
let sidebar = document.getElementById('sidebar')

hamburgerMenu.addEventListener('click', () => {
  container.classList.toggle('open')

  /*Hide sidebar on click anywhere inside the container EXCEPT the menu icons OR inside the sidebar section

  container.addEventListener('mouseup', (e) => {
    let target = e.target

    if (
      container.classList.contains('open') &&
      target != sidebar &&
      target != hamburgerMenu
    ) {
      container.classList.remove('open')
    }
  })
  */
})

let scrollBtn = document.getElementById('scroll-btn')

//for the scroll to top button to appear
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    scrollBtn.style.opacity = 1
    scrollBtn.style.visibility = 'visible'
  } else {
    scrollBtn.style.opacity = 0
    scrollBtn.style.visibility = 'hidden'
  }
}

//for the smooth scroll to top effect
scrollBtn.addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth'
  document.body.scrollTop = 0
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'unset'
  }, 1000)
})
