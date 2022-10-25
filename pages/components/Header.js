import { Image } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <div className="flex justify-between items-center h-12">
          <Link href="/">
            <a className="mr-5 hover:text-gray-400">Home</a>
          </Link>
          <Link href="/posts/create">
            <a className="mr-5 hover:text-gray-400">新規作成</a>
          </Link>
        </div>
        <div className="flex justify-between items-center h-12">
          <button className="mr-5 hover:text-gray-400" type="button" onClick={() => Auth.signOut()}>
            Sign out
          </button>
          <Link href="https://github.com/saki-0000/my-app" passHref>
            <a className="mr-5">
              <Image
                src="/github-light.png"
                width={45}
                height={45}
                alt="github"
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
