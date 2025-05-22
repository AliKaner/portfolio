import layoutConstants from "@/constants/layout";

// Header interface
interface HeaderProps {
  children: React.ReactNode;
}

// Header component
const Header = ({ children }: HeaderProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div
      className={`h-[${layoutConstants.header.height}] flex flex-row items-center justify-center`}
    >
      {children}
    </div>
  );
};

// export
export default Header;
