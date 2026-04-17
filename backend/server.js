require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'sethi-draw-secret-key-2026';

// Middleware
app.use(cors());
app.use(express.json());

// ==================== ROTAS DO CLIENTE (Neutralizadas) ====================

// Ativar (Sempre retorna sucesso)
app.post('/api/license/activate', async (req, res) => {
  const { license_key, device_id } = req.body;
  const token = jwt.sign(
    { license_key: license_key || 'UNIVERSAL', device_id, customer_name: 'Usuário Premium' },
    JWT_SECRET,
    { expiresIn: '3650d' }
  );
  res.json({ success: true, token, customer_name: 'Usuário Premium' });
});

// Validar (Sempre retorna sucesso)
app.post('/api/license/validate', async (req, res) => {
  res.json({ success: true, customer_name: 'Usuário Premium' });
});

// Status (Sempre retorna ativo)
app.get('/api/license/status', async (req, res) => {
  res.json({ success: true, status: 'active' });
});

// Health Check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Rota raiz
app.get('/', (req, res) => res.send('Sethi Draw API - Ativação Universal Ativa'));

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT} (Modo Sem Restrições)`);
});
