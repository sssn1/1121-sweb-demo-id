function showdemo(week) {
  const p = document.querySelector(".show-classdemo");
  console.log("p", p);
  switch (week) {
    case 2:
      p.innerHTML = `<iframe src="/demo/W02_66_intro/index.html" width="100%" height="100%"/>`;
      break;
    case 3:
      p.innerHTML = `<iframe src="/demo/W03_66_card/index.html" width="100%" height="100%"/>`;
      break;
    case 4:
      p.innerHTML = `<iframe src="/demo/W04_66_blogs/index.html" width="100%" height="100%"/>`;
      break;
    case 5:
      p.innerHTML = `<iframe src="/demo/W05_66_blogs/index.html" width="100%" height="100%"/>`;
      break;
    case 6:
      p.innerHTML = `<iframe src="/demo/W06_66_navbar/index.html" width="100%" height="100%"/>`;
      break;
    case 7:
      p.innerHTML = `<iframe src="/demo/w07_xx_tile/index.html" width="100%" height="100%"/>`;
      break;
    case 11:
      p.innerHTML = `<iframe src="/demo/w11_mid-2_66/p5_66.html" width="100%" height="100%"/>`;
      break;
    case 12:
      p.innerHTML = `<iframe src="/demo/w12_portfolio_66/index.html" width="100%" height="100%"/>`;
      break;
    case 13:
      p.innerHTML = `<iframe src="/demo/w13_portfolio_66/index.html" width="100%" height="100%"/>`;
      break;
    case 14:
      p.innerHTML = `<iframe src="/demo/W14_portfolio_66/index.html" width="100%" height="100%"/>`;
      break;
    case 15:
      p.innerHTML = `<iframe src="/demo/W15_portfolio_66/index.html" width="100%" height="100%"/>`;
      break;
    case 16:
      p.innerHTML = `<iframe src="/demo/W16_portfolio_66/index.html" width="100%" height="100%"/>`;
      break;
  }
}
