import PetProfileHeader from "../../organisms/PetProfileHeader";
import pet_picture from "../../../assets/img/pet_picture.webp";

export default function Profile (){
    return (
        <div className="min-h-screen p-6">
            <PetProfileHeader petPicture={pet_picture}></PetProfileHeader>
        </div>
    )
}