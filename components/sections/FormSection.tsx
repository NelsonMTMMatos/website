import { useForm } from 'react-hook-form';
import FormInputName from '../forms/FormInputName';
import FormInputCountry from '../forms/FormInputCountry';
import FormInputEmail from '../forms/FormInputEmail';
import FormInputPhone from '../forms/FormInputPhone';
import FormInputMessage from '../forms/FormInputMessage';

export default function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveData = (data: any) => {
    const form = document.getElementById('Form') as HTMLFormElement;
    form?.reset();
    console.log(data);
  };

  return (
    <form id="Form">
      <div className=" flex flex-col gap-4">
        <FormInputName register={register} errors={errors} />
        <FormInputCountry register={register} errors={errors} />
        <FormInputEmail register={register} errors={errors} />
        <FormInputPhone register={register} errors={errors} />
        <FormInputMessage register={register} errors={errors} />

        <div className="flex justify-end mt-4">
          <input
            type="submit"
            className=" bg-slate-500 text-white hover:bg-slate-200 hover:text-black py-2 px-4 w-fit transition-all duration-500"
            onClick={handleSubmit(saveData)}
            value="Send"
          />
        </div>
      </div>
    </form>
  );
}
