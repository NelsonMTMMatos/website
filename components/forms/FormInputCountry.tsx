export default function FormInputCountry({ register, errors }: any) {
  const { getNames } = require('country-list');

  const countries = getNames();

  return (
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
  );
}
