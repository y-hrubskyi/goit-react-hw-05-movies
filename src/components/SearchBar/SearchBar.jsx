import { Form } from './SearchBar.styled';

export const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <input type="text" value={query} onChange={onChange} />
      <button type="submit">Search</button>
    </Form>
  );
};
