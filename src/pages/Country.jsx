import { Section, Container, CountryInfo, Loader } from 'components';
import { useFatchCountry } from 'hooks/useFatchCountry';
import { GoBackBtn } from 'components';

export const Country = () => {
  const { country, isLoading, error } = useFatchCountry()
  console.log(country)
  const { flag,
    capital,
    countryName,
    id,
    languages,
    population } = country;
  return (
    <Section>
      <Container>
        <GoBackBtn path = {'/'}>Go back</GoBackBtn>
        {error && <div>{error}</div>}
        {isLoading && <Loader />}
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
