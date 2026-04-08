window.osuny = window.osuny || {};

window.osuny.BlockCollapsed = function (element) {
    this.element = element;
    this.button = this.element.querySelector('.block-title');
    this.button.addEventListener('click', this.toggle.bind(this));
};

window.osuny.BlockCollapsed.prototype.toggle = function () {
    this.element.classList.toggle('block-class-collapsed--show')
}

window.osuny.page.registerComponent({
    name: 'BlockCollapsed',
    selector: '.block-class-collapsed',
    klass: window.osuny.BlockCollapsed
});