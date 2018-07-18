import HomePage from "views/HomePage/HomePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import VowRenewalPage from "views/VowRenewalPage/VowRenewalPage.jsx";
import NamingCeremonyPage from "views/NamingCeremonyPage/NamingCeremonyPage.jsx";
import AccommodationsPage from "views/AccommodationsPage/AccommodationsPage.jsx";
import GiftPage from "views/GiftPage/GiftPage.jsx";

var indexRoutes = [
  { path: "/home-page", name: "Home", component: HomePage },
  { path: "/vow-renewal-page", name: "VowRenewalPage", component: VowRenewalPage },
  { path: "/naming-ceremony-page", name: "NamingCeremonyPage", component: NamingCeremonyPage },
  { path: "/accommodations-page", name: "AccommodationsPage", component: AccommodationsPage },
  { path: "/gift-page", name: "GiftPage", component: GiftPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
