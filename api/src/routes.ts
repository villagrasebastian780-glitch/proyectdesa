import { Router } from 'express';
import { pool } from './database/connection';

const router = Router();

router.get('/catalogo', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM catalog');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

export default router;

