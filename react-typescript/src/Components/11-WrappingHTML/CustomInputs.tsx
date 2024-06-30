type InputProps = React.ComponentProps<"input">;

export const CustomInputs = (props: InputProps) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};
