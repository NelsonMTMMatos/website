import { useForm } from 'react-hook-form';
import validator from 'validator';
import FormInputEmail from './FormInputEmail';

export default function FormSection() {
  const {
    register,
    handleSubmit,
    watch,
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
        <div className=" flex flex-col gap-1">
          <label>{`Name`}</label>
          <input
            {...register('name', {
              required: true,
            })}
            placeholder="Write your name..."
            className={`border px-2 py-2 ${errors?.name && 'input-error'}`}
            id="name"
          ></input>
          {errors?.name?.type === 'required' && (
            <p className="error-message">The name is required.</p>
          )}
        </div>

        <FormInputEmail register={register} errors={errors} />

        <div className=" flex flex-col gap-1">
          <label>{`Phone`}</label>
          <input
            {...register('phone', {
              required: true,
              validate: (value: string) => validator.isNumeric(value),
            })}
            placeholder="Write your phone number..."
            className={`border px-2 py-2 ${errors?.phone && 'input-error'}`}
            id="phone"
          ></input>
          {errors?.phone?.type === 'required' && (
            <p className="error-message">The phone number is required.</p>
          )}
          {errors?.phone?.type === 'validate' && (
            <p className="error-message">
              The phone number has non numeric characters.
            </p>
          )}
        </div>

        <div className=" flex flex-col gap-1">
          <label>{`Country`}</label>
          <select
            {...register('country', {
              validate: (value: string) => value !== '-1',
            })}
            className={`border px-2 py-2 ${errors?.country && 'input-error'}`}
          >
            <option value="-1">Select your country...</option>
            {countries.map((country: string, index: number) => (
              <option value={country} key={`country` + index}>
                {country}
              </option>
            ))}
          </select>
          {errors?.country?.type === 'validate' && (
            <p className="error-message">Select one of the countries.</p>
          )}
        </div>

        <div className=" flex flex-col gap-1">
          <label>{`Message`}</label>
          <textarea
            {...register('message')}
            placeholder="Write your message..."
            className={`border px-2 py-2`}
          ></textarea>
        </div>
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
