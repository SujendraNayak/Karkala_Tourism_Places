import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import "./DetailsPage.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
// Import other images as needed

const DetailsPage = () => {
  const { id } = useParams(); // Get the card id from the URL

  // Array of details for each card
  const details = [
    {
      id: "1",
      image: img1,
      title: "Gommateshwara Statue",
      name: "Construction",
      description:
        "The statue was built in 1432 by Veera Pandya Bhairarasa Wodeyar..",
    },
    {
      id: "2",
      image: img2,
      title: "Koti-Channaya Theme Park",
      name: "Koti-Channaya Theme Park",
      description:
        "The Koti-Chennaya theme park, situated in Kasaba Grama, Karkala, in the Udupi District of Karnataka, India, is a grand tribute to the rich cultural heritage of the coastal region. Spanning an impressive 100 acres, this park stands as a testament to the glory and valor of the legendary twin heroes, Koti and Chennaya, who are revered for their bravery and justice. The primary objective of the park is to honor these iconic figures and preserve the traditions of the region, making it a cultural beacon that resonates with the stories of heroism, folklore, and the deeply rooted practices of coastal Karnataka. Through sculptures, exhibits, and immersive experiences, visitors are transported into a world that celebrates the spirit of community and the legacy of its ancestors. The Koti-Chennaya theme park is not just an attraction but a profound homage to the past, nurturing a sense of pride and cultural connection for generations to come.",
    },
    {
      id: "3",
      image: img3,
      title: "Manasthmbha",
      name: "Manasthmbha",
      description:
        "A manastambha (Sanskrit for column of honour) is a pillar commonly built in front of Jain temples or significant Jain statues. In North India, these pillars are often crowned with images of four Tirthankaras.As described in Digambara Jain texts such as Adi Purana and Tiloyapannati, a towering manastambha is situated in front of the samavasarana (the divine preaching hall) of the Tirthankaras, symbolizing the shedding of pride for anyone entering the sacred space.Monolithic manastambhas are a notable feature in the Jain temples of Moodabidri, often adorned with a statue of Brahmadeva, the guardian yaksha, positioned at the top.",
    },  {
      id: "5",
      image: img5,
      title: "Attur Church",
      name: "Attur Church",
      description:
        "St. Lawrence Shrine, also known as Attur Church, is a Roman Catholic church in Karkala, India, built in 1759 and renowned for its history of miracles. Located on the outskirts of Karkala in Karnataka, 58 km from Mangalore, it is surrounded by serene greenery. The church manages a school and an orphanage and is believed to possess divine intercessory power, drawing pilgrims from Udupi District and across India.        In January 2001, the parish celebrated its 200th anniversary, marked by the blessing of a new church building by the Bishop of Mangalore on January 21. The annual Attur Festival (Attur Jatre), a significant religious and cultural event, takes place during the last Tuesday, Wednesday, and Thursday of January, drawing thousands of devotees from all backgrounds.",
    }, {
      id: "4",
      image: img4,
      title: "Varanga Jain Temple",
      name: "Varanga Jain Temple",
      description:
        "Special poojas are performed for the Goddess every Friday and Sunday. Devotees bow down to seek blessings for fulfilling their material comforts and personal wishes. Chandranath Basadi is another significant Basadi in Varanga, also known as Matada Basadi, as it houses the Jain Mutt. This Basadi is believed to have a history of 1,000 years. The main deity worshipped here is Chandraprabha, the 8th Tirthankara. The unique feature and main attraction of this Basadi is the idol of the deity, which is made of Chandrashila, allowing light to pass through it.",
    },
    {
      id: "6",
      image: img6,
      title: "Anekere Jain Temple",
      name: "Anekere Jain Temple",
      description:
      "The Anekere Alke, constructed in 1262 by Raja Pandyadeva of the Bhairasa dynasty, was originally designed as a tank to serve as a bathing spot for the royal elephants. Initially covering an area of 25 acres, as per government records, it later became an important source of drinking water for the region.For more than 800 years, the Anekere lake remained the main source of potable water for the city. In 1545 AD, one of Raja Pandyadeva's successors, Pandya VI, commissioned the Kere Basadi, which was built at the center of the lake.Kere Basadi*Karkala, known for its strong Jain heritage, features numerous Basadis. The Kere Basadi, named for its unique location in the middle of the lake (kere), is also called the Chaturmukha Basadi due to its four-faced tirthankara idol.",
    },
   
    {
      id: "7",
      image: img7,
      title: "Chaturmukha Basadi",
      name: "Chaturmukha Basadi",
      description:
        "The Chaturmukha Basadi was built in 1586 by Immadi Bhairarasa Vodeya of the Santara dynasty in the late 16th century.The temple is known as Chaturmukha (meaning four faces) Basadi due to its four symmetrical entrances. In South India, basadi refers to Jain temples. The temple houses images of Tirthankaras Aranath, Mallinath, and Munisuvratnath. Constructed entirely of intricately carved granite, this basadi is also called Tribhuvana Tilaka Jina Chaityalaya or Ratnatraya Dhama, as per inscriptions.The temple faces the renowned Karkala Bahubali statue, which was installed on February 13, 1432, by Veera Pandya of the Santara dynasty, under the guidance of the Bhattaraka of Karkala, Lalitakeerti.",
    },
    {
      id: "8",
      image: img8,
      title: "Manasthmbha",
      name: "Manasthmbha",
      description:
        "Nitte Arbhi Falls is a hidden gem located in the coastal region...",
    },
    {
      id: "9",
      image: img9,
      title: "Manasthmbha",
      name: "Ramasamudra Lake",
      description:
        "Ramasamudra Lake, also known as Rama Lake, is a picturesque freshwater lake located in Karkala, a town in the Udupi district of Karnataka, India. Situated at the base of the Western Ghats and surrounded by lush green forests and hills, it is a popular spot for nature lovers and birdwatchers. The lake, formed by a dam on the Varahi River, spans around 450 acres with a maximum depth of 38 feet and provides drinking water to Karkala and surrounding areas. The crystal-clear waters often reveal schools of fish swimming near the surface, adding to the lake's charm.The lake is home to over 100 species of birds, including migratory ones that visit during winter. Common sightings include kingfishers, egrets, herons, ducks, and storks, making it a paradise for birdwatching and photography. Boating is also a popular activity, with options like pedal boats and rowboats available for visitors to explore the serene waters while taking in the scenic views and observing the birds up close.",
    },
    {
      id: "10",
      image: img10,
      title: "Manasthmbha",
      name: "Sri Venkatramana Temple in Karkala",
      description:
        "Sri Venkatramana Temple in Karkala, known as 'Padutirupati', is an ancient temple of the Gowda Saraswath Brahmin community with a 550-year history. Built in traditional style, it is 50 km from Mangalore and mirrors the rites of Tirumala. Devotees deeply revere Lord Venkataramana, believing prayers offered in the Garuda Mantapa are fulfilled. The temple is central to academic, social, and cultural support, having pioneered women’s education and supported local institutions like Sri Bhuvanendra College, a goshala, an old age home, and a hospital by providing land on lease. Its historic significance and community contributions are well-recognized.",
    },
    {
      id: "11",
      image: img11,
      title: "Manasthmbha",
      name: "Nakre Rock Hill",
      description:
        "Nakre Rock Hill, nestled in the Western Ghats near Mulki, Karnataka, stands as a striking monolithic granite formation rising 1500 feet above sea level. Formed over millions of years through erosion and weathering, it captivates adventure seekers and nature enthusiasts alike. Surrounded by lush, evergreen forests teeming with diverse flora such as teak, rosewood, and sandalwood, it provides a natural haven for a variety of bird species, including the Malabar trogon and Nilgiri wood pigeon. The scenic beauty and rich biodiversity make Nakre Rock Hill a must-visit spot for those exploring the Western Ghats.",
    },
    {
      id: "12",
      image: img12,
      title: "Manasthmbha",
      name: "Arbi Falls Nitte",
      description:
        "Arbi Falls, located near Nitte, offers a serene and picturesque retreat that captivates visitors with its natural charm. This relatively smaller waterfall is nourished by the Manjaltar River and is a popular spot among locals for picnics and day trips. The tranquil ambiance of the area, combined with the soothing sounds of the water, makes it an ideal place for relaxation and unwinding. The gentle cascades of the falls invite visitors to wade in and enjoy the refreshing waters, though caution is needed as the rocks can be slippery.The surrounding landscape, with its lush greenery and natural beauty, adds to the allure of Arbi Falls. It’s a perfect destination for those who appreciate nature and wish to experience the peaceful side of the Western Ghats. The journey from Udupi to Nitte, approximately 75 kilometers, is scenic and can be traveled by either bus or private vehicle, making Arbi Falls an accessible escape into nature.",
    },
    
    // 
    // Add more objects for other cards
  ];

  // Find the details for the current card based on the id
  const currentDetail = details.find((detail) => detail.id === id);

  if (!currentDetail) {
    return <p>Card not found</p>;
  }

  return (
    <>
      <div className="details-page">
        <div className="image-container">
          <img
            src={currentDetail.image}
            alt={currentDetail.title}
            className="card-image"
          />
        </div>
        <div className="text-content">
          <h1>{currentDetail.name}</h1>
          <p>{currentDetail.description}</p>
        </div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
};

export default DetailsPage;