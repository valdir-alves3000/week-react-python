export interface Teacher {
  id: number;
  name: string;
  description: string;
  value_hour: number;
  picture: string;
}

export interface ListAppProps {
  teachers: Teacher[];
  onSelect: (teacher: Teacher) => void;
}
