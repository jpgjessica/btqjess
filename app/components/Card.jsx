import {Link} from '@remix-run/react';
import {Button} from '~/components/Button';

export default function Card({
  firstname,
  lastname,
  profilePicture,
  className,
  content,
}) {
  return (
    <div className="flex flex-col justify-center border border-black p-3 rounded-md gap-0">
      <h2>
        {firstname} {lastname}
      </h2>
      <img src={profilePicture} className="rounded-md" />
      <Button
        content="Savoir plus"
        className="w-full"
        onClick={() => {
          alert('futur modal?');
        }}
      />
    </div>
  );
}
