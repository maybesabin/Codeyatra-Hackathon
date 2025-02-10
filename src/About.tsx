// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { Activity, BarChart, Boxes, Handshake, Leaf, LineChart, List, ShieldCheck, TrendingUp } from "lucide-react"


function About() {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Crop Management",
      description: "Easily organize, track, and optimize crop production.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Crop Management",
      description: "Understand earnings, losses, and market value instantly",
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Inventory Tracking",
      description: "Manage stock levels and avoid unnecessary waste.",
    },
  ]
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-blue-500" />,
      title: "Smart Tracking",
      description: "Monitor crops, profits, and losses in real time.",
    },
    {
      icon: <List className="w-6 h-6 text-blue-500" />,
      title: "Easy Listing",
      description: "List crops effortlessly based on total production.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: "Profit Insights",
      description: "Get clear analytics on earnings and expenses.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Market Trends",
      description: "Stay updated with real-time price fluctuations.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-blue-500" />,
      title: "Farmer Friendly",
      description: "Simple, intuitive, and built for every farmer.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "Secure & Reliable",
      description: "Your data is safe, always accessible, and accurate.",
    }
  ]


  return (
    <div className="min-h-screen">

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                {feature.icon}
                <h3 className="font-medium mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-48">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="md:col-span-1">
              <p className='text-6xl mb-4 font-bold tracking-tighter text-neutral-600'>
                Our Services
              </p>
              <p className="text-neutral-600 mb-6">
                We provide smart agricultural solutions to help farmers efficiently manage crops, track profits, and make informed decisions.
              </p>

            </div>
            <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border shadow-sm   rounded-3xl p-16 ">
                  <div className="[#033f2d] mb-4">{service.icon}</div>
                  <h3 className="font-medium mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto py-20 flex items-center justify-center flex-col w-full">
        <p className='text-6xl text-center font-bold tracking-tighter'>
          Our Clients
        </p>
        <p className="mb-12 text-md text-center text-gray-600">
          List of clients we have provided our services to
        </p>
        <div className="flex items-center justify-center  gap-9 flex-wrap max-w-3xl">
          {[{
            img: 'https://i.pinimg.com/736x/59/72/c8/5972c81c39a2a36158e9a782674821de.jpg'
          },
          {
            img: 'https://i.pinimg.com/736x/d4/70/7a/d4707aeadf8c2940e2afabc39f55823d.jpg'
          },
          {
            img: 'https://i.pinimg.com/236x/0f/30/b8/0f30b845d16062b286fce4c08f176b47.jpg'
          },
          {
            img: 'https://i.pinimg.com/236x/e8/2d/e8/e82de8fa128b4221d10cb589610261f1.jpg'
          },
          {
            img: 'https://i.pinimg.com/236x/41/3b/2c/413b2cb2dd367781bafb16f14759ac66.jpg'
          },
          {
            img: 'https://i.pinimg.com/236x/fb/d0/34/fbd034fbf4443a3f914aae8137c115e8.jpg'
          },
          {
            img: 'https://i.pinimg.com/236x/8d/dc/48/8ddc48298f0e954d76557ecf4b548050.jpg'
          },
          {
            img: 'https://i.pinimg.com/236x/77/e8/77/77e87703e6c206b8a1335922223f40d1.jpg'
          },

          ].map((person, i) => (
            <div key={i} className="flex items-center justify-center h-[7rem] w-[7rem] rounded-[50%]">

              <img src={person.img} className="h-full w-full  rounded-[50%] object-cover" alt="" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border border-neutral-200 my-32 bg-green-700 text-white ">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          {[
            { label: "PROJECT COMPLETED", value: "50+" },
            { label: "CLIENT HAPPY", value: "30+" },
            { label: "PROJECT IN QUEUE", value: "20+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className='text-6xl text-center font-bold tracking-tighter'>
                {stat.value}
              </p>
              <div className="text-white-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About