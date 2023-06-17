import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFatchCountries } from 'hooks/useFatchCountries';

export const Home = () => {
  const { countries, isLoading, error} = useFatchCountries();
  return (
    <Section>
      <Container>
        {error && <Heading>Error</Heading>} 
        {isLoading && <Loader />} 
       <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
