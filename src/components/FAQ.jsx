import React from "react";

import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import hero_bike from "../assets/bg-harley.jpg";
export default function FAQ() {
   return (
      <div className=" mt-32  shadow-sm md:mx-4 mb-5 bg-cover bg-center " style={{ backgroundImage: `url(${hero_bike})` }}>
         <h1 className="text-[40px] text-black text-center font-bold p-4  mb-10 bg-white ">
            Frequently Asked Questions
         </h1>
         {/* <p className="mb-5 text-white bg-[color:var(--primary-color)]">
            Frequently Asked Questions About the Bike Rental Booking Process on
            Our Website: <br /> Answers to Common Concerns and Inquiries.
         </p> */}
         <div className="bg-transparent mx-2  md:mx-9 md:px-10 text-black"
         >
            <MDBAccordion
               flush
               initialActive={1}
               className="md:m-10 text-black font-bold bg-white"
            >
               <MDBAccordionItem
                  collapseId={1}
                  headerTitle="1. What is special about comparing rental bike deals?"
                  className="  text-black "
               >
                  Comparing rental bike deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better bike models. You can find bike
                  rental deals by researching online and comparing prices from
                  different rental companies.
               </MDBAccordionItem>
               <MDBAccordionItem
                  collapseId={2}
                  headerTitle="2. How do I find the bike rental deals?"
                  className=" text-black "
               >
                  You can find bike rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  bike companies on social media to be informed of any special
                  deals or promotions.
               </MDBAccordionItem>
               <MDBAccordionItem
                  collapseId={3}
                  headerTitle="3. How do I find such low rental bike prices?"
                  className=" text-black "
               >
                  Book in advance: Booking your rental bike ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental bike companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
               </MDBAccordionItem>
            </MDBAccordion>{" "}
         </div><br />
      </div>
   );
}
