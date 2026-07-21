"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = require("./database/connection");
const router = (0, express_1.Router)();
router.get('/catalogo', async (req, res) => {
    try {
        const [rows] = await connection_1.pool.query('SELECT * FROM catalog');
        res.json(rows);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
});
exports.default = router;
