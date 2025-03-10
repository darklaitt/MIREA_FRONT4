const express = require('express');
const app = express();
const PORT = 3000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');


// Middleware для статических файлов (HTML, CSS)
app.use(express.static('../frontend'));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // Включаем GraphiQL для тестирования
}));

// Загрузка данных из JSON-файла
const products = require('../products.json');   

// Маршрут для получения списка товаров
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Catalog server is running on http://localhost:${PORT}`);
});