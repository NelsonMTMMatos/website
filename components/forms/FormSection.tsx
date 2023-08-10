import { useForm } from 'react-hook-form';
import validator from 'validator';
import FormInputName from './FormInputName';
import FormInputCountry from './FormInputCountry';
import FormInputEmail from './FormInputEmail';
import FormInputPhone from './FormInputPhone';
import FormInputMessage from './FormInputMessage';

export default function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { getNames } = require('country-list');

  const countries = getNames();

  const saveData = (data: any) => {
    const form = document.getElementById('Form') as HTMLFormElement;
    form?.reset();
    console.log(data);
  };

  console.log('Errors: ', errors);

  return (
    <form id="Form">
      <div className=" flex flex-col gap-4">
        
        <FormInputName register={register} errors={errors} />
        <FormInputCountry register={register} errors={errors} countries={countries}/>
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
