import { Box } from "@mui/material";
import { ListApp } from "components/ListApp";
import { Teacher } from "data/@types/Teacher";
import type { NextPage } from "next";
import { randomNumber } from "utils/randomNumber";

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Elton Fonseca",
      picture: "https://github.com/elton-fonseca.png",
      description: "Treinamento ReactJs",
      value_hour: randomNumber(115, 299),
    },
    {
      id: 8,
      name: "Akira Hanashiro",
      picture: "https://github.com/hanashiro.png",
      description: "Desenvolvimento Front-end",
      value_hour: randomNumber(108, 299),
    },
    {
      id: 7,
      name: "Plataforma Treina Web",
      picture: "https://github.com/treinaweb.png",
      description: "Treinamento em Diversas Tecnologias",
      value_hour: randomNumber(10, 50),
    },
    {
      id: 2,
      name: "Diego Fernandes",
      picture: "https://github.com/Diego3g.png",
      description: "Aulas de ReactJs do zero ao avançado",
      value_hour: randomNumber(160, 333),
    },
    {
      id: 3,
      name: "Valdir",
      picture: "https://github.com/valdir-alves3000.png",
      description: "Aprendizado contínuo em ReactJs",
      value_hour: randomNumber(60, 150),
    },
    {
      id: 4,
      name: "Mayk Brito",
      picture: "https://github.com/maykbrito.png",
      description: "Desenvolvimento em JavaScript",
      value_hour: randomNumber(150, 310),
    },
    {
      id: 5,
      name: "Daniele Leão",
      picture: "https://github.com/danileao.png",
      description: "Desenvolvimento de APIs com NodeJs",
      value_hour: randomNumber(120, 330),
    },
    {
      id: 6,
      name: "Wesley Willians",
      picture: "https://github.com/wesleywillians.png",
      description: "Microservoços para aplicações de grande porte",
      value_hour: randomNumber(130, 320),
    },
  ];
  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <ListApp teachers={teachers} />
    </Box>
  );
};

export default Home;
