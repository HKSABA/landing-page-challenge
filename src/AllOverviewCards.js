import React from "react";
import Overview from "./Overview";
import "./AllCards.css";
import "./Theme.css";

function AllOverviewCards() {
  return (
    <div className="allOverviewCards">
      <Overview
        type="Page Views"
        logo="https://i.pinimg.com/originals/50/51/eb/5051eb5c8b55b28ba8aa32e0da1ad691.png"
        number="87"
        upButton
        dailyCount="3%"
      />
      <Overview
        type="Likes"
        logo="https://i.pinimg.com/originals/50/51/eb/5051eb5c8b55b28ba8aa32e0da1ad691.png"
        number="52"
        dailyCount="2%"
      />
      <Overview
        type="Likes"
        logo="https://media.istockphoto.com/vectors/gradient-vector-illustration-colorful-background-vector-id1177616400?b=1&k=6&m=1177616400&s=612x612&w=0&h=Z9eIolZBYs1hgAH6JQf4IQU1E0IQIuxpgJO6ROR9TaA="
        imgRadius="7px"
        number="5462"
        upButton
        dailyCount="2257%"
      />
      <Overview
        type="Profile Views"
        logo="https://media.istockphoto.com/vectors/gradient-vector-illustration-colorful-background-vector-id1177616400?b=1&k=6&m=1177616400&s=612x612&w=0&h=Z9eIolZBYs1hgAH6JQf4IQU1E0IQIuxpgJO6ROR9TaA="
        imgRadius="7px"
        number="52k"
        upButton
        dailyCount="1375%"
      />
      <Overview
        type="Retweets"
        logo="https://www.theindianwire.com/wp-content/uploads/2020/08/Twitter-Logo.png"
        number="117"
        dailyCount="30%"
      />
      <Overview
        type="Likes"
        logo="https://www.theindianwire.com/wp-content/uploads/2020/08/Twitter-Logo.png"
        number="507"
        upButton
        dailyCount="553%"
      />
      <Overview
        type="Likes"
        logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXMGR8px/YTAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        imgRadius="50%"
        number="87"
        upButton
        dailyCount="107%"
      />
      <Overview
        type="Total Views"
        logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXMGR8px/YTAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        imgRadius="50%"
        number="87"
        dailyCount="14%"
      />
    </div>
  );
}

export default AllOverviewCards;
