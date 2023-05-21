interface Props {
  name: string;
  age: number;
  tags: string[];
  category: Category;
}

// 8 - Enum
export enum Category {
  UR = "URBANO",
  RU = "RURAL",
}

const PropsComponent = ({ name, age, tags, category }: Props) => {
  return (
    <div>
      <p>Meu Segundo componente</p>
      <p>Nome: {name}</p>
      <p>Age: {age}</p>
      {tags.map((tag) => (
        <p>
          Nome da tag: {tag} Categoria: {category}
        </p>
      ))}
    </div>
  );
};

export default PropsComponent;
