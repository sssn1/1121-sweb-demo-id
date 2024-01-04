function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
    case 2:
      p.innerHTML = `<iframe src="./w02_xx_intro/index.html" width="100%" height="100%" />`;
      break;
    case 3:
      p.innerHTML = `<iframe src="./w03_xx_card/index.html" width="100%" height="100%"  />`;
      break;
    case 4:
      p.innerHTML = `<iframe src="./w04_xx_blogs/index.html" width="100%" height="100%"  />`;
      break;
    case 5:
      p.innerHTML = `<iframe src="./w05_xx_blogs/index.html" width="100%" height="100%"  />`;
      break;
    case 6:
      p.innerHTML = `<iframe src="./w06_xx_navbar/index.html" width="100%" height="100%"  />`;
      break;
    case 7:
      p.innerHTML = `<iframe src="./index.html" width="100%" height="100%"  />`;
      break;
  }
}
