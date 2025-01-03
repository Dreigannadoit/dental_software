import { useLocation } from 'react-router-dom';

const useActiveLink = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return { isActive };
};

export default useActiveLink;