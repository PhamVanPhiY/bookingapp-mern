import { useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploaders";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate } from "react-router-dom";

export default function PlacesFormPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);
  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <div>
        {inputHeader(header)}
        {inputDescription(description)}
      </div>
    );
  }
  async function addNewPlace(ev) {
    ev.preventDefault();

    const { data } = await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }
  if (redirect) {
    return <Navigate to={"/account/places"}></Navigate>;
  }
  return (
    <div>
      <AccountNav></AccountNav>
      <form onSubmit={addNewPlace}>
        {preInput("Title", " Should be short and catchy as in advertisement")}

        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder=" My home"
        />

        {preInput("Address", " Address for this place")}
        <input
          type="text"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          placeholder="Address"
        />

        {preInput("Photos", " The more the better")}
        <PhotosUploader
          addedPhotos={addedPhotos}
          onChange={setAddedPhotos}
        ></PhotosUploader>
        {preInput(
          "Description",
          "Provide a detailed description of this place"
        )}

        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        {preInput("Perks", " Select all the perks your place")}
        <div className="grid mt-2 gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks}></Perks>
        </div>

        {preInput("Extra info", " house rules ,etc")}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        ></textarea>

        {preInput(
          "Check in&out times",
          " Add check in and out times,remember to have some time for cleaning"
        )}
        <div className="grid  gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
              placeholder="14:00"
            ></input>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
              placeholder="11:00"
            ></input>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(ev) => setMaxGuests(ev.target.value)}
            ></input>
          </div>
        </div>

        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
