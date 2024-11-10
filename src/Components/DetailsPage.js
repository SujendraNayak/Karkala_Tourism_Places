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

const DetailsPage = () => {
  const { id } = useParams(); // Get the card id from the URL

  // Array of details for each card
  const details = [
    {
      id: "1",
      image: img1,
      title: "Gommateshwara Statue",
      name: "Gommateshwara Statue",
      description: `
        The Gommateshwara statue represents Bahubali in a serene meditative state, symbolizing detachment from worldly life. With half-open eyes and a subtle smile, it radiates inner peace.
        
        Climbing vines and a snake coil around his legs from an anthill, symbolizing unwavering penance. Standing on an open lotus, the statue represents completeness. At 57 feet tall, it is a marvel of proportion and artistry, flanked by ornate chauri bearers and deities as a sign of reverence. This statue is cherished as a symbol of Jain values of renunciation and harmony with the Infinite.
      `,
    },
    {
      id: "2",
      image: img2,
      title: "Koti-Channaya Theme Park",
      name: "Koti-Channaya Theme Park",
      description: `
        Located in Kasaba Grama, Karkala, the Koti-Chennaya Theme Park spans 100 acres, celebrating the cultural legacy of Karnataka’s coastal region. It honors the twin heroes Koti and Chennaya, known for their bravery and justice.
        
        The park’s sculptures, exhibits, and immersive experiences transport visitors into a world of heroism, folklore, and community. This theme park serves as both a tribute to the past and a beacon for cultural pride, offering a unique experience that connects generations to the traditions of coastal Karnataka.
      `,
    },
    {
      id: "3",
      image: img3,
      title: "Manastambha",
      name: "Manastambha",
      description: `
        A Manastambha, or column of honor, is a prominent structure seen in front of many Jain temples. Often adorned with Tirthankara images, this column symbolizes humility and devotion.
        
        According to Jain scriptures, Manastambhas are placed in front of the Tirthankara's divine hall (samavasarana) to remind devotees of shedding pride before entering sacred spaces. The monolithic pillars in Moodabidri, often crowned with the statue of Brahmadeva, stand as remarkable symbols of Jain artistry and spiritual significance.
      `,
    },
    {
      id: "4",
      image: img4,
      title: "Varanga Jain Temple",
      name: "Varanga Jain Temple",
      description: `
        The Chandranath Basadi, also known as Matada Basadi, in Varanga houses the Jain Mutt and has a history spanning 1,000 years. It is dedicated to Chandraprabha, the 8th Tirthankara.
        
        This unique temple features an idol made from Chandrashila stone, which allows light to pass through, creating a mystical effect. Special poojas are held every Friday and Sunday, drawing devotees seeking blessings for personal and material fulfillment.
      `,
    },
    {
      id: "5",
      image: img5,
      title: "Attur Church",
      name: "Attur Church",
      description: `
        St. Lawrence Shrine, also known as Attur Church, was built in 1759 and is known for its history of miracles. Located near Karkala, it stands amidst tranquil greenery, drawing pilgrims from across India.
        
        The church, which manages a school and orphanage, celebrates its annual Attur Festival (Attur Jatre) every January, attracting thousands of devotees. The event combines religious, cultural, and community gatherings, making it a significant annual attraction.
      `,
    },
    {
      id: "6",
      image: img6,
      title: "Anekere Jain Temple",
      name: "Anekere Jain Temple",
      description: `
        Built in 1262 by Raja Pandyadeva, Anekere originally served as a royal elephant bath and later became a crucial source of drinking water for the city.
        
        Known as Kere Basadi, the temple is located in the middle of a lake. It is also called Chaturmukha Basadi due to its four-faced idol of Tirthankaras. This temple, and others in Karkala, highlight the rich Jain heritage of the region.
      `,
    },
    {
      id: "7",
      image: img7,
      title: "Chaturmukha Basadi",
      name: "Chaturmukha Basadi",
      description: `
        The Chaturmukha Basadi, built in 1586, is famous for its four symmetrical entrances and intricate granite carvings. It houses images of Tirthankaras Aranath, Mallinath, and Munisuvratnath.
        
        Facing the Karkala Bahubali statue, the temple stands as a testament to the architectural and spiritual significance of Jainism in the region.
      `,
    },
    {
      id: "8",
      image: img8,
      title: "Marigudi Temple",
      name: "Marigudi Temple",
      description: `
        The history of the Maariyamma Temple in Karkala reflects its profound cultural and historical significance. Situated at the foothills of the Western Ghats, Karkala is a region rich with tradition, where Maariyamma has been revered as a goddess of power and protection. Throughout various dynasties, especially during the Vijayanagara Empire, this goddess was worshipped by warriors seeking her blessings for victory and safety. Over time, rituals evolved, with the practice of animal sacrifice ending in the 1960s, replaced by gentler forms of devotion.
        
        Today, the temple is managed by the Ramakshathriyas, and worship continues with great reverence. Key rituals include weekly Gadduge Puje and annual grand celebrations where thousands of devotees participate. The Navarathri festival, culminating in Vijayadashami with sword worship, embodies the temple's enduring traditions. The presence of Goddess Maariyamma is believed to ensure protection, victory over evil, and blessings for prosperity.
      `,
    },
    {
      id: "9",
      image: img9,
      title: "Ramasamudra Lake",
      name: "Ramasamudra Lake",
      description: `
        Ramasamudra Lake, also known as Rama Lake, is a picturesque freshwater lake in Karkala, Karnataka. It is surrounded by forests and serves as a popular spot for nature lovers and birdwatchers.
        
        The lake is home to over 100 species of birds, making it ideal for birdwatching and photography. Boating options allow visitors to enjoy the lake’s scenic beauty and observe the wildlife up close.
      `,
    },
    {
      id: "10",
      image: img10,
      title: "Sri Venkatramana Temple",
      name: "Sri Venkatramana Temple in Karkala",
      description: `
        Known as "Padutirupati," this ancient temple of the Gowda Saraswath Brahmin community mirrors the rituals of Tirumala. Devotees deeply revere Lord Venkataramana, believing in the temple’s power to fulfill prayers.
        
        The temple supports various educational and social initiatives, contributing to the community’s welfare.
      `,
    },
    {
      id: "11",
      image: img11,
      title: "Nakre Rock Hill",
      name: "Nakre Rock Hill",
      description: `
        Nakre Rock Hill is a striking monolithic granite formation in the Western Ghats, rising 1,500 feet above sea level. Surrounded by lush forests, it offers a haven for diverse flora and fauna, making it a popular spot for adventure seekers and nature enthusiasts.
      `,
    },
    {
      id: "12",
      image: img12,
      title: "Arbi Falls Nitte",
      name: "Arbi Falls Nitte",
      description: `
        Arbi Falls near Nitte offers a picturesque retreat, perfect for picnics and day trips. The gentle cascades and lush surroundings make it a serene place for relaxation and nature appreciation.
      `,
    },
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

export default DetailsPage;
