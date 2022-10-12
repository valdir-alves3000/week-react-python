import { Button } from "@mui/material";
import { ListAppProps } from "data/@types/Teacher";
import { FormatService } from "services/FormatService";
import {
  Description,
  EmptyList,
  Informations,
  ItemListApp,
  ListAppStyled,
  Name,
  Picture,
  Value,
} from "./ListApp.style";

const ListApp = ({ teachers, onSelect }: ListAppProps) => {
  return (
    <div>
      {teachers.length > 0 ? (
        <ListAppStyled>
          {teachers.map((teacher) => (
            <ItemListApp key={teacher.id}>
              <Picture src={teacher.picture} />

              <Informations>
                <Name> {teacher.name} </Name>
                <Value>{`${FormatService.formatCurrency(
                  teacher.value_hour
                )} por hora`}</Value>
                <Description>
                  {FormatService.clearText(teacher.description, 200)}
                </Description>
                <Button
                  onClick={() => {
                    onSelect(teacher);
                  }}
                  sx={{ width: "70%", borderRadius: "0.25rem" }}
                >
                  Marcar Aula com {teacher.name}
                </Button>
              </Informations>
            </ItemListApp>
          ))}
        </ListAppStyled>
      ) : (
        <EmptyList>Nenhum Item Encontrado</EmptyList>
      )}
    </div>
  );
};

export { ListApp };
