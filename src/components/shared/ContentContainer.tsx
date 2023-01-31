import {FC} from "react";

interface IProps {
  children: React.ReactNode;
}

const ContentContainer: FC<IProps> = ({ children }) => {
  return (
     <div style={{ maxWidth: '920px', margin: '15px auto', paddingTop: '10px' }}>
       { children }
     </div>
  );
};

export default ContentContainer;