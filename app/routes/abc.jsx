import {Link} from '@remix-run/react';
import {Button} from '~/components/Button';

export default function Abc() {
  return (
    <>
      <h1>Abc</h1>
      <Button content="Click me" />
      <Button content="Click me 2" />
      <Link to="/def">def</Link>
    </>
  );
}
