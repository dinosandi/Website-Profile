function navActivation(element){
    const link = document.querySelectorAll('a')
link.forEach(function(item) {
    item.classlist.remove('active')
})

}






AOS.init();