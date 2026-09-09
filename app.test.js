const request = require("supertest");
const app = require ('./app');

describe("App olá mundo", () => {
    it('Deve retornar "olá mundo devops!" na rota /', async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.text).toBe("olá mundo devops!");
    });
});