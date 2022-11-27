export default class Section {
  constructor({ items, renderer }, containerSelector) {
this._items = items;
this._renderer = renderer;
this._containerSelector =  document.querySelector(containerSelector);
  }
  addItem(element) {
    //попадает готовая разметка
//публичный метод принимает элемент и добавляет его в разметку
this._containerSelector.prepend(element);
  }
  renderItems() {
    //публичный метод проходит циклом forEach по всем (initial) items и рендерит элементы
    // использует renderer
    this._items.forEach(item => {
      this._renderer(item)
    });
  }
}
