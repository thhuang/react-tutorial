import { signInWithGoogle, signOut } from '../../utilities/firebase';

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>
    Sign in
  </button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>
    Sign out
  </button>
);

const Navigation = ({ user }) => (
  <nav className="d-flex">{user ? <SignOutButton /> : <SignInButton />}</nav>
);

export default Navigation;
