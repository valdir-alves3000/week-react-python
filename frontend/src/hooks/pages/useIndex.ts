import { Teacher } from "data/@types/Teacher";
import { useEffect, useState } from "react";
import { ApiService } from "services/ApiService";

export function useIndex() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/teachers/").then((response) => {
      setTeachers(response.data);
    });
  }, []);

  function scheduleLesson() {
    if (selectedTeacher !== null) {
      if (validateNameAndEmail()) {
        ApiService.post(`/teachers/${selectedTeacher.id}/lessons`, {
          name,
          email,
        })
          .then(() => {
            setMessage("Cadastro Realizado com Sucesso");
          })
          .catch((error) => {
            setMessage(error.response?.data.message);
          })
          .finally(() => {
            setSelectedTeacher(null);
            setName("");
            setEmail("");
          });
      } else {
        setMessage("Preencha os dados corretamente");
      }
    }
  }

  function validateNameAndEmail() {
    return name.length > 3 && email.length > 3;
  }

  return {
    teachers,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    scheduleLesson,
    message,
    setMessage,
  };
}
