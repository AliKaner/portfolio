import { layoutConstants } from "@/constants/layout";

// Footer interface
interface FooterProps {
  children: React.ReactNode;
}

// Footer component
const Footer = ({ children }: FooterProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div
      className={`h-[${layoutConstants.footer.height}] flex flex-row items-center justify-center`}
    >
      {children}
    </div>
  );
};

// export
export default Footer;
