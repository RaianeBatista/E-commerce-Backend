import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, cpf, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      cpf,
      email,
      password: hashedPassword,
      role,
    },
  });
  res.json(user);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/products', async (req, res) => {
  const { name, description, price, stock } = req.body;
  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
    },
  });
  res.json(product);
});

app.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: {
      name,
      description,
      price,
      stock,
    },
  });
  res.json(product);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: Number(id) } });
  res.json({ message: 'Product deleted' });
});

app.post('/orders', async (req, res) => {
  const { userId, products, quantity } = req.body;
  const order = await prisma.order.create({
    data: {
      userId,
      products,
      quantity,
    },
  });
  res.json(order);
});