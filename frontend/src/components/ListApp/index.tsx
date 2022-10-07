import { Button } from "@mui/material";
import { ListAppProps } from "data/@types/Teacher";
import {
  Description,
  Informations,
  ItemListApp,
  ListAppStyled,
  Name,
  Picture,
  Value,
} from "./ListApp.style";

const ListApp = ({ teachers }: ListAppProps) => {
  return (
    <ListAppStyled>
      {teachers.map((teacher) => (
        <ItemListApp>
          <Picture src={teacher.picture} />

          <Informations>
            <Name> {teacher.name} </Name>
            <Value>
              {`${teacher.value_hour.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })} por hora`}
            </Value>
            <Description>{teacher.description}</Description>
            <Button sx={{ width: "70%", borderRadius: "0.25rem" }}>
              Marcar Aula com {teacher.name}
            </Button>
          </Informations>
        </ItemListApp>
      ))}
    </ListAppStyled>
  );
};

export { ListApp };
