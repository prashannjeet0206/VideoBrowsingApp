import Buttons from "./Buttons";

let Options = [
  "All",
  "Sports",
  "Games",
  "Tourisim",
  "Technology",
  "Riding",
  "Food",
  "Cars",
  "Movies",
  "Science",
  "Space",
  "Astrology",
  "Careers",
  "Jobs",
  "MERN",
  "Reactjs",
];
const ButtonList = () => {
  return (
    <div className="flex mt-2 mb-5">
      {Options.map((item, index) => (
        <Buttons key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
