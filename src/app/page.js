import Image from "next/image";
import ReadData from "./components/supabase-crud/ReadData";
import CreateData from "./components/supabase-crud/CreateData";
import ReactSlider from "./components/supabase-crud/ReactSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUpUser from "./components/supabase-auth/SignUpUser";

export default function Home() {
  return (
    <div>
      <SignUpUser />
      {/* <CreateData />
      <ReadData />
      <ReactSlider /> */}
    </div>
  );
}
