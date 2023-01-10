let tabButtonNodeList = document.querySelectorAll('.subscription__tab-button');
let subscriptionListNodeList = document.querySelectorAll('.subscription__list');

if (tabButtonNodeList.length !== 0 && subscriptionListNodeList.length !== 0 && tabButtonNodeList.length === subscriptionListNodeList.length) {
  tabButtonNodeList[0].classList.add('subscription__tab-button--active');

  for (let element of subscriptionListNodeList) {
    if (element.classList.contains('subscription__list--active') && element !== subscriptionListNodeList[0]) {
      element.classList.remove('subscription__list--active');
    }
  }

  tabButtonNodeList.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.subscription__tab-button--active').classList.remove('subscription__tab-button--active');
      document.querySelector('.subscription__list--active').classList.remove('subscription__list--active');

      item.classList.add('subscription__tab-button--active');
      document.querySelector(`.subscription__list[data-target="${item.dataset.target}"]`).classList.add('subscription__list--active');
    });
  });
}
