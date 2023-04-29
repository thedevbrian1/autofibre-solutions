import { Link } from "@remix-run/react";
import Heading from "../components/Heading";
import Product from "../components/Product";
import ServiceCard from "../components/ServiceCard";

export default function Index() {


  return (
    <main className="">
      <Hero />
      <WhyUs />
      <Products />
      <Playground />
      <Services />
    </main>
  );
}

function Hero() {
  return (
    <section className="h-screen bg-[url('/courier-box.jpg')] bg-black bg-opacity-50 bg-blend-overlay bg-center bg-no-repeat">
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl text-center font-semibold">Looking for the best <span className="text-brand-yellow">fibreglass</span> products?</h1>
          <div className="w-full flex justify-center mt-8">
            <div className="flex justify-between  lg:w-80 gap-x-4 lg:gap-x-0 ">
              <Link to={`/about#contact`} className="bg-brand-yellow px-6 py-3 text-center rounded">
                Contact us
              </Link>
              <Link to={`/#products`} className="bg-transparent border border-brand-yellow px-6 py-3 text-center text-white rounded">
                View products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="w-4/5 mx-auto xl:max-w-6xl mt-16 lg:mt-20">
      <Heading text='Why choose us?' />
      <p className="md:text-center mt-4 text-gray-700 text-lg">We believe that the environment should be preserved at all cost. Therefore, at Autofibre Solutions we use fibreglass to manufacture our products. Fibreglass is an immensely versatile material due to its light weight, inherent strength, weather resistant finish. It is recyclable, therefore making it eco-friendly.</p>
      <div className="w-44 h-44 lg:w-56 lg:h-56 mx-auto">
        <img
          src="/eco-friendly.webp"
          alt="Image with the writing 'eco-friendly'"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

function Products() {
  const fibreProducts = [
    {
      name: 'Courier box',
      src: 'courier-box.jpg'
    },
    {
      name: 'Boats',
      src: 'boat.jpg'
    },
    {
      name: 'Slides',
      src: 'fibreglass-multiplay-system.jpg'
    },
    {
      name: 'Pickup canopy',
      src: 'pickup-canopy.jpg'
    },
    {
      name: 'Insulated cargo body',
      src: 'insulated-cargo-body.jpg'
    },
    {
      name: 'Chair',
      src: 'fibreglass-chair.webp'
    }

  ];
  return (
    <section className="w-4/5 xl:max-w-6xl mx-auto mt-8 lg:mt-16" id="products">
      <Heading text='100% fibreglass' />
      <p className="text-gray-800 md:text-center mt-4 text-lg">We have a variety of products manufactured from fibreglass</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:justify-center gap-4  max-w-xl lg:max-w-4xl mx-auto mt-8">
        {/* TODO: Build product card */}
        {fibreProducts.map((product, index) => (
          <Product name={product.name} src={product.src} key={index} />
        ))}
      </div>
    </section>
  );
}

function Playground() {
  return (
    <section className="w-full mt-16 lg:mt-40 bg-[#ed9632] py-16">
      <div className="w-4/5 xl:max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row md:items-center gap-4 lg:gap-8">
          <div>
            <Heading text='100+' />
            <p className="text-gray-800 text-2xl lg:text-4xl md:text-center">fibreglass playground equipments built</p>
          </div>
          <div className="bg-[url('/fibreglass-multiplay-system.jpg')] bg-center bg-contain bg-no-repeat max-w-sm aspect-video lg:aspect-auto lg:w-96 h-80" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      name: 'Furniture',
      items: ['Office furniture', 'Living room furniture', 'Beds'],
      src: '/office-furniture.webp'
    },
    {
      name: 'Spare parts & PPEs',
      items: ['Motor spare parts', 'Car safety equipment', 'PPEs'],
      src: '/spares.jpg'
    }
  ];

  return (
    <section className="w-4/5 xl:max-w-6xl mx-auto mt-16 lg:mt-28" id="services">
      <Heading text='Other services' />
      <p className="text-gray-800 md:text-center text-lg mt-2 lg:mt-4">We supply the following products:</p>
      <div className="flex flex-col md:flex-row gap-4 mt-8 w-full mx-auto md:justify-center items-center">
        {
          services.map((service, index) => (
            <ServiceCard name={service.name} items={service.items} src={service.src} key={index} />
          ))
        }
      </div>
    </section>
  );
}