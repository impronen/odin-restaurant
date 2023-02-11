import { pageScrubber } from "../functions/reusableFunctions";

function contactPageGenerator() {
  pageScrubber();

  const content = document.getElementById("mainContent");

  const contactHeading = document.createElement("div");
  contactHeading.classList.add("contactHeading");
  contactHeading.setAttribute("id", "contactHeading");
  contactHeading.innerHTML = "<h2>Contact</h2>";
  content.appendChild(contactHeading);

  const iFrame = document.createElement("iframe");
  iFrame.classList.add("iFrame");
  iFrame.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.383292256044!2d-2.249838448313972!3d53.47948097233313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c2599cafdf%3A0x528fc2455d6aa672!2sThe%20Rising%20Sun!5e0!3m2!1sen!2sfi!4v1674065264010!5m2!1sen!2sfi";
  content.appendChild(iFrame);

  const dontCallUs = document.createElement("div");
  dontCallUs.classList.add("dontCallUs");
  dontCallUs.innerHTML =
    "Do not call us or mail us. We are not liable for any discomfort you may or may not have endured after visiting us.";
  content.appendChild(dontCallUs);
}

export default contactPageGenerator;
