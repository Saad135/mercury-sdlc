"use client";
import { useEffect } from "react";

import Container from "@/components/container";
import EventList from "@/components/events/event-list";
import { CategoryTabs } from "@/components/home/home-components";
import { useHomeStates } from "@/components/home/home-provider";
import MainDiv from "@/components/main-div";

export default function Home() {
  return (
    <>
      {/* Categories section */}
      <HomeCategories />

      <MainSection />
    </>
  );
}

function MainSection() {
  const statesObj = useHomeStates();

  return (
    <>
      {/* Main section */}
      <MainDiv>
        {/* List of cards */}
        <EventList listName={"Attractions"} statesObj={statesObj} />
      </MainDiv>
    </>
  );
}

function HomeCategories() {
  const { categories, selectedCategory, setSelectedCategory } = useHomeStates();

  useEffect(() => {
    document.getElementById(`cname_${selectedCategory}`).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedCategory]);

  return (
    <>
      <Container>
        <CategoryTabs
          categoryNames={categories}
          selectedCategoryName={selectedCategory}
          setSelectedCategoryName={setSelectedCategory}
        />
      </Container>
    </>
  );
}
