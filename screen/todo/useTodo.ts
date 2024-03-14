import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

type formProps = {
  name : string
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
export const useTodo = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data:formProps) => {
      console.log(data);
  }

  return {register,handleSubmit,onSubmit};
};
