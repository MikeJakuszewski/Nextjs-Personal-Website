import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>Built With Next.js by Mike Jakuszewski</div>
        <Link
          href="mailto:michael_jakuszewski@hotmail.com"
          className="underline underline-offset-2"
        >
          {" "}
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};
export default Footer;
