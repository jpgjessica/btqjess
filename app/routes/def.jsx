import {Link} from '@remix-run/react';
import {Button} from '~/components/Button';

export default function Def() {
  return (
    <>
      <h1>DEF</h1>
      <Button
        content="def"
        className="w-full"
        onClick={() => {
          alert('test');
        }}
      />
      <Link to="/abc">Abc</Link>
    </>
  );
}
