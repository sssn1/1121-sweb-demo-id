function showdemo(week){
    const p =document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(week){
        case 2:
            p.innerHTML =`<iframe src="W02_66_intro/index.html" width="100%" height="100%"/>`;
            break;
        case 3:
            p.innerHTML =`<iframe src="W03_66_card/index.html" width="100%" height="100%"/>`;
            break;
        case 4:
            p.innerHTML =`<iframe src="W04_66_blogs/index.html" width="100%" height="100%"/>`;
            break;
        case 5:
            p.innerHTML =`<iframe src="W05_66_blogs/index.html" width="100%" height="100%"/>`;
            break;
        case 6:
            p.innerHTML =`<iframe src="W06_66_navbar/index.html" width="100%" height="100%"/>`;
            break;
        case 7:
            p.innerHTML =`<iframe src="./index.html" width="100%" height="100%"/>`;
            break;
    }
}