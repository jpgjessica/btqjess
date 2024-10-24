import {employees} from '~/components/data/employes';
import Card from '~/components/Card';

export default function Employes() {
  return (
    <div className="max-h-screen">
      <h1 className="flex justify-center items-center">Nos employes</h1>
      <div className="grid grid-cols-5 gap-y-16 gap-x-10 mx-32">
        {employees.map((employe) => (
          <Card
            key={employe.id}
            firstname={employe.firstName}
            lastname={employe.lastName}
            profilePicture={employe.profilePicture}
          />
        ))}
      </div>
    </div>
  );
}
