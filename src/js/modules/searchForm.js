export default class SearchForm {
    constructor(app, element) {
        this.root = app;
        this.element = element;

        this.handleClick = this.handleClick.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.element.addEventListener('click', this.handleClick);
        document.addEventListener('TOGGLE_SEARCH', this.toggleSearch)
    }

    toggleSearch() {
        this.element.classList.toggle('search-form--active');
        if (this.element.classList.contains('search-form--active')) {
            this.element.querySelector('input').focus();
            this.element.querySelector('input').select();
        }
    }

    handleClick(e) {
        const target = e.target;

        switch (true) {
            case ('action' in target.dataset && target.getAttribute('data-action') === 'CLOSE_SEARCH'):
                this.element.classList.remove('search-form--active')
                break;
            default:
                break;
        }
    }
}

