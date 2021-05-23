import siteConfig from "../../siteConfig.json";
// import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        {/* <SocialIcons size={5} /> */}
        <div className="flex mb-2 py-2 space-x-2 text-l font-semibold">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteConfig.site_owner}</div>
        </div>
      </div>
    </footer>
  );
}
