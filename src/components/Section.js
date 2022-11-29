export default class Section {
  constructor({ items, renderer }, containerSelector) {
this._items = items;
this._renderer = renderer;
this.container =  document.querySelector(containerSelector);
  }
  addItem(element) {
    //попадает готовая разметка
//публичный метод принимает элемент и добавляет его в разметку
this.container.prepend(element);
  }
  renderItems() {
    //публичный метод проходит циклом forEach по всем (initial) items и рендерит элементы
    // использует renderer
    this._items.forEach(item => {
      this._renderer(item)
    });
  }
}
