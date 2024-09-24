import sky from "../../assets/images/sky.jpg";
import "./style.css";

export default function Homepage() {
  return (
    <div className="homepage-container flex flex-col lg:flex-row items-center">
      <div className="text-container flex-1 py-6 px-12">
        <h1 className="title text-2xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left pb-8">
          Travel Buddy, The stress-free way to set up that perfect group
          vacation.
        </h1>
        <p className="description text-base md:text-lg lg:text-xl text-center lg:text-left">
          Travel Buddy helps you organize the dream vacation you've always
          wanted. Envision a trip with an easy to use and collaborative
          whiteboard and plan together in real-time. Manage tribes of traveling
          companions and view the trips you've planned. You can even track
          reservations with our Buddy board to help you manage all your trip
          logistics. Travel Buddy has everything you need to make your vacation
          a success!
        </p>
      </div>
      <div className="image-container flex-1 w-full mt-6 lg:mt-0 lg:w-auto py-6 px-12">
        <img
          src={sky}
          alt="Travel"
          className="sky w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
