import React from 'react';
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  changeName = event => {
    this.setState({ name: event.target.value });
  };
  changeNumber = event => {
    this.setState({ number: event.target.value });
  };
  addContact = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    const id = nanoid();
    console.log(id);
    const newContact = { id, name, number };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };
  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <p>Name</p>
        <form>
          <input
            onChange={this.changeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input onChange={this.changeNumber} type="tel" />
          <button onClick={this.addContact}>Add Contact</button>
        </form>
        <div>
          <p>Contacts</p>
          <p>Find contacts</p>
          <input onChange={this.filterChange} type="text" />
        </div>
        <ul>
          {this.getFilteredContacts().map(contact => (
            <li key={contact.id}>
              {contact.name}:{contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
