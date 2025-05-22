import Footer from "../common/footer";
import Header from "../common/header";
import Body from "../common/body";
// BaseLayout interface
interface BaseLayoutProps {
  children: React.ReactNode;
}

// Body component
const BaseLayout = ({ children }: BaseLayoutProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className="flex flex-col items-center justify-center">
      <Header>{children}</Header>
      <Body>{children}</Body>
      <Footer>{children}</Footer>
    </div>
  );
};

// export
export default BaseLayout;
