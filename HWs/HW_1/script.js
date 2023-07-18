// Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.

// есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".

// * При клике на элемент списка он должен быть удален. (по желанию)

const App = {
    data() {
        return {
            buttonText: 'Перевернуть',
            elementsList: ['элемент списка', 'элемент списка', 'элемент списка'] 
        };
    },
    methods: {
        reverseButton() {
            this.buttonText = this.buttonText.split('').reverse().join('');
        },
        addElementToList() {
            this.elementsList.push('Новый элемент списка');
        },
        deleteElement(e) {
            e.target.remove();
        }
    }
};

Vue.createApp(App).mount('#app');