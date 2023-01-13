const scrollSectionRight = function(){
    const usersWrapper = document.querySelector('.users-wrapper');
    usersWrapper.scroll(100, 0);
}

const scrollSectionLeft = function(){
    const usersWrapper = document.querySelector('.users-wrapper');
    usersWrapper.scroll({
        top: 0,
        left: -100,
    });
}