export default function utilB() {
  const element = document.createElement('div')
  element.innerHTML = 'This is created by utilB!'
  document.body.append(element)
}
