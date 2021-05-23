import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import "./styles.scss";


export const App = () => {
  return (
          <>
        <Section title="Phonebook">
          <ContactForm/>
        </Section>
          
        <Section title="Contacts">
          <Filter/>
          <ContactList/>
        </Section>
      </>
  )
}


