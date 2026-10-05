import { permanentRedirect } from "next/navigation";

// Restaurant Tech now lives with the other industries at /success-kit/restaurants.
// This permanent redirect keeps old links, bookmarks and Google rankings pointing to the right page.
export default function RestaurantTechRedirect() {
  permanentRedirect("/success-kit/restaurants");
}
