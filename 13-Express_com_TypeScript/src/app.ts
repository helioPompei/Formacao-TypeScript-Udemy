// 1 - Init express
import express, { NextFunction, Request, Response } from "express";
const app = express();

// DotEnv
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

app.use(express.json());

// Middleware
const passouAqui = (req: Request, res: Response, next: NextFunction) => {
  console.log("Sou primeiro - Passou aqui");
  console.log(`O id é:  ${req.params.id}`);
  next();
};

app.use("/api/user/:id", passouAqui);
function checkUser(req: Request, res: Response, next: NextFunction) {
  console.log("Sou primeiro - CHECK ");
  if (req.params.id === "1") {
    console.log("Pode seguir!");
    next();
  }
}

app.get("/api/user/:id/acess", checkUser, (req: Request, res: Response) => {
  res.json({ message: "Acessou!" });
});

app.get("/api/user/:id", getUser);

function getUser(req: Request, res: Response) {
  const { id } = req.params;
  res.json({ message: "Deu certo fi!", id: id });
}

app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  const { id, reviewId } = req.params;

  res.json({ id: id, reviewId: reviewId });
});

app.get("/api/product/:id", (req: Request, res: Response) => {
  const params = req.params;
  res.json({ message: "Hello Express!", params: params });
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello Express!" });
});

app.post("/api/product", (req: Request, res: Response) => {
  const product = req.body;
  console.log(product);
  res.send("Produto adicionado!");
});

// REQ RES com Generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`NAME: ${req.params.name}`);

    return res.json({ status: true });
  }
);

app.get("/api/error", (req: Request, res: Response) => {
  try {
    // logica
    throw new Error("Algo deu errado!");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
