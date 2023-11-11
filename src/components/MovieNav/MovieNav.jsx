import { Link, NavItem, NavList } from 'components/Layout/Layout.styled';

export const MovieNav = () => {
  return (
    <div>
      <h3>Additional information</h3>
      <NavList>
        <NavItem>
          <Link to="cast">Cast</Link>
        </NavItem>
        <NavItem>
          <Link to="reviews">Reviews</Link>
        </NavItem>
      </NavList>
    </div>
  );
};
