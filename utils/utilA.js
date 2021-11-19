export default function utilA() {
  const element = document.createElement('div')
  element.innerHTML = 'This is created by utilA!'
  document.body.append(element)
}
