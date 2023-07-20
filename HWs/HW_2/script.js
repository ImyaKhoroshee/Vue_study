// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

const app = {
    data() {
        return {
            products: [
                { title: "Клубника", id: 1, price: 100 },
                { title: "Банан", id: 2, price: 200 },
                { title: "Помидор", id: 3, price: 200 },
                { title: "Редиска", id: 4, price: 50 },
                { title: "Огурец", id: 5, price: 78 },
                { title: "Арбуз", id: 6, price: 1000 }
            ]
        }
    },
    methods: {
        sortAscending() {
            return this.products.sort((a, b) => a.price - b.price);
        },
        sortВescending() {
            return this.products.sort((a, b) => b.price - a.price);
        }
    }
};

Vue.createApp(app).mount('#app');