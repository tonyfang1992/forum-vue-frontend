<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Dr. Izaiah Ernser",
      tel: "389.061.3241 x162",
      address: "7226 Johns Islands",
      opening_hours: "08:00",
      description: "quam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.45122643685453",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 2,
      name: "Obie Conn",
      tel: "058-041-5630",
      address: "940 Lew Bridge",
      opening_hours: "08:00",
      description: "Provident odit ut ipsum et recusandae eaque possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.912243921415936",
      viewCounts: 1,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:54:12.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 3,
      name: "Herminio Nicolas",
      tel: "063-480-5811 x2308",
      address: "52267 Marquardt Corners",
      opening_hours: "08:00",
      description: "autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.32006179376239",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 4,
      name: "Adalberto Anderson",
      tel: "313.718.9513 x0422",
      address: "3047 Marge Key",
      opening_hours: "08:00",
      description:
        "Quo asperiores qui omnis maxime qui voluptates sit vel. Aut dolor iste ut voluptatum dolorum. Veritatis placeat expedita quo debitis quae voluptatem et harum. Ipsam minima alias in. Fugiat quos et et ut aut vel ab facilis officiis.\n \rQuaerat molestiae placeat fuga et vero neque perferendis qui et. Neque ut a hic dignissimos ea voluptas. Dignissimos distinctio perspiciatis minima.\n \rRecusandae ut et. Aut ipsum officia voluptatem soluta maiores atque quia. Veniam temporibus occaecati sunt consequuntur tempora dolore. Accusamus qui eum. Possimus dolore et sequi expedita praesentium sed dolore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 5,
      name: "Mitchel Beatty",
      tel: "171-324-8413",
      address: "85408 Francisca Square",
      opening_hours: "08:00",
      description:
        "Aut cumque excepturi exercitationem libero voluptates impedit. Enim animi repellendus tempora doloremque. Esse in delectus sequi ullam sed animi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 6,
      name: "Vicenta Gutkowski",
      tel: "128-905-3953",
      address: "371 Reuben Vista",
      opening_hours: "08:00",
      description: "labore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 7,
      name: "Miss Letitia Will",
      tel: "(770) 750-6811 x99988",
      address: "8145 Laisha Keys",
      opening_hours: "08:00",
      description:
        "Aut earum molestiae et ducimus adipisci ut maxime.\nVeritatis labore illum et similique cumque qui qui officia omnis.\nQui laudantium amet enim natus.\nVoluptatem quia est nam ut esse et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 8,
      name: "Mr. Johnny Abshire",
      tel: "333-243-4940 x9008",
      address: "075 Murray Stream",
      opening_hours: "08:00",
      description:
        "Qui omnis optio neque sit rerum nisi. Repellat qui perferendis explicabo pariatur harum recusandae debitis. Laborum eligendi dolores ullam aliquam reiciendis sit voluptates sint quaerat. Deserunt distinctio voluptatum eveniet. Excepturi nostrum saepe non et rem itaque quidem occaecati.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.225573809911651",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    },
    {
      id: 9,
      name: "Luz Schaden",
      tel: "1-712-742-4184",
      address: "4929 Wisozk Centers",
      opening_hours: "08:00",
      description:
        "Culpa deserunt molestiae eligendi est ex incidunt.\nNisi sit totam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      }
    }
  ],
  comments: [
    {
      id: 76,
      text: "Et cumque natus eum.",
      UserId: 3,
      RestaurantId: 26,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 26,
        name: "Sarai Breitenberg",
        tel: "114-064-6388 x05451",
        address: "118 Cole Dale",
        opening_hours: "08:00",
        description:
          "Reiciendis et voluptatibus officiis magni enim quia pariatur ut. Fugit illum quia totam qui omnis facere minus. Dolores qui ullam magni enim repellat impedit hic ab aspernatur. Doloribus qui deleniti quas ipsum aut et. Odit perspiciatis cupiditate inventore omnis. Ut eum voluptatem facere quaerat aliquam doloremque perspiciatis id officiis.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=93.53330481196743",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 4
      }
    },
    {
      id: 96,
      text: "Voluptas nobis ullam fugiat modi laboriosam et pariatur et at.",
      UserId: 1,
      RestaurantId: 46,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
        isAdmin: true,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 46,
        name: "Mr. Price Heathcote",
        tel: "1-234-170-6861",
        address: "178 Collins Mission",
        opening_hours: "08:00",
        description: "Unde maiores error ex.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=38.75335489939356",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 4
      }
    },
    {
      id: 97,
      text:
        "Eveniet minima dolores quo qui corporis commodi expedita molestiae a.",
      UserId: 2,
      RestaurantId: 47,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 47,
        name: "Flo Paucek",
        tel: "616-595-6381",
        address: "0570 Toy Land",
        opening_hours: "08:00",
        description: "Explicabo voluptate quam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=7.110473595831435",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 4
      }
    },
    {
      id: 98,
      text: "Quis qui quasi odio blanditiis voluptatibus aut ullam.",
      UserId: 2,
      RestaurantId: 48,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 48,
        name: "Fernando Beahan",
        tel: "782-526-8659 x452",
        address: "447 Isaiah Garden",
        opening_hours: "08:00",
        description: "officia corrupti nisi",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=49.159643827730235",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 1
      }
    },
    {
      id: 99,
      text: "Perspiciatis maxime enim doloremque inventore rem maiores.",
      UserId: 2,
      RestaurantId: 49,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 49,
        name: "Ervin Bosco",
        tel: "1-570-594-3328",
        address: "0660 Minerva Stravenue",
        opening_hours: "08:00",
        description:
          "Consequuntur sunt dolor repellendus vel accusantium sit distinctio.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=41.04326025577176",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 2
      }
    },
    {
      id: 100,
      text: "Saepe sit aliquam et qui.",
      UserId: 3,
      RestaurantId: 50,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 50,
        name: "Gregorio Collier",
        tel: "1-975-176-9572",
        address: "353 McLaughlin Falls",
        opening_hours: "08:00",
        description:
          "Velit rem ab. Laboriosam sint molestias similique exercitationem ipsa qui omnis at. Expedita odio ea aspernatur et vero. In totam quia quas enim. Ipsam quae et quos.\n \rProvident eos ex accusantium. Voluptas numquam aut quia et. Fuga incidunt et vero vel impedit saepe. Eligendi harum quis voluptatem voluptatibus facilis minus est omnis.\n \rDistinctio error deserunt doloribus laboriosam deserunt iusto. Vel quibusdam rerum in et neque voluptatem. Atque beatae dolores nihil.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=67.28285530388449",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 3
      }
    },
    {
      id: 101,
      text: "Non nesciunt eveniet pariatur sit id officia consequuntur.",
      UserId: 1,
      RestaurantId: 1,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
        isAdmin: true,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 1,
        name: "Dr. Izaiah Ernser",
        tel: "389.061.3241 x162",
        address: "7226 Johns Islands",
        opening_hours: "08:00",
        description: "quam",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=90.45122643685453",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 2
      }
    },
    {
      id: 102,
      text: "Ut in nam corrupti magnam exercitationem.",
      UserId: 1,
      RestaurantId: 2,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
        isAdmin: true,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 2,
        name: "Obie Conn",
        tel: "058-041-5630",
        address: "940 Lew Bridge",
        opening_hours: "08:00",
        description: "Provident odit ut ipsum et recusandae eaque possimus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=28.912243921415936",
        viewCounts: 1,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:54:12.000Z",
        CategoryId: 5
      }
    },
    {
      id: 103,
      text: "Nisi nihil dolor vero non dicta.",
      UserId: 2,
      RestaurantId: 3,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 3,
        name: "Herminio Nicolas",
        tel: "063-480-5811 x2308",
        address: "52267 Marquardt Corners",
        opening_hours: "08:00",
        description: "autem",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=38.32006179376239",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 1
      }
    },
    {
      id: 104,
      text: "Et consequuntur atque officiis beatae.",
      UserId: 2,
      RestaurantId: 4,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z"
      },
      Restaurant: {
        id: 4,
        name: "Adalberto Anderson",
        tel: "313.718.9513 x0422",
        address: "3047 Marge Key",
        opening_hours: "08:00",
        description:
          "Quo asperiores qui omnis maxime qui voluptates sit vel. Aut dolor iste ut voluptatum dolorum. Veritatis placeat expedita quo debitis quae voluptatem et harum. Ipsam minima alias in. Fugiat quos et et ut aut vel ab facilis officiis.\n \rQuaerat molestiae placeat fuga et vero neque perferendis qui et. Neque ut a hic dignissimos ea voluptas. Dignissimos distinctio perspiciatis minima.\n \rRecusandae ut et. Aut ipsum officia voluptatem soluta maiores atque quia. Veniam temporibus occaecati sunt consequuntur tempora dolore. Accusamus qui eum. Possimus dolore et sequi expedita praesentium sed dolore.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
        viewCounts: 0,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        CategoryId: 4
      }
    }
  ]
};

import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    }
  }
};
</script>