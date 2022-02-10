import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 1,
      title: "pexels-photo-1134166",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 2,
      title: "pexels-photo-1440476",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 3,
      title: "pexels-photo-402028",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 4,
      title: "pexels-photo-2187605",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 5,
      title: "pexels-photo-590478",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 6,
      title: "pexels-photo-1829980",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 7,
      title: "pexels-photo-1654748",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 8,
      title: "pexels-photo-2339009",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 9,
      title: "pexels-photo-315191",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 10,
      title: "pexels-photo-2187662",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/2187662/pexels-photo-2187662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 11,
      title: "pexels-photo-581299",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: 12,
      title: "pexels-photo-1310788",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: "35a7c076-ae06-4024-a903-e94a2d032ae2",
      title: "pexels-photo-69496",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/69496/pexels-photo-69496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: "cc854deb-8c7e-4b9d-882a-d1922dffd0a8",
      title: "pexels-photo-1211839",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1211839/pexels-photo-1211839.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      datetime: "February 08 2022 4:39:15 PM",
      id: "ce0c2981-c5f7-43d8-a16a-7c3990d2b60a",
      title: "pexels-photo-327483",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/327483/pexels-photo-327483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: "40ace42f-7903-4098-8187-1f44005d68ad",
      title: "pexels-photo-1829980",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      datetime: "February 08 2022 4:39:15 PM",
    },
    {
      id: "47767011-5d68-439c-9f87-ba222b733091",
      title: "pexels-photo-210547",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      datetime: "February 08 2022 4:43:12 PM",
    },
    {
      id: "ed8224fb-9c63-4b04-889d-4e63b296f8da",
      title: "senso-ji-temple-japan-kyoto-landmark-161251",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      datetime: "February 08 2022 4:46:34 PM",
    },
    {
      id: "c7a9fb9c-0d0c-43de-912e-e5e354b3b09e",
      title: "pexels-photo-1325837",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      datetime: "February 08 2022 4:47:18 PM",
    },
    {
      id: "6ee81e7b-af85-4b51-9976-c57798f1ae3e",
      title: "pexels-photo-2235302",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/2235302/pexels-photo-2235302.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      datetime: "February 08 2022 4:49:24 PM",
    },
    {
      id: "fabc6599-bcb4-49fe-82a2-1ada6fcc6752",
      title: "pexels-photo-2187661",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/2187661/pexels-photo-2187661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      datetime: "February 08 2022 4:56:51 PM",
    },
    {
      id: "3ce3dbfd-c339-45f5-9c6a-f8ee87008a41",
      title: "pexels-photo-6461663",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad tempora esse, nesciunt nihil beatae ullam ea sint, atque omnis vero suscipit rem numquam et minima! Quos ducimus laborum recusandae nemo doloribus illum enim libero, fugit sed rem deserunt ut ratione! Earum accusamus vitae voluptates, expedita vel omnis doloremque. Facilis culpa ad, repellat harum dicta doloremque alias, voluptatum sit doloribus vitae odit! Accusamus deleniti ea sint architecto exercitationem doloribus placeat voluptate sit maxime dicta minima libero optio quis sed minus, eos voluptatibus aliquam commodi tempore et iure ab tenetur dolores quae. Qui iste accusamus nobis officia sequi eveniet, accusantium repellendus harum dolor sapiente amet eum labore tempore in minus placeat. Aut laborum voluptatem sint quisquam, voluptatum aliquid, maxime odio nulla iusto voluptate necessitatibus voluptatibus perferendis culpa deleniti minima aperiam numquam commodi quos quasi dignissimos laudantium nam. Nihil itaque aperiam, veritatis corrupti id quae. Sit ut hic amet vero rerum fugit.",
      postPhoto:
        "https://images.pexels.com/photos/6461663/pexels-photo-6461663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      datetime: "February 09 2022 9:58:26 AM",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filterResults = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    setSearchResults(filterResults.reverse());
  }, [posts, search]);

  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const response = await api.get("/posts");
  //       setPosts(response.data);
  //     }
  //     fetchData();
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(searchResults.length / postsPerPage); i++) {
    pages.push(i);
  }

  const lastIndexPosts = currentPage * postsPerPage;
  const firstIndexPosts = lastIndexPosts - postsPerPage;
  const currentPosts = searchResults.slice(firstIndexPosts, lastIndexPosts);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    setCurrentPage((preCurrentPage) => preCurrentPage + 1);

    if (currentPage + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + pageNumberLimit);
      setMinPageNumber(minPageNumber + pageNumberLimit);
    }
  };
  const handlePreClick = () => {
    setCurrentPage((preCurrentPage) => preCurrentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumber(maxPageNumber - pageNumberLimit);
      setMinPageNumber(minPageNumber - pageNumberLimit);
    }
  };
  return (
    <DataContext.Provider
      value={{
        searchResults,
        setSearch,
        posts,
        setPosts,
        pages,
        currentPosts,
        handleClick,
        currentPage,
        maxPageNumber,
        minPageNumber,
        handleNextClick,
        handlePreClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
