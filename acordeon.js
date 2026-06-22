

const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement
        console.log(trigger.parentElement)
        const osOpen = acordeon.classList.contains('open')
        acordeon.classList.toggle('open')

        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})
