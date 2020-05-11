import React from "react";

let Home = (props) => {
  return (
    <div className="homePage col">
      <div>
        <img
          className="img"
          src={require("../../Assets/Images/c1.jpg")}
          alt="Image of schole"
        />
      </div>
      <div className="home-title">Photo Gallery</div>
      <div className="basic-grid">
        <div>
          <img
            className="img"
            src={require("../../Assets/Images/c7.jpg")}
            alt="Image of schole"
          />
        </div>
        <div>
          <img
            className="img"
            src={require("../../Assets/Images/c3.jpg")}
            alt="Image of schole"
          />
        </div>
        <div>
          <img
            className="img"
            src={require("../../Assets/Images/c5.jpg")}
            alt="Image of schole"
          />
        </div>

        <div>
          <img
            className="img"
            src={require("../../Assets/Images/c6.jpg")}
            alt="Image of schole"
          />
        </div>
      </div>
      <div>
        <p className="home-title">Notice</p>
        <div className="cards">
          <div className="card">
            <div className="card-title">The title</div>
            <div className="card-body">
              the information if the cards to to dispalyed
            </div>
          </div>
          <div className="card">
            <div className="card-title">The title</div>
            <div className="card-body">
              the information if the cards to to dispalyed
            </div>
          </div>
          <div className="card">
            <div className="card-title">The title</div>
            <div className="card-body">
              the information if the cards to to dispalyed
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="home-title">Why us ?</p>
        <div className="home-why">
          In Champs World the children will learn to strengthen their social and
          emotional development. It provides an environment for children to
          explore, gain a sense of self, play with peers and build self
          confidence.It gives an opportunity for growth preparing them for
          primary level. Children get to make choices and learn to take care of
          themselves and others. We promote language and cognitive skills. Our
          teachers trained to nurture each child's curiosity. We help develop
          gross and motor skills by different activities for holistic
          development.
          <ul className="w3-ol g-row">
            <li className="w3-hover-green">
              Spacious & Well Equipped Play Ground
            </li>

            <li className="w3-hover-green">
              Spacious Well Equipped Colourfull & Chirpy classrooms
            </li>

            <li className="w3-hover-green">
              Qualified Well Trained Teached Facilitatiors
            </li>

            <li className="w3-hover-green"> 3 Times Hygienic Meals</li>

            <li className="w3-hover-green"> Health & Hygiene</li>

            <li className="w3-hover-green">Friendly and Helpful environment</li>

            <li className="w3-hover-green">Well Behaved non-teaching staf</li>
            <li className="w3-hover-green">
              audio-visual hall with multimedia{" "}
            </li>
            <li className="w3-hover-green">ECA & Gym hall / nap room </li>
            <li className="w3-hover-green">arts & crafts </li>
            <li className="w3-hover-green">monthly activities </li>
            <li className="w3-hover-green">cctv & security </li>
            <li className="w3-hover-green">yoga, music & dance </li>
            <li className="w3-hover-green">
              games & sports (indoor and outdoor)
            </li>
            <li className="w3-hover-green">theme based lessons</li>
            <li className="w3-hover-green">
              taekwondo by professional trainer{" "}
            </li>
            <li className="w3-hover-green">field trips </li>
            <li className="w3-hover-green">parenting session</li>
            <li className="w3-hover-green">activity based teaching </li>
            <li className="w3-hover-green">transport facility </li>
            <li className="w3-hover-green">valued based education </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
