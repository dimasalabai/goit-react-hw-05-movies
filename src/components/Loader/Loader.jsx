import { Discuss } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Discuss
      visible={true}
      height="80"
      width="80"
      ariaLabel="discuss-loading"
      wrapperStyle={{}}
      wrapperClass="discuss-wrapper"
      color="#fff"
      backgroundColor="#f6b17a"
      colors={['#f6b17a', '#fff']}
    />
  );
};
export default Loader;
