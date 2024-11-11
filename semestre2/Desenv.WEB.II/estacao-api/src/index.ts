import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const getEstacao = (mes: string): string | null => {
  const estacoes: { [key: string]: string } = {
    'dezembro': 'Verão',
    'janeiro': 'Verão',
    'fevereiro': 'Verão',
    'março': 'Outono',
    'abril': 'Outono',
    'maio': 'Outono',
    'junho': 'Inverno',
    'julho': 'Inverno',
    'agosto': 'Inverno',
    'setembro': 'Primavera',
    'outubro': 'Primavera',
    'novembro': 'Primavera'
  };

  return estacoes[mes.toLowerCase()] || null;
};

app.post('/estacao', (req: Request, res: Response) => {
  const { mes } = req.body;

  if (!mes || typeof mes !== 'string') {
    return res.status(400).json({ error: 'Por favor, forneça um nome de mês válido.' });
  }

  const estacao = getEstacao(mes);

  if (!estacao) {
    return res.status(400).json({ error: 'Mês inválido. Por favor, forneça um nome de mês válido.' });
  }

  return res.json({ estacao });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});