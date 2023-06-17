import { Section, Container, CountryInfo, Loader } from 'components';
import { useFatchCountry } from 'hooks/useFatchCountry';

export const Country = () => {
  const { country, isLoading, error } = useFatchCountry()
  return (
    <Section>
      <Container>
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
