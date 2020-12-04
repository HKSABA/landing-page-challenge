import React from "react";
import MediaCard from "./MediaCard";
import "./AllCards.css";
import "./Theme.css";

function AllMediaCards() {
  return (
    <div className="allMediaCards">
      {/* Facebook */}
      <MediaCard
        ID="first"
        link="https://www.facebook.com/CleverProgrammerr/"
        gradient="#1877F2"
        logo="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png"
        overlay_logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
        username="cleverprogrammer"
        number="85k"
        type="FOLLOWERS"
        upButton
        dailyCount="12"
      />
      {/* Twitter */}
      <MediaCard
        ID="second"
        link="https://twitter.com/cleverqazi"
        gradient="#00A3FF"
        logo="https://www.theindianwire.com/wp-content/uploads/2020/08/Twitter-Logo.png"
        overlay_logo="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
        username="cleverqazi"
        number="4k"
        type="FOLLOWERS"
        downButton
        dailyCount="8"
      />
      {/* Instagram */}
      <MediaCard
        ID="third"
        link="https://www.instagram.com/cleverqazi/"
        gradient="linear-gradient(to left, #ee2a7b, #ff565d, #ff893e, #ffbc24)"
        logo="https://media.istockphoto.com/vectors/gradient-vector-illustration-colorful-background-vector-id1177616400?b=1&k=6&m=1177616400&s=612x612&w=0&h=Z9eIolZBYs1hgAH6JQf4IQU1E0IQIuxpgJO6ROR9TaA="
        overlay_logo="https://i1.wp.com/zephyrstudiosla.com/wp-content/uploads/2018/01/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png?ssl=1"
        username="cleverqazi"
        number="82k"
        type="FOLLOWERS"
        upButton
        dailyCount="20"
      />
      {/* YouTube */}
      <MediaCard
        ID="fourth"
        link="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
        gradient="#CC0000"
        logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXMGR8px/YTAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        overlay_logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_light_icon_%282017%29.svg/1280px-YouTube_light_icon_%282017%29.svg.png"
        username="cleverprogrammer"
        number="810k"
        type="SUBSCRIBERS"
        upButton
        dailyCount="30"
      />
    </div>
  );
}

export default AllMediaCards;
