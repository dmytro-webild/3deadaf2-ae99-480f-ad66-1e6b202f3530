"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Clock, Flame, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Pizzaiolo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Authentic Wood-Fired Pizza"
      description="Crafted with passion, baked to perfection in our stone ovens using the freshest local ingredients."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-chef-baking-delicious-pizza_23-2150134248.jpg?_wi=1",
          imageAlt: "Wood fired pizza",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/baking-pizza-wood-fired-oven_23-2150134280.jpg",
          imageAlt: "Pizza oven",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-pressing-dough-with-hands-wooden-table-top-view_176474-5536.jpg",
          imageAlt: "Fresh dough",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134260.jpg",
          imageAlt: "Basil garnish",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134253.jpg",
          imageAlt: "Pizza slice",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27025.jpg",
          imageAlt: "Serving pizza",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Our Secret is Simplicity"
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Stone Oven Baked",
          description: "Crispy yet airy, perfectly charred crust.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/various-kind-pizza-slices-wooden-board_114579-88426.jpg",
            imageAlt: "Stone oven",
          },
          items: [
            {
              icon: Flame,
              text: "Wood fired",
            },
            {
              icon: Award,
              text: "Authentic recipe",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-chef-baking-delicious-pizza_23-2150134248.jpg?_wi=2",
          imageAlt: "delicious pizza slice closeup",
        },
        {
          title: "Locally Sourced",
          description: "Fresh produce from regional farmers.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/pizza-dough-covered-with-cloth-oil-tomatoes_23-2148753769.jpg",
            imageAlt: "Fresh produce",
          },
          items: [
            {
              icon: Leaf,
              text: "Sustainable",
            },
            {
              icon: Sprout,
              text: "Organic ingredients",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-italian-pizza-with-ingredients-white-wooden-table_23-2148195061.jpg",
          imageAlt: "delicious pizza slice closeup",
        },
        {
          title: "Artisanal Dough",
          description: "Slow-fermented for 48 hours.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-pizza-dough-with-wooden-board-word-written-flour_23-2148753790.jpg",
            imageAlt: "Dough proofing",
          },
          items: [
            {
              icon: Clock,
              text: "48h fermentation",
            },
            {
              icon: ChefHat,
              text: "Master chefs",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-mushroom-pizza-with-tomatoes-olives-mushrooms-with-flour-grey-desk-pizza-dough-italian-food_140725-22910.jpg?_wi=1",
          imageAlt: "delicious pizza slice closeup",
        },
      ]}
      title="Signature Pizza Style"
      description="Experience the authentic taste of Italy with our signature handcrafted crusts."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Margherita",
          price: "$14",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-mushroom-pizza-with-tomatoes-olives-mushrooms-with-flour-grey-desk-pizza-dough-italian-food_140725-22910.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Pepperoni",
          price: "$16",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-with-bacon-arugula-leaves-cardboard-box-with-red-chili-garlic-bulb-wooden-table_23-2148076016.jpg",
        },
        {
          id: "3",
          name: "Truffle Mushroom",
          price: "$19",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-meringue-cake-with-pine-cone_23-2148368222.jpg",
        },
        {
          id: "4",
          name: "Veggie Supreme",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/cheese-pizza-wooden-table-close-up_1232-1147.jpg",
        },
        {
          id: "5",
          name: "Prosciutto",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/classic-pepperoni-pizza-with-flour-egg-board_114579-2608.jpg",
        },
        {
          id: "6",
          name: "Four Cheese",
          price: "$17",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-restaurant-table_7939-2529.jpg",
        },
      ]}
      title="Explore Our Pizzas"
      description="Hand-picked favorites from our traditional menu."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah",
          role: "Foodie",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-food_23-2148899055.jpg",
        },
        {
          id: "2",
          name: "John",
          role: "Regular",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-woman-holding-pizza-slice_23-2147894312.jpg",
        },
        {
          id: "3",
          name: "Emily",
          role: "Blogger",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/roommates-sharing-meal-together_23-2149112170.jpg",
        },
        {
          id: "4",
          name: "David",
          role: "Family",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-chef-preparing-pizza_23-2150235804.jpg",
        },
        {
          id: "5",
          name: "Anna",
          role: "Guest",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brazilian-family-enjoying-meal-together_23-2151156204.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5k+",
          label: "Pizzas Sold",
        },
        {
          value: "4.9",
          label: "Average Rating",
        },
        {
          value: "20",
          label: "Years Experience",
        },
      ]}
      title="Loved by Locals"
      description="Hear what our regulars have to say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, we deliver within 5 miles of our location.",
        },
        {
          id: "q2",
          title: "Are there vegan options?",
          content: "We offer vegan cheese and vegetable toppings for all pizzas.",
        },
        {
          id: "q3",
          title: "Do you take reservations?",
          content: "Reservations are recommended for parties of 5 or more.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Come visit us today for the finest pizza in town."
      buttons={[
        {
          text: "Book a Table",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Pizzaiolo",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
          ],
        },
        {
          title: "Visit Us",
          items: [
            {
              label: "123 Pizza Lane",
              href: "#",
            },
            {
              label: "Open daily 11am-10pm",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Pizzaiolo"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
