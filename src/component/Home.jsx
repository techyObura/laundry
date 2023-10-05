import Logo from "../assets/images/log.png";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Laundry1 from "../assets/images/laundry4b.png";
import Click from "../assets/images/click.jpg";
import Truck from "../assets/images/truck.jpg";
import Laundry9 from "../assets/images/laundry9.jpg";
import Laundry10 from "../assets/images/laundry10.jpg";
import Bed from "../assets/images/bed.jpg";
import DryClean from "../assets/images/dryClean.jpg";
import Folded from "../assets/images/folded.jpg";

const Home = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mt-4 flex justify-between items-center">
        <div className="w-full flex items-center ">
          <div className="w-16 h-11 mt">
            <img src={Logo} alt="Simon laundry" className="w-full h-full" />
          </div>
          <div>
            <h1
              className="font-bold text-xl text-orange-600"
              style={{ fontFamily: "ABeeZee" }}
            >
              Simon Laundry
            </h1>
          </div>
        </div>
        <div className="pr-4">
          <LibraryAddCheckIcon
            className="text-blue-400"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full mt-8 mb-6" style={{ fontFamily: "Roboto" }}>
        <div className="flex justify-center items-center w-full">
          <div className="">
            <h3 className="text-blue-400 font-semibold text-center text-4xl">
              Laundry & Dry Cleaning
            </h3>
            <h3 className="text-blue-400 font-semibold text-center text-4xl">
              Delivery Service
            </h3>
            <h4 className="text-center text-orange-600 font-semibold mt-1 mb-2">
              Effortless Scheduling, Save Time & Money
            </h4>
            <div className="w-11/12">
              <p
                className="text-center tracking-wide text-md text-blue-400 font-semibold w-full whitespace-nowrap"
                style={{ fontFamily: "Chelsea Market" }}
              >
                We pick up, clean and deliver your laundry
              </p>
              <p
                className="text-center tracking-wider text-md font-semibold text-blue-400 whitespace-nowrap"
                style={{ fontFamily: "Chelsea Market" }}
              >
                and dry cleaning clothes{" "}
                <span className="uppercase text-lg text-orange-600 font-semibold">
                  free delivery!
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full justify-center items-center flex mt-8">
          <a href="https://wa.me/723691214">
            <button className="bg-orange-600 text-white w-56 h-12 rounded-lg text-2xl font-semibold hover:bg-orange-500">
              Contact Now
            </button>
          </a>
        </div>
        <div>
          <div>
            <img src={Laundry1} alt="Simon Laundry" />
          </div>
        </div>
      </div>

      {/* Step by Step */}
      <div className="w-full bg-blue-400 pt-4 mb-5">
        <div className="w-full ">
          <p className="text-orange-600 uppercase font-bold text-3xl text-center">
            step <span className="text-white">by</span> step
          </p>
          <div className="w-3/4 mt-16 m-auto">
            <div
              className=" bg-white w-full flex justify-center items-center m-auto rounded-xl mb-6"
              style={{ width: "196px", height: "206px" }}
            >
              <div
                className="flex w-full justify-center items-center bg-blue-400 rounded-xl"
                style={{ width: "190", height: "200px" }}
              >
                <img
                  src={Click}
                  alt="simon laundry"
                  className="w-full h-full flex justify-center items-center rounded-xl"
                />
              </div>
            </div>
            <h6 className="uppercase text-orange-600 text-xl font-semibold text-center">
              place your first order
            </h6>
            <p className="text-white font-semibold text-xl text-center">
              To place your order, just tap on &quot;Order Now&quot; button{" "}
            </p>
          </div>
          <div className="w-3/4 mt-16 m-auto">
            <div
              className=" bg-white w-full flex justify-center items-center m-auto rounded-xl mb-6"
              style={{ width: "196px", height: "206px" }}
            >
              <div
                className="flex w-full justify-center items-center bg-blue-400 rounded-xl"
                style={{ width: "190px", height: "200px" }}
              >
                <img
                  src={Laundry9}
                  alt="simon laundry"
                  className="w-full h-full flex justify-center items-center rounded-xl"
                />
              </div>
            </div>
            <h6 className="uppercase text-orange-600 text-xl font-semibold text-center">
              our commitment
            </h6>
            <p className="text-white font-semibold text-xl text-center">
              Once you contact us, we wash, dry clean, and fold your laundry
              items and bring them to you at you favorite location{" "}
            </p>
          </div>
          <div className="w-3/4 mt-16 m-auto">
            <div
              className=" bg-white w-full flex justify-center items-center m-auto rounded-xl mb-6"
              style={{ width: "196px", height: "206px" }}
            >
              <div
                className="flex w-full justify-center items-center bg-blue-400 rounded-xl"
                style={{ width: "190px", height: "200px" }}
              >
                <img
                  src={Laundry10}
                  alt="simon laundry"
                  className="w-full h-full flex justify-center items-center rounded-xl"
                />
              </div>
            </div>
            <h6 className="uppercase text-orange-600 text-xl font-semibold text-center">
              enjoy your fresh clothes
            </h6>
            <p className="text-white font-semibold text-xl text-center">
              Just like that, you will receive your clothes back at your
              doorstep! All fresh, smelling good and perfectly folded by just
              using our laundry system
            </p>
          </div>
        </div>
      </div>

      {/* Simon Services */}
      <div className="w-full mt-6">
        <div className="w-full">
          <h4 className="text-center text-blue-400 text-4xl font-bold">
            Simon&quot;s Services
          </h4>
        </div>
        <div className="mt-16">
          {/* Item 1 */}
          <div className="w-11/12 m-auto mb-8">
            <div className="w-36 h-36 rounded-full mb-9 bg-orange-600 m-auto relative">
              <div
                className="w-36 h-36 rounded-full absolute"
                style={{ position: "absolute", right: "-10px", top: "10px" }}
              >
                <img
                  src={DryClean}
                  alt="Simon Laundry"
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="w-5/6 m-auto mb-3">
              <h4 className="text-center text-orange-600 font-bold text-3xl">
                Dry Cleaning Service
              </h4>
            </div>
            <p className="text-center text-xl text-slate-600">
              Try our high-quality dry cleaner
            </p>
            <p className="text-center text-xl text-slate-600">
              service. We do it for you and expect clean
            </p>
            <p className="text-center text-xl text-slate-600">
              pressed and hanged clothes.
            </p>
          </div>
          {/* End of Item 1 */}
          {/* Item 2 */}
          <div className=" w-11/12 m-auto mb-8">
            <div className="w-32 h-32 rounded-full mb-9 bg-orange-600 m-auto relative">
              <div
                className="w-36 h-36 rounded-full absolute"
                style={{ position: "absolute", right: "-20px", top: "10px" }}
              >
                <img
                  src={Folded}
                  alt="Simon Laundry"
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="w-5/6 m-auto mb-3">
              <h4 className="text-center text-orange-600 font-bold text-3xl">
                Laundry Service
              </h4>
            </div>
            <p className="text-center text-xl text-slate-600">
              You can direct us to wash and fold
            </p>
            <p className="text-center text-xl text-slate-600">
              your clothes and expect fresh, clean as
            </p>
            <p className="text-center text-xl text-slate-600">
              never before and perfectly folded clothes.
            </p>
          </div>
          {/* End of Item 2 */}
          {/* Item 3 */}
          <div className="w-11/12 m-auto mb-8">
            <div className="w-40 h-40 rounded-full mb-9 bg-orange-600 m-auto relative">
              <div
                className="w-36 h-36 rounded-full absolute"
                style={{ position: "absolute", right: "-20px", top: "10px" }}
              >
                <img
                  src={Bed}
                  alt="Simon Laundry"
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="w-11/12 m-auto mb-3 w">
              <h4 className="text-center text-orange-600 font-bold text-3xl">
                Commercial Laundry Service
              </h4>
            </div>
            <p className="text-center text-xl text-slate-600">
              Partner your business with us for
            </p>
            <p className="text-center text-xl text-slate-600">
              on-demand professional laundry service.
            </p>
            <p className="text-center text-xl text-slate-600">
              Your hotel needs the highest quality
            </p>
            <p className="text-center text-xl text-slate-600">
              laundry service, which we provide strictly as required by
              standards.
            </p>
          </div>
          {/* End of Item 3 */}
        </div>
      </div>

      {/* Benefits */}
      <div></div>

      {/* Professional Laundry and Dry Cleaners */}
      <div></div>

      {/* Just subscribe */}
      <div></div>

      {/* Refer a friend */}

      <div></div>

      {/* What Our customers Say */}

      <div></div>

      {/* Footer */}

      <div></div>

      {/* message button */}
      <a
        href="https://wa.me/723691214"
        className="fixed bottom-10 right-5 w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center"
      >
        <div className="text-white flex justify-center items-center">
          <WhatsAppIcon style={{ width: "38px", height: "38px" }} />
        </div>
      </a>

      {/* scroll top button */}
      <div></div>
    </div>
  );
};

export default Home;
