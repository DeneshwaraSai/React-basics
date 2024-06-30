type PersonListProps = {
  names: Student[];
};

type Student = {
  first: string;
  last: string;
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name: Student) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}{" "}
          </h2>
        );
      })}
      <h2> John Bruce </h2>
      <h2> William Morgan </h2>
      <h2> David Warner </h2>
    </div>
  );
};
